import { Link } from "react-router-dom"
import Navbar from "../Navbar"

const MainSection = () => {
    const mainImage = 'assets/image/extern1.webp'
    const airbnbURL = 'https://www.airbnb.ca/rooms/1160767419216237462';
    return (
        <section className="mt-[106px] lg:mt-0 bg-white mb-20 md:mb-52 xl:mb-72">
            <div className="container max-w-screen-xl mx-auto px-4">
                <Navbar />
                <div className="flex items-center justify-center xl:justify-start xl:max-w-[55%]">
                    <div className="mt-28 text-center xl:text-left">
                        <h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-normal mb-6 italic">
                            Discover Your Perfect{' '}
                            <br />
                            {' '}Coastal Retreat
                        </h1>
                        <p className="font-normal text-xl text-gray-600 leading-relaxed mb-12">
                            With a combines style and comfort, ensuring{' '}
                            <br />
                            {' '}a cozy and rejuvenating stay in Sardinia's coastal paradise.
                        </p>
                        <a
                            href={airbnbURL}
                            target="_blank"
                            className='px-5 py-3 border-2 hover:border-green-700 rounded-lg font-semibold hover:text-green-700 hover:bg-white text-lg bg-green-700 text-white transition ease-linear duration-500'
                        >
                            Reserve Your Stay
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