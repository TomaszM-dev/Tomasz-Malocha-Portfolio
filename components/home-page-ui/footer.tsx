"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { fadeIn } from "../animations/animations";
import Link from "next/link";

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
        className="  text-[#383737] opacity-40 whitespace-nowrap z-4  mx-auto top-0 left-[0%]  font-bold text-[14rem] uppercase  "
      >
        {title}
      </motion.h2>
      <motion.p
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        exit="exit"
        className="absolute top-[9.7rem] z-4 text-[1.9rem] w-full text-center whitespace-nowrap"
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
        className="max-sm:hidden flex gap-20 text-[1.5rem] mt-20 "
      >
        <Link target={"_blank"} href="https://www.instagram.com/tommek.23/">
          Instagram
        </Link>
        <Link target={"_blank"} href="https://github.com/TomaszM-dev">
          Github
        </Link>
        <Link
          target={"_blank"}
          href="https://www.linkedin.com/in/tomaszmalocha/"
        >
          LinkedIn
        </Link>
        <p>+48 512 740 494</p>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView={"show"}
        exit="exit"
        className="sm:hidden flex gap-20 max-sm:gap-8 text-[1.5rem] mt-20 "
      >
        {" "}
        <Link target={"_blank"} href="https://www.instagram.com/tommek.23/">
          <BsInstagram />
        </Link>
        <Link target={"_blank"} href="https://github.com/TomaszM-dev">
          <BsGithub />
        </Link>
        <Link
          target={"_blank"}
          href="https://www.linkedin.com/in/tomaszmalocha/"
        >
          <BsLinkedin />
        </Link>
      </motion.div>
      <div className="mt-16 w-[93%] h-[1px]  mx-auto  bg-[#afafaf4e]"></div>
      <div className="flex max-sm:flex-col-reverse max-sm:justify-center max-sm:items-center max-sm:gap-8 justify-between text-[#7b7b7b] w-[93%] mx-auto text-[1.2rem] my-10">
        <p className="">
          Code By TomaszM-dev Inspiration: dennissnellenberg.com
        </p>
        <div className="max-sm:hidden flex gap-4 text-[1.3rem]">
          <BsGithub />
          <BsInstagram />
          <BsLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
