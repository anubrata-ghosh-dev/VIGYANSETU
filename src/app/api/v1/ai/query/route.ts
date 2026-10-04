import { NextRequest, NextResponse } from 'next/server';
import { listResources } from '@/lib/server-store';

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();
    if (typeof question !== 'string' || question.trim().length < 3) {
      return NextResponse.json({ ok: false, error: 'question must be at least 3 characters' }, { status: 400 });
    }
    const evidence = listResources({ q: question, limit: 3 }).items;
    if (!evidence.length) {
      return NextResponse.json({
        ok: true,
        answer: 'I could not find sufficient evidence in the available institutional collection to answer this reliably.',
        citations: [],
        grounded: false,
      });
    }
    return NextResponse.json({
      ok: true,
      answer: `I found ${evidence.length} relevant institutional source${evidence.length === 1 ? '' : 's'} for “${question.trim()}”. Review the cited resources for the evidence and context before drawing conclusions.`,
      citations: evidence.map((resource) => ({ id: resource.id, title: resource.title, date: resource.date })),
      grounded: true,
    });
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON payload' }, { status: 400 });
  }
}
