import MainSection from '../components/sections/MainSection'
import InfoSection from '../components/sections/InfoSection'
import GallerySection from '../components/sections/GallerySection'
import ReviewsSection from '../components/sections/ReviewsSection'
import MapSection from '../components/sections/MapSection'
import Footer from '../components/Footer'
import FaqSection from '../components/sections/FaqSection'

const HomePage = () => {
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
    )
}

export default HomePage