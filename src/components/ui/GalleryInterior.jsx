import React from 'react'

const GalleryInterior = () => {
    return (
        <div className="gallery">
            <div className="flex flex-col mb-10">
                <div className="grid md:grid-cols-12 gap-8 lg:mb-11 mb-7">
                    <div className="md:col-span-8 md:h-[404px] h-[277px] w-full rounded-3xl">
                        <img
                            src="assets/image/intern1.webp"
                            alt="Gallery image"
                            className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"
                            onClick={() => openLightbox('assets/image/intern1.webp')}
                        />
                    </div>
                    <div className="md:col-span-4 md:h-[404px] h-[277px] w-full rounded-3xl">
                        <img
                            src="assets/image/intern2.webp"
                            alt="Gallery image"
                            className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"
                            onClick={() => openLightbox('assets/image/intern2.webp')}
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                    <div className="h-[404px] w-full rounded-3xl">
                        <img
                            src="assets/image/intern5.webp"
                            alt="Gallery image"
                            className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"
                            onClick={() => openLightbox('assets/image/intern5.webp')}
                        />
                    </div>
                    <div className="h-[404px] w-full rounded-3xl">
                        <img
                            src="assets/image/intern4.webp"
                            alt="Gallery image"
                            className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"
                            onClick={() => openLightbox('assets/image/intern4.webp')}
                        />
                    </div>
                    <div className="h-[404px] w-full rounded-3xl">
                    <img
                        src="assets/image/intern3.webp"
                        alt="Gallery image"
                        className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"
                        onClick={() => openLightbox('assets/image/intern3.webp')}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryInterior