import React from 'react'

const GalleryExterior = () => {
    return (
        <div className="gallery flex flex-col md:flex-row gap-8 mb-10">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                <div className="h-[404px] w-full rounded-3xl">
                    <img
                        src="assets/image/extern5.webp"
                        alt="Gallery image"
                        className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out w-full h-full"
                        onClick={() => openLightbox('assets/image/extern5.webp')}
                    />
                </div>
                <div className="h-[404px] w-full rounded-3xl">
                    <img
                        src="assets/image/extern3.webp"
                        alt="Gallery image"
                        className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out w-full h-full"
                        onClick={() => openLightbox('assets/image/extern3.webp')}
                    />
                </div>
                <div className="h-[404px] w-full rounded-3xl">
                    <img
                        src="assets/image/extern2.webp"
                        alt="Gallery image"
                        className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out w-full h-full"
                        onClick={() => openLightbox('assets/image/extern2.webp')}
                    />
                </div>
                <div className="h-[404px] w-full rounded-3xl">
                    <img
                        src="assets/image/extern4.webp"
                        alt="Gallery image"
                        className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out w-full h-full"
                        onClick={() => openLightbox('assets/image/extern4.webp')}
                    />
                </div>
            </div>
            <div className="md:col-span-8 md:w-[404px] lg:w-[277px] md:h-[840px] h-[404px] rounded-3xl">
                <img
                    src="assets/image/extern1.webp"
                    alt="Gallery image"
                    className="gallery-image object-cover object- rounded-3xl hover:grayscale transition-all duration-700 ease-in-out w-full h-full"
                    onClick={() => openLightbox('assets/image/extern1.webp')}
                />
            </div>
        </div>
    )
}

export default GalleryExterior