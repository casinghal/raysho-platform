import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  // Verify admin session
  const cookieStore = cookies();
  const session = cookieStore.get('fq_admin_session');
  if (!session || session.value !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

  const db = supabaseAdmin();

  // Get item from queue
  const { data: item, error: fetchError } = await db
    .from('content_queue')
    .select('*')
    .eq('id', id)
    .single();

  if (fetchError || !item) {
    return NextResponse.json({ error: 'Item not found' }, { status: 404 });
  }

  // Move to approved_content
  const { error: insertError } = await db.from('approved_content').upsert({
    title:          item.title,
    url:            item.url,
    source:         item.source,
    type:           item.type,
    summary:        item.summary,
    why_it_matters: item.why_it_matters,
    score:          item.score,
    tower:          item.tower,
    published_at:   item.published_at,
    is_new:         true,
  }, { onConflict: 'url' });

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 });
  }

  // Mark as approved in queue
  await db.from('content_queue').update({ status: 'approved' }).eq('id', id);

  return NextResponse.json({ ok: true });
}
