import { useTranslations } from 'next-intl';
import ReviewCard from '../ReviewCard';

const ReviewsSection = () => {
  const t = useTranslations();

  const content = [
    {
      author: 'Vanessa',
      comment: t('reviewsComment1'),
      photo:
        'https://a0.muscache.com/im/pictures/user/User-139798183/original/b1f5fa64-c021-4d85-b9c4-7f961d138dcb.jpeg?im_w=240',
      from: t('reviewsFrom'),
    },
    {
      author: 'Kevin',
      comment: t('reviewsComment2'),
      photo:
        'https://a0.muscache.com/im/pictures/user/44e9dcf4-0458-48d7-9879-e2ba50d525f5.jpg?im_w=240',
      from: t('reviewsFrom'),
    },
    {
      author: 'Sébastien',
      comment: t('reviewsComment3'),
      photo:
        'https://a0.muscache.com/im/pictures/user/59cedcdb-a4c1-470c-9d91-92b47e7d6b0c.jpg?im_w=240',
      from: t('reviewsFrom'),
    },
  ];
  return (
    <section className="bg-white py-10 md:py-16" id="reviews">
      <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
        <p className="font-normal text-gray-600 text-lg md:text-xl text-center uppercase mb-6">
          {t('reviews')}
        </p>
        <h2 className="font-semibold text-gray-900 text-2xl md:text-4xl text-center leading-normal mb-14 italic">
          {t('reviewsTitle1')} <br /> {t('reviewsTitle2')}
        </h2>
        <div className="flex flex-col lg:flex-row gap-10">
          {content.map((item, index) => (
            <ReviewCard
              key={index}
              author={item.author}
              comment={item.comment}
              photo={item.photo}
              from={item.from}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
