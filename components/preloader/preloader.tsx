"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Curve from "../curves/curve";
import { opacity } from "../animations/animations";

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

const words = ["Hello", "I am", "Tomasz", "Welcome", "to", "my", "Portfolio"];

const Preloader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen w-screen fixed z-[110] flex items-center justify-center text-white bg-black "
    >
      <Curve />
      <motion.p
        className="text-[3rem] font-[300] flex items-center"
        variants={opacity}
        initial="initial"
        animate="enter"
      >
        <span className="text-[1.6rem] mr-5">●</span>
        {words[index]}
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
