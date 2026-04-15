import { NextRequest, NextResponse } from 'next/server';
import { fetchYouTubeContent } from '@/lib/youtube';
import { fetchRSSContent } from '@/lib/rss';
import { scoreContent } from '@/lib/claude-scorer';
import { supabaseAdmin } from '@/lib/supabase';

export const maxDuration = 300; // 5 minutes — ingestion takes time

export async function GET(req: NextRequest) {
  // Verify this is a legitimate Vercel Cron call (or your manual trigger)
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const db = supabaseAdmin();
  const log: string[] = [];

  try {
    // 1. Fetch existing URLs to avoid re-ingesting duplicates
    const { data: existingQueue } = await db.from('content_queue').select('url');
    const { data: existingApproved } = await db.from('approved_content').select('url');
    const knownUrls = new Set([
      ...(existingQueue || []).map((r: { url: string }) => r.url),
      ...(existingApproved || []).map((r: { url: string }) => r.url),
    ]);

    // 2. Ingest YouTube and RSS in parallel
    const [youtube, rss] = await Promise.all([
      fetchYouTubeContent(),
      fetchRSSContent(),
    ]);
    log.push(`YouTube: ${youtube.length} raw | RSS: ${rss.length} raw`);

    // 3. Deduplicate against what we already have
    const allNew = [...youtube, ...rss].filter((item) => !knownUrls.has(item.url));
    log.push(`New after dedup: ${allNew.length}`);

    if (allNew.length === 0) {
      return NextResponse.json({ ok: true, log, message: 'No new content found' });
    }

    // 4. Score with Claude API (filters and rates each item)
    const scored = await scoreContent(allNew);
    log.push(`Scored: ${scored.length} items`);

    // 5. Items scoring 6.5+ go into the review queue
    const toQueue = scored.filter((item) => item.score >= 6.5);
    log.push(`Above threshold (6.5+): ${toQueue.length} items`);

    if (toQueue.length > 0) {
      const { error } = await db.from('content_queue').insert(
        toQueue.map((item) => ({
          title:          item.title,
          url:            item.url,
          source:         item.source,
          type:           item.type,
          summary:        item.summary,
          why_it_matters: item.why_it_matters,
          score:          item.score,
          tower:          item.tower,
          published_at:   item.published_at,
          status:         'pending',
        }))
      );
      if (error) log.push(`DB insert error: ${error.message}`);
      else log.push(`Saved ${toQueue.length} items to review queue`);
    }

    // 6. Clear "new" badge from items older than 7 days
    await db
      .from('approved_content')
      .update({ is_new: false })
      .lt('approved_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());

    return NextResponse.json({ ok: true, log });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ ok: false, error: msg, log }, { status: 500 });
  }
}
