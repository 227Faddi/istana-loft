'use client';

import { motion } from 'motion/react';
import { ReactElement } from 'react';

type Props = {
  icon: ReactElement;
  title: string;
  text1: string;
  text2: string;
  index: number;
};

const InfoItem = ({ icon, title, text1, text2, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.1 * index,
          duration: 1.5,
        },
      }}
      viewport={{
        once: true,
      }}
      className="flex flex-col md:flex-row justify-center md:justify-start gap-4 mb-20"
    >
      <div className="px-8 h-20 mx-auto md:mx-0  border-4 border-green-700 rounded-lg flex items-center justify-center mb-5 md:mb-0">
        {icon}
      </div>
      <div className="text-center md:text-left">
        <h3 className="font-semibold text-gray-900 text-2xl mb-2">{title}</h3>
        <p className="font-normal text-gray-600 text-xl leading-relaxed">
          {text1} <br /> {text2}
        </p>
      </div>
    </motion.div>
  );
};

export default InfoItem;
