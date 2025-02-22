'use client';

import { motion } from 'framer-motion';
const FaqItem = ({ title, text, index }) => {
  const key = index;

  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: () => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * key,
      },
    }),
  };

  return (
    <motion.div
      className="flex items-start"
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-green-700 rounded-full">
        <span className="text-lg font-semibold text-white">?</span>
      </div>
      <div className="ml-4">
        <p className="text-xl font-semibold">{title}</p>
        <p className="mt-4 text-base text-gray-600">{text}</p>
      </div>
    </motion.div>
  );
};

export default FaqItem;
