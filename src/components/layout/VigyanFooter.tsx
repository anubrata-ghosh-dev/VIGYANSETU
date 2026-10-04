import Link from 'next/link';

export default function VigyanFooter() {
  return (
    <footer className="bg-vigyan-deepNavy text-white pt-12 pb-6">
      <div className="container-custom px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-vigyan-deepNavy font-bold text-xs">V</div>
              <span className="text-lg font-bold tracking-tight">VIGYAN<span className="text-vigyan-saffron">SETU</span></span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Unified Scientific Archive & Outreach Platform. Transforming research data into public knowledge.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/search" className="hover:text-white transition-colors">Scientific Repository</Link></li>
              <li><Link href="/search?type=expedition" className="hover:text-white transition-colors">Expeditions</Link></li>
              <li><Link href="/search?type=dataset" className="hover:text-white transition-colors">Open Datasets</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Student Zone</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Institution</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Policies</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/assistant" className="hover:text-white transition-colors">Research Assistant</Link></li>
              <li><Link href="/studio" className="hover:text-white transition-colors">Content Studio</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">API Access</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Accessibility</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 VIGYANSETU. All rights reserved. Official Institutional Source.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">GIGW 3.0 Compliant</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
