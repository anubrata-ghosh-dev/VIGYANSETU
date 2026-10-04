import React from 'react';
import VigyanButton from '@/components/ui/VigyanButton';
import { Globe, Microscope, Ship, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-vigyan-background pb-24">
      {/* Hero Section */}
      <section className="bg-vigyan-navy text-white py-20">
        <div className="container-custom px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About NCPOR</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            The National Centre for Polar and Ocean Research (NCPOR) is India’s premier R&D institution 
            responsible for the country’s research activities in the polar and Southern Ocean realms.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 border border-vigyan-border rounded-sm shadow-sm">
            <div className="w-12 h-12 bg-vigyan-navy/10 text-vigyan-navy flex items-center justify-center rounded-full mb-6">
              <Globe size={24} />
            </div>
            <h2 className="text-2xl font-bold text-vigyan-heading mb-4">Our Mission</h2>
            <p className="text-vigyan-body leading-relaxed">
              To conduct cutting-edge research in polar and ocean sciences, enhancing India's 
              understanding of global climate change, biodiversity, and Earth system dynamics. 
              NCPOR manages India's permanent research stations in Antarctica—Maitri and Bharati.
            </p>
          </div>
          <div className="bg-white p-8 border border-vigyan-border rounded-sm shadow-sm">
            <div className="w-12 h-12 bg-vigyan-saffron/10 text-vigyan-saffron flex items-center justify-center rounded-full mb-6">
              <Microscope size={24} />
            </div>
            <h2 className="text-2xl font-bold text-vigyan-heading mb-4">Our Vision</h2>
            <p className="text-vigyan-body leading-relaxed">
              To be a global leader in polar and ocean research, fostering international 
              collaboration and providing evidence-based scientific data to support 
              national and international policy decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-vigyan-heading mb-12">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Globe />, 
                title: 'Polar Science', 
                desc: 'Holistic understanding of the polar regions, including ice-sheet dynamics and atmospheric chemistry.' 
              },
              { 
                icon: <Ship />, 
                title: 'Oceanography', 
                desc: 'Systematic geoscientific survey of the Ocean realm around India, including deep-sea exploration.' 
              },
              { 
                icon: <ShieldCheck />, 
                title: 'Institutional Infrastructure', 
                desc: 'Operating advanced research vessels like RV Sagar Manthan and polar stations in Antarctica.' 
              },
            ].map((item, i) => (
              <div key={i} className="p-6 border border-gray-100 rounded-sm hover:border-vigyan-navy transition-colors group">
                <div className="w-10 h-10 bg-gray-50 text-vigyan-navy flex items-center justify-center rounded-sm mb-4 group-hover:bg-vigyan-navy group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-vigyan-heading mb-2">{item.title}</h3>
                <p className="text-sm text-vigyan-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
