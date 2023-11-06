"use client";
import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";
import "./globals.css";
import { StrictMode, useEffect, useState } from "react";
import Preloader from "@/components/preloader/preloader";
import SlideUp from "@/components/animations/slide-up";
import SlideDown from "@/components/animations/slide-down";
import { usePathname } from "next/navigation";
import { DM_Sans } from "next/font/google";
import { Metadata } from "next";
import favicon from "public/images/favicon.ico";
import Head from "next/head";

export const metadata: Metadata = {
  title: "TomaszMalocha",
  description: "Portfolio website",
};

const abhaya = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "200", "400", "500", "600", "700"],
});
const App = ({ Component, pageProps }) => {
  const router = useRouter();

  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

  return (
    <main className={`${abhaya.className} overflow-hidden`}>
      <Head>
        <title>Tomasz Malocha ∘ Portfolio</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
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
