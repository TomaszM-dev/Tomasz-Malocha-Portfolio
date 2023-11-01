"use client";
import React, { useLayoutEffect } from "react";
import Image from "next/image";
import hero from "public/images/hero/hero.png";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import { BsArrowDownLeft } from "react-icons/bs";
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
      x: "-400px",
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
    <div className="w-full h-[92vh] bg-[#C8C6C9] relative flex overflow-hidden ">
      <Image
        src={hero}
        fill
        quality={100}
        priority={true}
        alt=""
        className="object-cover max-w-[1400px] mx-auto "
      />
      <motion.div
        variants={upText}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ once: true }}
        className="absolute bottom-16  max-md:mb-60  whitespace-nowrap  max"
      >
        <div
          ref={slider}
          className="m-0 flex xl:text-[13rem]   text-white text-[11rem] font-[600] relative"
        >
          <p ref={firstText}>Tomasz Malocha -</p>
          <p ref={secondText} className="absolute left-[100%]">
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
        className="z-1  whitespace-nowrap mt-[17rem] xl:mt-[14rem] text-white h-full xl:w-[900px]  w-[740px] flex justify-between mx-auto max-md:items-end max-md:mt-0 max-md:px-10  "
      >
        <div data-scroll data-scroll-speed="0.2" className="flex flex-col">
          <BsArrowDownLeft className="text-[1.7rem]  self-end mb-7" />
          <h1 className="text-[1.5rem] max-md:text-[2rem] xl:text-[2rem] max-md:mb-10 ">
            Next.js Full Stack <br /> Developer
          </h1>
        </div>
        <div
          data-scroll
          data-scroll-speed="0.2"
          className="mt-5 xl:text-[1.4rem] bg-black/90 flex items-center justify-center rounded-full w-fit h-fit px-8 py-9 max-md:hidden "
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
