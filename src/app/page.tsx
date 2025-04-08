import MapSection from '@/app/components/sections/MapSection';
import GallerySection from './components/gallery/GallerySection';
import FaqSection from './components/sections/FaqSection';
import HeroSection from './components/sections/HeroSection';
import InfoSection from './components/sections/InfoSection';
import ReviewSection from './components/sections/ReviewSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <GallerySection />
      <ReviewSection />
      <MapSection />
      <FaqSection />
    </>
  );
};

export default HomePage;
