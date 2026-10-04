import Link from 'next/link';
import { Search, Sparkles, ArrowRight, Database, FileText, Compass, BookOpen, ChevronRight } from 'lucide-react';

// SVG India/Bay of Bengal map with expedition route
function ExpeditionMap() {
  return (
    <div
      className="relative w-full h-full rounded-xl overflow-hidden"
      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
    >
      <svg
        viewBox="0 0 400 420"
        className="w-full h-full"
        aria-label="Bay of Bengal expedition route map — 5 stations from Chennai to Visakhapatnam"
        role="img"
      >
        {/* Ocean background */}
        <rect width="400" height="420" fill="#D3EDEF" />

        {/* India landmass (simplified east coast) */}
        <path
          d="M 0 0 L 180 0 L 185 40 L 195 80 L 200 120 L 195 155 L 185 180 L 170 210 L 160 240 L 155 260 L 165 280 L 175 290 L 170 310 L 160 330 L 145 345 L 130 360 L 110 375 L 85 390 L 60 400 L 0 420 Z"
          fill="#EAF2F6"
          stroke="#B7C6D1"
          strokeWidth="1"
        />

        {/* Sri Lanka */}
        <ellipse cx="175" cy="400" rx="18" ry="12" fill="#EAF2F6" stroke="#B7C6D1" strokeWidth="0.8" />

        {/* Bay of Bengal label */}
        <text x="280" y="180" fill="#3A4C68" fontSize="14" fontFamily="system-ui" textAnchor="middle" opacity="0.6">
          Bay of Bengal
        </text>

        {/* Grid lines (lat/long feel) */}
        {[80, 160, 240, 320].map(y => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#0E7C86" strokeWidth="0.4" strokeDasharray="4 8" opacity="0.3" />
        ))}
        {[200, 280, 360].map(x => (
          <line key={x} x1={x} y1="0" x2={x} y2="420" stroke="#0E7C86" strokeWidth="0.4" strokeDasharray="4 8" opacity="0.3" />
        ))}

        {/* Expedition route: dashed section (upcoming) */}
        <path
          d="M 220 340 C 250 310 270 260 280 200"
          stroke="#F2A30F"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 4"
          opacity="0.5"
        />
        {/* Solid section (completed) */}
        <path
          d="M 185 340 C 200 310 215 280 220 250 C 225 230 235 215 240 200 C 248 185 255 170 260 155 C 265 135 270 115 272 95"
          stroke="#F2A30F"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Station dots */}
        {[
          { x: 185, y: 340, label: 'Chennai' },
          { x: 218, y: 285, label: 'S1' },
          { x: 235, y: 245, label: 'S2' },
          { x: 248, y: 205, label: 'S3' },
          { x: 260, y: 165, label: 'S4' },
          { x: 272, y: 95, label: 'S5 / Vizag' },
        ].map((station, i) => (
          <g key={i}>
            <circle
              cx={station.x}
              cy={station.y}
              r={i === 0 || i === 5 ? 7 : 5}
              fill={i === 3 ? '#F2A30F' : '#0E7C86'}
              stroke="white"
              strokeWidth="2"
            />
            <text
              x={station.x + (i === 0 ? -8 : 10)}
              y={station.y + 4}
              fill="#12264A"
              fontSize="9"
              fontFamily="system-ui"
              fontWeight="600"
              textAnchor={i === 0 ? 'end' : 'start'}
            >
              {station.label}
            </text>
          </g>
        ))}

        {/* Legend */}
        <g transform="translate(12, 380)">
          <rect width="130" height="34" rx="4" fill="white" fillOpacity="0.9" />
          <circle cx="16" cy="10" r="4" fill="#0E7C86" />
          <text x="24" y="14" fill="#12264A" fontSize="8" fontFamily="system-ui">Station</text>
          <circle cx="16" cy="24" r="4" fill="#F2A30F" />
          <text x="24" y="28" fill="#12264A" fontSize="8" fontFamily="system-ui">Current position</text>
        </g>
      </svg>

      {/* Overlay info badge */}
      <div
        className="absolute top-3 right-3 px-3 py-1.5 rounded-lg text-xs font-semibold"
        style={{ background: '#12264A', color: 'white' }}
      >
        Bay of Bengal 2025
      </div>
    </div>
  );
}

// Span divider: dashes → solid (the bridge motif)
function SpanDivider() {
  return (
    <div className="flex w-full" aria-hidden="true">
      <div className="flex-1 border-t-2 border-dashed" style={{ borderColor: 'var(--border)' }} />
      <div className="flex-[2] border-t-2" style={{ borderColor: '#0E7C86' }} />
    </div>
  );
}

