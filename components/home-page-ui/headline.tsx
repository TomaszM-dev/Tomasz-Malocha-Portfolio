"use client";

import gsap from "gsap";

import { describe } from "node:test";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Headline = ({ title, info }: { title: string; info: string }) => {
  const textSlide = useRef(null);
  const container = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimations();
  }, []);

  const createAnimations = () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,

        scrub: 0.1,
        start: `-50% 80%`,
        end: `bottom 83%`,
      },

      ease: "none",
      stagger: 0.01,
    });
    tl.from(textSlide.current, {
      x: "-200",
    });
    tl.to(textSlide.current, {
      x: "1200",
    });
  };
  const sentence1 = info.split(" ").splice(0, 7).join(" ");
  const sentence2 = info.split(" ").splice(7).join(" ");

  return (
    <div className="h-[16rem] mt-20 overflow-x-hidden relative ">
      <h2
        ref={textSlide}
        className="absolute  whitespace-nowrap z-4  top-0 left-[-15%]  font-bold text-[13rem] uppercase text-[#EDEDED] "
      >
        {title}
      </h2>
      <motion.p className="absolute z-4 top-24 text-[2rem] left-[30%] whitespace-nowrap">
        {sentence1} <br /> {sentence2}
      </motion.p>
    </div>
  );
};

export default Headline;
