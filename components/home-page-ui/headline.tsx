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
  const sentence1 = info.split(" ").splice(0, 7).join(" ");
  const sentence2 = info.split(" ").splice(7).join(" ");

  return (
    <div className=" mx-auto flex justify-center items-center h-[20rem] max-sm:h-[12rem] mt-10 xl:mt-28 overflow-x-hidden relative  ">
      <h2
        ref={textSlide}
        className="absolute  whitespace-nowrap z-4 xl:left-[-5%] top-[-1] lg:top-[1]  left-[-15%]  font-bold xl:text-[15rem] text-[12rem] uppercase text-[#EDEDED] max-sm:top-[-4] max-sm:text-[18rem] max-sm:left-[-80%]  "
      >
        {title}
      </h2>
      <motion.p className="text-center mx-auto max-sm:text-start  z-7     max-sm:w-[100%] text-[2.1rem] leading-[3rem] max-sm:px-10 w-[50%] xl:w-[60%] ">
        {info.split(" ").map((word, index) => {
          return (
            <motion.span
              key={index}
              className="leading-[2.8rem]  text-[2.1rem] xl:text-[2.5rem] relative overflow-hidden inline-flex ml-1"
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
  );
};

export default Headline;
