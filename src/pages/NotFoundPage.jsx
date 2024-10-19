import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const NotFoundPage = () => {
    return (
        <>
            <div className="xl:px-32">
                <Navbar />  
            </div>
            <div class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <div class="text-center">
                    <p class="text-base font-semibold text-green-700">404</p>
                    <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                    <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <Link 
                            to={'/'}
                            className="px-5 py-3 border-2 hover:border-green-700 rounded-lg font-semibold hover:text-green-700 hover:bg-white text-lg bg-green-700 text-white transition ease-linear duration-500"
                        >
                            Go Back to the Homepage
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NotFoundPage