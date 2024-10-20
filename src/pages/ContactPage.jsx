import Navbar from "../components/Navbar"
import ContactSection from "../components/sections/ContactSection"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet";
const clientUrl = import.meta.env.VITE_CLIENT_URL;

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Istana Loft - Airbnb rental" />
                <meta name="keywords" content="Istana Loft - Airbnb rental" />
                <title> Istana Loft - Contact </title>
                <link rel="canonical" href={`${clientUrl}contact`} />
            </Helmet>
            <div className="xl:px-32">
                <Navbar />  
            </div>
            <ContactSection />
            <Footer />
        </>
    )
}

export default ContactPage