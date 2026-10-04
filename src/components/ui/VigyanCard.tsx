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
    publication: <FileText className="text-vigyan-blue" />,
    dataset: <Database className="text-vigyan-green" />,
    expedition: <Map className="text-vigyan-saffron" />,
    report: <FileText className="text-vigyan-muted" />,
    media: <ExternalLink className="text-vigyan-blue" />,
  };

  return (
    <div className="group surface-card p-6 hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(18,59,93,0.55)] transition-all flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-vigyan-background rounded-xl border border-gray-100">
          {icons[resource.type]}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 bg-vigyan-background text-gray-600 rounded-full">
          {resource.type}
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-vigyan-heading mb-2 leading-tight group-hover:text-vigyan-blue transition-colors">
        {resource.title}
      </h3>
      
      <p className="text-sm text-vigyan-muted mb-6 line-clamp-3 leading-relaxed">
        {resource.summary}
      </p>
      
      <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between gap-4">
        <div className="text-xs text-gray-400">
          <span className="font-medium text-gray-600">{resource.creator}</span>
          <span className="mx-1">•</span>
          {resource.date}
        </div>
        <Link href={`/resource/${resource.id}`} className="text-xs font-bold text-vigyan-navy hover:text-vigyan-saffron transition-colors">
          Explore →
        </Link>
      </div>
    </div>
  );
}
