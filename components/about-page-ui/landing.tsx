import Image from "next/image";
import React from "react";
import about from "public/images/hero/about-hero.png";
import { BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import me from "public/images/hero/me.png";
import { motion } from "framer-motion";
import { upDesc } from "../animations/animations";

const Landing = () => {
  return (
    <div className="w-[100%] xl:w-[95%] max-w-[1900px] mt-[11rem]  mx-auto px-28 max-md:px-10  flex flex-col justify-center max-sm:mt-[8rem] my-[6rem] max-sm:my-0 max-sm:px-6 ">
      <motion.h1
        variants={upDesc}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        className="text-[4.6rem] font-[300] w-[44rem] xl:text-[5.6rem] xl:w-[55rem] leading-[4.6rem] xl:leading-[5.5rem] tracking-tighter max-md:text-[4rem]  max-sm:leading-[3.4rem] max-sm:text-[3.2rem]  max-sm:w-full"
      >
        I want to give you a glimpse into my world
      </motion.h1>
      <motion.div
        viewport={{ once: true }}
        variants={upDesc}
        initial="initial"
        whileInView="animate"
        exit="exit"
        className=" mt-20  flex flex-col max-sm:mt-10"
      >
        <div className="flex flex-col mt-10  max-sm:mt-14 w-[100%] h-[1px] bg-[#cbcbcb]"></div>
        <div
          data-scroll
          data-scroll-speed="0.1"
          className="  cursor-pointer bg-black w-fit h-fit text-white font-[200] text-[2.5rem]  max-sm:text-[2rem] max-sm:px-12 max-sm:py-12 max-sm:mt-[-4rem] px-14 py-14 rounded-[50%] mt-[-5rem] self-end  mr-10 "
        >
          <BsInstagram />
        </div>
      </motion.div>
      <div />
    </div>
  );
};

export default Landing;
