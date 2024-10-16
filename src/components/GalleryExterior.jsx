import GalleryImage from "./GalleryImage"

const GalleryExterior = ({ openLightbox }) => {
    return (
        <div className="gallery flex flex-col md:flex-row gap-8 mb-10">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                <div className="h-[404px] w-full rounded-3xl">
                    <GalleryImage 
                        image='extern5.webp'
                        open={ openLightbox }
                    />
                </div>
                <div className="h-[404px] w-full rounded-3xl">
                    <GalleryImage 
                        image='extern3.webp'
                        open={ openLightbox }
                    />
                </div>
                <div className="h-[404px] w-full rounded-3xl">
                    <GalleryImage 
                        image='extern2.webp'
                        open={ openLightbox }
                    />
                </div>
                <div className="h-[404px] w-full rounded-3xl">
                    <GalleryImage 
                        image='extern4.webp'
                        open={ openLightbox }
                    />
                </div>
            </div>
            <div className="md:col-span-8 md:w-[404px] lg:w-[277px] md:h-[840px] h-[404px] rounded-3xl">
                <GalleryImage 
                    image='extern1.webp'
                    open={ openLightbox }
                />
            </div>
        </div>
    )
}

export default GalleryExterior