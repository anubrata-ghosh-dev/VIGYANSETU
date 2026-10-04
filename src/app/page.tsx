import Link from 'next/link';
import { Search, ArrowRight, FlaskConical, Database, Map, BookOpen } from 'lucide-react';
import { MOCK_RESOURCES, MOCK_STORIES } from '@/lib/mock-data';
import VigyanButton from '@/components/ui/VigyanButton';
import VigyanCard from '@/components/ui/VigyanCard';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-vigyan-navy text-white py-24 md:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vigyan-deepNavy opacity-50 skew-x-12 translate-x-20" />
        
        <div className="container-custom px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Discover Scientific <span className="text-vigyan-saffron">Knowledge</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Access the unified archive of institutional research, datasets, and expeditions. 
              Bridging the gap between research data and public knowledge.
            </p>
            
            {/* Global Search Bar */}
            <form action="/search" method="get" className="relative max-w-2xl group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-vigyan-navy transition-colors">
                <Search size={24} />
              </div>
              <input
                name="q"
                type="text" 
                placeholder="Search reports, datasets, expeditions, publications..." 
                className="w-full pl-12 pr-32 py-4 md:py-6 bg-white text-vigyan-body rounded-sm text-lg focus:outline-none focus:ring-4 focus:ring-vigyan-saffron/30 transition-all shadow-xl"
              />
              <div className="absolute right-2 top-2 bottom-2">
                <VigyanButton variant="primary" size="md" className="h-full bg-vigyan-navy text-white font-bold">
                  Search
                </VigyanButton>
              </div>
            </form>
            
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-400">
              <span>Popular:</span>
              <Link href="/search?q=Bay of Bengal" className="hover:text-white underline underline-offset-4">Bay of Bengal</Link>
              <Link href="/search?q=Coral Reefs" className="hover:text-white underline underline-offset-4">Coral Reefs</Link>
              <Link href="/search?q=Deep Sea" className="hover:text-white underline underline-offset-4">Deep Sea Survey</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Categories */}
      <section className="py-12 bg-white border-b border-vigyan-border">
        <div className="container-custom px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <BookOpen />, label: 'Publications', color: 'text-vigyan-blue', link: '/search?type=publication' },
              { icon: <Database />, label: 'Datasets', color: 'text-vigyan-green', link: '/search?type=dataset' },
              { icon: <Map />, label: 'Expeditions', color: 'text-vigyan-saffron', link: '/search?type=expedition' },
              { icon: <FlaskConical />, label: 'Research', color: 'text-vigyan-navy', link: '/search' },
            ].map((item, i) => (
              <Link 
                key={i} 
                href={item.link} 
                className="flex items-center justify-center gap-3 p-4 border border-gray-100 rounded-sm hover:border-vigyan-navy hover:bg-gray-50 transition-all group"
              >
                <span className={item.color}>{item.icon}</span>
                <span className="font-medium text-vigyan-body group-hover:text-vigyan-navy">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="section-padding bg-vigyan-background">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-vigyan-heading mb-2">Featured Research</h2>
              <p className="text-vigyan-muted">Latest contributions from our scientific community.</p>
            </div>
            <Link href="/search" className="hidden md:flex items-center gap-2 text-vigyan-navy font-bold hover:underline group">
              View all <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_RESOURCES.map(resource => (
              <VigyanCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Science Stories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-vigyan-heading mb-2">Science Stories</h2>
              <p className="text-vigyan-muted">Simplified explanations and narratives for the public.</p>
            </div>
            <Link href="/about" className="hidden md:flex items-center gap-2 text-vigyan-navy font-bold hover:underline group">
              Explore Learning Zone <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_STORIES.map(story => (
              <div key={story.id} className="group relative overflow-hidden rounded-sm border border-vigyan-border hover:shadow-lg transition-all">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-vigyan-saffron uppercase tracking-widest mb-2 block">{story.category}</span>
                  <h3 className="text-2xl font-bold text-vigyan-heading mb-3 group-hover:text-vigyan-blue transition-colors">{story.title}</h3>
                  <p className="text-vigyan-muted mb-6 leading-relaxed">{story.summary}</p>
                  <VigyanButton variant="outline" size="sm">Read Story</VigyanButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
