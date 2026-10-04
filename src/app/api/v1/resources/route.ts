import { NextRequest, NextResponse } from 'next/server';
import { createIngestion, listResources } from '@/lib/server-store';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const result = listResources({
    q: params.get('q') ?? undefined,
    type: params.get('type') ?? undefined,
    domain: params.get('domain') ?? undefined,
    page: Number(params.get('page') ?? 1),
    limit: Number(params.get('limit') ?? 12),
  });
  return NextResponse.json({ ok: true, ...result });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body.title || !body.type || !body.creator || !body.sourceName) {
      return NextResponse.json(
        { ok: false, error: 'title, type, creator, and sourceName are required' },
        { status: 400 },
      );
    }
    const record = createIngestion({
      title: String(body.title),
      type: body.type,
      creator: String(body.creator),
      sourceName: String(body.sourceName),
    });
    return NextResponse.json({ ok: true, item: record }, { status: 201 });
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON payload' }, { status: 400 });
  }
}
