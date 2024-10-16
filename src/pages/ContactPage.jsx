import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import ContactSection from "../components/sections/ContactSection"
import Footer from "../components/Footer"
import { useEffect } from "react"
import { GiWaveSurfer } from "react-icons/gi"

const ContactPage = () => {
    return (
        <>
            
            <ContactSection />
            <Footer />
        </>
    )
}

export default ContactPage