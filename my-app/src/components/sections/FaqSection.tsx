'use client';

import { useTranslations } from 'next-intl';
import FaqItem from '../FaqItem';

const FaqSection = () => {
  const t = useTranslations();
  const content = [
    {
      title: t('faqItem1Title'),
      text: t('faqItem1Text'),
    },
    {
      title: t('faqItem2Title'),
      text: t('faqItem2Text'),
    },
    {
      title: t('faqItem3Title'),
      text: t('faqItem3Text'),
    },
    {
      title: t('faqItem4Title'),
      text: t('faqItem4Text'),
    },
  ];

  return (
    <section className="py-10 px-4" id="faq">
      <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-normal text-gray-600 text-lg md:text-xl text-center uppercase mb-6">
            FAQ
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl italic">
            {t('faqTitle')}
          </h2>
        </div>
        <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
          {content.map((item, index) => (
            <FaqItem
              key={index}
              title={item.title}
              text={item.text}
              index={index}
            />
          ))}
        </div>
        <div className="flex items-center justify-center mt-12 md:mt-20">
          <div className="px-8 py-4 text-center bg-green-700 rounded-full">
            <p className="text-gray-50">
              {t('faqContact')}{' '}
              <a href="/contact" title="" className="underline">
                {t('contactUs')}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
