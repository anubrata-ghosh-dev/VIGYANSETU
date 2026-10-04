import { NextResponse } from 'next/server';
import { getResource, listResources } from '@/lib/server-store';

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const resource = getResource(id);
  if (!resource) return NextResponse.json({ ok: false, error: 'Resource not found' }, { status: 404 });
  const related = listResources({ domain: resource.domain, limit: 4 }).items
    .filter((item) => item.id !== resource.id);
  return NextResponse.json({ ok: true, item: resource, related });
}
