import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { FaRegSmileWink } from "react-icons/fa";

const clientUrl = import.meta.env.VITE_CLIENT_URL;

const FormSuccessPage = () => {

    const { t } = useTranslation();

    return (
        <>  
            <Helmet>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Istana Loft - Airbnb rental" />
                <meta name="keywords" content="Istana Loft - Airbnb rental" />
                <title> Istana Loft - Success </title>
                <link rel="canonical" href={clientUrl} />
            </Helmet>
            <div className="xl:px-32">
                <Navbar />  
            </div>
            <div className="mt-[106px] lg:mt-0 grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <div className="flex flex-col items-center">
                    <FaRegSmileWink size={50} className="font-semibold text-green-700" />
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        {t('formSuccess')}
                    </h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        {t('formSuccessMessage')}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        to='/'
                        className="px-5 py-3 border-2 hover:border-green-700 rounded-lg font-semibold hover:text-green-700 hover:bg-white text-lg bg-green-700 text-white transition ease-linear duration-500"
                    >
                        {t('homePageButton')}
                    </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default FormSuccessPage