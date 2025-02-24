import Image from 'next/image';

type Props = {
  image: string;
  open: (path: string) => void;
};

const GalleryImage = ({ image, open }: Props) => {
  return (
    <Image
      src={`/assets/images/${image}`}
      alt="Gallery image"
      className="gallery-image object-cover rounded-3xl w-full h-full"
      onClick={() => open(`assets/images/${image}`)}
      fill
    />
  );
};

export default GalleryImage;
