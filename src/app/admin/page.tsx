"use client";

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { Activity, CheckCircle2, Database, FileUp, Search, ShieldCheck, Sparkles } from 'lucide-react';
import VigyanButton from '@/components/ui/VigyanButton';

type Analytics = {
  repository: { totalResources: number; datasets: number; publications: number; expeditions: number; reports: number; media: number; metadataCompleteness: number };
  discovery: { searchesThisMonth: number; downloadsThisMonth: number; popularTopics: string[] };
  outreach: { draftsGenerated: number; approvedStories: number; languages: string[] };
};

type Ingestion = { id: string; title: string; type: string; creator: string; sourceName: string; status: string; submittedAt: string };

export default function AdminPage() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [ingestions, setIngestions] = useState<Ingestion[]>([]);
  const [form, setForm] = useState({ title: '', type: 'dataset', creator: '', sourceName: '' });
  const [message, setMessage] = useState('');

  const loadData = () => {
    Promise.all([fetch('/api/v1/analytics').then((response) => response.json()), fetch('/api/v1/admin/ingestions').then((response) => response.json())])
      .then(([analyticsResponse, ingestionResponse]) => {
        setAnalytics(analyticsResponse.data);
        setIngestions(ingestionResponse.items ?? []);
      })
      .catch(() => setMessage('Dashboard data could not be loaded. Please try again.'));
  };

  useEffect(loadData, []);

  async function submitIngestion(event: FormEvent) {
    event.preventDefault();
    setMessage('');
    const response = await fetch('/api/v1/resources', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    const data = await response.json();
    if (!response.ok) {
      setMessage(data.error ?? 'Submission failed.');
      return;
    }
    setForm({ title: '', type: 'dataset', creator: '', sourceName: '' });
    setMessage('Submission received. It is now waiting for curator review.');
    loadData();
  }

  const widgets = analytics ? [
    { label: 'Repository resources', value: analytics.repository.totalResources, icon: Database },
    { label: 'Searches this month', value: analytics.discovery.searchesThisMonth, icon: Search },
    { label: 'Downloads this month', value: analytics.discovery.downloadsThisMonth, icon: Activity },
    { label: 'Metadata completeness', value: `${analytics.repository.metadataCompleteness}%`, icon: ShieldCheck },
  ] : [];

  return (
    <div className="min-h-screen bg-vigyan-background pb-20">
      <section className="bg-vigyan-deepNavy text-white">
        <div className="container-custom px-4 md:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div><p className="text-vigyan-saffron text-xs font-bold uppercase tracking-widest mb-3">Curator workspace</p><h1 className="text-4xl font-bold">Admin dashboard</h1><p className="text-gray-300 mt-3 max-w-2xl">Operate the trusted research archive: receive submissions, monitor quality, and move verified evidence into public discovery.</p></div>
            <Link href="/studio" className="inline-flex items-center gap-2 bg-vigyan-saffron px-4 py-3 rounded-sm font-bold text-sm"><Sparkles size={17} /> Open Content Studio</Link>
          </div>
        </div>
      </section>
      <main className="container-custom px-4 md:px-8 py-10 space-y-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {widgets.map(({ label, value, icon: Icon }) => <div key={label} className="bg-white border border-vigyan-border p-5"><Icon size={20} className="text-vigyan-saffron mb-4" /><p className="text-2xl font-bold text-vigyan-heading">{value}</p><p className="text-xs text-vigyan-muted mt-1">{label}</p></div>)}
        </div>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <section className="bg-white border border-vigyan-border p-6">
            <div className="flex items-center gap-2 mb-5"><FileUp size={20} className="text-vigyan-navy" /><h2 className="font-bold text-lg">Ingest a resource</h2></div>
            <p className="text-sm text-vigyan-muted mb-5">Every submission is queued for human review before it becomes part of the public archive.</p>
            <form onSubmit={submitIngestion} className="space-y-4">
              <input required value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} placeholder="Resource title" className="w-full border border-vigyan-border p-3 text-sm" />
              <div className="grid grid-cols-2 gap-3"><select value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value })} className="border border-vigyan-border p-3 text-sm"><option value="dataset">Dataset</option><option value="publication">Publication</option><option value="expedition">Expedition</option><option value="report">Report</option><option value="media">Media</option></select><input required value={form.creator} onChange={(event) => setForm({ ...form, creator: event.target.value })} placeholder="Creator / team" className="border border-vigyan-border p-3 text-sm" /></div>
              <input required value={form.sourceName} onChange={(event) => setForm({ ...form, sourceName: event.target.value })} placeholder="Source file or URL" className="w-full border border-vigyan-border p-3 text-sm" />
              <VigyanButton type="submit" className="w-full">Submit for review</VigyanButton>
              {message && <p className="text-sm text-vigyan-green" role="status">{message}</p>}
            </form>
          </section>
          <section className="bg-white border border-vigyan-border p-6">
            <div className="flex items-center justify-between mb-5"><div className="flex items-center gap-2"><CheckCircle2 size={20} className="text-vigyan-green" /><h2 className="font-bold text-lg">Review queue</h2></div><span className="text-xs text-vigyan-muted">{ingestions.length} pending</span></div>
            {ingestions.length === 0 ? <div className="border border-dashed border-vigyan-border p-8 text-center text-sm text-vigyan-muted">No new submissions. Use the form to demonstrate the ingestion workflow.</div> : <div className="space-y-3">{ingestions.map((item) => <div key={item.id} className="border border-vigyan-divider p-4 flex items-start justify-between gap-4"><div><p className="font-bold text-sm text-vigyan-heading">{item.title}</p><p className="text-xs text-vigyan-muted mt-1">{item.type} · {item.creator} · {item.sourceName}</p></div><span className="text-[10px] uppercase font-bold bg-vigyan-saffron/10 text-vigyan-saffron px-2 py-1">{item.status.replace('_', ' ')}</span></div>)}</div>}
          </section>
        </div>
      </main>
    </div>
  );
}
