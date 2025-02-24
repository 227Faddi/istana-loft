'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

type Props = {
  author: string;
  comment: string;
  photo: string;
  index: number;
};

const ReviewCard = ({ author, comment, photo, index }: Props) => {
  const t = useTranslations();
  return (
    <motion.div
      className="flex flex-col justify-between rounded-3xl border-2 border-neutral-800 bg-white text-gray-700 p-8 shadow-sm max-w-sm mx-auto"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.1 * index,
        },
      }}
      viewport={{
        once: true,
      }}
    >
      <div className=" flex gap-2">
        <FaStar className="text-yellow-300" />
        <FaStar className="text-yellow-300" />
        <FaStar className="text-yellow-300" />
        <FaStar className="text-yellow-300" />
        <FaStar className="text-yellow-300" />
      </div>
      <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide">
        {comment}
      </p>
      <div className="mt-6 flex items-center gap-6 ">
        <div className="w-10 h-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
          <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800 w-10 h-10">
            <Image
              alt="profile image of reviewer"
              loading="lazy"
              src={photo}
              className="inline-block object-cover w-full h-full"
              style={{ color: 'transparent' }}
              width={40}
              height={40}
            />
          </div>
        </div>
        <div>
          <p className="leading-relaxed font-bold tracking-wide text-black-200">
            {author}
          </p>
          <a
            href={`${process.env.AIRBNB_URL}/reviews`}
            className="text-xs font-bold leading-relaxed tracking-wide text-green-700"
            target="_blank"
          >
            {t('reviewsFrom')}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
