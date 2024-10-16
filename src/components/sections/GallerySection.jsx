import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import GalleryExterior from '../GalleryExterior';
import GalleryInterior from '../GalleryInterior';

const GallerySection = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
  
    // Open lightbox and set the selected image
    const openLightbox = (imageSrc) => {
      setCurrentImage(imageSrc);
      setLightboxOpen(true);
    };
  
    // Close lightbox
    const closeLightbox = () => {
      setLightboxOpen(false);
    };

    const zoom = (
        <div
            className='lightbox fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-8'
            onClick={closeLightbox}
        >
            <span
                className="close text-white text-3xl absolute top-5 right-10 cursor-pointer"
                onClick={closeLightbox}
            >
                &times;
            </span>
            <img
                src={currentImage}
                alt="Lightbox"
                className="lightbox-image rounded-3xl max-h-[600px] transition-transform duration-500 ease-in-out"
            />
        </div>
    )

    return (
        <section className="bg-white py-10 md:py-16" id='gallery'>
            <div className="container max-w-screen-xl mx-auto px-4">
                <p className="font-normal text-gray-400 text-lg md:text-xl text-center uppercase mb-6">
                    Gallery
                </p>
                <h1 className="font-semibold text-gray-900 text-4xl text-center mb-10 italic">
                    Step Into Paradise
                </h1>
                <Tabs       
                    selectedIndex={selectedIndex}
                    onSelect={(index) => setSelectedIndex(index)}
                    selectedTabClassName="bg-gray-200 selected-tab"
                >
                    <TabList className="flex items-center justify-center text-center space-x-10 lg:space-x-20 mb-12">
                        <Tab className="px-6 py-2 text-gray-900 font-normal text-xl rounded-lg hover:bg-gray-200 hover:text-gray-400 transition ease-in-out duration-500">
                            Exterior
                        </Tab>
                        <Tab className="px-6 py-2 text-gray-900 font-normal text-xl rounded-lg hover:bg-gray-200 hover:text-gray-400 transition ease-in-out duration-500">
                            Interior
                        </Tab>
                    </TabList>
                    <TabPanel 
                        className={`transition-opacity duration-[2500ms] ease-in-out ${selectedIndex === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                    >
                        <GalleryExterior openLightbox={openLightbox}/>
                    </TabPanel>
                    <TabPanel
                        className={`transition-opacity duration-[2500ms] ease-in-out ${selectedIndex === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                    >
                        <GalleryInterior openLightbox={openLightbox}/>
                        {/* Lightbox */}
                    </TabPanel>
                </Tabs>
            </div>
            {lightboxOpen && zoom}
        </section>
    )
}

export default GallerySection