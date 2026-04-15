import { NextRequest, NextResponse } from 'next/server';
import { supabaseReader } from '@/lib/supabase';

const VALID_TOWERS = new Set([
  'AP', 'AR', 'R2R', 'Payroll', 'Tax', 'Audit',
  'JE Analysis', 'Financial Statements', 'FP&A', 'Contracts', 'AI Tools',
]);

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const towerParam = searchParams.get('tower');
  const limitParam = searchParams.get('limit');

  // Validate limit — must be a positive integer, capped at 50
  const limit = Math.min(Math.max(parseInt(limitParam || '20', 10) || 20, 1), 50);

  // Validate tower — only allow known values; reject anything else
  const tower = towerParam && VALID_TOWERS.has(towerParam) ? towerParam : null;

  let query = supabaseReader()
    .from('approved_content')
    .select('id,title,url,source,type,summary,why_it_matters,score,tower,published_at,approved_at,is_new')
    .order('approved_at', { ascending: false })
    .limit(limit);

  if (tower) {
    query = query.eq('tower', tower);
  }

  const { data, error } = await query;

  if (error) return NextResponse.json({ error: 'Feed unavailable' }, { status: 500 });

  return NextResponse.json({ items: data || [] }, {
    headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' },
  });
}
