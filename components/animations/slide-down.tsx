import React from "react";
import { motion } from "framer-motion";
import { useNavLink } from "@/nav-store";
import Curve from "../curve";
import CurveDown from "../curve-up";

const SlideDown = ({ pathname }) => {
  const active = useNavLink();
  console.log(active.activeLink);
  return (
    <motion.div
      className="fixed text-white bottom-0 z-[100] left-0 w-full flex items-center justify-center h-full bg-black origin-top"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      exit={{
        scaleY: 0,
      }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
    >
      <Curve />
      <h1 className="text-[3rem] relative" suppressHydrationWarning>
        {active.activeLink}
      </h1>
    </motion.div>
  );
};

export default SlideDown;
