"use client";

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, FileCheck2, Languages, Sparkles, TriangleAlert } from 'lucide-react';
import { MOCK_RESOURCES } from '@/lib/mock-data';
import VigyanButton from '@/components/ui/VigyanButton';

export default function ContentStudioPage() {
  const [resourceId, setResourceId] = useState(MOCK_RESOURCES[0].id);
  const [audience, setAudience] = useState('General public');
  const [language, setLanguage] = useState('English');
  const [format, setFormat] = useState('Science explainer');
  const [draft, setDraft] = useState('');
  const [reviewed, setReviewed] = useState(false);
  const resource = MOCK_RESOURCES.find((item) => item.id === resourceId) ?? MOCK_RESOURCES[0];

  function generateDraft() {
    setReviewed(false);
    setDraft(`${resource.title} is helping scientists understand ${resource.domain.toLowerCase()} through carefully collected institutional evidence. The work focuses on ${resource.summary.toLowerCase()} This verified source can help ${audience.toLowerCase()} explore why this research matters.`);
  }

  return (
    <div className="min-h-screen bg-vigyan-background pb-20">
      <section className="bg-vigyan-navy text-white"><div className="container-custom px-4 md:px-8 py-12"><p className="text-vigyan-saffron text-xs font-bold uppercase tracking-widest mb-3">Research-to-outreach</p><h1 className="text-4xl font-bold">Content Studio</h1><p className="text-gray-300 mt-3 max-w-2xl">Turn approved science into audience-ready communication while keeping every claim tied to its source.</p></div></section>
      <main className="container-custom px-4 md:px-8 py-10 grid lg:grid-cols-[320px_1fr] gap-8">
        <aside className="bg-white border border-vigyan-border p-6 h-fit space-y-5">
          <div className="flex items-center gap-2 mb-2"><Sparkles size={20} className="text-vigyan-saffron" /><h2 className="font-bold">Create a draft</h2></div>
          <label className="block text-xs font-bold uppercase text-vigyan-muted">Source resource<select value={resourceId} onChange={(event) => setResourceId(event.target.value)} className="mt-2 w-full border border-vigyan-border p-3 text-sm">{MOCK_RESOURCES.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select></label>
          <label className="block text-xs font-bold uppercase text-vigyan-muted">Audience<select value={audience} onChange={(event) => setAudience(event.target.value)} className="mt-2 w-full border border-vigyan-border p-3 text-sm"><option>General public</option><option>Student</option><option>Journalist</option><option>Researcher</option><option>Policymaker</option></select></label>
          <label className="block text-xs font-bold uppercase text-vigyan-muted">Language<select value={language} onChange={(event) => setLanguage(event.target.value)} className="mt-2 w-full border border-vigyan-border p-3 text-sm"><option>English</option><option>Hindi</option></select></label>
          <label className="block text-xs font-bold uppercase text-vigyan-muted">Format<select value={format} onChange={(event) => setFormat(event.target.value)} className="mt-2 w-full border border-vigyan-border p-3 text-sm"><option>Science explainer</option><option>Press note</option><option>Social post</option><option>Newsletter</option></select></label>
          <VigyanButton onClick={generateDraft} className="w-full gap-2"><Sparkles size={16} /> Generate grounded draft</VigyanButton>
        </aside>
        <section className="space-y-6">
          <div className="bg-white border border-vigyan-border p-6"><div className="flex flex-wrap items-center justify-between gap-3 mb-5"><div><p className="text-xs uppercase tracking-widest font-bold text-vigyan-saffron">{format} · {language}</p><h2 className="text-2xl font-bold text-vigyan-heading mt-2">{draft ? 'Draft ready for review' : 'Start with an approved source'}</h2></div>{draft && <span className="text-xs font-bold text-vigyan-green flex items-center gap-1"><FileCheck2 size={15} /> Source attached</span>}</div>{draft ? <textarea value={draft} onChange={(event) => setDraft(event.target.value)} className="w-full min-h-52 border border-vigyan-border p-4 text-sm leading-relaxed text-vigyan-body" /> : <div className="border border-dashed border-vigyan-border p-12 text-center text-sm text-vigyan-muted">Choose an audience and format, then generate a draft backed by {resource.title}.</div>}</div>
          {draft && <div className="grid md:grid-cols-2 gap-6"><div className="bg-white border border-vigyan-border p-6"><h3 className="font-bold flex items-center gap-2 mb-4"><CheckCircle2 size={18} className="text-vigyan-green" /> Claim verification</h3><div className="space-y-3 text-sm"><p className="flex gap-2"><CheckCircle2 size={16} className="text-vigyan-green shrink-0 mt-0.5" /> Source title and domain match the selected resource.</p><p className="flex gap-2"><CheckCircle2 size={16} className="text-vigyan-green shrink-0 mt-0.5" /> Summary is traceable to institutional metadata.</p><p className="flex gap-2"><TriangleAlert size={16} className="text-vigyan-saffron shrink-0 mt-0.5" /> Human reviewer must approve before publishing.</p></div></div><div className="bg-vigyan-deepNavy text-white p-6"><h3 className="font-bold flex items-center gap-2 mb-4"><Languages size={18} /> Review controls</h3><p className="text-sm text-gray-300 mb-5">AI assists with drafting. A curator remains responsible for the final scientific claim.</p><VigyanButton variant={reviewed ? 'secondary' : 'outline'} onClick={() => setReviewed(true)} className="w-full">{reviewed ? 'Marked ready for approval' : 'Mark claims reviewed'}</VigyanButton><Link href={`/resource/${resource.id}`} className="block text-center text-xs text-gray-300 hover:text-white mt-4 underline">Open source resource</Link></div></div>}
        </section>
      </main>
    </div>
  );
}
