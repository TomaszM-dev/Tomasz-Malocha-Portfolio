"use client";
import { useEffect, useState } from "react";
import Page from "@/components/page";
import Hero from "@/components/home-page-ui/hero";
import About from "@/components/home-page-ui/about";
import Headline from "@/components/home-page-ui/headline";
import Work from "@/components/home-page-ui/work";
import Footer from "@/components/home-page-ui/footer";
import Example from "@/components/home-page-ui/gallery";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = window.innerWidth < 500;

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
        info="I'm developer who really cares about making things functional and enjoyable 🚀✨ "
      />
      <Work />
      {!isMobile && <Example />}
      <Footer />
    </Page>
  );
}
