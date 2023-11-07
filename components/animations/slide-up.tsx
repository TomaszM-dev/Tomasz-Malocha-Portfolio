"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavLink } from "@/nav-store";
import Curve from "../curves/curve";

import CurveUp from "../curves/curve-up";
import { opacity } from "./animations";

const SlideUp = () => {
  const active = useNavLink();
  console.log(active.activeLink);
  return (
    <motion.div
      className="fixed top-0 z-[100] flex justify-center items-center left-0 w-full h-full bg-black origin-bottom text-white  "
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 0 }}
      exit={{
        scaleY: 1,
      }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
    >
      <CurveUp />
      <motion.h1
        variants={opacity}
        initial="initial"
        animate="enter"
        className="text-[3rem] font-[200] flex items-center relative"
        suppressHydrationWarning
      >
        <span className="text-[1.4rem] mr-3">●</span> {active.activeLink}
      </motion.h1>
    </motion.div>
  );
};

export default SlideUp;
