import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="flex space-x-10 justify-center items-center mt-14">
                        <a
                            href="#"
                            className="block  text-gray-900 transition-all duration-500 hover:text-green-700 "
                        >
                            <FaFacebookSquare className="text-4xl"/>
                        </a>
                        <a
                            href="#"
                            className="block  text-gray-900 transition-all duration-500 hover:text-green-700 "
                        >
                            <FaInstagram className="text-4xl"/>
                        </a>
                    </div>
                    <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
                        <li>
                            <Link to="/#gallery" className="text-gray-800 hover:text-green-700">
                                Photos
                            </Link>
                        </li>
                        <li>
                            <Link to="/#reviews" className=" text-gray-800 hover:text-green-700">
                                Reviews
                            </Link>
                        </li>
                        <li>
                            <Link to="/#map" className=" text-gray-800 hover:text-green-700">
                                Location
                            </Link>
                        </li>
                        <li>
                            <Link to="/#faq" className=" text-gray-800 hover:text-green-700">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className=" text-gray-800 hover:text-green-700">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="flex flex-col sm:flex-row justify-between">
                        <span className="text-lg text-gray-600 text-center block">
                            © Istana Loft 2024, All rights reserved.
                        </span>
                        <span className="text-lg text-gray-600 text-center block">
                            Develop by <a href="https://faliloukhouma.com/" className="text-green-700">Falilou</a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer