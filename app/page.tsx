// Server Component — no 'use client' directive
// Full redesign: SKILL_30 v2.0 Emotional Design Architecture
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Raysho — AI & F&A Knowledge Platform for Finance Professionals',
  description: 'Claude-optimised AI prompts for Finance and Accounting professionals. 230 structured frameworks, 8 process towers, 10 industries. Daily AI briefings scored for F&A relevance.',
  openGraph: {
    title: 'Raysho — AI & F&A Knowledge Platform',
    description: "Stop guessing with AI. Get Claude-optimised prompt frameworks built for F&A practitioners.",
    type: 'website',
    url: 'https://raysho.ai',
  },
  alternates: {
    canonical: 'https://raysho.ai',
  },
};

// ── Design tokens (landing page uses CSS vars directly via inline styles)
const T = {
  bg:        'var(--bg-primary)',
  surface:   'var(--bg-secondary)',
  card:      'var(--bg-card)',
  border:    'var(--border-default)',
  borderStr: 'var(--border-strong)',
  accent:    'var(--accent-primary)',
  acSubtle:  'var(--accent-primary-subtle)',
  acMuted:   'var(--accent-primary-muted)',
  acBorder:  'var(--border-ai)',
  gold:      'var(--accent-secondary)',
  goldSub:   'var(--accent-secondary-subtle)',
  text:      'var(--text-primary)',
  t2:        'var(--text-secondary)',
  t3:        'var(--text-tertiary)',
  textAI:    'var(--text-ai)',
  shadow:    'var(--shadow-card)',
  shadowHov: 'var(--shadow-card-hover)',
  display:   'var(--font-display)',
  body:      'var(--font-body)',
  mono:      'var(--font-mono)',
};

// ── Six pillars — bento grid data
const PILLARS = [
  {
    id: 'tools',
    wide: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    label: 'AI Tools Hub',
    desc: 'Claude, ChatGPT, Copilot — F&A-specific use cases and frameworks for each tool.',
    href: '/platform',
    color: T.accent,
  },
  {
    id: 'towers',
    wide: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    label: 'Process Towers',
    desc: 'AP, AR, R2R, Tax, Audit, FP&A, Payroll, Treasury — 10 Claude-optimised prompts per function. Built for how F&A work actually gets done.',
    href: '/platform',
    color: T.accent,
    stat: '80 prompts across 8 towers',
  },
  {
    id: 'prompts',
    wide: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    label: 'Industry Prompts',
    desc: '150 deep-analysis prompts across 10 sectors. Each averages 17,000 characters of structured framework — the most specific F&A prompt library available.',
    href: '/platform',
    color: T.accent,
    stat: '150 prompts, 10 industries',
  },
  {
    id: 'cases',
    wide: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    label: 'Case Studies',
    desc: 'Published Big Four results — cited, sourced, and honest.',
    href: '/platform',
    color: T.accent,
  },
  {
    id: 'discovery',
    wide: false,
    icon: null,
    label: 'Live Discovery',
    desc: "Today's F&A AI developments — scored by Claude for relevance.",
    href: '/platform',
    color: T.accent,
    live: true,
  },
  {
    id: 'lab',
    wide: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4m-6 0h6"/>
      </svg>
    ),
    label: 'Automation Lab',
    desc: 'Automation ideas across F&A towers. More launching weekly.',
    href: '/platform',
    color: T.accent,
  },
];

const SAMPLE_PROMPT = `BANK RECONCILIATION VARIANCE ANALYSIS

You are a senior finance professional conducting a month-end bank reconciliation review. Analyse the following reconciliation data and produce:

1. VARIANCE IDENTIFICATION
   — List all unreconciled items above materiality threshold
   — Classify each: timing difference / error / missing entry / unknown

2. RISK ASSESSMENT
   — Flag items outstanding > 30 days
   — Identify any patterns suggesting systematic error

3. CORRECTIVE ACTIONS
   — Journal entry recommendations with account codes
   — Escalation items requiring controller sign-off

Input your reconciliation data below:`;

const WHO = [
  'CPAs and Accounting Firms',
  'CFOs and Controllers',
  'FP&A Analysts',
  'AP and AR Managers',
  'Hotel Finance Teams',
  'Internal Auditors',
  'Tax Professionals',
  'BPO and GDS Operators',
];

