import React from 'react';
import VigyanButton from '@/components/ui/VigyanButton';

const GALLERY_IMAGES = [
  { url: 'https://ncpor.res.in/files/picture/Bharati_IMG-Cropped.JPG', title: 'Bharati Station' },
  { url: 'https://ncpor.res.in/files/picture/GeoscienceImage.JPG', title: 'Geoscience Research' },
  { url: 'https://ncpor.res.in/files/picture/s_ocean.jpg', title: 'Deep Ocean Exploration' },
  { url: 'https://ncpor.res.in/files/picture/1%20Hydrothermal%20Map%20area.jpg', title: 'Hydrothermal Map' },
  { url: 'https://ncpor.res.in/files/picture/Bharati_IMG-Cropped.JPG', title: 'Antarctic Landscape' },
  { url: 'https://ncpor.res.in/files/picture/GeoscienceImage.JPG', title: 'Polar Survey' },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-vigyan-background pb-24">
      <section className="bg-vigyan-navy text-white py-20">
        <div className="container-custom px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Visual documentation of India's scientific endeavors in the Polar and Ocean realms.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-sm border border-vigyan-border bg-white">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-vigyan-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-bold text-lg">{img.title}</h3>
                    <p className="text-xs text-gray-200">Official NCPOR Archive</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
