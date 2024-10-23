import MainSection from '../components/sections/MainSection'
import InfoSection from '../components/sections/InfoSection'
import GallerySection from '../components/sections/GallerySection'
import ReviewsSection from '../components/sections/ReviewsSection'
import MapSection from '../components/sections/MapSection'
import Footer from '../components/Footer'
import FaqSection from '../components/sections/FaqSection'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
const clientUrl = import.meta.env.VITE_CLIENT_URL;

const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="Istana Loft - Airbnb rental" />
                <meta name="keywords" content="Istana Loft - Airbnb rental" />
                <title> Istana Loft - Home </title>
                <link rel="canonical" href={clientUrl} />
            </Helmet>
            <MainSection />
            <InfoSection />
            <GallerySection />
            <ReviewsSection />
            <MapSection />
            <FaqSection />
            <Footer />
        </HelmetProvider>
    )
}

export default HomePage