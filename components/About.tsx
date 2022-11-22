import React from 'react';
import { motion } from 'framer-motion';
import { AboutImg } from '../assets/images';

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row lg:px-28 xl:px-10 max-w-7xl p-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mt-20 md:mr-10 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-[300px] md:h-[375px] xl:w-[475px] xl:h-[550px]"
        src={AboutImg.src}
        alt="Picture above about description"
      />

      <div className="space-y-4 xl:space-y-8 md:pt-20 xl:pt-0 overflow-scroll max-h-[600px]">
        <h4 className="text-xl md:text-base lg:text-2xl xl:text-4xl font-semibold  xl:mt-10">
          Get to know <span className="underline decoration-[#F7AB0A]/50">a little bit more</span>{' '}
          about me
        </h4>
        <p className="break-words text-justify text-sm md:text-[14px] lg:text-[16px] xl:text-2xl">
          The happiest way I spend my day offs, sometimes, just sometimes I promise, is to visit my
          web pages where I enjoy applying responsive design principles, expand and shrink them back
          and forth a dozen of times cause it is just magical when everything still looks so nice on
          mobile screen. My specialties include quickly learning new skills and programming
          languages, problem solving and responsive design principles. I have put under my belt:
          HTML, CSS, JavaScript (ES5/ES6/ES7), Bootstrap, TailwindCSS, ReactJS, React Native,
          NextJS, ChakraUI, Webpack and Redux / Redux Toolkit. I also have started learning MongoDB,
          ExpressJS and GraphQL. I am still open to grab new frameworks and design principles to let
          my coding passion live on.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
