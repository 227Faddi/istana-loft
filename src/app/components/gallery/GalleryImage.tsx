'use client';

import Image from 'next/image';

type Props = {
  image: string;
  openLightbox: (path: string) => void;
};

const GalleryImage = ({ image, openLightbox }: Props) => {
  return (
    <Image
      src={`/assets/images/${image}`}
      alt="Gallery image"
      className="gallery-image object-cover rounded-3xl w-full h-full"
      onClick={() => openLightbox(`assets/images/${image}`)}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      priority={false}
    />
  );
};

export default GalleryImage;
