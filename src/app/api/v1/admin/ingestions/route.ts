import { NextResponse } from 'next/server';
import { listIngestions } from '@/lib/server-store';

export async function GET() {
  return NextResponse.json({ ok: true, items: listIngestions() });
}
