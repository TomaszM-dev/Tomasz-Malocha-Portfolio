"use client";
import { BsArrowDownLeft } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
import { TbBrandNextjs, TbBrandMongodb } from "react-icons/tb";
import {
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiTailwindcss,
  SiFigma,
  SiStripe,
  SiStyledcomponents,
} from "react-icons/si";
import { BsFiletypeSql, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BiLogoReact, BiLineChart, BiLogoJavascript } from "react-icons/bi";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Righteous } from "next/font/google";
import Image from "next/image";
import speedRent from "public/images/projects/speedRent.png";
import degusto from "public/images/projects/degusto.png";
import admin from "public/images/projects/admin.png";
import bdesign from "public/images/projects/bdesign.png";
import buma from "public/images/projects/buma.png";
import vikbro from "public/images/projects/vikbro.png";
import crypto from "public/images/projects/crypto.png";
import { AnimatePresence, motion } from "framer-motion";

import Page from "@/components/page";
import { fadeIn, upDesc } from "@/components/animations/animations";
import Filter from "@/components/filter";
import Footer from "@/components/home-page-ui/footer";

const WorkPage = () => {
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

  const projects = data();

  const [filtered, setFiltered] = useState(projects);
  const [activeGenre, setActiveGenre] = useState("all");

  return (
    <Page>
      <div
        data-scroll
        data-scroll-speed="0.2"
        className="h-[70vh] w-[70%] px-24  flex flex-col justify-center"
      >
        <motion.h1
          variants={upDesc}
          initial="initial"
          whileInView="animate"
          exit="exit"
          className="text-[5rem] leading-[4rem] font-[600]"
        >
          Some of the things I have built
        </motion.h1>
        <motion.div
          variants={upDesc}
          initial="initial"
          whileInView="animate"
          exit="exit"
          className="self-end "
        >
          <BsArrowDownLeft className="self-end text-[1.8rem] stroke-black stroke-1 " />
        </motion.div>
        <Filter
          setFiltered={setFiltered}
          projects={projects}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
      </div>
      <motion.div
        variants={upDesc}
        initial="initial"
        whileInView="animate"
        exit="exit"
        className="flex  flex-col gap-[6rem] mb-40  "
      >
        <AnimatePresence>
          {filtered.map((project, i) => (
            <div
              data-scroll
              data-scroll-speed="0.2"
              className={`flex  items-center px-20 gap-20 mx-auto ${
                i % 2 === 1 ? "flex-row-reverse" : ""
              }`}
              key={project.info}
            >
              <motion.div
                className=" w-[50%]"
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView={"show"}
                exit="hidden"
              >
                <div
                  key={project.number}
                  className="  flex flex-col justify-center"
                >
                  <h1 className="ml-[-2rem] mb-10 text-[2rem] font-bold ">
                    0{i + 1}
                  </h1>
                  <div className="flex gap-3">
                    <p className="text-[3.4rem]">{project.title}</p>
                    <div className="flex gap-2 text-[1.6rem]">
                      <BsGithub />
                      <HiOutlineExternalLink />
                    </div>
                  </div>
                  <div className="text-[1.4rem] flex gap-2 mt-4 font-bold ">
                    <p className="uppercase ">{project.type} &#x2022;</p>
                    <p>See Live</p>
                  </div>
                  <p className="text-[1.2rem] mt-3 text-[#7E7E7E] font-[400]">
                    {" "}
                    {project.info}
                  </p>
                  <div className="flex mt-6 gap-2 text-[1.7rem]">
                    <SiFigma />
                    <SiTailwindcss />
                    <SiTypescript />
                    <SiStripe />
                    <TbBrandNextjs />
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                exit="hidden"
                className="w-[50%] "
              >
                <Image className="" alt="" src={project.picture}></Image>
              </motion.div>
            </div>
          ))}
        </AnimatePresence>
      </motion.div>
      <Footer
        title="Contact Me"
        info="I am open for hiring, lets create something awesome together !"
      />
    </Page>
  );
};

export default WorkPage;
const data = () => [
  {
    number: "01",
    title: "SpeedRent",
    filter: "application",
    type: "Web App store",
    info: "Introducing SpeedRent – Your Ultimate Vehicle Rental Solution! Rent a vehicle on your terms, whether its for a day or a month, and experience the convenience of secure payments via Stripe",
    tech: ["figma", "typescript", "Next.js"],
    picture: speedRent,
  },
  {
    number: "02",
    filter: "application",
    title: "DegustoVR",
    type: "Web App store",
    info: "Introducing SpeedRent – Your Ultimate Vehicle Rental Solution! Rent a vehicle on your terms, whether its for a day or a month, and experience the convenience of secure payments via Stripe",
    tech: ["figma", "typescript", "Next.js"],
    picture: degusto,
  },
  {
    number: "03",
    filter: "application",
    title: "Admin Panel",
    type: "Web App store",
    info: "Introducing SpeedRent – Your Ultimate Vehicle Rental Solution! Rent a vehicle on your terms, whether its for a day or a month, and experience the convenience of secure payments via Stripe",
    tech: ["figma", "typescript", "Next.js"],
    picture: admin,
  },
  {
    number: "04",
    filter: "application",
    title: "B-designed",
    type: "Web App store",
    info: "Introducing SpeedRent – Your Ultimate Vehicle Rental Solution! Rent a vehicle on your terms, whether its for a day or a month, and experience the convenience of secure payments via Stripe",
    tech: ["figma", "typescript", "Next.js"],
    picture: bdesign,
  },
  {
    number: "05",
    filter: "landing",
    title: "Buma",
    type: "Landing Page",
    info: "Introducing SpeedRent – Your Ultimate Vehicle Rental Solution! Rent a vehicle on your terms, whether its for a day or a month, and experience the convenience of secure payments via Stripe",
    tech: ["figma", "typescript", "Next.js"],
    picture: buma,
  },
  {
    number: "06",
    filter: "landing",
    title: "Vikbro",
    type: "Landing Page",
    info: "Introducing SpeedRent – Your Ultimate Vehicle Rental Solution! Rent a vehicle on your terms, whether its for a day or a month, and experience the convenience of secure payments via Stripe",
    tech: ["figma", "typescript", "Next.js"],
    picture: vikbro,
  },
  {
    number: "07",
    filter: "application",
    title: "Cryptobanking",
    type: "Application",
    info: "Introducing SpeedRent – Your Ultimate Vehicle Rental Solution! Rent a vehicle on your terms, whether its for a day or a month, and experience the convenience of secure payments via Stripe",
    tech: ["figma", "typescript", "Next.js"],
    picture: crypto,
  },
];
