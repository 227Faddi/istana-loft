import GalleryImage from './GalleryImage';

const GalleryInterior = ({ openLightbox }) => {
  return (
    <div className="gallery">
      <div className="flex flex-col mb-10">
        <div className="grid md:grid-cols-12 gap-8 lg:mb-11 mb-7">
          <div className="md:col-span-8 md:h-[404px] h-[277px] w-full rounded-3xl">
            <GalleryImage image="intern1.webp" open={openLightbox} />
          </div>
          <div className="md:col-span-4 md:h-[404px] h-[277px] w-full rounded-3xl">
            <GalleryImage image="intern2.webp" open={openLightbox} />
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="h-[404px] w-full rounded-3xl">
            <GalleryImage image="intern3.webp" open={openLightbox} />
          </div>
          <div className="h-[404px] w-full rounded-3xl">
            <GalleryImage image="intern4.webp" open={openLightbox} />
          </div>
          <div className="h-[404px] w-full rounded-3xl">
            <GalleryImage image="intern5.webp" open={openLightbox} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryInterior;
