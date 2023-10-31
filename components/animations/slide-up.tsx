"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavLink } from "@/nav-store";
import Curve from "../curves/curve";

import CurveUp from "../curves/curve-up";

const SlideUp = ({ pathname }) => {
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
      <h1 className="text-[3rem] relative" suppressHydrationWarning>
        {active.activeLink}
      </h1>
    </motion.div>
  );
};

export default SlideUp;
