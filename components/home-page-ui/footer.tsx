"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { descText, fadeIn } from "../animations/animations";
import Link from "next/link";

const Footer = ({ info, title }: { info: string; title: string }) => {
  const textSlide = useRef(null);
  const container = useRef(null);
  const isInView = useInView(textSlide);

  const sentence1 = info.split(" ").splice(0, 7).join(" ");
  const sentence2 = info.split(" ").splice(7).join(" ");
  return (
    <div
      ref={container}
      className="bg-black pt-10 rounded-t-3xl flex flex-col text-white relative  items-center overflow-hidden  "
    >
      <div className="mx-auto flex justify-center items-center h-[20rem] max-sm:h-[12rem] mt-10 xl:mt-28 overflow-x-hidden relative w-full ">
        <h2
          ref={textSlide}
          className="text-[#252525] max-sm:text-[16rem] opacity-40 text-[12rem] xl:text-[15rem] uppercase absolute font-[500] whitespace-nowrap"
        >
          {title}
        </h2>
        <motion.p className=" text-center mx-auto max-sm:text-center  z-7     max-sm:w-[100%] text-[2.1rem] leading-[3rem] max-sm:px-10 w-[50%] xl:w-[60%]">
          {info.split(" ").map((word, index) => {
            return (
              <motion.span
                key={index}
                className="leading-[2.8rem] ml-3 text-[2.1rem] xl:text-[2.5rem]  overflow-hidden inline-flex"
              >
                <motion.span
                  variants={descText}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                  className=""
                >
                  {word}
                </motion.span>
              </motion.span>
            );
          })}
        </motion.p>
      </div>
      <p className="text-[1.4rem] max-sm:mt-10 border-[1px] border-[#afafaf4e] px-6 py-5 rounded-xl ">
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