const STATS = [
  { v: '230', l: 'Claude-optimised prompts' },
  { v: '8',   l: 'Process towers' },
  { v: '10',  l: 'Industries covered' },
  { v: 'Daily', l: 'AI content briefings' },
];

export default function LandingPage() {
  return (
    <div style={{ background: T.bg, minHeight: '100vh', fontFamily: T.body, color: T.text }}>

      {/* ── NAVIGATION ─────────────────────────────────────────── */}
      <nav className="raysho-nav">
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>

          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: T.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <span style={{ fontFamily: T.display, fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em', color: T.text }}>Raysho</span>
          </div>

          {/* Nav links — desktop */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <a href="#pillars" style={{ fontSize: 14, color: T.t2, fontFamily: T.body, fontWeight: 500 }}>Platform</a>
            <a href="#sample" style={{ fontSize: 14, color: T.t2, fontFamily: T.body, fontWeight: 500 }}>See a prompt</a>
            <a href="#who" style={{ fontSize: 14, color: T.t2, fontFamily: T.body, fontWeight: 500 }}>Who it&apos;s for</a>
          </div>

          {/* CTA */}
          <Link
            href="/platform"
            style={{ padding: '9px 20px', borderRadius: 6, background: T.accent, color: '#fff', fontSize: 14, fontWeight: 600, fontFamily: T.body, display: 'inline-flex', alignItems: 'center', gap: 6 }}
          >
            Open Platform →
          </Link>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      {/* Signal 1: aurora sits behind content as position:relative wrapper */}
      <section style={{ position: 'relative', overflow: 'hidden', maxWidth: '100%' }}>
        <div className="hero-aurora" aria-hidden="true" />
        <div className="hero-content" style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 24px 72px', textAlign: 'center' }}>

          {/* Eyebrow */}
          <p style={{
            display: 'inline-block',
            fontFamily: T.body,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: T.textAI,
            background: T.acSubtle,
            border: `1px solid ${T.acBorder}`,
            borderRadius: 999,
            padding: '4px 14px',
            marginBottom: 28,
          }}>
            The F&amp;A Professional&apos;s Guide to AI
          </p>

          {/* Headline */}
          <h1 style={{
            fontFamily: T.display,
            fontSize: 'clamp(32px, 5.5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            color: T.text,
            marginBottom: 24,
            maxWidth: 800,
            margin: '0 auto 24px',
          }}>
            Stop guessing with AI.<br />
            Start using it like a professional.
          </h1>

          {/* Subheadline */}
          <p style={{
            fontFamily: T.body,
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: T.t2,
            lineHeight: 1.7,
            maxWidth: 580,
            margin: '0 auto 40px',
          }}>
            230 Claude-optimised prompt frameworks, 8 process towers, and daily AI briefings
            scored for F&amp;A relevance. Built for practitioners, not generalists.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
            <Link
              href="/platform"
              style={{ padding: '14px 32px', borderRadius: 6, background: T.accent, color: '#fff', fontSize: 15, fontWeight: 600, fontFamily: T.body, display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              Start with your function →
            </Link>
            <a
              href="#sample"
              style={{ padding: '14px 24px', borderRadius: 6, border: `1px solid ${T.borderStr}`, color: T.t2, fontSize: 15, fontWeight: 500, fontFamily: T.body, display: 'inline-flex', alignItems: 'center' }}
            >
              See what Claude-optimised means
            </a>
          </div>

          {/* Stats bar */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
            {STATS.map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: T.display, fontSize: 26, fontWeight: 700, color: T.accent, letterSpacing: '-0.02em', lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontFamily: T.body, fontSize: 12, color: T.t3, marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIX PILLARS BENTO ───────────────────────────────────── */}
      <section id="pillars" style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 24px' }}>

        {/* Section label */}
        <p style={{ fontFamily: T.body, fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: T.t3, marginBottom: 12, textAlign: 'center' }}>
          EVERYTHING YOU NEED TO WORK WITH AI IN FINANCE
        </p>
        <h2 style={{ fontFamily: T.display, fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, letterSpacing: '-0.02em', color: T.text, textAlign: 'center', marginBottom: 40 }}>
          Six pillars. One daily-use platform.
        </h2>

        {/* Bento grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 14,
        }}>
          {PILLARS.map(p => (
            <Link
              key={p.id}
              href={p.href}
              className="bento-cell"
              style={{
                gridColumn: p.wide ? 'span 2' : 'span 1',
                padding: p.wide ? '28px 32px' : '24px 24px',
              }}
            >
              {/* Icon or live badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: T.acSubtle, display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.accent }}>
                  {p.live ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
                    </svg>
                  ) : p.icon}
                </div>
                {p.live && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: T.body, fontSize: 11, fontWeight: 500, color: T.textAI }}>
                    <span className="live-indicator" />
                    LIVE
                  </span>
                )}
              </div>

              {/* Title */}
              <div>
                <div style={{ fontFamily: T.display, fontSize: 15, fontWeight: 600, color: T.text, marginBottom: 6 }}>{p.label}</div>
                <div style={{ fontFamily: T.body, fontSize: 13, color: T.t2, lineHeight: 1.6 }}>{p.desc}</div>
              </div>

              {/* Stat if present */}
              {p.stat && (
                <div style={{ fontFamily: T.body, fontSize: 11, fontWeight: 500, color: T.textAI, letterSpacing: '0.04em' }}>
                  {p.stat}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* ── SAMPLE PROMPT (Intelligence Signal demo) ────────────── */}
      <section id="sample" style={{ background: T.surface, borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 24px' }}>

          <p style={{ fontFamily: T.body, fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: T.t3, marginBottom: 12, textAlign: 'center' }}>
            SEE WHAT CLAUDE-OPTIMISED MEANS
          </p>
          <h2 style={{ fontFamily: T.display, fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', color: T.text, textAlign: 'center', marginBottom: 8 }}>
            Not a generic prompt. A structured professional framework.
          </h2>
          <p style={{ fontFamily: T.body, fontSize: 14, color: T.t2, textAlign: 'center', marginBottom: 40, maxWidth: 520, margin: '0 auto 40px' }}>
            Every prompt includes numbered usage steps, specific data constructs, and a disclaimer that results may vary on other AI tools.
          </p>

          {/* Badge row */}
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 20, flexWrap: 'wrap' }}>
            <span className="badge-free">FREE</span>
            <span className="badge-claude">Claude-optimised</span>
            <span style={{ fontFamily: T.body, fontSize: 11, padding: '2px 8px', borderRadius: 999, background: T.surface, border: `1px solid ${T.border}`, color: T.t3 }}>
              AP Tower
            </span>
            <span style={{ fontFamily: T.body, fontSize: 11, padding: '2px 8px', borderRadius: 999, background: T.surface, border: `1px solid ${T.border}`, color: T.t3 }}>
              Beginner
            </span>
          </div>

          {/* Prompt block */}
          <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>
            <div className="prompt-block">
              <div className="copy-btn">Copy for Claude</div>
              {SAMPLE_PROMPT}
            </div>
          </div>

          <p style={{ fontFamily: T.body, fontSize: 12, color: T.t3, textAlign: 'center', marginTop: 16, fontStyle: 'italic' }}>
            Results require review by a qualified professional before use in any client or regulated context.
          </p>

          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link
              href="/platform"
              style={{ padding: '12px 28px', borderRadius: 6, background: T.accent, color: '#fff', fontSize: 14, fontWeight: 600, fontFamily: T.body, display: 'inline-flex', alignItems: 'center', gap: 6 }}
            >
              Explore all 230 prompts →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHO IT&apos;S FOR ─────────────────────────────────────── */}
      <section id="who" style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 24px' }}>
        <p style={{ fontFamily: T.body, fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: T.t3, marginBottom: 12, textAlign: 'center' }}>
          BUILT FOR F&amp;A PRACTITIONERS
        </p>
        <h2 style={{ fontFamily: T.display, fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', color: T.text, textAlign: 'center', marginBottom: 40 }}>
          If Finance and Accounting is your work, this is your platform.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
          {WHO.map(role => (
            <div key={role} style={{ padding: '14px 18px', background: T.card, border: `1px solid ${T.border}`, borderRadius: 10, display: 'flex', alignItems: 'center', gap: 10, boxShadow: T.shadow }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: T.accent, flexShrink: 0 }} />
              <span style={{ fontFamily: T.body, fontSize: 13, color: T.t2 }}>{role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROOF SECTION ───────────────────────────────────────── */}
      <section style={{ background: T.surface, borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 24px' }}>
          <p style={{ fontFamily: T.body, fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: T.t3, marginBottom: 12, textAlign: 'center' }}>
            WHAT THE PROFESSION HAS FOUND
          </p>
          <h2 style={{ fontFamily: T.display, fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', color: T.text, textAlign: 'center', marginBottom: 40 }}>
            Finance functions that adopted structured AI workflows are operating differently.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, maxWidth: 900, margin: '0 auto' }}>
            {[
              { stat: '98%', claim: 'of accounting firms now use AI in some form', source: "Karbon's 2026 survey of 600 firms across 6 continents" },
              { stat: '35%', claim: 'average reduction in close cycle time with structured AI workflows', source: 'Deloitte CFO Survey 2026' },
              { stat: '82%', claim: 'of CPA firms use ChatGPT — but most get inconsistent results without structured prompts', source: "Future Firm's 2025 survey" },
            ].map(p => (
              <div key={p.stat} style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 12, padding: '24px 24px', boxShadow: T.shadow }}>
                <div style={{ fontFamily: T.display, fontSize: 36, fontWeight: 800, color: T.accent, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 8 }}>{p.stat}</div>
                <div style={{ fontFamily: T.body, fontSize: 14, color: T.text, lineHeight: 1.6, marginBottom: 10 }}>{p.claim}</div>
                <div style={{ fontFamily: T.body, fontSize: 11, color: T.t3, lineHeight: 1.5, fontStyle: 'italic' }}>Source: {p.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────── */}
      <section style={{ maxWidth: 720, margin: '0 auto', padding: '88px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: T.body, fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: T.textAI, marginBottom: 16 }}>
          FREE ACCESS · NO SIGNUP · NO PAYWALL
        </p>
        <h2 style={{ fontFamily: T.display, fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.15, color: T.text, marginBottom: 16 }}>
          Finance professionals who use AI properly are operating at a different level.
        </h2>
        <p style={{ fontFamily: T.body, fontSize: 15, color: T.t2, lineHeight: 1.7, marginBottom: 36 }}>
          Raysho is where that starts. Open the platform now — no account, no paywall, no friction.
        </p>
        <Link
          href="/platform"
          style={{ padding: '16px 40px', borderRadius: 6, background: T.accent, color: '#fff', fontSize: 16, fontWeight: 700, fontFamily: T.body, display: 'inline-flex', alignItems: 'center', gap: 8 }}
        >
          Open Raysho — It&apos;s Free →
        </Link>
        <p style={{ fontFamily: T.body, fontSize: 12, color: T.t3, marginTop: 16 }}>
          Free during launch. No signup required. Content refreshes daily.
        </p>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer style={{ borderTop: `1px solid ${T.border}`, padding: '32px 24px', background: T.surface }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 20, flexWrap: 'wrap' }}>
            <Link href="/terms"   style={{ fontFamily: T.body, fontSize: 12, color: T.t3 }}>Terms of Service</Link>
            <Link href="/privacy" style={{ fontFamily: T.body, fontSize: 12, color: T.t3 }}>Privacy Policy</Link>
            <Link href="/platform" style={{ fontFamily: T.body, fontSize: 12, color: T.t3 }}>Platform</Link>
            <a href="mailto:contact.us@avantage-partners.com" style={{ fontFamily: T.body, fontSize: 12, color: T.t3 }}>Contact</a>
          </div>
          <p style={{ fontFamily: T.body, fontSize: 11, color: T.t3, lineHeight: 1.8, textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
            Raysho is an independent educational platform. Not affiliated with, endorsed by, or sponsored by Deloitte, EY, PwC, KPMG, McKinsey, Anthropic, OpenAI, Microsoft, Google, or xAI. All trademarks belong to their respective owners. Content is for educational purposes only — not professional financial, accounting, tax, or legal advice. All AI-generated outputs require review by a qualified professional before use.
          </p>
        </div>
      </footer>

    </div>
  );
}
