import React from 'react';
import { motion } from 'framer-motion';
import { siJavascript } from 'simple-icons/icons';

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      {/* image content */}
      <motion.img
        initial={{ opacity: 0, x: directionLeft ? -200 : 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32
        filter group-hover:grayscale transition duration-300 ease-in-out"
        src={`https://cdn.simpleicons.org/${siJavascript.slug}`}
        alt="js icon"
      />

      {/* hover % */}
      <div
        className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-[#fff] transition duration-300 ease-in-out 
      w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-[#000] opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
