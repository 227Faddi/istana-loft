'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import LocaleSwitcher from './LocaleSwitcher';

const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="w-full py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex space-x-10 justify-center items-center mt-14">
            <a
              href="https://www.facebook.com/giulio.formicola"
              target="_blank"
              className="block  text-gray-900 transition-all duration-500 hover:text-green-700"
              aria-label="Visit our Facebook page"
            >
              <FaFacebookSquare className="text-4xl" />
            </a>
            <a
              href="https://www.instagram.com/_libanes_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              className="block  text-gray-900 transition-all duration-500 hover:text-green-700"
              aria-label="Visit our Instagram page"
            >
              <FaInstagram className="text-4xl" />
            </a>
          </div>
          <ul className="text-lg flex items-center justify-center flex-wrap gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
            <li>
              <Link
                href="/#gallery"
                className="text-gray-800 hover:text-green-700"
              >
                {t('photos')}
              </Link>
            </li>
            <li>
              <Link
                href="/#reviews"
                className=" text-gray-800 hover:text-green-700"
              >
                {t('reviews')}
              </Link>
            </li>
            <li>
              <Link
                href="/#map"
                className=" text-gray-800 hover:text-green-700"
              >
                {t('location')}
              </Link>
            </li>
            <li>
              <Link
                href="/#faq"
                className=" text-gray-800 hover:text-green-700"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className=" text-gray-800 hover:text-green-700"
              >
                {t('contact')}
              </Link>
            </li>
            <li>
              <a
                href={process.env.NEXT_PUBLIC_AIRBNB_URL}
                target="_blank"
                className="text-gray-800 hover:text-green-700"
              >
                {t('book')}
              </a>
            </li>
            <li>
              <LocaleSwitcher />
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row justify-between">
            <span className="text-lg text-gray-600 text-center block">
              {t('rights')}
            </span>
            <span className="text-lg text-gray-600 text-center block">
              {t('develop')}{' '}
              <a
                href="https://www.faliloukhouma.com"
                className="text-green-700 hover:text-green-900 transition duration-300 underline"
              >
                Falilou
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
