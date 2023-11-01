"use client";
import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";
import "./globals.css";
import { StrictMode, useEffect, useState } from "react";
import Preloader from "@/components/preloader/preloader";
import SlideUp from "@/components/animations/slide-up";
import SlideDown from "@/components/animations/slide-down";
import { usePathname } from "next/navigation";
import { Abhaya_Libre } from "next/font/google";

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const App = ({ Component, pageProps }) => {
  const router = useRouter();

  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <main className={abhaya.className}>
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
    </main>
  );
};

export default App;
