"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavLink } from "@/nav-store";

const SlideUp = ({ pathname }) => {
  const active = useNavLink();
  console.log(active.activeLink);
  return (
    <motion.div
      className="absolute bottom-0 left-0 w-full h-screen bg-black origin-bottom text-white  "
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 0 }}
      exit={{
        scaleY: 1,
      }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
    >
      <h1>{active.activeLink}</h1>
    </motion.div>
  );
};

export default SlideUp;
