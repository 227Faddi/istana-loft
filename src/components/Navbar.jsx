import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
const airbnbURL = import.meta.env.VITE_AIRBNB_URL;

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [navOpen, setNavOpen] = useState(false);
  const toggleNavBar = () => {
    setNavOpen(() => !navOpen);
  };
  const linkClass = 'text-gray-800 text-lg mb-5 lg:mb-0';

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng.toLowerCase());
  };

  return (
    <nav
      className={`${navOpen ? 'h-auto' : 'h-[106px]'} overflow-hidden lg:h-auto px-7 md:px-12 flex-wrap lg:flex items-center 
      py-8 lg:py-14 xl:relative z-10 border-b-2 lg:border-b-0 fixed top-0 right-0 left-0 bg-white lg:bg-transparent lg:static`}
    >
      <div className="flex items-center justify-between mb-0">
        <Link to="/" className="flex text-3xl">
          <div className="w-[40px] h-[40px] mr-2">
            <img
              src="assets/image/logo.webp"
              className="object-cover w-full h-full"
              alt="istana loft logo"
            />
          </div>
          <h2 className="hover:text-green-700 font-Playwrite">Istana Loft</h2>
        </Link>
        <button
          onClick={toggleNavBar}
          aria-label={
            navOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          className="lg:hidden w-10 h-10 ml-auto flex items-center justify-center text-green-700 border border-green-700 rounded-md"
        >
          <IoMenu size={25} />
        </button>
      </div>
      <ul
        className={`lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-16
        transform transition-all duration-500 overflow-hidden mt-9 lg:mt-0
        ${navOpen ? 'max-h-[500px]' : 'max-h-0 lg:max-h-none'}`}
      >
        <li className={linkClass}>
          <Link to="/#gallery">{t('photos')}</Link>
        </li>
        <li className={linkClass}>
          <Link to="/#reviews">{t('reviews')}</Link>
        </li>
        <li className={linkClass}>
          <Link to="/#map">{t('location')}</Link>
        </li>
        <li className={linkClass}>
          <Link to="/#faq">FAQ</Link>
        </li>
        <li className={linkClass}>
          <Link to="/contact">{t('contact')}</Link>
        </li>
        <li>
          <button
            onClick={() => changeLanguage(t('otherLng'))}
            className={linkClass}
          >
            {t('otherLng')}
          </button>
        </li>
      </ul>
      <a
        href={airbnbURL}
        target="_blank"
        className={`px-5 py-3 border-2 hover:border-green-700 rounded-lg font-semibold hover:text-green-700 hover:bg-white text-lg bg-green-700 text-white transition ease-linear duration-500 
        ${navOpen === false && 'hidden lg:block'}`}
      >
        {t('bookNow')}
      </a>
    </nav>
  );
};

export default Navbar;
