import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import ContactSection from "../components/sections/ContactSection"
import Footer from "../components/Footer"
import { useEffect } from "react"
import { GiWaveSurfer } from "react-icons/gi"

const ContactPage = () => {
    return (
        <>
            <nav
                className="flex-wrap lg:flex items-center py-8 md:py-14 z-10 border-b-2 lg:border-b-0"
            >
                <div className="flex items-center justify-between mb-0 px-6">
                    <Link to="/" className='flex text-3xl'>
                        <GiWaveSurfer />
                        <h2>
                            Istana Loft
                        </h2>
                    </Link>
                </div>
                <a
                    target="_blank"
                    className={
                        `px-5 py-3 border-2 hover:border-green-700 rounded-lg font-semibold hover:text-green-700 hover:bg-white text-lg bg-green-700 text-white transition ease-linear duration-500`
                    }
                >
                    Book Now
                </a>
            </nav>
            <ContactSection />
            <Footer />
        </>
    )
}

export default ContactPage