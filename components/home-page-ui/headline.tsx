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
    <div className="h-[16rem] mx-auto mt-20 overflow-x-hidden relative  ">
      <h2
        ref={textSlide}
        className="absolute  whitespace-nowrap z-4 xl:left-[-5%]  top-0 left-[-15%]  font-bold text-[13rem] uppercase text-[#EDEDED] max-sm:top-0 max-sm:text-[15rem] max-sm:left-[-80%] "
      >
        {title}
      </h2>
      <motion.p className="text-center max-sm:text-start relative z-7 mt-24   text-[2.1rem]   xl:text-[2.5rem] max-sm:px-10">
        {sentence1} <br className="max-sm:hidden" /> {sentence2}
      </motion.p>
    </div>
  );
};

export default Headline;
