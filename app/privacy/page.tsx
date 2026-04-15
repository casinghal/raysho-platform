import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Raysho',
  description: 'Privacy Policy for Raysho. How we collect, use, and protect your data.',
  robots: { index: true, follow: false },
};

const LAST_UPDATED = 'March 2026';

export default function PrivacyPage() {
  const s = {
    page:    { minHeight: '100vh', background: '#07080c', color: '#eef0f4', fontFamily: "'DM Sans', system-ui, sans-serif" } as React.CSSProperties,
    nav:     { borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '0 24px', background: '#0f1117' } as React.CSSProperties,
    navInner:{ maxWidth: 820, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 } as React.CSSProperties,
    wrap:    { maxWidth: 820, margin: '0 auto', padding: '48px 24px 80px' } as React.CSSProperties,
    h1:      { fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 34, fontWeight: 400, marginBottom: 8, color: '#eef0f4' } as React.CSSProperties,
    meta:    { fontSize: 13, color: '#3d4455', marginBottom: 40 } as React.CSSProperties,
    h2:      { fontSize: 16, fontWeight: 600, color: '#eef0f4', marginTop: 36, marginBottom: 12 } as React.CSSProperties,
    p:       { fontSize: 14, color: '#8891a4', lineHeight: 1.8, marginBottom: 14 } as React.CSSProperties,
    note:    { fontSize: 12, color: '#3d4455', background: '#0f1117', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: '12px 16px', marginBottom: 14, lineHeight: 1.7 } as React.CSSProperties,
  };

  return (
    <div style={s.page}>
      <nav style={s.nav}>
        <div style={s.navInner}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#eef0f4', fontSize: 14, fontWeight: 700 }}>← Raysho</Link>
          <Link href="/terms" style={{ fontSize: 12, color: '#3d4455', textDecoration: 'none' }}>Terms of Service</Link>
        </div>
      </nav>
      <div style={s.wrap}>
        <h1 style={s.h1}>Privacy Policy</h1>
        <p style={s.meta}>Last updated: {LAST_UPDATED} · Applies to all users of raysho.ai</p>

        <div style={s.note}>
          Raysho currently operates as a free-access, no-signup platform. We collect minimal data. This policy explains what data is collected, by whom, and how it is used.
        </div>

        <h2 style={s.h2}>1. Who We Are</h2>
        <p style={s.p}>Raysho is an independent educational platform for Finance and Accounting professionals. References to "we", "us", or "Raysho" in this policy refer to the operator of raysho.ai.</p>

        <h2 style={s.h2}>2. Data We Collect</h2>
        <p style={s.p}><strong style={{ color: '#eef0f4' }}>Platform access (no account required):</strong> Raysho does not currently require account creation or login for platform access. We do not collect your name, email address, or personal details during normal platform use.</p>
        <p style={s.p}><strong style={{ color: '#eef0f4' }}>Session cookies:</strong> We set a functional cookie (`fq_legal_accepted`) when you accept the platform's legal disclaimer. This cookie is used solely to remember that you have accepted the terms, so you are not shown the modal on every visit. It does not track your identity or behaviour.</p>
        <p style={s.p}><strong style={{ color: '#eef0f4' }}>Technical data collected automatically by hosting infrastructure:</strong> Like all websites, our hosting provider (Vercel) may log IP addresses, browser type, and page requests for operational and security purposes. This data is governed by Vercel's own privacy policy (vercel.com/legal/privacy-policy) and is not used by Raysho for tracking or profiling.</p>
        <p style={s.p}><strong style={{ color: '#eef0f4' }}>When paid subscriptions are introduced:</strong> We will collect email address, payment information (processed by Stripe — not stored by Raysho), and subscription status. This policy will be updated at that time with full details.</p>

        <h2 style={s.h2}>3. Third-Party Services</h2>
        <p style={s.p}>Raysho uses the following third-party services which may process data in connection with platform operation:</p>
        <p style={s.p}><strong style={{ color: '#eef0f4' }}>Vercel</strong> — Hosting and deployment. May log access requests. Privacy policy: vercel.com/legal/privacy-policy</p>
        <p style={s.p}><strong style={{ color: '#eef0f4' }}>Supabase</strong> — Database for approved content displayed on the platform. Stores content items only, not user data. Privacy policy: supabase.com/privacy</p>
        <p style={s.p}><strong style={{ color: '#eef0f4' }}>Anthropic (Claude API)</strong> — Used server-side to score ingested content and generate section summaries. Queries are sent from our servers; your personal data is not included. Privacy policy: anthropic.com/privacy</p>
        <p style={s.p}><strong style={{ color: '#eef0f4' }}>Google Fonts</strong> — Fonts are loaded from Google's CDN. Your IP address may be sent to Google when fonts are loaded. To avoid this, fonts can be self-hosted (contact us if this is a concern). Privacy policy: policies.google.com/privacy</p>

        <h2 style={s.h2}>4. Cookies</h2>
        <p style={s.p}>Raysho uses one first-party functional cookie: `fq_legal_accepted`. This is set when you accept the platform disclaimer and expires after one year. It contains no personal data and is not used for tracking or advertising. We do not use analytics cookies, advertising cookies, or third-party tracking cookies.</p>

        <h2 style={s.h2}>5. How We Use Data</h2>
        <p style={s.p}>Data collected through platform operation is used solely to: deliver the platform's functionality; maintain operational security; and improve platform performance. We do not sell, rent, or share personal data with third parties for marketing purposes. We do not use personal data for automated profiling or decision-making.</p>

        <h2 style={s.h2}>6. Data Retention</h2>
        <p style={s.p}>Session cookies expire as described above. Server logs held by Vercel are subject to Vercel's retention policies. When paid subscriptions are introduced, we will publish specific retention periods for subscriber data.</p>

        <h2 style={s.h2}>7. Your Rights</h2>
        <p style={s.p}>Depending on your jurisdiction, you may have rights including: the right to access data held about you; the right to correct inaccurate data; the right to request deletion; the right to object to processing; and the right to data portability. Because Raysho currently collects minimal personal data, most of these rights are satisfied by the fact that we hold little or no data about you. If you have a specific request, contact us using the details below.</p>

        <h2 style={s.h2}>8. International Transfers</h2>
        <p style={s.p}>Raysho's infrastructure involves service providers based in the United States (Vercel, Supabase, Anthropic). If you access the platform from the European Economic Area or United Kingdom, data processed by these providers may be transferred internationally. Each provider maintains appropriate transfer mechanisms under applicable data protection law.</p>

        <h2 style={s.h2}>9. Children</h2>
        <p style={s.p}>Raysho is a professional platform intended for adults working in Finance and Accounting. It is not directed at children under the age of 18. We do not knowingly collect personal data from minors.</p>

        <h2 style={s.h2}>10. Changes to This Policy</h2>
        <p style={s.p}>We may update this Privacy Policy from time to time. The date of the most recent revision is shown at the top of this page. Material changes will be communicated to active subscribers where possible.</p>

        <h2 style={s.h2}>11. Contact</h2>
        <p style={s.p}>For privacy-related questions or requests, please contact us at <a href="mailto:contact.us@avantage-partners.com" style={{ color: '#f0b429', textDecoration: 'none' }}>contact.us@avantage-partners.com</a>.</p>

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: 12, color: '#3d4455', textDecoration: 'none' }}>Home</Link>
            <Link href="/terms" style={{ fontSize: 12, color: '#3d4455', textDecoration: 'none' }}>Terms of Service</Link>
            <Link href="/platform" style={{ fontSize: 12, color: '#3d4455', textDecoration: 'none' }}>Platform</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
