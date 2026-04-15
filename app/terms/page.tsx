import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — FintelliQ',
  description: 'Terms of Service for FintelliQ, an independent AI and Finance & Accounting educational platform.',
  robots: { index: true, follow: false },
};

const LAST_UPDATED = 'March 2026';

export default function TermsPage() {
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
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#eef0f4', fontSize: 14, fontWeight: 700 }}>← FintelliQ</Link>
          <Link href="/privacy" style={{ fontSize: 12, color: '#3d4455', textDecoration: 'none' }}>Privacy Policy</Link>
        </div>
      </nav>
      <div style={s.wrap}>
        <h1 style={s.h1}>Terms of Service</h1>
        <p style={s.meta}>Last updated: {LAST_UPDATED} · Applies to all users of fintelliQ.com</p>

        <div style={s.note}>
          <strong style={{ color: '#8891a4' }}>Important:</strong> These terms constitute a legal agreement between you and FintelliQ. Read them before accessing the platform. By accessing or using FintelliQ, you agree to these terms in full.
        </div>

        <h2 style={s.h2}>1. About FintelliQ</h2>
        <p style={s.p}>FintelliQ is an independent educational platform providing AI-related learning content for Finance and Accounting professionals. FintelliQ is operated as an independent business and is not affiliated with, endorsed by, or sponsored by Deloitte, EY, PwC, KPMG, McKinsey, Anthropic, OpenAI, Microsoft, Google, xAI, or any other organisation referenced in its content. All third-party trademarks and brand names belong to their respective owners.</p>

        <h2 style={s.h2}>2. Educational Content Only — Not Professional Advice</h2>
        <p style={s.p}>All content on FintelliQ — including articles, prompts, case studies, tool comparisons, summaries, and AI-generated outputs — is provided for educational and informational purposes only. Nothing on this platform constitutes professional financial, accounting, tax, legal, audit, or compliance advice.</p>
        <p style={s.p}>You must not rely on any content from FintelliQ as a substitute for qualified professional advice. Before applying any information, prompt output, or framework from this platform in a professional, client-facing, regulatory, or financial context, you must obtain independent professional review from a suitably qualified practitioner.</p>
        <p style={s.p}>FintelliQ accepts no liability for decisions made based on content accessed through this platform or outputs generated using prompts obtained from it.</p>

        <h2 style={s.h2}>3. AI-Generated Content Disclaimer</h2>
        <p style={s.p}>FintelliQ uses AI tools including Claude (Anthropic) to generate and refresh certain content, including section summaries, content discovery results, and section briefs. AI-generated content may contain errors, inaccuracies, or outdated information. You are responsible for verifying all AI-generated outputs independently before use in any professional context.</p>

        <h2 style={s.h2}>4. Third-Party Data and Case Studies</h2>
        <p style={s.p}>Case studies, statistics, and research figures referenced on FintelliQ are drawn from publicly available third-party sources including company press releases, vendor surveys, industry publications, and research reports. FintelliQ has not independently verified these figures. Results described in case studies reflect specific circumstances of the organisations involved and should not be interpreted as typical, guaranteed, or replicable.</p>

        <h2 style={s.h2}>5. Subscriptions and Access</h2>
        <p style={s.p}>FintelliQ currently provides free access during its launch period. When paid subscription tiers are introduced, the following terms apply: subscription fees are charged in advance on a recurring basis; access to digital content commences immediately upon payment; subscription fees are non-refundable once access has been granted and content has been made available to you, regardless of your level of usage. FintelliQ does not guarantee any specific learning outcome, professional result, or business improvement as a result of using the platform.</p>
        <p style={s.p}>FintelliQ reserves the right to modify, suspend, or discontinue any part of the platform at any time, and to change subscription pricing with reasonable notice. Continued use of the platform following any changes constitutes your acceptance of the updated terms.</p>

        <h2 style={s.h2}>6. Acceptable Use</h2>
        <p style={s.p}>You agree not to use FintelliQ to: scrape, crawl, or systematically extract content for commercial use; reproduce or redistribute platform content without permission; attempt to circumvent any access controls or security measures; use the platform in any way that could damage, overburden, or impair its operation; or use AI prompts or outputs obtained from the platform in ways that violate applicable laws or professional standards.</p>

        <h2 style={s.h2}>7. Intellectual Property</h2>
        <p style={s.p}>The FintelliQ platform, its design, structure, original written content, and prompt frameworks are the intellectual property of FintelliQ. You may use individual prompts for your own professional or personal work, but you may not reproduce, redistribute, resell, or build derivative commercial products based on FintelliQ content without written permission.</p>

        <h2 style={s.h2}>8. Content Availability and Freshness</h2>
        <p style={s.p}>FintelliQ operates a rotating content model — content is regularly updated and older content may be removed or replaced. FintelliQ does not guarantee that any specific resource, article, video, or prompt will remain available indefinitely. If you find content you wish to retain, save the source link independently.</p>

        <h2 style={s.h2}>9. Limitation of Liability</h2>
        <p style={s.p}>To the maximum extent permitted by applicable law, FintelliQ and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the platform, including but not limited to loss of data, loss of revenue, loss of professional reputation, or losses arising from reliance on content or AI-generated outputs. FintelliQ's maximum aggregate liability to you for any claim shall not exceed the amount paid by you to FintelliQ in the twelve months preceding the claim.</p>

        <h2 style={s.h2}>10. Governing Law</h2>
        <p style={s.p}>These terms are governed by the laws of the jurisdiction in which FintelliQ is registered. Any disputes shall be subject to the exclusive jurisdiction of the courts of that jurisdiction. If you access FintelliQ from outside that jurisdiction, you do so on your own initiative and are responsible for compliance with local laws.</p>

        <h2 style={s.h2}>11. Changes to These Terms</h2>
        <p style={s.p}>FintelliQ reserves the right to update these Terms of Service at any time. The date of the most recent revision is shown at the top of this page. Continued use of the platform after changes are posted constitutes acceptance of the revised terms. For material changes, we will make reasonable efforts to notify active subscribers.</p>

        <h2 style={s.h2}>12. Contact</h2>
        <p style={s.p}>For questions about these terms, please contact us at <a href="mailto:contact.us@avantage-partners.com" style={{ color: '#f0b429', textDecoration: 'none' }}>contact.us@avantage-partners.com</a>.</p>

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: 12, color: '#3d4455', textDecoration: 'none' }}>Home</Link>
            <Link href="/privacy" style={{ fontSize: 12, color: '#3d4455', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/platform" style={{ fontSize: 12, color: '#3d4455', textDecoration: 'none' }}>Platform</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
