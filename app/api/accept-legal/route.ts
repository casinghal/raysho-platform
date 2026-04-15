import { NextResponse } from 'next/server';

// Called when user checks the legal modal checkbox and clicks Enter.
// Sets a server-side cookie that gates access to Anthropic API routes.
export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set('fq_legal_accepted', 'true', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: '/',
  });
  return res;
}
