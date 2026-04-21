# Raysho — Deployment Guide
**For Pankaj Singhal. Follow each step in order. Takes 60–90 minutes total.**

---

## What you will have at the end
A live website at your own domain (e.g. raysho.ai) with:
- The full Raysho platform running
- Your admin dashboard at yourdomain.com/admin
- Daily content ingestion running automatically
- Everything hosted for ~$20/month

---

## Before you start — accounts to create
You need accounts on three services. All have free tiers. Create them in this order:

1. **GitHub** — github.com (free) — stores your code
2. **Supabase** — supabase.com (free) — your database
3. **Vercel** — vercel.com (free) — hosts and runs your website

---

## STEP 1 — Upload the code to GitHub
**Time: 10 minutes**

1. Go to github.com and sign up for a free account
2. Click the green **New** button (top left)
3. Name the repository: `raysho`
4. Set it to **Private**
5. Click **Create repository**
6. On the next page, click **uploading an existing file**
7. Drag and drop **all files and folders** from the `raysho` folder I gave you
   - Important: upload everything, including subfolders (app, lib, supabase, etc.)
8. Scroll down, click **Commit changes**

✅ Your code is now on GitHub.

---

## STEP 2 — Set up your database (Supabase)
**Time: 10 minutes**

1. Go to supabase.com and sign up
2. Click **New project**
   - Name: `raysho`
   - Database password: choose a strong password and save it somewhere safe
   - Region: choose the one closest to you (e.g. Europe West for India/UK, US East for USA)
3. Wait for the project to finish creating (~2 minutes)
4. In the left sidebar, click **SQL Editor**
5. Click **New query**
6. Open the file `supabase/schema.sql` from the raysho folder
7. Copy the entire contents and paste into the SQL editor
8. Click **Run** (green button, top right)
9. You should see: "Success. No rows returned"

**Now get your API keys:**
10. In the left sidebar, click **Project Settings** (gear icon) → **API**
11. You need three values — copy each one and save them:
    - **Project URL** → this is your `SUPABASE_URL`
    - **anon public** key → this is your `SUPABASE_ANON_KEY`
    - **service_role** key (click to reveal) → this is your `SUPABASE_SERVICE_ROLE_KEY`

✅ Your database is ready.

---

## STEP 3 — Get your YouTube API key
**Time: 10 minutes**

1. Go to console.cloud.google.com
2. Sign in with a Google account
3. Click **Select a project** → **New Project**
   - Name: `Raysho`
   - Click **Create**
4. In the search bar, type **YouTube Data API v3** and click it
5. Click **Enable**
6. In the left sidebar, click **Credentials**
7. Click **Create Credentials** → **API Key**
8. Copy the API key that appears → this is your `YOUTUBE_API_KEY`
9. Click **Close**

✅ YouTube API key ready.

---

## STEP 4 — Get your Anthropic API key
**Time: 5 minutes**

1. Go to console.anthropic.com
2. Sign up or sign in
3. Click **API Keys** in the left sidebar
4. Click **Create Key**
   - Name: `Raysho`
5. Copy the key that appears → this is your `ANTHROPIC_API_KEY`
   - **Important: copy it now.** It will not be shown again.
6. Add credit to your account: click **Plans & Billing** → add $20
   - This will last several months of normal usage

✅ Anthropic API key ready.

---

## STEP 5 — Deploy to Vercel
**Time: 15 minutes**

1. Go to vercel.com and sign up (choose "Continue with GitHub")
2. Click **Add New Project**
3. Find your `raysho` repository and click **Import**
4. Under **Framework Preset**, select **Next.js** (it may detect it automatically)
5. **Do not click Deploy yet** — you need to add environment variables first

**Add environment variables:**
6. Click **Environment Variables** section
7. Add each of these one by one (Name on the left, Value on the right):

| Name | Value |
|---|---|
| `SUPABASE_URL` | Your Supabase Project URL from Step 2 |
| `SUPABASE_ANON_KEY` | Your Supabase anon key from Step 2 |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service_role key from Step 2 |
| `ANTHROPIC_API_KEY` | Your Anthropic key from Step 4 |
| `YOUTUBE_API_KEY` | Your YouTube key from Step 3 |
| `ADMIN_PASSWORD` | Choose a strong password — this is how you log into /admin |
| `ADMIN_SECRET` | Type any random 32-character string (e.g. `CHANGE-ME-GENERATE-RANDOM-32-CHARS`) |
| `CRON_SECRET` | Type any random string (e.g. `cron-raysho-2026-secret-key`) |
| `NEXT_PUBLIC_SITE_URL` | `https://your-project-name.vercel.app` (you'll update this with your domain later) |

8. After adding all variables, click **Deploy**
9. Wait 2–3 minutes for the build to complete
10. When you see **Congratulations!**, click **Continue to Dashboard**
11. Click the URL shown (e.g. raysho.vercel.app) — your platform is live

✅ Platform is deployed.

---

## STEP 6 — Test everything works
**Time: 10 minutes**

1. **Test the platform:** Go to your Vercel URL → click Enter Platform → confirm the legal modal works → explore all sections
2. **Test admin login:** Go to yoursite.vercel.app/admin/login → enter the `ADMIN_PASSWORD` you set → confirm you can see the dashboard
3. **Test content ingestion:** In admin dashboard → click "Run Ingestion" tab → click "Run ingestion now" → wait 2–3 minutes → check the log shows items were found
4. **Test approval:** In admin dashboard → Review Queue tab → approve one item → go to Live Discovery on the platform → confirm the item appears

✅ Everything working.

---

## STEP 7 — Connect a custom domain (optional but recommended)
**Time: 10 minutes + 24 hours for DNS to propagate**

1. Buy a domain from Namecheap, GoDaddy, or Google Domains (e.g. raysho.ai — ~$12/year)
2. In Vercel dashboard → your project → **Settings** → **Domains**
3. Type your domain name and click **Add**
4. Vercel will show you DNS records to add
5. Log in to your domain registrar and add those DNS records
6. Wait up to 24 hours — usually happens within 1–2 hours
7. Once live, update the `NEXT_PUBLIC_SITE_URL` environment variable in Vercel to your new domain

✅ Custom domain active.

---

## STEP 8 — Confirm the cron job is active
**Time: 2 minutes**

1. In Vercel dashboard → your project → **Settings** → **Cron Jobs**
2. You should see one cron job: `/api/cron/ingest` scheduled at `0 6 * * *` (6am UTC daily)
3. If it doesn't appear, check that your `vercel.json` file was uploaded in Step 1

✅ Daily auto-ingestion confirmed.

---

## You are live. Summary of what you have:

| What | Where |
|---|---|
| Public landing page | yourdomain.com |
| Full platform | yourdomain.com/platform |
| Admin dashboard | yourdomain.com/admin |
| Daily content ingestion | Automatic — 6am UTC every day |
| Manual ingestion trigger | Admin dashboard → Run Ingestion tab |
| Content review | Admin dashboard → Review Queue |
| Live content feed | Admin dashboard → Live Content |

---

## Monthly costs once live

| Service | Cost |
|---|---|
| Vercel Pro (needed for Cron jobs) | $20/month |
| Supabase | Free tier (0–500MB) |
| Anthropic API | ~$5–15/month at this volume |
| YouTube API | Free (within 10K daily quota) |
| Domain | ~$1/month |
| **Total** | **~$26–36/month** |

**Note:** Vercel free tier does not include Cron jobs. You need Vercel Pro ($20/month) for the daily auto-ingestion to run automatically. The platform itself works on the free tier — only the cron job requires Pro.

---

## If something goes wrong

**Build fails on Vercel:**
- Check all 9 environment variables are entered correctly
- Make sure the variable names are spelled exactly as shown (they are case-sensitive)

**Admin login doesn't work:**
- Confirm `ADMIN_PASSWORD` and `ADMIN_SECRET` were added as environment variables in Vercel
- After adding/changing environment variables, Vercel needs to redeploy — click Deployments → Redeploy

**Cron job not running:**
- Upgrade to Vercel Pro
- Check `vercel.json` was uploaded in Step 1

**Supabase connection error:**
- Confirm the URL and keys from Step 2 were entered correctly
- The service_role key is not the same as the anon key — make sure you used the right one for each

**For anything else:** Contact a developer with this guide and the error message. The code is complete — any issue will be a configuration or environment variable problem, not a code problem.

---

*End of deployment guide. Keep this document private — it contains the structure of your environment variables.*
