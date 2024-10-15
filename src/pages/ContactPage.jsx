import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"

const ContactPage = () => {
    return (
        <div className="container max-w-screen-xl mx-auto px-4">
            <Navbar />
            <ContactSection />
            <Footer />
        </div>
    )
}

export default ContactPage