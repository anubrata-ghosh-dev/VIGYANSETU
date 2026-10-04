"use client";
import React, { useEffect, useState } from 'react';
import { MOCK_RESOURCES } from '@/lib/mock-data';
import VigyanCard from '@/components/ui/VigyanCard';
import { Filter, SlidersHorizontal, Map as MapIcon } from 'lucide-react';

export default function SearchPage() {
  const [query, setQuery] = useState(() => typeof window === 'undefined' ? '' : new URLSearchParams(window.location.search).get('q') ?? '');
  const [type, setType] = useState(() => typeof window === 'undefined' ? '' : new URLSearchParams(window.location.search).get('type') ?? '');
  const [domain, setDomain] = useState('');
  const [sort, setSort] = useState('relevance');
  const [showMap, setShowMap] = useState(false);
  const [resources, setResources] = useState(MOCK_RESOURCES);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch(`/api/v1/search?q=${encodeURIComponent(query)}&type=${encodeURIComponent(type)}&domain=${encodeURIComponent(domain)}&limit=20`, { signal: controller.signal })
      .then(response => response.json())
      .then(data => setResources(data.items ?? []))
      .catch(error => { if (error.name !== 'AbortError') setResources([]); })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [query, type, domain]);

  const sortedResources = [...resources].sort((a, b) => {
    if (sort === 'newest') return b.date.localeCompare(a.date);
    if (sort === 'oldest') return a.date.localeCompare(b.date);
    return 0;
  });

  return (
    <div className="flex flex-col w-full min-h-screen" style={{ background: 'var(--bg)' }}>
      <div className="border-b py-8" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
        <div className="container-custom px-4 md:px-8">
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>Search Results</h1>
          <div className="relative max-w-3xl">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search the institutional archive"
              className="w-full pl-4 pr-12 py-3 border rounded-md focus:outline-none transition-all"
              style={{ borderColor: 'var(--border)', background: 'var(--surface)', color: 'var(--text)' }}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }}>
              <Filter size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom px-4 md:px-8 py-12 flex gap-8">
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="flex items-center gap-2 mb-6 font-bold" style={{ color: 'var(--text)' }}>
            <SlidersHorizontal size={18} />
            <span>Filters</span>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Resource Type</h4>
              <div className="space-y-2">
                {['', 'publication', 'dataset', 'expedition', 'report', 'media'].map(value => (
                  <label key={value || 'all'} className="flex items-center gap-3 text-sm cursor-pointer" style={{ color: 'var(--text)' }}>
                    <input type="radio" name="resource-type" checked={type === value} onChange={() => setType(value)} />
                    {value ? value[0].toUpperCase() + value.slice(1) : 'All resources'}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Research Domain</h4>
              <div className="space-y-2">
                {['', 'Polar Science', 'Oceanography', 'Geoscience', 'Cryosphere', 'Environmental Science'].map(value => (
                  <label key={value || 'all'} className="flex items-center gap-3 text-sm cursor-pointer" style={{ color: 'var(--text)' }}>
                    <input type="radio" name="domain" checked={domain === value} onChange={() => setDomain(value)} />
                    {value || 'All domains'}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="flex-grow">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              {loading ? 'Searching the archive…' : <><span className="font-bold" style={{ color: 'var(--text)' }}>{resources.length}</span> results</>}
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span style={{ color: 'var(--text-muted)' }}>Sort by:</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="bg-transparent font-medium focus:outline-none cursor-pointer"
                style={{ color: 'var(--text)' }}
              >
                <option>Relevance</option>
                <option>Newest First</option>
                <option>Oldest First</option>
              </select>
              <button
                type="button"
                onClick={() => setShowMap(!showMap)}
                className="ml-4 flex items-center gap-1 text-sm font-medium"
                style={{ color: showMap ? '#0E7C86' : 'var(--text-muted)' }}
              >
                <MapIcon size={16} /> Map
              </button>
            </div>
          </div>

          {showMap && (
            <div className="mb-6 border p-6 rounded-md" style={{ borderColor: 'var(--border)', background: '#12264A', color: 'white' }}>
              <div className="flex items-center gap-3 mb-2">
                <MapIcon size={20} style={{ color: '#F2A30F' }} />
                <h2 className="font-bold">Resource map preview</h2>
              </div>
              <p className="text-sm" style={{ color: 'rgba(234,242,246,0.7)' }}>Interactive station and expedition mapping is ready for the connected resources in this view.</p>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                {resources.filter(resource => resource.location).map(resource => (
                  <span key={resource.id} className="border border-white/20 px-2 py-2 rounded">{resource.location}</span>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedResources.map(resource => (
              <VigyanCard key={resource.id} resource={resource} />
            ))}
            {!loading && resources.length === 0 && (
              <div
                className="col-span-full border border-dashed p-10 text-center rounded-md"
                style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
              >
                <h2 className="font-bold mb-2" style={{ color: 'var(--text)' }}>No institutional sources found</h2>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Try a broader topic, location, researcher, or resource type.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
