import React from 'react'

const ContactSection = () => {
    const content = [
        {
            
        }
    ]
    return (
        <section className="bg-white py-6 mt-[106px] lg:mt-0" id='contact'>
            <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
                <div className='bg-green-800 rounded-3xl py-14 px-6'>
                    <h1 className='text-center text-white font-semibold text-4xl mb-8'>
                        Get in Touch with Giulio
                    </h1>
                    <div className="flex flex-col lg:flex-row items-center justify-evenly">
                        <div className="text-center lg:text-left mb-10 lg:mb-0">
                            <div className="max-w-sm mx-auto overflow-hidden bg-white shadow-lg rounded-3xl">
                                <div className="relative">
                                    <img
                                    className="w-full h-48 object-cover"
                                    src="https://a0.muscache.com/im/pictures/user/9c01e630-923c-4471-aedf-38dfe57c3cb5.jpg?im_w=240"
                                    alt="Profile Image"
                                    />
                                </div>
                                <div className="px-6 py-4">
                                    <div className="text-xl font-semibold text-gray-800">Giulio</div>
                                    <p className="text-gray-600">Owner</p>
                                    <p className="px-6 py-4">
                                        As an experienced anaesthetist based in Olbia, Sardinia, Giulio is passionate about both his work and the island's breathtaking landscapes. When he’s not caring for patients, you can find him exploring Sardinia’s stunning coastlines, surfing the waves, or hiking its picturesque trails.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-[384px] sm:max-w-full sm:w-96 bg-white px-6 py-3 rounded-3xl">
                            <div className="py-3">
                                <h2 className="font-semibold text-gray-900 text-3xl text-center">
                                    Have questions or need assistance?
                                </h2>
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
                                <textarea
                                    className="px-4 py-4 w-full bg-gray-100 font-normal text-lg placeholder-gray-400 rounded-xl outline-none"
                                    placeholder="message"
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
            </div>
        </section>
    )
}

export default ContactSection