const GalleryImage = ({ image, open }) => {
  return (
    <img
      src={`assets/image/${image}`}
      alt="Gallery image"
      loading="lazy"
      className="gallery-image object-cover rounded-3xl w-full h-full"
      onClick={() => open(`assets/image/${image}`)}
    />
  );
};

export default GalleryImage;
