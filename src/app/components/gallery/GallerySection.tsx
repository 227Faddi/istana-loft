'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import GalleryExterior from './GalleryExterior';
import GalleryInterior from './GalleryInterior';

const GallerySection = () => {
  const t = useTranslations();
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="bg-white px-4 py-10 md:py-16" id="gallery">
      <div className="container max-w-screen-xl mx-auto">
        <p className="font-normal text-gray-600 text-lg md:text-xl text-center uppercase mb-6">
          {t('gallery')}
        </p>
        <h2 className="font-semibold text-gray-900 text-4xl text-center mb-10 italic">
          {t('galleryTitle')}
        </h2>
        <Tabs
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
          selectedTabClassName="bg-green-700 text-white focus:outline-none"
        >
          <TabList className="flex items-center justify-center text-center space-x-10 lg:space-x-20 mb-12">
            <Tab className="px-6 py-2 text-gray-900 font-normal text-xl rounded-lg hover:bg-green-700 hover:text-white transition ease-in-out duration-500 cursor-pointer">
              {t('exterior')}
            </Tab>
            <Tab className="px-6 py-2 text-gray-900 font-normal text-xl rounded-lg hover:bg-green-700 hover:text-white transition ease-in-out duration-500 cursor-pointer">
              {t('interior')}
            </Tab>
          </TabList>
          <TabPanel
            className={`transition-opacity duration-[1000ms] ease-in-out ${
              selectedIndex === 0
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <GalleryExterior />
          </TabPanel>
          <TabPanel
            className={`transition-opacity duration-[1000ms] ease-in-out ${
              selectedIndex === 1
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <GalleryInterior />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default GallerySection;
