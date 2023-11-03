"use client";

import AboutMe from "@/components/about-page-ui/aboutMe";
import Experience from "@/components/about-page-ui/experience";
import Landing from "@/components/about-page-ui/landing";
import Skills from "@/components/about-page-ui/skills";
import Footer from "@/components/home-page-ui/footer";
import Page from "@/components/page";
import React, { useEffect, useState } from "react";

const AboutPage = () => {
  const [loading, setIsLoading] = useState(true);

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
      <main className="max-w-[1700px] mx-auto">
        <Landing />
        <Skills />
        <Experience />
        <AboutMe />
        <Footer
          title="Contact Me"
          info="I am open for hiring, lets create something awesome together !"
        />
      </main>
    </Page>
  );
};

export default AboutPage;
