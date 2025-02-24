import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ContactSection from '../components/sections/ContactSection';

const ContactPage = () => {
  return (
    <>
      <div className="xl:px-32">
        <Navbar />
      </div>
      <ContactSection />
      <Footer />
    </>
  );
};

export default ContactPage;
