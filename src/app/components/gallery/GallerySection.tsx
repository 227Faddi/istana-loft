'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import GalleryExterior from './GalleryExterior';
import GalleryInterior from './GalleryInterior';
// import { useState } from 'react';
// import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
// import GalleryExterior from './GalleryExterior';
// import GalleryInterior from './GalleryInterior';

const GallerySection = () => {
  const t = useTranslations();
  // const [selectedIndex, setSelectedIndex] = useState(0);
  const [isExterior, setIsExterior] = useState(true);
  return (
    <section className="bg-white px-4 py-10 md:py-16" id="gallery">
      <div className="container max-w-screen-xl mx-auto">
        <p className="font-normal text-gray-600 text-lg md:text-xl text-center uppercase mb-6">
          {t('gallery')}
        </p>
        <h2 className="font-semibold text-gray-900 text-4xl text-center mb-10 italic">
          {t('galleryTitle')}
        </h2>
        <div>
          <button onClick={() => setIsExterior((prev) => !prev)}>
            {isExterior ? 'Interior' : 'Exterior'}
          </button>
        </div>
        <div
          className={`transition-opacity duration-1000 ease-in-out ${
            isExterior ? 'opacity-100' : 'opacity-0 hidden'
          }`}
        >
          <GalleryExterior />
        </div>
        <div
          className={`transition-opacity duration-1000 ease-in-out ${
            isExterior ? 'opacity-0 hidden' : 'opacity-100'
          }`}
        >
          <GalleryInterior />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
