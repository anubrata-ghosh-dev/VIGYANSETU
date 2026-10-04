import React from 'react';
import { MOCK_RESOURCES } from '@/lib/mock-data';
import VigyanButton from '@/components/ui/VigyanButton';
import VigyanCard from '@/components/ui/VigyanCard';
import { Download, Quote, Share2, FileText, Link as LinkIcon, Calendar, User, MapPin } from 'lucide-react';

export default function ResourcePage({ params }: { params: { id: string } }) {
  const resource = MOCK_RESOURCES.find(r => r.id === params.id) || MOCK_RESOURCES[0];

  return (
    <div className="min-h-screen bg-vigyan-background pb-24">
      <div className="bg-white border-b border-vigyan-border py-12">
        <div className="container-custom px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-vigyan-saffron">{resource.type}</span>
                <span className="text-gray-300">•</span>
                <span className="text-xs font-medium text-vigyan-muted">{resource.domain}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-vigyan-heading mb-6 leading-tight">
                {resource.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-sm text-vigyan-muted">
                <div className="flex items-center gap-2">
                  <User size={16} /> {resource.creator}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} /> {resource.date}
                </div>
                {resource.location && (
                  <div className="flex items-center gap-2">
                    <MapPin size={16} /> {resource.location}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <VigyanButton variant="outline" size="sm" className="gap-2">
                <Share2 size={16} /> Share
              </VigyanButton>
              <VigyanButton variant="primary" size="sm" className="gap-2">
                <Download size={16} /> Download
              </VigyanButton>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom px-4 md:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-xl font-bold text-vigyan-heading mb-4">Abstract</h2>
            <p className="text-lg text-vigyan-body leading-relaxed mb-6">
              {resource.summary}
            </p>
            <p className="text-vigyan-muted leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>

          <section className="bg-white p-8 border border-vigyan-border rounded-sm">
            <div className="flex items-center gap-2 mb-6 text-vigyan-heading font-bold">
              <Quote size={20} className="text-vigyan-saffron" />
              <h3>Citation</h3>
            </div>
            <div className="bg-gray-50 p-4 border-l-4 border-vigyan-navy text-sm font-mono text-vigyan-body leading-relaxed mb-6">
              {resource.citation || "Official Institutional Citation for this resource is available upon request."}
            </div>
            <VigyanButton variant="ghost" size="sm" className="text-xs font-bold text-vigyan-navy hover:underline">
              Copy Citation
            </VigyanButton>
          </section>

          <section>
            <h2 className="text-xl font-bold text-vigyan-heading mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MOCK_RESOURCES.filter(r => r.id !== resource.id).slice(0, 2).map(rel => (
                <VigyanCard key={rel.id} resource={rel} />
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <div className="bg-white border border-vigyan-border rounded-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-vigyan-border">
              <h3 className="font-bold text-sm text-vigyan-heading uppercase tracking-wider">Resource Metadata</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between py-2 border-b border-gray-50">
                <span className="text-xs text-gray-500 uppercase font-medium">ID</span>
                <span className="text-xs font-mono text-vigyan-body">{resource.id}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-50">
                <span className="text-xs text-gray-500 uppercase font-medium">Version</span>
                <span className="text-xs font-medium text-vigyan-body">{resource.version || '1.0'}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-50">
                <span className="text-xs text-gray-500 uppercase font-medium">Domain</span>
                <span className="text-xs font-medium text-vigyan-body">{resource.domain}</span>
              </div>
              {resource.doi && (
                <div className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-xs text-gray-500 uppercase font-medium">DOI</span>
                  <span className="text-xs font-mono text-vigyan-blue truncate ml-4">{resource.doi}</span>
                </div>
              )}
              <div className="flex justify-between py-2">
                <span className="text-xs text-gray-500 uppercase font-medium">License</span>
                <span className="text-xs font-medium text-vigyan-body">CC BY 4.0</span>
              </div>
            </div>
          </div>

          <div className="bg-vigyan-navy text-white p-6 rounded-sm">
            <h4 className="font-bold mb-2 text-sm">Need more information?</h4>
            <p className="text-xs text-gray-300 mb-4 leading-relaxed">
              Contact the curator for this resource to request full dataset access or further documentation.
            </p>
            <VigyanButton variant="secondary" size="sm" className="w-full text-xs font-bold py-2">
              Contact Curator
            </VigyanButton>
          </div>
        </aside>
        </div>
      </div>
  );
}
