import GalleryImage from './GalleryImage';

const GalleryExterior = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-10">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 flex-1">
        <div className="relative h-[404px] w-full rounded-3xl">
          <GalleryImage image="extern5.webp" />
        </div>
        <div className="relative h-[404px] w-full rounded-3xl">
          <GalleryImage image="extern3.webp" />
        </div>
        <div className="relative h-[404px] w-full rounded-3xl">
          <GalleryImage image="extern2.webp" />
        </div>
        <div className="relative h-[404px] w-full rounded-3xl">
          <GalleryImage image="extern4.webp" />
        </div>
      </div>
      <div className="relative md:w-[404px] lg:min-w-[277px] md:h-[840px] h-[404px] rounded-3xl">
        <GalleryImage image="extern1.webp" />
      </div>
    </div>
  );
};

export default GalleryExterior;
