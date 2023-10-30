"use client";
import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";
import "./globals.css";
import { StrictMode, useEffect, useState } from "react";
import Preloader from "@/components/preloader/preloader";
import SlideUp from "@/components/animations/slide-up";
import SlideDown from "@/components/animations/slide-down";
import { usePathname } from "next/navigation";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  const pathname = usePathname();

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
      {!isLoading && (
        <AnimatePresence
          mode="wait"
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <motion.div key={router.pathname} className="">
            <Component {...pageProps} />
            <SlideUp pathname={pathname} />
            <SlideDown pathname={pathname} />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default App;
