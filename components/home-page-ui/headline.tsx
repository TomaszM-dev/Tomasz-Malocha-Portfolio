"use client";

import gsap from "gsap";

import { describe } from "node:test";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { descText } from "../animations/animations";

const Headline = ({ title, info }: { title: string; info: string }) => {
  const textSlide = useRef(null);
  const container = useRef(null);
  const isInView = useInView(textSlide);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimations();
  }, []);

  const createAnimations = () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,

        scrub: 0.1,
        start: `-40% 40%`,
        end: `bottom 83%`,
      },

      ease: "none",
      stagger: 0.01,
    });
    tl.from(textSlide.current, {
      x: "-700",
    });
    tl.to(textSlide.current, {
      x: "1200",
    });
  };

  const isMobile = window.innerWidth < 500;

  return (
    <>
      {isMobile && (
        <div className="w-full my-14 font-[500]  tracking-tighter text-[2.7rem] px-4 ">
          My best Projects ...
        </div>
      )}
      {!isMobile && (
        <div className=" mx-auto flex justify-center items-center h-[20rem]   mt-10 xl:mt-28 overflow-hidden relative  max-sm:mt-[8rem]">
          <h2
            ref={textSlide}
            className="absolute  whitespace-nowrap z-4 xl:left-[-5%] top-[-1] lg:top-[1]  left-[-15%]   font-[600] xl:text-[15rem] text-[12rem] uppercase text-[#EDEDED] max-sm:top-[-3] max-sm:text-[18rem] max-sm:left-[-80%]  "
          >
            {title}
          </h2>
          <motion.p className="text-center mx-auto max-sm:text-start  z-7     max-sm:w-[100%] text-[2.1rem] leading-[2.5rem] max-sm:px-2 w-[65%] xl:w-[60%] max-sm:mt-10  ">
            {info.split(" ").map((word, index) => {
              return (
                <motion.span
                  key={index}
                  className="leading-[2.8rem]   max-sm:leading-[2rem]  text-[2.1rem]  xl:text-[2.2rem] relative overflow-hidden inline-flex ml-2 max-lg:text-[1.9rem] max-sm:text-[1.7rem]"
                >
                  <motion.span
                    variants={descText()}
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
      )}
    </>
  );
};

export default Headline;
