import Link from 'next/link';
import { ArrowUpRight, Menu, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function VigyanHeader() {
  return (
    <header className="w-full bg-white/90 backdrop-blur-xl border-b border-vigyan-border sticky top-0 z-50 dark:bg-vigyan-deepNavy/90">
      {/* Institutional Top Bar */}
      <div className="bg-vigyan-deepNavy text-white py-2 px-4 md:px-8 text-[10px] flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="font-semibold tracking-wide uppercase">Ministry of Earth Sciences, Government of India</span>
          <span className="hidden md:inline opacity-80">| National Centre for Polar and Ocean Research (NCPOR)</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/about" className="hover:underline opacity-80">About</Link>
          <Link href="#" className="hover:underline opacity-80">Contact</Link>
          <Link href="#" className="hover:underline opacity-80">हिंदी</Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom px-4 md:px-8 h-[76px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-vigyan-saffron rounded-xl rotate-3 flex items-center justify-center text-white font-black shadow-lg shadow-vigyan-saffron/20 group-hover:rotate-0 transition-transform">V</div>
          <div><span className="block text-xl font-black text-vigyan-navy tracking-tight dark:text-white">VIGYAN<span className="text-vigyan-saffron">SETU</span></span><span className="hidden sm:block text-[9px] uppercase tracking-[0.2em] text-vigyan-muted">Research • Connect • Inspire</span></div>
        </Link>

        <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-vigyan-muted">
          <Link href="/search" className="hover:text-vigyan-navy transition-colors">Discover</Link>
          <Link href="/search?type=expedition" className="hover:text-vigyan-navy transition-colors">Expeditions</Link>
          <Link href="/search?type=dataset" className="hover:text-vigyan-navy transition-colors">Datasets</Link>
          <Link href="/gallery" className="hover:text-vigyan-navy transition-colors">Gallery</Link>
          <Link href="/about" className="hover:text-vigyan-navy transition-colors">Learn</Link>
          <Link href="/assistant" className="bg-vigyan-navy text-white px-4 py-2.5 rounded-full hover:bg-vigyan-deepNavy transition-colors flex items-center gap-2 shadow-lg shadow-vigyan-navy/15">
            <Search size={16} />
            Research Assistant
          </Link>
          <Link href="/admin" className="text-vigyan-navy border border-vigyan-border px-4 py-2.5 rounded-full hover:bg-gray-50 transition-colors dark:text-white">
            Admin <ArrowUpRight size={14} />
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <button className="p-2 text-vigyan-navy"><Menu size={24} /></button>
        </div>
      </nav>
    </header>
  );
}
