"use client";
import { ReactNode, useEffect, useState } from "react";

import React from "react";
import Preloader from "./preloader";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Hydrate = ({ children }: { children: ReactNode }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsHydrated(true);
    }, 2500);
  }, []);
  return (
    <div>
      <AnimatePresence mode="wait">
        {!isHydrated && (
          <motion.div initial="initial" exit="exit">
            <Preloader />
          </motion.div>
        )}
      </AnimatePresence>
      {isHydrated && <motion.div>{children}</motion.div>}
    </div>
  );
};

export default Hydrate;
