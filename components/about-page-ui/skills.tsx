"use client";
import React, { useEffect, useState } from "react";
import { BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn, upDesc } from "../animations/animations";

const Skills = () => {
  const phrase =
    "Next.js, React.js, TypeScript, Tailwind CSS, JavaScript, CSS / Sass / Styled-Components, HTML, Framer Motion, Lottie Animations, Chart.js, React Chart, Bootstrap, Swiper, react-dom, react-router, react-intersection-observer, SWR, hooks,";
  const phrase2 =
    "Prisma, Stripe, bcrypt, Prisma Client, Zustand, React-Reducer, React-Chart, Framer Motion, Lottie Animations, Locomotive Scroll, GSAP";
  const phrase3 =
    "Next-Auth, micro, next, figma, GitHub, Vercel, Netlify, WordPress-CLI, SEO optimization, Railway, Clerk, Email.js, ZOD, clsx, ";

  return (
    <div className="bg-[#f3f3f3] rounded-3xl">
      <div className="flex flex-col gap-30 px-10 pt-40 pb-28  w-full max-w-[1800px] mx-auto">
        <motion.h2
          viewport={{ once: true }}
          variants={upDesc}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-[3.3rem] font-bold"
        >
          I can fluently work with ...
        </motion.h2>
        <div className="flex gap-28 mt-10">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-[33%] h-96  flex flex-col "
          >
            <p className="text-[#7C7B7B] text-[1.4rem] mb-1">01</p>
            <div className="bg-[#dedcdc] w-full h-[1px] mb-7"></div>
            <h2 className="text-[2rem] mb-7">Front-end tools</h2>
            <p className="text-[1.2rem] text-[#686868]"> {phrase}</p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-[33%] h-96  flex flex-col "
          >
            <p className="text-[#7C7B7B] text-[1.4rem] mb-1">03</p>
            <div className="bg-[#dedcdc] w-full h-[1px] mb-7"></div>
            <h2 className="text-[2rem] mb-7">Frameworks</h2>
            <p className="text-[1.2rem] text-[#686868]"> {phrase3}</p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-[33%] h-96  flex flex-col "
          >
            <p className="text-[#7C7B7B] text-[1.4rem] mb-1">02</p>
            <div className="bg-[#dedcdc] w-full h-[1px] mb-7"></div>
            <h2 className="text-[2rem] mb-7">Libraries</h2>
            <p className="text-[1.2rem] text-[#686868]"> {phrase2}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
