import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full max-w-[1240px] mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-[36px] md:text-[52px] leading-[42px] md:leading-[58px] font-bold text-neel">
              From Research Data <br/>to Public Knowledge
            </h1>
            
            <div className="flex flex-col space-y-3">
              <div className="flex bg-white rounded-lg border border-border shadow-sm p-1">
                <input 
                  type="text" 
                  placeholder='Search or ask: "marine biodiversity datasets Bay of..."'
                  className="flex-grow px-4 py-2 outline-none text-neel placeholder:text-neel/50 bg-transparent"
                />
                <button className="bg-sagar hover:bg-sagar/90 text-white px-6 py-2 rounded-md font-medium flex items-center gap-2 transition-colors">
                  <Search size={18} />
                  Search
                </button>
              </div>
              <p className="text-sm text-neel/70">
                Try: <button className="hover:text-sagar hover:underline">Coral ecosystems</button> · <button className="hover:text-sagar hover:underline">Bay of Bengal datasets</button> · <button className="hover:text-sagar hover:underline">Research in 2024</button>
              </p>
            </div>
          </div>
          
          <div className="relative h-[300px] md:h-[400px] bg-hawa rounded-xl overflow-hidden border border-border flex items-center justify-center">
            {/* Map Placeholder */}
            <div className="text-neel/50 font-medium">Featured Expedition Map Area</div>
          </div>
        </div>
      </section>

      {/* Span divider */}
      <div className="w-full flex justify-center py-8">
        <div className="w-full max-w-[1240px] h-[2px] flex">
          <div className="w-1/3 border-t-2 border-dashed border-border" />
          <div className="w-2/3 border-t-2 border-solid border-sagar" />
        </div>
      </div>

      {/* Featured Expedition */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 md:p-8 rounded-xl border border-border shadow-sm">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-bold text-sagar uppercase tracking-wider">Featured Expedition</span>
            <h2 className="text-2xl md:text-[28px] font-semibold text-neel">Bay of Bengal Marine Expedition 2025</h2>
            <p className="text-neel/80">23 days · 5 stations · 10 researchers · 3 datasets</p>
          </div>
          <Link href="/expeditions/bay-of-bengal" className="mt-4 md:mt-0 bg-white border border-sagar text-sagar hover:bg-hawa px-6 py-2 rounded-md font-medium transition-colors">
            Explore the expedition
          </Link>
        </div>
      </section>

      {/* Two columns */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-6">
          <h3 className="text-[22px] font-semibold text-neel border-b border-border pb-2">Latest research (publications)</h3>
          <div className="flex flex-col space-y-4">
            {[1,2,3].map(i => (
              <div key={i} className="flex flex-col space-y-1 pb-4 border-b border-border/50">
                <h4 className="font-semibold text-neel">Coastal impact of monsoonal variations</h4>
                <p className="text-sm text-neel/70">A. Rao, S. Iyer · Published 12 Jun 2025</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-6">
          <h3 className="text-[22px] font-semibold text-neel border-b border-border pb-2">Featured datasets</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1,2].map(i => (
              <div key={i} className="bg-white p-4 rounded-lg border border-border shadow-sm flex flex-col space-y-2">
                <span className="text-xs bg-sagar/10 text-sagar px-2 py-1 rounded w-fit">Dataset</span>
                <h4 className="font-semibold text-neel text-sm">Plankton counts, Bay of Bengal, March 2025</h4>
                <p className="text-xs text-neel/70">CSV · 14 MB · CC BY 4.0</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-neel text-white w-full py-16 mt-12">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col space-y-2">
              <span className="text-4xl font-bold text-haldi">12,482</span>
              <span className="text-sm text-white/80">Resources</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-4xl font-bold text-haldi">1,240</span>
              <span className="text-sm text-white/80">Datasets</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-4xl font-bold text-haldi">186</span>
              <span className="text-sm text-white/80">Expeditions</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-4xl font-bold text-haldi">412</span>
              <span className="text-sm text-white/80">Researchers</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
