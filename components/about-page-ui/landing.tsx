import Image from "next/image";
import React from "react";
import about from "public/images/hero/about-hero.png";
import { BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

import { motion } from "framer-motion";
import { upDesc } from "../animations/animations";

const Landing = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="0.2"
      className="w-[100%]  mt-[11rem] my-[10rem]  mx-auto px-28 max-md:px-10  flex flex-col justify-center"
    >
      <motion.h1
        variants={upDesc}
        viewport={{ once: true }}
        initial="initial"
        whileInView="animate"
        exit="exit"
        className="text-[4.5rem] w-[45rem] xl:text-[5.5rem] xl:w-[60rem] leading-[4.6rem] font-[600] max-md:text-[4rem] max-sm:w-fit max-sm:leading-[3.8rem] max-sm:text-[4.1rem]"
      >
        I want to give you a glimpse into my world
      </motion.h1>
      <motion.div
        viewport={{ once: true }}
        variants={upDesc}
        initial="initial"
        whileInView="animate"
        exit="exit"
        className=" mt-20 "
      >
        <div className="flex flex-col  w-[40%]">
          <p className="text-[1.4rem] uppercase ">My socials</p>
          <div className="flex gap-4 text-[1.8rem] mt-2 text-[#7C7B7B] ">
            <BsGithub />
            <BsInstagram />
            <BsLinkedin />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
