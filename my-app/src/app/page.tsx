'use client';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import FaqSection from '../components/sections/FaqSection';
import GallerySection from '../components/sections/GallerySection';
import InfoSection from '../components/sections/InfoSection';
import MainSection from '../components/sections/MainSection';
import MapSection from '../components/sections/MapSection';
import ReviewsSection from '../components/sections/ReviewsSection';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <MainSection />
      <InfoSection />
      <GallerySection />
      <ReviewsSection />
      <MapSection />
      <FaqSection />
      <Footer />
    </>
  );
};

export default HomePage;
