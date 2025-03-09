import Map from '@/app/components/Map';
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
      <Map />
      <FaqSection />
    </>
  );
};

export default HomePage;
