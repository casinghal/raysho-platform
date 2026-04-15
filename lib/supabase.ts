import { createClient } from '@supabase/supabase-js';

// ─── SECURITY NOTE ────────────────────────────────────────────────────────────
// There is NO public Supabase client in this file by design (Option B posture).
// Both clients below are server-side only — never import these in any file
// inside app/platform/ or any other client component. All DB access must go
// through API routes (/api/content/feed, etc.) which run server-side only.
// The Supabase URL and anon key do NOT use the NEXT_PUBLIC_ prefix, so they
// are never bundled into the browser JavaScript.

// ─── Server-side reader (anon key — respects RLS, read-only on approved_content) 
export const supabaseReader = () =>
  createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );

// ─── Server-side admin (service role — full access, used for queue writes only)
export const supabaseAdmin = () =>
  createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );

// ─── Types ────────────────────────────────────────────────────────────────────
export type ContentItem = {
  id: string;
  title: string;
  url: string;
  source: string;
  type: 'VIDEO' | 'ARTICLE' | 'REPORT' | 'COURSE';
  summary: string | null;
  why_it_matters: string | null;
  score: number | null;
  tower: string | null;
  published_at: string | null;
  is_new?: boolean;
};

export type QueueItem = ContentItem & {
  ingested_at: string;
  status: 'pending' | 'approved' | 'rejected';
};
