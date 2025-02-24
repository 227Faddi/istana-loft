'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LocaleSwitcher from './LocaleSwitcher';
import ToggleNavbar from './ToggleNavbar';

const Navbar = () => {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${
        isOpen ? 'h-auto' : 'h-[106px]'
      } overflow-hidden lg:h-auto px-7 md:px-12 flex-wrap lg:flex items-center 
      py-8 lg:py-14 xl:relative z-10 border-b-2 lg:border-b-0 fixed top-0 right-0 left-0 bg-white lg:bg-transparent lg:static`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="flex text-3xl">
          <div className="relative w-[40px] h-[40px] mr-2">
            <Image
              src="/assets/images/logo.webp"
              className="object-cover w-full h-full"
              alt="istana loft logo"
              width={40}
              height={40}
            />
          </div>
          <h2 className="hover:text-green-700 font-Playwrite">Istana Loft</h2>
        </Link>
        <ToggleNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <ul
        className={`lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-16
        transform transition-all duration-500 overflow-hidden mt-9 lg:mt-0
        ${isOpen ? 'max-h-[500px]' : 'max-h-0 lg:max-h-none'}`}
      >
        <li className="text-gray-800 text-lg mb-5 lg:mb-0 cursor-pointer">
          <Link href="/#gallery">{t('photos')}</Link>
        </li>
        <li className="text-gray-800 text-lg mb-5 lg:mb-0 cursor-pointer">
          <Link href="/#reviews">{t('reviews')}</Link>
        </li>
        <li className="text-gray-800 text-lg mb-5 lg:mb-0 cursor-pointer">
          <Link href="/#map">{t('location')}</Link>
        </li>
        <li className="text-gray-800 text-lg mb-5 lg:mb-0 cursor-pointer">
          <Link href="/#faq">FAQ</Link>
        </li>
        <li className="text-gray-800 text-lg mb-5 lg:mb-0 cursor-pointer">
          <Link href="/contact">{t('contact')}</Link>
        </li>
        <li>
          <LocaleSwitcher />
        </li>
      </ul>
      <a
        href={process.env.NEXT_PUBLIC_AIRBNB_URL}
        target="_blank"
        className={`mt-6 lg:mt-0 inline-block px-5 py-3 border-2 hover:border-green-700 rounded-lg font-semibold hover:text-green-700 hover:bg-white text-lg bg-green-700 text-white transition ease-linear duration-500 
        ${isOpen === false && 'hidden lg:block'}`}
      >
        {t('bookNow')}
      </a>
    </nav>
  );
};

export default Navbar;
