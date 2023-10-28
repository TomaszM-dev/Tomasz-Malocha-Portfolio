"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { fadeIn } from "../animations/animations";

const Footer = ({ info, title }: { info: string; title: string }) => {
  const textSlide = useRef(null);
  const container = useRef(null);

  const sentence1 = info.split(" ").splice(0, 7).join(" ");
  const sentence2 = info.split(" ").splice(7).join(" ");
  return (
    <div
      ref={container}
      className="bg-black pt-10 rounded-t-3xl flex flex-col text-white relative whitespace-nowrap items-center overflow-hidden "
    >
      <motion.h2
        ref={textSlide}
        className=" text-[#383737] opacity-40 whitespace-nowrap z-10  mx-auto top-0 left-[0%]  font-bold text-[14rem] uppercase  "
      >
        {title}
      </motion.h2>
      <motion.p
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        exit="exit"
        className="absolute top-[9.7rem] z-10 text-[2rem] w-full text-center whitespace-nowrap"
      >
        {sentence1} <br /> {sentence2}
      </motion.p>
      <p className="text-[1.4rem] border-[1px] border-[#afafaf4e] px-6 py-5 rounded-xl ">
        tomekmalocha@gmail.com
      </p>
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView={"show"}
        exit="exit"
        className="flex gap-20 text-[2rem] mt-20 "
      >
        <p>Instagram</p>
        <p>Github</p>
        <p>LinkedIn</p>
        <p>+48 512 740 494</p>
      </motion.div>
      <div className="mt-16 w-[93%] h-[1px]  mx-auto  bg-[#afafaf4e]"></div>
      <div className="flex justify-between w-[93%] mx-auto text-[1.3rem] my-10">
        <p>Code By TomaszM-dev</p>
        <div className="flex gap-4 text-[1.3rem]">
          <BsGithub />
          <BsInstagram />
          <BsLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
