import React from "react";
import { motion } from "framer-motion";
import { useNavLink } from "@/nav-store";

const SlideDown = ({ pathname }) => {
  const active = useNavLink();
  console.log(active.activeLink);
  return (
    <motion.div
      className="fixed text-white bottom-0 left-0 w-full h-full bg-black origin-top"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      exit={{
        scaleY: 0,
      }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
    >
      <h1 suppressHydrationWarning>{active.activeLink}</h1>
    </motion.div>
  );
};

export default SlideDown;