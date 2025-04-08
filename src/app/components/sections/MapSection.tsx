import { useTranslations } from 'next-intl';
import Map from '../Map';

const MapSection = () => {
  const t = useTranslations();
  return (
    <section
      className="flex flex-col items-center px-4 py-10 md:py-16 h-[600px] md:h-[800px]"
      id="map"
    >
      <p className="font-normal text-gray-600 text-lg md:text-xl text-center uppercase mb-6">
        {t('location')}
      </p>
      <h2 className="font-semibold text-gray-900 text-2xl md:text-4xl text-center leading-normal mb-14 italic">
        {t('locationTitle')}
      </h2>
      <Map />
    </section>
  );
};

export default MapSection;
