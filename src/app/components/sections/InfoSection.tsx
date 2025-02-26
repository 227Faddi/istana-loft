import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FaKey } from 'react-icons/fa';
import { LuHeartHandshake } from 'react-icons/lu';
import { TbBeach } from 'react-icons/tb';
import InfoItem from '../InfoItem';

const InfoSection = () => {
  const t = useTranslations();

  const content = [
    {
      icon: <FaKey size={25} />,
      title: t('checkIn'),
      text1: t('checkInText1'),
      text2: t('checkInText2'),
    },
    {
      icon: <TbBeach size={25} />,
      title: t('beach'),
      text1: t('beachText1'),
      text2: t('beachText2'),
    },
    {
      icon: <LuHeartHandshake size={25} />,
      title: t('relax'),
      text1: t('relaxText1'),
      text2: t('relaxText2'),
    },
  ];

  return (
    <section className="bg-white py-10 px-4 md:py-16 xl:relative">
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex flex-col xl:flex-row justify-end">
          <div className="relative hidden xl:block xl:absolute left-0 bottom-0 rounded-tr-3xl rounded-br-3xl overflow-hidden w-[650px] h-[798px] xl:max-w-[45%]">
            <Image
              alt="Feature img"
              src="/assets/images/info.webp"
              className="object-cover w-full h-full"
              fill
              sizes="(max-width: 1280px) 45vw, 650px"
            />
          </div>
          <div className="flex flex-col items-center xl:max-w-[55%]">
            <h2 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-6 italic">
              {t('infoTitle1')} <br /> {t('infoTitle2')}
            </h2>
            <p className="font-normal text-gray-600 text-md md:text-xl text-center mb-16">
              {t('infoSubTitle1')} <br /> {t('infoSubTitle2')}
            </p>
            <div>
              {content.map((item, index) => (
                <InfoItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  text1={item.text1}
                  text2={item.text2}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