const STATS = [
  { num: '12,482', label: 'Resources' },
  { num: '1,240', label: 'Datasets' },
  { num: '186', label: 'Expeditions' },
  { num: '412', label: 'Researchers' },
];

const PUBLICATIONS = [
  { title: 'Coastal impact of monsoonal variations on Bay of Bengal plankton', authors: 'A. Rao, S. Iyer', date: '12 Jun 2025', type: 'Publication' },
  { title: 'Salinity gradients and marine biodiversity across the eastern coast', authors: 'R. Mehta, P. Kumar', date: '3 Apr 2025', type: 'Publication' },
  { title: 'Deep-sea sediment core analysis from station S3', authors: 'L. Singh, K. Das', date: '18 Feb 2025', type: 'Report' },
];

const DATASETS = [
  { id: 'DS-2025-0007', title: 'Plankton counts, Bay of Bengal, March 2025', format: 'CSV', size: '14 MB', licence: 'CC BY 4.0' },
  { id: 'DS-2025-0003', title: 'CTD casts — salinity and temperature profiles', format: 'NetCDF', size: '228 MB', licence: 'CC BY 4.0' },
];

const STORIES = [
  { title: 'Listening to the ocean breathe', summary: 'In 2025, scientists sailed into the Bay of Bengal to study how ocean temperatures are shifting.', category: 'Expedition story', big: true },
  { title: 'What is plankton and why does it matter?', summary: 'Tiny living things that drive the entire ocean food web.', category: 'Student explainer' },
  { title: 'How scientists collect deep-sea water', summary: 'From CTD casts to Niskin bottles — the tools of oceanography.', category: 'Science explainer' },
  { title: 'India\'s research vessels', summary: 'Meet the ships that carry India\'s scientists to the ends of the ocean.', category: 'Institutional' },
];

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* ── HERO ── */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: '#0E7C86' }}>
              Unified Scientific Archive
            </p>
            <h1 className="text-[36px] md:text-[50px] leading-[1.1] font-bold" style={{ color: 'var(--text)' }}>
              From Research Data<br />to{' '}
              <span style={{ color: '#0E7C86' }}>Public Knowledge</span>
            </h1>
            <p className="text-base" style={{ color: 'var(--text-muted)' }}>
              Explore India&apos;s scientific expeditions, open datasets, publications and outreach — all in one place.
            </p>

            {/* Search box */}
            <div
              className="flex rounded-lg overflow-hidden border shadow-sm"
              style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
            >
              <Search size={18} className="self-center ml-4 shrink-0" style={{ color: 'var(--text-muted)' }} />
              <input
                type="search"
                placeholder='Search or ask: "marine biodiversity Bay of Bengal"'
                className="flex-grow px-3 py-3 text-sm bg-transparent outline-none"
                style={{ color: 'var(--text)' }}
              />
              <Link
                href="/assistant"
                className="flex items-center gap-1.5 px-4 py-2 m-1 rounded-md text-sm font-semibold shrink-0"
                style={{ background: '#F2A30F', color: '#12264A' }}
              >
                <Sparkles size={14} /> Ask AI
              </Link>
            </div>

            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Try:{' '}
              <Link href="/search?q=coral+ecosystems" className="hover:underline" style={{ color: 'var(--link)' }}>Coral ecosystems</Link>
              {' · '}
              <Link href="/search?q=bay+of+bengal" className="hover:underline" style={{ color: 'var(--link)' }}>Bay of Bengal datasets</Link>
              {' · '}
              <Link href="/search?q=2025" className="hover:underline" style={{ color: 'var(--link)' }}>Research in 2025</Link>
            </p>
          </div>

          {/* Map */}
          <div className="h-[340px] md:h-[420px]">
            <ExpeditionMap />
          </div>
        </div>
      </section>

      {/* ── SPAN DIVIDER (bridge motif) ── */}
      <div className="max-w-[1240px] mx-auto px-4 md:px-6 w-full">
        <SpanDivider />
      </div>

      {/* ── FEATURED EXPEDITION ── */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-10">
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6 md:p-8 rounded-xl"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: '#0E7C86' }}>Featured expedition</span>
            <h2 className="text-2xl md:text-[26px] font-bold" style={{ color: 'var(--text)' }}>
              Bay of Bengal Marine Expedition 2025
            </h2>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              23 days · 5 stations · 10 researchers · 3 datasets
            </p>
          </div>
          <Link
            href="/search?type=expedition"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border text-sm font-semibold transition-colors shrink-0"
            style={{ borderColor: '#0E7C86', color: '#0E7C86' }}
          >
            Explore the expedition <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── SPAN DIVIDER 2 ── */}
      <div className="max-w-[1240px] mx-auto px-4 md:px-6 w-full">
        <SpanDivider />
      </div>

      {/* ── PUBLICATIONS + DATASETS ── */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Publications */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>Latest publications</h3>
            <Link href="/search?type=publication" className="text-xs font-semibold flex items-center gap-1" style={{ color: '#0E7C86' }}>
              All <ChevronRight size={13} />
            </Link>
          </div>
          <div className="space-y-0 divide-y" style={{ borderColor: 'var(--border)' }}>
            {PUBLICATIONS.map((pub, i) => (
              <article key={i} className="py-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-md shrink-0" style={{ background: '#EAF2F6' }}>
                    <FileText size={14} style={{ color: '#12264A' }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold leading-snug" style={{ color: 'var(--text)' }}>{pub.title}</h4>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{pub.authors} · {pub.date}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Datasets */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>Featured datasets</h3>
            <Link href="/search?type=dataset" className="text-xs font-semibold flex items-center gap-1" style={{ color: '#0E7C86' }}>
              All <ChevronRight size={13} />
            </Link>
          </div>
          <div className="space-y-4">
            {DATASETS.map((ds, i) => (
              <div
                key={i}
                className="p-4 rounded-lg"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md shrink-0" style={{ background: '#D3EDEF' }}>
                    <Database size={14} style={{ color: '#0E7C86' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{ds.id}</p>
                    <h4 className="text-sm font-semibold leading-snug mt-0.5" style={{ color: 'var(--text)' }}>{ds.title}</h4>
                    <div className="flex gap-2 mt-2">
                      <span className="text-[10px] px-2 py-0.5 rounded-sm font-semibold" style={{ background: '#D3EDEF', color: '#0B6670' }}>{ds.format}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-sm" style={{ background: 'var(--surface-2, #F6F9FB)', color: 'var(--text-muted)' }}>{ds.size}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-sm" style={{ background: 'var(--surface-2, #F6F9FB)', color: 'var(--text-muted)' }}>{ds.licence}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCIENCE STORIES ── */}
      <section className="w-full" style={{ background: 'var(--surface)' }}>
        <div className="max-w-[1240px] mx-auto px-4 md:px-6 py-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>Science stories</h3>
            <Link href="/search" className="text-xs font-semibold flex items-center gap-1" style={{ color: '#0E7C86' }}>
              All stories <ChevronRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {STORIES.map((story, i) => (
              <div
                key={i}
                className={`rounded-xl p-5 flex flex-col gap-3 ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: '#0E7C86' }}>
                  {story.category}
                </span>
                <h4 className={`font-bold leading-snug ${i === 0 ? 'text-xl' : 'text-sm'}`} style={{ color: 'var(--text)' }}>
                  {story.title}
                </h4>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{story.summary}</p>
                <Link href="/search" className="text-xs font-semibold mt-auto flex items-center gap-1" style={{ color: '#0E7C86' }}>
                  Read <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="w-full py-16" style={{ background: '#12264A' }}>
        <div className="max-w-[1240px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-4xl md:text-5xl font-bold" style={{ color: '#F2A30F' }}>{stat.num}</div>
                <div className="text-sm" style={{ color: 'rgba(234,242,246,0.75)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDENT ZONE + EVENTS ── */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="rounded-xl p-6 space-y-4"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg" style={{ background: '#D9EEE1' }}>
              <BookOpen size={18} style={{ color: '#2E7D4F' }} />
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>Student Zone</h3>
          </div>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Science stories, glossary, quizzes and classroom resources based on real institutional research.
          </p>
          <Link href="/about" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: '#2E7D4F' }}>
            Explore Student Zone <ArrowRight size={14} />
          </Link>
        </div>

        <div
          className="rounded-xl p-6 space-y-4"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg" style={{ background: '#FDEFCB' }}>
              <Compass size={18} style={{ color: '#8A5A00' }} />
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>Upcoming activities</h3>
          </div>
          <div className="space-y-3">
            {[
              { title: 'Science outreach workshop', date: '12 Oct 2026', loc: 'NCPOR, Goa' },
              { title: 'Open data submission deadline', date: '31 Oct 2026', loc: 'Online' },
            ].map((event, i) => (
              <div key={i} className="flex items-start gap-3 pb-3 border-b last:border-0" style={{ borderColor: 'var(--border)' }}>
                <div className="text-center px-2 py-1 rounded-md shrink-0" style={{ background: '#EAF2F6' }}>
                  <div className="text-xs font-bold" style={{ color: '#12264A' }}>{event.date.split(' ')[0]}</div>
                  <div className="text-[9px] uppercase" style={{ color: 'var(--text-muted)' }}>{event.date.split(' ')[1]}</div>
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{event.title}</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{event.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
