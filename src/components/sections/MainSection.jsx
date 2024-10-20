import { useRef } from "react"
import { useInView } from "framer-motion"
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar"
const airbnbURL = import.meta.env.VITE_AIRBNB_URL;

const MainSection = () => {
    const { t } = useTranslation();

    const animationTarget = useRef(null)
    const isInView = useInView(animationTarget,  { once: true })

    const animation = {
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }

    const mainImage = 'assets/image/extern1.webp'
    return (
        <section className="mt-[106px] lg:mt-0 bg-white mb-20 md:mb-52 xl:mb-72">
            <div className="container max-w-screen-xl mx-auto px-4">
                <Navbar />
                <div className="flex items-center justify-center xl:justify-start xl:max-w-[55%]">
                    <div 
                        ref={animationTarget}
                        style={animation} 
                        className="mt-28 text-center xl:text-left"
                    >
                        <h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-normal mb-6 italic">
                            {t('mainTitle1')}{' '}
                            <br />
                            {' '}{t('mainTitle2')}
                        </h1>
                        <p className="font-normal text-xl text-gray-600 leading-relaxed mb-12">
                            {t('mainSubTitle1')}{' '}
                            <br />
                            {' '}{t('mainSubTitle2')}
                        </p>
                        <a
                            href={airbnbURL}
                            target="_blank"
                            className='px-5 py-3 border-2 hover:border-green-700 rounded-lg font-semibold hover:text-green-700 hover:bg-white text-lg bg-green-700 text-white animation ease-linear duration-500'
                        >
                           {t('mainButton')}
                        </a>
                    </div>
                    <div className="hidden xl:block xl:absolute z-0 top-0 right-0 overflow-hidden rounded-bl-3xl w-[708px] h-[800px] xl:max-w-[45%]">
                        <img
                            alt="Home img"
                            src={mainImage}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSection