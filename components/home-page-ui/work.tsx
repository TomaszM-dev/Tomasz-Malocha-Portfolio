import React, { useEffect, useRef } from "react";
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
import {
  BsArrowDownLeft,
  BsFiletypeSql,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BiLogoReact, BiLineChart, BiLogoJavascript } from "react-icons/bi";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Righteous } from "next/font/google";
import Image from "next/image";
import speedRent from "public/images/projects/speedRent.png";
import degusto from "public/images/projects/degusto.png";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/animations";

const Work = () => {
  const projects = data();
  const gallery = useRef(null);
  const right = useRef(null);
  const details = useRef([]);
  const photos = useRef([]);

  return (
    <div ref={gallery} className="flex flex-col gap-[7rem]  mt-[7rem]">
      {projects.map((project, i) => (
        <div
          data-scroll
          data-scroll-speed="0.1"
          className={`flex  items-center px-20 gap-20 mx-auto ${
            i === 1 ? "flex-row-reverse" : ""
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
                {project.number}
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
      <div className="flex flex-col mt-10">
        <BsArrowDownLeft className="w-[30%] text-[1.7rem]  ml-48  mb-7" />
        <p className="  pl-10  text-[2rem] border-b-2 w-[80%] mx-auto border-b-slate-100">
          See More work
        </p>
      </div>
    </div>
  );
};

/*
<div className="px-20 mx-auto">

              <div
                key={project.number}
                className=" min-h-screen flex flex-col justify-center"
              >
                <h1 className="ml-[-2rem] mb-10 text-[2rem] font-bold ">
                  {project.number}
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
            </div>

*/
export default Work;

const data = () => [
  {
    number: "01",
    title: "SpeedRent",
    type: "Web App store",
    info: "Introducing SpeedRent – Your Ultimate Vehicle Rental Solution! Rent a vehicle on your terms, whether its for a day or a month, and experience the convenience of secure payments via Stripe",
    tech: ["figma", "typescript", "Next.js"],
    picture: speedRent,
  },
  {
    number: "02",
    title: "DegustoVR",
    type: "Web App store",
    info: "Introducing SpeedRent – Your Ultimate Vehicle Rental Solution! Rent a vehicle on your terms, whether its for a day or a month, and experience the convenience of secure payments via Stripe",
    tech: ["figma", "typescript", "Next.js"],
    picture: degusto,
  },
];
