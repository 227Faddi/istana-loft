import React from 'react'

const ContactSection = () => {
    const content = [
        {
            
        }
    ]
    return (
        <section className="bg-white py-10 md:py-16" id='contact'>
            <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
                <div className="bg-green-800 flex flex-col lg:flex-row items-center justify-evenly py-14 px-6 rounded-3xl">
                    <div className="text-center lg:text-left mb-10 lg:mb-0">
                        <h1 className="font-semibold text-white text-4xl md:text-5xl lg:text-7xl leading-normal mb-4">
                            Talk to us{' '}
                            <br />
                            {' '}to discuss
                        </h1>
                        <p className="font-normal text-white text-md md:text-xl">
                            Need more time to discuss? Won’t worry, we are{' '}
                            <br />
                            {' '}ready to help you. You can fill in the column on the{' '}
                            <br />
                            {' '}right to book a meeting with us. Totally free.
                        </p>
                    </div>
                    <div className="max-w-64 sm:max-w-full sm:w-80 bg-white px-6 py-3 rounded-3xl ">
                        <div className="py-3">
                            <h3 className="font-semibold text-gray-900 text-3xl">
                                Contact Me
                            </h3>
                        </div>
                        <div className="py-3">
                            <input
                                className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
                                placeholder="Full Name"
                                type="text"
                            />
                        </div>
                        <div className="py-3">
                            <input
                                className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
                                placeholder="Email"
                                type="text"
                            />
                        </div>
                        <div className="py-3">
                            <input
                                className="px-4 py-4 w-full bg-gray-100 font-normal text-lg placeholder-gray-400 rounded-xl outline-none"
                                placeholder="Date"
                                type="text"
                            />
                        </div>
                        <div className="py-3">
                            <input
                                className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
                                placeholder="Virtual Meeting"
                                type="text"
                            />
                        </div>
                        <div className="py-3">
                            <button className="w-full py-4 font-semibold text-lg text-white bg-green-700 rounded-xl hover:bg-green-900 transition ease-in-out duration-500">
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection