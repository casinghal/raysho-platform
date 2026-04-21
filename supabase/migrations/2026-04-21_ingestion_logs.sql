-- Migration: 2026-04-21 — add ingestion_logs audit-trail table
-- Context:   P1-17 finding #1b (observability). Captures every scheduled-ingest
--            run so operational health can be queried directly from Supabase.
-- Apply in:  Supabase Dashboard → SQL Editor → paste + run.
-- Safe to:   Re-run (all statements idempotent).

create table if not exists ingestion_logs (
  id               uuid primary key default gen_random_uuid(),
  ran_at           timestamptz default now(),
  status           text not null,             -- 'ok' | 'error' | 'no_new'
  duration_ms      integer,
  youtube_count    integer default 0,
  rss_count        integer default 0,
  new_after_dedup  integer default 0,
  queued_count     integer default 0,
  error_message    text,
  log_lines        jsonb
);

create index if not exists idx_ingestion_logs_ran_at on ingestion_logs(ran_at desc);

alter table ingestion_logs enable row level security;

-- No public access — admin queries only (service role bypasses RLS)
drop policy if exists "No public access to ingestion logs" on ingestion_logs;
create policy "No public access to ingestion logs" on ingestion_logs using (false);
