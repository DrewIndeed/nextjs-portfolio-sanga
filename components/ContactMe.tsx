import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log(formData);
    const { name, email, subject, message } = formData;
    window.location.href = `mailto:truongan1730@gmail.com?subject=${subject}&body=Hi, my name is ${name}. ${message} (${email})`;
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative overflow-hidden text-left 
      md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl text-center font-semibold">
          I have got just what you need.{' '}
          <span className="decoration-[#F7BA0A]/50 underline">Let&rsquo;s talk</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+84 79 330 7576</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">truongan1730@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">123 Developer Lane</p>
          </div>
        </div>

        <form className="flex flex-col space-y-2 w-fit mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex space-x-2">
            <input {...register('name')} placeholder="Name" type="text" className="contactInput" />
            <input
              {...register('email')}
              placeholder="Email"
              type="text"
              className="contactInput"
            />
          </div>

          <input
            {...register('subject')}
            placeholder="Subject"
            type="text"
            className="contactInput"
          />

          <textarea {...register('message')} placeholder="Message" className="contactInput" />

          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-[#000] font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactMe;
