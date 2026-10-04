import Link from 'next/link';
import { Search, Menu } from 'lucide-react';

export default function VigyanHeader() {
  return (
    <header className="w-full bg-white border-b border-vigyan-border sticky top-0 z-50">
      {/* Institutional Top Bar */}
      <div className="bg-vigyan-navy text-white py-2 px-4 md:px-8 text-xs flex justify-between items-center">
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
      <nav className="container-custom px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-vigyan-navy rounded-sm flex items-center justify-center text-white font-bold">N</div>
          <span className="text-xl font-bold text-vigyan-navy tracking-tight">VIGYAN<span className="text-vigyan-saffron">SETU</span></span>
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-vigyan-muted">
          <Link href="/search" className="hover:text-vigyan-navy transition-colors">Discover</Link>
          <Link href="/search?type=expedition" className="hover:text-vigyan-navy transition-colors">Expeditions</Link>
          <Link href="/search?type=dataset" className="hover:text-vigyan-navy transition-colors">Datasets</Link>
          <Link href="/gallery" className="hover:text-vigyan-navy transition-colors">Gallery</Link>
          <Link href="/about" className="hover:text-vigyan-navy transition-colors">Learn</Link>
          <Link href="/assistant" className="bg-vigyan-navy text-white px-4 py-2 rounded-sm hover:bg-vigyan-deepNavy transition-colors flex items-center gap-2">
            <Search size={16} />
            Research Assistant
          </Link>
          <Link href="/admin" className="text-vigyan-navy border border-vigyan-border px-4 py-2 rounded-sm hover:bg-gray-50 transition-colors">
            Admin demo
          </Link>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <button className="p-2 text-vigyan-navy"><Menu size={24} /></button>
        </div>
      </nav>
    </header>
  );
}
