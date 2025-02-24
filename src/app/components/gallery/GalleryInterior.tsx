import GalleryImage from './GalleryImage';

type Props = {
  openLightbox: (path: string) => void;
};

const GalleryInterior = ({ openLightbox }: Props) => {
  return (
    <div className="flex flex-col mb-10">
      <div className="grid md:grid-cols-12 gap-8 lg:mb-11 mb-7">
        <div className="relative md:col-span-8 md:h-[404px] h-[277px] w-full rounded-3xl">
          <GalleryImage image="intern1.webp" openLightbox={openLightbox} />
        </div>
        <div className="relative md:col-span-4 md:h-[404px] h-[277px] w-full rounded-3xl">
          <GalleryImage image="intern2.webp" openLightbox={openLightbox} />
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        <div className="relative h-[404px] w-full rounded-3xl">
          <GalleryImage image="intern3.webp" openLightbox={openLightbox} />
        </div>
        <div className="relative h-[404px] w-full rounded-3xl">
          <GalleryImage image="intern4.webp" openLightbox={openLightbox} />
        </div>
        <div className="relative h-[404px] w-full rounded-3xl">
          <GalleryImage image="intern5.webp" openLightbox={openLightbox} />
        </div>
      </div>
    </div>
  );
};

export default GalleryInterior;
