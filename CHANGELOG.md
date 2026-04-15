# FintelliQ — Version Changelog

## v7.7 (April 2026) — Netlify Deployment Ready

### Changes
- Next.js upgraded from 14.2.5 to 14.2.35 (CVE-2025-55182 — CVSS 10.0 security fix)
- eslint-config-next aligned to 14.2.35
- netlify.toml added (replaces vercel.json for Netlify hosting)
- netlify/functions/scheduled-ingest.ts added (daily 6am UTC cron)
- @netlify/plugin-nextjs added to devDependencies
- Supabase project connected: fsgkjilvlgtofzhtzprs (Mumbai region)

### Inherited from v7.6
- 230 prompts compile cleanly (80 tower + 150 industry)
- All 10 industries × 15 prompts each
- 5 data.ts compilation fixes (backticks, structure, ghost entry, duplicate export)
- Phase 1 Privacy Policy + Terms
- Claude-optimised badges + FREE/PRO gating
- Plausible analytics (cookie-free)

---

## v7.6 (April 2026) — Nuclear Fix: Compilation Errors Resolved
- 10 escaped backticks removed in tower prompts
- 150 industry prompts converted to backtick template literals
- INDUSTRY_PROMPTS restructured with proper section boundaries
- Corrupt ghost entry removed (re_14/re_15)
- Duplicate export fixed

## v7.3 (March 2026) — Content Complete (Original)
- All 150 industry prompts at full depth (avg 17,495 chars)
- All 80 tower prompts across 8 process towers
- Content ingestion pipeline, admin dashboard, legal modal
