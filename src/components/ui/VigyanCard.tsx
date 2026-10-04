import React from 'react';
import Link from 'next/link';
import { Resource } from '@/lib/mock-data';
import { FileText, Database, Map, ExternalLink } from 'lucide-react';

interface VigyanCardProps {
  resource: Resource;
  variant?: 'compact' | 'detailed';
}

export default function VigyanCard({ resource, variant = 'compact' }: VigyanCardProps) {
  const icons = {
    publication: <FileText style={{ color: '#0E7C86' }} />,
    dataset:     <Database style={{ color: '#2E7D4F' }} />,
    expedition:  <Map style={{ color: '#F2A30F' }} />,
    report:      <FileText style={{ color: 'var(--text-muted)' }} />,
    media:       <ExternalLink style={{ color: '#0E7C86' }} />,
  };

  return (
    <div className="group surface-card p-6 hover:-translate-y-1 hover:shadow-float transition-all flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl border" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
          {icons[resource.type]}
        </div>
        <span
          className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
          style={{ background: 'var(--bg)', color: 'var(--text-muted)' }}
        >
          {resource.type}
        </span>
      </div>

      <h3
        className="text-lg font-bold mb-2 leading-tight transition-colors group-hover:text-sagar"
        style={{ color: 'var(--text)' }}
      >
        {resource.title}
      </h3>

      <p className="text-sm mb-6 line-clamp-3 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
        {resource.summary}
      </p>

      <div
        className="mt-auto pt-4 border-t flex items-center justify-between gap-4"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
          <span className="font-medium" style={{ color: 'var(--text)' }}>{resource.creator}</span>
          <span className="mx-1">•</span>
          {resource.date}
        </div>
        <Link
          href={`/resource/${resource.id}`}
          className="text-xs font-bold transition-colors hover:text-haldi"
          style={{ color: 'var(--text)' }}
        >
          Explore →
        </Link>
      </div>
    </div>
  );
}
