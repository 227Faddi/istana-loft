import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Metadata } from 'next/types';
import { FaRegSmileWink } from 'react-icons/fa';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export const metadata: Metadata = {
  title: 'Istana Loft - Contact',
};

const FormSuccessPage = () => {
  const t = useTranslations('FormSuccessPage');

  return (
    <>
      <div className="xl:px-32">
        <Navbar />
      </div>
      <div className="mt-[106px] lg:mt-0 grid min-h-full place-items-center px-6 py-28 sm:py-48 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <FaRegSmileWink size={50} className="font-semibold text-green-700" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t('title')}
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            {t('message')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="px-5 py-3 border-2 hover:border-green-700 rounded-lg font-semibold hover:text-green-700 hover:bg-white text-lg bg-green-700 text-white transition ease-linear duration-500"
            >
              {t('button')}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FormSuccessPage;
