import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Admin-only endpoint that triggers ingestion server-side.
// The CRON_SECRET never reaches the browser.
export async function POST() {
  // Verify admin session first
  const cookieStore = cookies();
  const session = cookieStore.get('fq_admin_session');
  if (!session || session.value !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Call the cron endpoint internally with the secret — server-side only
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/cron/ingest`, {
    headers: { authorization: `Bearer ${process.env.CRON_SECRET}` },
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
