import FaqItem from '@/app/components/FaqItem';
import Map from '@/app/components/Map';
import Navbar from '@/app/components/Navbar';
import ReviewCard from '@/app/components/ReviewCard';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Footer from './components/Footer';
import GallerySection from './components/sections/GallerySection';
import InfoSection from './components/sections/InfoSection';

const HomePage = () => {
  const t = useTranslations();

  const content = [
    {
      author: 'Vanessa',
      comment: t('reviewsComment1'),
      photo:
        'https://a0.muscache.com/im/pictures/user/User-139798183/original/b1f5fa64-c021-4d85-b9c4-7f961d138dcb.jpeg?im_w=240',
    },
    {
      author: 'Kevin',
      comment: t('reviewsComment2'),
      photo:
        'https://a0.muscache.com/im/pictures/user/44e9dcf4-0458-48d7-9879-e2ba50d525f5.jpg?im_w=240',
    },
    {
      author: 'Sébastien',
      comment: t('reviewsComment3'),
      photo:
        'https://a0.muscache.com/im/pictures/user/59cedcdb-a4c1-470c-9d91-92b47e7d6b0c.jpg?im_w=240',
    },
  ];

  const contentFaq = [
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
    <>
      <section className="mt-[106px] lg:mt-0 bg-white mb-20 md:mb-52 xl:mb-72">
        <div className="container max-w-screen-xl mx-auto px-4">
          <Navbar />
          <div className="flex items-center justify-center xl:justify-start xl:max-w-[55%]">
            <div className="mt-28 text-center xl:text-left">
              <h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-normal mb-6 italic">
                {t('mainTitle1')} <br /> {t('mainTitle2')}
              </h1>
              <p className="font-normal text-xl text-gray-600 leading-relaxed mb-12">
                {t('mainSubTitle1')} <br /> {t('mainSubTitle2')}
              </p>
              <a
                href={process.env.NEXT_PUBLIC_AIRBNB_URL}
                target="_blank"
                className="px-5 py-3 border-2 hover:border-green-700 rounded-lg font-semibold hover:text-green-700 hover:bg-white text-lg bg-green-700 text-white animation ease-linear duration-500"
              >
                {t('mainButton')}
              </a>
            </div>
            <div className="relative hidden xl:block xl:absolute z-0 top-0 right-0 overflow-hidden rounded-bl-3xl w-[708px] h-[800px] xl:max-w-[45%]">
              <Image
                alt="Home img"
                src="/assets/images/extern1.webp"
                className="object-cover w-full h-full"
                width={2000}
                height={2000}
              />
            </div>
          </div>
        </div>
      </section>
      <InfoSection />
      <GallerySection />
      <section className="bg-white py-10 md:py-16" id="reviews">
        <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
          <p className="font-normal text-gray-600 text-lg md:text-xl text-center uppercase mb-6">
            {t('reviews')}
          </p>
          <h2 className="font-semibold text-gray-900 text-2xl md:text-4xl text-center leading-normal mb-14 italic">
            {t('reviewsTitle1')} <br /> {t('reviewsTitle2')}
          </h2>
          <div className="flex flex-col lg:flex-row gap-10">
            {content.map((item, index) => (
              <ReviewCard
                key={index}
                author={item.author}
                comment={item.comment}
                photo={item.photo}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      <Map />
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
            {contentFaq.map((item, index) => (
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
      <Footer />
    </>
  );
};

export default HomePage;
