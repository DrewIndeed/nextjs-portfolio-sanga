/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeroYellow } from '../assets/images';
import { siJavascript } from 'simple-icons/icons';

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center snap-center 
    space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]
    bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer
    transition-opacity duration-500 overflow-hidden
    "
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={HeroYellow.src}
        alt="Card picture"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Frontend Developer Intern</h4>
        <p className="font-bold text-2xl mt-1">New Ocean Inc.</p>
        <div className="flex space-x-2 my-2">
          <Image
            height="32"
            width="32"
            src={`https://cdn.simpleicons.org/${siJavascript.slug}`}
            alt="js icon"
          />
          <Image
            height="32"
            width="32"
            src={`https://cdn.simpleicons.org/${siJavascript.slug}`}
            alt="js icon"
          />
          <Image
            height="32"
            width="32"
            src={`https://cdn.simpleicons.org/${siJavascript.slug}`}
            alt="js icon"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started ...- Ended ...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points tutut tatat laololoia ammamam</li>
          <li>Summary points tutut tatat laololoia ammamam</li>
          <li>Summary points tutut tatat laololoia ammamam</li>
          <li>Summary points tutut tatat laololoia ammamam</li>
          <li>Summary points tutut tatat laololoia ammamam</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
