import { NextRequest, NextResponse } from 'next/server';
import { fetchYouTubeContent } from '@/lib/youtube';
import { fetchRSSContent } from '@/lib/rss';
import { scoreContent } from '@/lib/claude-scorer';
import { supabaseAdmin } from '@/lib/supabase';

export const maxDuration = 300; // 5 minutes — ingestion takes time

export async function GET(req: NextRequest) {
  // Verify this is a legitimate Netlify scheduled call (or your manual trigger)
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const db = supabaseAdmin();
  const log: string[] = [];
  const startTime = Date.now();

  // Per-run counters (populated as we progress; logged at every exit point)
  let youtubeCount   = 0;
  let rssCount       = 0;
  let newAfterDedup  = 0;
  let queuedCount    = 0;

  // Defensive log writer. A log-insert failure must NEVER break the main run,
  // so every call is wrapped and its own failure is swallowed silently.
  async function writeLog(status: 'ok' | 'error' | 'no_new', errorMessage?: string) {
    try {
      await db.from('ingestion_logs').insert({
        status,
        duration_ms:     Date.now() - startTime,
        youtube_count:   youtubeCount,
        rss_count:       rssCount,
        new_after_dedup: newAfterDedup,
        queued_count:    queuedCount,
        error_message:   errorMessage ?? null,
        log_lines:       log,
      });
    } catch {
      // intentionally swallowed — observability must not become a new failure mode
    }
  }

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
    youtubeCount = youtube.length;
    rssCount     = rss.length;
    log.push(`YouTube: ${youtubeCount} raw | RSS: ${rssCount} raw`);

    // 3. Deduplicate against what we already have
    const allNew = [...youtube, ...rss].filter((item) => !knownUrls.has(item.url));
    newAfterDedup = allNew.length;
    log.push(`New after dedup: ${newAfterDedup}`);

    if (allNew.length === 0) {
      await writeLog('no_new');
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
      if (error) {
        log.push(`DB insert error: ${error.message}`);
      } else {
        queuedCount = toQueue.length;
        log.push(`Saved ${queuedCount} items to review queue`);
      }
    }

    // 6. Clear "new" badge from items older than 7 days
    await db
      .from('approved_content')
      .update({ is_new: false })
      .lt('approved_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());

    await writeLog('ok');
    return NextResponse.json({ ok: true, log });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    await writeLog('error', msg);
    return NextResponse.json({ ok: false, error: msg, log }, { status: 500 });
  }
}
