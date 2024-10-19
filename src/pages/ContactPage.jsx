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
            <div className="xl:px-32">
                <Navbar />  
            </div>
            <ContactSection />
            <Footer />
        </>
    )
}

export default ContactPage