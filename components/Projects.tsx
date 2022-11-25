import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const Projects = (props: Props) => {
  const pros = [1, 2, 3];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
      <div
        className="w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
                  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7BA0A]/80"
      >
        {pros.map((p, i) => (
          <div
            key={`proj-${p + i}`}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="rounded-lg w-[400px] h-[550px]"
              src="https://i.pinimg.com/originals/6b/1f/01/6b1f01f8e40df830f70c708ae240c819.png"
              alt="project dummy picture"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl text-center font-semibold">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {pros.length}:
                </span>{' '}
                UPS Clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente consectetur
                consequuntur esse vitae nam minima dolor, assumenda necessitatibus a, facere eum
                expedita repellendus repudiandae dolore! Aliquid tempore et dolores vero. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Nisi in perferendis ducimus ab
                quae, nobis quod doloribus, similique eligendi aliquid, commodi maiores. Maxime
                veniam fugit modi harum aliquid hic tempore.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
