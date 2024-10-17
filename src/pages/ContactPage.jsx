import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import ContactSection from "../components/sections/ContactSection"
import Footer from "../components/Footer"
import { useEffect } from "react"
import { GiWaveSurfer } from "react-icons/gi"

const ContactPage = () => {
    const airbnbURL = 'https://www.airbnb.ca/rooms/1160767419216237462';

    return (
        <>
            <div
                className="flex flex-col sm:flex-row justify-between items-center py-8 sm:px-40 lg:px-64"
            >
                <div className="flex items-center justify-between">
                    <Link to="/" className='flex text-3xl'>
                        <GiWaveSurfer />
                        <h2>
                            Istana Loft
                        </h2>
                    </Link>
                </div>
                <a
                    href={airbnbURL}
                    target="_blank"
                    className='mt-5 sm:mt-0 px-5 py-3 border-2 hover:border-green-700 rounded-lg font-semibold hover:text-green-700 hover:bg-white text-lg bg-green-700 text-white transition ease-linear duration-500'
                >
                    Book Now
                </a>
            </div>
            <ContactSection />
            <Footer />
        </>
    )
}

export default ContactPage