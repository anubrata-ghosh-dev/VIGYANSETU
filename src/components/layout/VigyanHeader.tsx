'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, Menu, X, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { label: 'Discover', href: '/search' },
  { label: 'Explore', href: '/search?view=map' },
  { label: 'Learn', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
];

function TricolourBar() {
  return (
    <div className="w-full" aria-hidden="true">
      <div style={{ height: 4, background: '#FF9933' }} />
      <div style={{ height: 4, background: '#FFFFFF' }} />
      <div style={{ height: 4, background: '#138808' }} />
    </div>
  );
}

function AshokChakra({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Ashoka Chakra">
      <circle cx="50" cy="50" r="45" fill="none" stroke="#000080" strokeWidth="5" />
      <circle cx="50" cy="50" r="5" fill="#000080" />
      {Array.from({ length: 24 }, (_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        const x1 = 50 + 5 * Math.cos(angle);
        const y1 = 50 + 5 * Math.sin(angle);
        const x2 = 50 + 42 * Math.cos(angle);
        const y2 = 50 + 42 * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#000080" strokeWidth="2" />;
      })}
    </svg>
  );
}

export default function VigyanHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full" style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
      {/* Indian tricolour accent bar */}
      <TricolourBar />

      {/* Institutional top bar */}
      <div style={{ background: '#12264A' }} className="px-4 md:px-8 py-1.5">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AshokChakra size={18} />
            <span className="text-white text-[10px] font-semibold tracking-wide">
              Ministry of Earth Sciences, Government of India
            </span>
            <span className="hidden md:inline text-white/60 text-[10px]">| NCPOR</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] text-white/70">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
            <Link href="#" className="hover:text-white transition-colors">हिन्दी</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="px-4 md:px-8" style={{ background: 'var(--surface)' }}>
        <div className="max-w-[1240px] mx-auto h-[68px] flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-sm"
              style={{ background: '#12264A' }}
            >
              <svg viewBox="0 0 36 36" width="36" height="36" fill="none">
                {/* Bridge arch */}
                <path d="M4 24 Q18 6 32 24" stroke="#0E7C86" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                {/* Hangers */}
                <line x1="12" y1="17" x2="12" y2="24" stroke="#0E7C86" strokeWidth="1.5" />
                <line x1="18" y1="12" x2="18" y2="24" stroke="#F2A30F" strokeWidth="1.5" />
                <line x1="24" y1="17" x2="24" y2="24" stroke="#0E7C86" strokeWidth="1.5" />
                {/* Deck: dashes then solid */}
                <line x1="4" y1="24" x2="10" y2="24" stroke="#0E7C86" strokeWidth="2" strokeDasharray="2 2" />
                <line x1="10" y1="24" x2="32" y2="24" stroke="#0E7C86" strokeWidth="2" />
                {/* Apex amber dot */}
                <circle cx="18" cy="11" r="2.5" fill="#F2A30F" />
                {/* Side nodes */}
                <circle cx="12" cy="17" r="2" fill="#0E7C86" />
                <circle cx="24" cy="17" r="2" fill="#0E7C86" />
              </svg>
            </div>
            <div>
              <span
                className="block text-[18px] font-bold leading-none tracking-tight"
                style={{ color: 'var(--text)' }}
              >
                Vigyan<span style={{ color: '#0E7C86' }}>Setu</span>
              </span>
              <span className="hidden sm:block text-[9px] tracking-[0.18em] uppercase" style={{ color: 'var(--text-muted)' }}>
                Research · Archive · Outreach
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-hawa"
                style={{ color: 'var(--text-muted)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/assistant"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: '#F2A30F', color: '#12264A' }}
            >
              <Sparkles size={15} />
              Ask AI
            </Link>
            <Link
              href="/search"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium border transition-colors"
              style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
            >
              <Search size={15} />
              Search
            </Link>
            <Link
              href="/admin"
              className="px-3 py-2 rounded-lg text-sm font-medium border transition-colors"
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
            >
              Admin
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="p-2 rounded-md"
              style={{ color: 'var(--text)' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden border-t pb-4 pt-2"
            style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
          >
            <div className="flex flex-col gap-1 px-2">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 rounded-md text-sm font-medium"
                  style={{ color: 'var(--text)' }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/assistant"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-semibold mt-2"
                style={{ background: '#F2A30F', color: '#12264A' }}
              >
                <Sparkles size={15} /> Ask AI
              </Link>
              <Link
                href="/admin"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm font-medium border mt-1"
                style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
              >
                Admin portal
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
