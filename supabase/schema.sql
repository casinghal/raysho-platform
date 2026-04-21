-- Raysho Production Database Schema
-- Run this in: Supabase Dashboard → SQL Editor → New Query → Paste entire file → Run

-- ─── CONTENT QUEUE ────────────────────────────────────────────────────────────
create table if not exists content_queue (
  id             uuid primary key default gen_random_uuid(),
  title          text not null,
  url            text not null unique,
  source         text not null,
  type           text not null,
  summary        text,
  why_it_matters text,
  score          numeric(4,2),
  tower          text,
  published_at   text,
  ingested_at    timestamptz default now(),
  status         text default 'pending'
);

-- ─── APPROVED CONTENT ──────────────────────────────────────────────────────────
create table if not exists approved_content (
  id             uuid primary key default gen_random_uuid(),
  title          text not null,
  url            text not null unique,
  source         text not null,
  type           text not null,
  summary        text,
  why_it_matters text,
  score          numeric(4,2),
  tower          text,
  published_at   text,
  approved_at    timestamptz default now(),
  is_new         boolean default true
);

-- ─── INDEXES ──────────────────────────────────────────────────────────────────
create index if not exists idx_queue_status    on content_queue(status, ingested_at desc);
create index if not exists idx_approved_at     on approved_content(approved_at desc);
create index if not exists idx_approved_tower  on approved_content(tower);
create index if not exists idx_approved_is_new on approved_content(is_new);

-- ─── ROW LEVEL SECURITY ───────────────────────────────────────────────────────
alter table approved_content enable row level security;
create policy "Public read approved" on approved_content for select using (true);

alter table content_queue enable row level security;
create policy "No public access to queue" on content_queue using (false);

-- ─── INGESTION LOGS (audit trail for scheduled-ingest runs) ──────────────────
create table if not exists ingestion_logs (
  id               uuid primary key default gen_random_uuid(),
  ran_at           timestamptz default now(),
  status           text not null,
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
create policy "No public access to ingestion logs" on ingestion_logs using (false);
