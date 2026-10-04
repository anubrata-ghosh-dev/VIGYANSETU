import { MOCK_RESOURCES, Resource } from '@/lib/mock-data';

export type ResourceQuery = {
  q?: string;
  type?: string;
  domain?: string;
  page?: number;
  limit?: number;
};

export type IngestionRecord = {
  id: string;
  title: string;
  type: Resource['type'];
  creator: string;
  status: 'pending_review' | 'approved' | 'rejected';
  submittedAt: string;
  sourceName: string;
};

const resources: Resource[] = [...MOCK_RESOURCES];
const ingestions: IngestionRecord[] = [];

function matches(resource: Resource, query: ResourceQuery) {
  const haystack = [
    resource.title,
    resource.summary,
    resource.creator,
    resource.domain,
    resource.location,
    ...resource.tags,
  ].filter(Boolean).join(' ').toLowerCase();

  const terms = query.q?.toLowerCase().split(/\s+/).filter(Boolean) ?? [];
  return (!terms.length || terms.some((term) => haystack.includes(term))) &&
    (!query.type || resource.type === query.type) &&
    (!query.domain || resource.domain.toLowerCase() === query.domain.toLowerCase());
}

export function listResources(query: ResourceQuery = {}) {
  const page = Math.max(1, query.page ?? 1);
  const limit = Math.min(50, Math.max(1, query.limit ?? 12));
  const filtered = resources.filter((resource) => matches(resource, query));
  const start = (page - 1) * limit;

  return {
    items: filtered.slice(start, start + limit),
    total: filtered.length,
    page,
    limit,
    facets: {
      types: Array.from(new Set(resources.map((resource) => resource.type))),
      domains: Array.from(new Set(resources.map((resource) => resource.domain))),
    },
  };
}

export function getResource(id: string) {
  return resources.find((resource) => resource.id === id);
}

export function createIngestion(input: Omit<IngestionRecord, 'id' | 'status' | 'submittedAt'>) {
  const record: IngestionRecord = {
    ...input,
    id: `ing-${Date.now()}`,
    status: 'pending_review',
    submittedAt: new Date().toISOString(),
  };
  ingestions.unshift(record);
  return record;
}

export function listIngestions() {
  return ingestions;
}

export function getAnalytics() {
  const byType = resources.reduce<Record<string, number>>((counts, resource) => {
    counts[resource.type] = (counts[resource.type] ?? 0) + 1;
    return counts;
  }, {});

  return {
    repository: {
      totalResources: resources.length,
      datasets: byType.dataset ?? 0,
      publications: byType.publication ?? 0,
      expeditions: byType.expedition ?? 0,
      reports: byType.report ?? 0,
      media: byType.media ?? 0,
      metadataCompleteness: 92,
    },
    discovery: {
      searchesThisMonth: 1248,
      downloadsThisMonth: 386,
      popularTopics: ['Deep ocean', 'Antarctica', 'Glacier lakes'],
    },
    outreach: {
      draftsGenerated: 24,
      approvedStories: 11,
      languages: ['English', 'Hindi'],
    },
  };
}
