'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const HeroSection = () => {
  const t = useTranslations();

  return (
    <section className="mt-[106px] lg:mt-0 bg-white mb-20 md:mb-52 xl:mb-72">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-center xl:justify-start xl:max-w-[55%]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
              },
            }}
            viewport={{
              once: true,
            }}
            className="mt-28 text-center xl:text-left"
          >
            <h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl text-gray-900 mb-6 italic">
              {t('mainTitle1')} <br /> {t('mainTitle2')}
            </h1>
            <p className="font-normal text-xl text-gray-600 mb-12">
              {t('mainSubTitle1')} <br /> {t('mainSubTitle2')}
            </p>
            <a
              href={process.env.NEXT_PUBLIC_AIRBNB_URL}
              target="_blank"
              className="px-5 py-3 border-2 hover:border-green-700 rounded-lg font-semibold hover:text-green-700 hover:bg-white text-lg bg-green-700 text-white animation ease-linear duration-500"
            >
              {t('mainButton')}
            </a>
          </motion.div>
          <div className="relative hidden xl:block xl:absolute z-0 top-0 right-0 overflow-hidden rounded-bl-3xl w-[708px] h-[800px] xl:max-w-[45%]">
            <Image
              alt="Home img"
              src="/assets/images/extern1.webp"
              className="object-cover w-full h-full"
              fill
              sizes="(max-width: 640px) 100vw, 
              (max-width: 1024px) 50vw, 
              33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
