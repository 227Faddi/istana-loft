import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ContactPage = () => {
  const t = useTranslations();

  return (
    <>
      <div className="xl:px-32">
        <Navbar />
      </div>
      <section className="bg-white py-6 mt-[106px] lg:mt-0" id="contact">
        <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
          <div className="bg-green-800 rounded-3xl py-14 px-6">
            <h1 className="text-center text-white font-semibold text-4xl mb-8 italic">
              {t('contactTitle')}
            </h1>
            <div className="flex flex-col lg:flex-row items-center justify-evenly">
              <div className="text-center lg:text-left mb-10 lg:mb-0">
                <div className="max-w-sm mx-auto overflow-hidden bg-white shadow-lg rounded-3xl">
                  <div className="relative">
                    <Image
                      className="w-full h-48 object-cover"
                      src="/assets/images/contact-photo.webp"
                      alt="Profile Image"
                      height={1000}
                      width={1000}
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className="text-xl font-semibold text-gray-800">
                      {t('contactName')}
                    </div>
                    <p className="text-gray-600">{t('contactRole')}</p>
                    <p className="px-6 py-4">{t('contactBio')}</p>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
