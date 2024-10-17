import { Link } from "react-router-dom";
import { useState } from "react";
import { GiWaveSurfer } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    const [ navOpen, setNavOpen ] = useState(false);
    const toggleNavBar = () =>{
        setNavOpen((n) => !navOpen)
    }

    const airbnbURL = 'https://www.airbnb.ca/rooms/1160767419216237462';

    const transition = ''

    const linkClass = 'font-semibold text-gray-900 text-lg hover:text-gray-400 mb-5 lg:mb-0'

    return (
        <nav
            className={`${navOpen ? 'h-auto' : 'h-[106px]'} overflow-hidden lg:h-auto px-7 md:px-12 flex-wrap lg:flex items-center 
            py-8 lg:py-14 xl:relative z-10 border-b-2 lg:border-b-0 fixed top-0 right-0 left-0 bg-white lg:bg-transparent lg:static`}
        >
            <div className="flex items-center justify-between mb-0">
                <Link to="/" className='flex text-3xl'>
                    <GiWaveSurfer />
                    <h2>
                        Istana Loft
                    </h2>
                </Link>
                <button
                    onClick={toggleNavBar}
                    className="lg:hidden w-10 h-10 ml-auto flex items-center justify-center text-green-700 border border-green-700 rounded-md"
                >
                    <IoMenu size={25}/>
                </button>
            </div>
            <ul
                className={
                    `lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-16
                    transform transition-all duration-500 overflow-hidden mt-9 lg:mt-0
                    ${navOpen ? 'max-h-[500px]' : 'max-h-0 lg:max-h-none'}`
                }
            >
                <li className={linkClass}>
                    <a href="#gallery">
                        Photos
                    </a>
                </li>
                <li className={linkClass}>
                    <a href="#reviews">
                        Reviews
                    </a>
                </li>
                <li className={linkClass}>
                    <a href="#map">
                        Location
                    </a>
                </li>
                <li className={linkClass}>
                    <a href="#faq">
                        FAQ
                    </a>
                </li>
                <li className={linkClass}>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
            <a
                href={airbnbURL}
                target="_blank"
                className={
                    `px-5 py-3 border-2 hover:border-green-700 rounded-lg font-semibold hover:text-green-700 hover:bg-white text-lg bg-green-700 text-white transition ease-linear duration-500 
                    ${navOpen === false && 'hidden lg:block'}`
                }
            >
                Book Now
            </a>
        </nav>
    )
}

export default Navbar