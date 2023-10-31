"use client";

import Preloader from "@/components/preloader/preloader";
import { AnimatePresence } from "framer-motion";

import Image from "next/image";
import { useEffect, useState } from "react";

import Page from "@/components/page";
import Hero from "@/components/home-page-ui/hero";
import About from "@/components/home-page-ui/about";
import Headline from "@/components/home-page-ui/headline";
import Work from "@/components/home-page-ui/work";
import Footer from "@/components/home-page-ui/footer";
import Example from "@/components/home-page-ui/gallery";
import Curve from "@/components/curves/curve";
import CurveUp from "@/components/curves/curve-up";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      console.log(locomotiveScroll);

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <Page>
      <Hero />
      <About />
      <Headline
        title="My Projects"
        info="I am developer who cares deeply about user experience and functionality "
      />
      <Work />
      <Example />
      <Footer
        title="Contact Me"
        info="I am open for hiring, lets create something awesome together !"
      />
    </Page>
  );
}
