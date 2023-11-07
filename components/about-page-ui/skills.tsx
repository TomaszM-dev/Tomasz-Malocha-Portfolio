"use client";
import React, { useEffect, useRef, useState } from "react";
import { BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import { descText, fadeIn, upDesc } from "../animations/animations";

const Skills = () => {
  const textSlide = useRef(null);
  const isInView = useInView(textSlide);
  const headline = "I can fluenty work with ...";
  const phrase =
    "Next.js, React.js, TypeScript, Tailwind CSS, JavaScript, CSS / Sass / Styled-Components, HTML, Framer Motion, Lottie Animations, Chart.js, React Chart, Bootstrap, Swiper, react-dom, react-router, react-intersection-observer, SWR, hooks,";
  const phrase2 =
    "Prisma, Stripe, bcrypt, Prisma Client, Zustand, React-Reducer, React-Chart, Framer Motion, Lottie Animations, Locomotive Scroll, GSAP";
  const phrase3 =
    "Next-Auth, micro, next, figma, GitHub, Vercel, Netlify, WordPress-CLI, SEO optimization, Railway, Clerk, Email.js, ZOD, clsx, ";

  return (
    <div className="bg-[#f3f3f3] max-sm:mt-10 ">
      <div className="max-w-[1700px] flex flex-col max-sm:px-4 gap-10 px-10 pt-28 pb-20  w-full  mx-auto max-sm:pt-10 max-sm:gap-1">
        <motion.h2
          ref={textSlide}
          viewport={{ once: true }}
          variants={upDesc}
          initial="initial"
          animate="animate"
          exit="exit"
          className="tracking-tighter text-[3.3rem] max-sm:text-[2.4rem] font-[500]"
        >
          {headline.split(" ").map((word, index) => {
            return (
              <motion.span
                key={index}
                className="transition-all duration-0 backface text-[3.4rem] max-sm:text-[2.4rem] max-sm:font-[400] font-[400] xl:text-[3.5rem] leading-[3.4rem]  relative overflow-hidden inline-flex ml-2"
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
        </motion.h2>
        <div className="flex gap-28 mt-10 max-lg:flex-col max-lg:gap-14 max-lg:mb-14 ">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="transition-all duration-0 backface w-[33%] h-96  flex flex-col max-lg:w-[90%] max-lg:mx-auto max-lg:h-fit"
          >
            <p className="text-[#7C7B7B] text-[1.1rem] mb-1">01</p>
            <div className="bg-[#dedcdc] w-full h-[1px] mb-7"></div>
            <h2 className="xl:text-[1.8rem] text-[1.7rem]  mb-7">
              Front-end tools
            </h2>
            <p className="xl:text-[1.2rem] text-[1.1rem] font-[200] text-[#686868]">
              {" "}
              {phrase}
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="transition-all duration-0 backface w-[33%] h-96  flex flex-col  max-lg:w-[90%] max-lg:mx-auto max-lg:h-fit"
          >
            <p className="text-[#7C7B7B] text-[1.1rem] mb-1">02</p>
            <div className="bg-[#dedcdc] w-full h-[1px] mb-7"></div>
            <h2 className="xl:text-[1.8rem] text-[1.7rem] mb-7">Frameworks</h2>
            <p className="xl:text-[1.2rem] text-[1.1rem] font-[200] text-[#686868]">
              {" "}
              {phrase3}
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="transition-all duration-0 backface w-[33%] h-96  flex flex-col  max-lg:w-[90%] max-lg:mx-auto max-lg:h-fit"
          >
            <p className="text-[#7C7B7B] text-[1.1rem] mb-1">03</p>
            <div className="bg-[#dedcdc] w-full h-[1px] mb-7"></div>
            <h2 className="xl:text-[1.8rem] text-[1.7rem] mb-7">Libraries</h2>
            <p className="xl:text-[1.2rem] text-[1.1rem] font-[200] text-[#686868]">
              {" "}
              {phrase2}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
