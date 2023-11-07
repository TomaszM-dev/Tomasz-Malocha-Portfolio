"use client";
import React, { useLayoutEffect } from "react";
import Image from "next/image";
import hero from "public/images/hero/hero.png";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import { BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";
import { GiDiamonds } from "react-icons/gi";

import { motion } from "framer-motion";
import { upDesc, upText } from "../animations/animations";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Hero = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animation);
    xPercent += 0.1 * direction;
  };

  return (
    <div className="w-full h-[92vh] max-sm:h-[80vh] bg-[#C8C6C9] relative flex overflow-hidden">
      <Image
        fill
        src={hero}
        quality={100}
        priority={true}
        alt=""
        className="object-cover max-w-[1700px] mx-auto "
      />
      <motion.div
        variants={upText}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ once: true }}
        className="absolute bottom-10 transition-all duration-0 backface   max-md:mb-60    "
      >
        <div
          ref={slider}
          className="m-0 flex text-[11rem] xl:text-[13rem] whitespace-nowrap    text-white  font-[400] tracking-tight relative"
        >
          <p className="relative m-0 flex items-center" ref={firstText}>
            Tomasz Malocha <span className="text-[5rem] mx-10">●</span>
          </p>
          <p ref={secondText} className="absolute  left-[100%] ">
            Tomasz Malocha
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={upDesc}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ once: true }}
        className="z-1 transition-all duration-0 backface  whitespace-nowrap mt-[17rem] xl:mt-[17rem] text-white h-full xl:w-[800px]  w-[740px] flex justify-between mx-auto max-md:items-end max-md:mt-0 max-md:px-10  max-sm:px-6  "
      >
        <div
          data-scroll
          data-scroll-speed="0.2"
          className=" flex flex-col text-[1.4rem] xl:text-[1.7rem]"
        >
          <BsArrowDownRight className=" md:hidden  self-start mb-7 max-sm:mb-4 relative" />
          <BsArrowDownLeft className="text[1.4rem] max-md:hidden  self-end mb-7 max-sm:mb-4 relative" />
          <h1 className="text-[1.6rem] xl:text-[1.7rem] font-[300] max-md:mb-20 z-4 relative max-sm:font-[200] max-sm:mb-10 max-sm:text-[1.9rem] ">
            Next.js Full Stack <br /> Developer
          </h1>
        </div>
        <div
          data-scroll
          data-scroll-speed="0.2"
          className="max-sm:hidden cursor-pointer bg-black w-fit h-fit text-white font-[200] text-[1.2rem] px-8 py-9 rounded-[50%] mt-8  ml-10 "
        >
          <h2 className="">
            Based In <br /> Poland
          </h2>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
