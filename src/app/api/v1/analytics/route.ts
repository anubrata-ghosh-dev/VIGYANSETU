import { NextResponse } from 'next/server';
import { getAnalytics } from '@/lib/server-store';

export async function GET() {
  return NextResponse.json({ ok: true, data: getAnalytics() });
}
