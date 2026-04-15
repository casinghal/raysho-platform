import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Allowlisted topics only — prevents arbitrary prompt injection
const ALLOWED_TOPICS = new Set([
  'AI in accounts payable automation',
  'ChatGPT prompts for accountants 2025',
  'Microsoft Copilot for Finance',
  'Generative AI in financial close and reporting',
  'AI fraud detection in accounting',
  'Machine learning in FP&A',
  'Agentic AI in corporate tax',
  'AI tools for CPA firms and BPO',
  'Prompt engineering for finance professionals',
  'Claude AI for financial document analysis',
]);

export async function POST(req: NextRequest) {
  // Auth gate — must have valid admin session OR be from the platform itself
  // For the platform's Live Discovery, we gate it behind the legal modal acceptance
  // stored in a cookie set client-side on accept.
  const cookieStore = cookies();
  const accepted = cookieStore.get('fq_legal_accepted');
  const adminSession = cookieStore.get('fq_admin_session');
  const isAdmin = adminSession?.value === process.env.ADMIN_SECRET;

  // Allow if admin, or if user has accepted legal modal (cookie set client-side)
  if (!isAdmin && accepted?.value !== 'true') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: { topic?: unknown };
  try { body = await req.json(); }
  catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }); }

  const topic = body.topic;

  // Type check
  if (typeof topic !== 'string') {
    return NextResponse.json({ error: 'Invalid topic' }, { status: 400 });
  }

  // Length cap — prevents large injections
  if (topic.length > 120) {
    return NextResponse.json({ error: 'Topic too long' }, { status: 400 });
  }

  // Allowlist enforcement — only pre-approved topics accepted
  if (!ALLOWED_TOPICS.has(topic)) {
    return NextResponse.json({ error: 'Topic not permitted' }, { status: 400 });
  }

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY!,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001', // Use Haiku for cost control on public endpoint
      max_tokens: 800,
      messages: [{
        role: 'user',
        content: `Find 5 high-quality published resources about "${topic}" for Finance & Accounting professionals. Return ONLY a JSON array of exactly 5 objects with these fields: title (string), type (one of: VIDEO, ARTICLE, REPORT), url (string), source (string), publishDate (string), summary (max 2 sentences), whyItMatters (max 1 sentence). No preamble, no markdown fences, only the raw JSON array. Mark vendor sources with "(vendor)" in the source field.`,
      }],
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'AI service unavailable' }, { status: 503 });
  }

  const data = await res.json();
  const text = data.content?.find((b: { type: string; text: string }) => b.type === 'text')?.text || '[]';

  try {
    const results = JSON.parse(text.replace(/```json|```/g, '').trim());
    // Validate it's an array before returning
    if (!Array.isArray(results)) throw new Error('Not an array');
    return NextResponse.json({ results: results.slice(0, 5) });
  } catch {
    return NextResponse.json({ error: 'Parse error' }, { status: 500 });
  }
}

