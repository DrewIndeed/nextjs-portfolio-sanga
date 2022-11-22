import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center justify-around"
      >
        <SocialIcon
          style={{ height: 60, width: 60 }}
          url="https://www.linkedin.com/in/truonganln/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          style={{ height: 60, width: 60 }}
          url="https://github.com/DrewIndeed"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          style={{ height: 60, width: 60 }}
          url="https://www.facebook.com/andrew.lenguyen.33/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          style={{ height: 50, width: 50 }}
          url="https://t.me/DrewIndeed/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          style={{ marginLeft: 10, height: 40, width: 40 }}
          url="https://slack.com/app_redirect?channel=U03N0UZ45QE"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          style={{ height: 65, width: 65 }}
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
      </motion.div>
    </header>
  );
};

export default Header;
