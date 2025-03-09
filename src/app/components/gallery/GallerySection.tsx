'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import GalleryExterior from './GalleryExterior';
import GalleryInterior from './GalleryInterior';

const GallerySection = () => {
  const t = useTranslations();
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
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsExterior((prev) => !prev)}
            className="bg-green-700 text-white px-6 py-4 rounded-lg cursor-pointer text-lg"
          >
            {isExterior ? 'Interior' : 'Exterior'}
          </button>
        </div>
        <AnimatePresence mode="wait">
          {isExterior ? (
            <motion.div
              key="exterior"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <GalleryExterior />
            </motion.div>
          ) : (
            <motion.div
              key="interior"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <GalleryInterior />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;
