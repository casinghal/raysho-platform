import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Allowed section names — prevents arbitrary prompt injection
const ALLOWED_SECTIONS = new Set([
  'AI Tools for Finance and Accounting',
  'F&A Process Tower AI Applications',
  'AI in F&A Case Studies',
  'F&A Prompt Library',
]);

export async function POST(req: NextRequest) {
  // Require legal acceptance or admin session
  const cookieStore = cookies();
  const accepted = cookieStore.get('fq_legal_accepted');
  const adminSession = cookieStore.get('fq_admin_session');
  const isAdmin = adminSession?.value === process.env.ADMIN_SECRET;

  if (!isAdmin && accepted?.value !== 'true') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: { sectionName?: unknown; resourceList?: unknown };
  try { body = await req.json(); }
  catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }); }

  const { sectionName, resourceList } = body;

  if (typeof sectionName !== 'string' || !ALLOWED_SECTIONS.has(sectionName)) {
    return NextResponse.json({ error: 'Invalid section' }, { status: 400 });
  }

  // Cap resource list length to prevent large injections
  const safeResourceList = typeof resourceList === 'string'
    ? resourceList.slice(0, 500)
    : 'current resources in this section';

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY!,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001', // Cost-controlled
      max_tokens: 900,
      messages: [{
        role: 'user',
        content: `You are a senior F&A intelligence analyst writing a section brief for a professional learning platform. Write a practical summary of the "${sectionName}" section for F&A professionals. Resources referenced: ${safeResourceList}. Requirements: 600-750 words, written like a thoughtful senior practitioner, explains what is happening, what matters and why, ends with a clear takeaway. No bullet points. End with "Key Takeaway:" followed by one sentence. Start directly.`,
      }],
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'AI service unavailable' }, { status: 503 });
  }

  const data = await res.json();
  const text = data.content?.find((b: { type: string; text: string }) => b.type === 'text')?.text || '';

  return NextResponse.json({ text });
}

