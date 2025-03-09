import Image from 'next/image';

type Props = {
  image: string;
};

const GalleryImage = ({ image }: Props) => {
  return (
    <Image
      src={`/assets/images/${image}`}
      alt="Gallery image"
      className="gallery-image object-cover rounded-3xl w-full h-full"
      fill
      sizes="(max-width: 640px) 100vw, 
      (max-width: 1024px) 50vw, 
      33vw"
      priority={false}
    />
  );
};

export default GalleryImage;
