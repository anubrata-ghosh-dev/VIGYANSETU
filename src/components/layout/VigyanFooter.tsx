import Link from 'next/link';

const FOOTER_LINKS = {
  'About VigyanSetu': [
    { label: 'About us', href: '/about' },
    { label: 'Design principles', href: '/about' },
    { label: 'Accessibility', href: '#' },
    { label: 'Privacy policy', href: '#' },
  ],
  'Explore': [
    { label: 'All resources', href: '/search' },
    { label: 'Expeditions', href: '/search?type=expedition' },
    { label: 'Open datasets', href: '/search?type=dataset' },
    { label: 'Media library', href: '/gallery' },
  ],
  'For researchers': [
    { label: 'Submit research', href: '/admin' },
    { label: 'API access', href: '#' },
    { label: 'Metadata standards', href: '#' },
    { label: 'Licences', href: '#' },
  ],
  'Support': [
    { label: 'Research assistant', href: '/assistant' },
    { label: 'Content studio', href: '/studio' },
    { label: 'Contact', href: '#' },
    { label: 'GIGW 3.0 compliance', href: '#' },
  ],
};

export default function VigyanFooter() {
  return (
    <footer style={{ background: '#12264A', color: '#EAF2F6' }}>
      {/* Tricolour top accent */}
      <div aria-hidden="true">
        <div style={{ height: 3, background: '#FF9933' }} />
        <div style={{ height: 3, background: '#FFFFFF' }} />
        <div style={{ height: 3, background: '#138808' }} />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 md:px-8 py-12">
        {/* Logo + tagline */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-10">
          <div className="shrink-0 max-w-[220px]">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#0E7C86' }}>
                <svg viewBox="0 0 36 36" width="28" height="28" fill="none">
                  <path d="M4 24 Q18 6 32 24" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <line x1="18" y1="12" x2="18" y2="24" stroke="#F2A30F" strokeWidth="1.5" />
                  <line x1="4" y1="24" x2="32" y2="24" stroke="white" strokeWidth="2" />
                  <circle cx="18" cy="11" r="2.5" fill="#F2A30F" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                Vigyan<span style={{ color: '#7FD0D6' }}>Setu</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(234,242,246,0.65)' }}>
              Unified Scientific Archive &amp; Outreach Platform.<br />
              From Research Data to Public Knowledge.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-white">{heading}</h4>
                <ul className="space-y-1.5">
                  {links.map(link => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs transition-colors hover:text-white"
                        style={{ color: 'rgba(234,242,246,0.6)' }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px]"
          style={{ borderColor: 'rgba(44,69,112,1)', color: 'rgba(234,242,246,0.45)' }}
        >
          <p>© 2026 VigyanSetu · Ministry of Earth Sciences, Government of India</p>
          <p>Metadata available via OAI-PMH and JSON-LD</p>
        </div>
      </div>
    </footer>
  );
}
