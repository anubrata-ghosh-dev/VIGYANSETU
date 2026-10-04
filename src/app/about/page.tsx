import React from 'react';
import VigyanButton from '@/components/ui/VigyanButton';
import { Globe, Microscope, Ship, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-24" style={{ background: 'var(--bg)' }}>
      {/* Hero Section */}
      <section style={{ background: '#12264A' }} className="text-white py-20">
        <div className="container-custom px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About NCPOR</h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{ color: 'rgba(234,242,246,0.8)' }}>
            The National Centre for Polar and Ocean Research (NCPOR) is India&apos;s premier R&amp;D institution
            responsible for the country&apos;s research activities in the polar and Southern Ocean realms.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 border rounded-md shadow-sm" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            <div className="w-12 h-12 flex items-center justify-center rounded-full mb-6" style={{ background: 'rgba(14,124,134,0.1)', color: '#0E7C86' }}>
              <Globe size={24} />
            </div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text)' }}>Our Mission</h2>
            <p className="leading-relaxed" style={{ color: 'var(--text)' }}>
              To conduct cutting-edge research in polar and ocean sciences, enhancing India&apos;s
              understanding of global climate change, biodiversity, and Earth system dynamics.
              NCPOR manages India&apos;s permanent research stations in Antarctica—Maitri and Bharati.
            </p>
          </div>
          <div className="p-8 border rounded-md shadow-sm" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            <div className="w-12 h-12 flex items-center justify-center rounded-full mb-6" style={{ background: 'rgba(242,163,15,0.1)', color: '#F2A30F' }}>
              <Microscope size={24} />
            </div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text)' }}>Our Vision</h2>
            <p className="leading-relaxed" style={{ color: 'var(--text)' }}>
              To be a global leader in polar and ocean research, fostering international
              collaboration and providing evidence-based scientific data to support
              national and international policy decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section-padding" style={{ background: 'var(--surface)' }}>
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--text)' }}>Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe />,
                title: 'Polar Science',
                desc: 'Holistic understanding of the polar regions, including ice-sheet dynamics and atmospheric chemistry.',
              },
              {
                icon: <Ship />,
                title: 'Oceanography',
                desc: 'Systematic geoscientific survey of the Ocean realm around India, including deep-sea exploration.',
              },
              {
                icon: <ShieldCheck />,
                title: 'Institutional Infrastructure',
                desc: 'Operating advanced research vessels like RV Sagar Manthan and polar stations in Antarctica.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border rounded-md transition-colors group hover:border-sagar"
                style={{ borderColor: 'var(--border)' }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-md mb-4 transition-colors group-hover:bg-neel group-hover:text-white"
                  style={{ background: 'var(--bg)', color: '#12264A' }}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
