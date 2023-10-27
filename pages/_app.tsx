"use client";
import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";
import "./globals.css";
import { StrictMode, useEffect, useState } from "react";
import Preloader from "@/components/preloader";
import SlideUp from "@/components/slide-up";
import SlideDown from "@/components/slide-down";
import { usePathname } from "next/navigation";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  console.log(router);
  const pathname = usePathname();
  console.log(pathname);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div key={router.pathname}>
          <Component {...pageProps} />

          <SlideUp pathname={pathname} />
          <SlideDown pathname={pathname} />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default App;
