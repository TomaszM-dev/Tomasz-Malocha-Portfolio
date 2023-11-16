"use client";
import { BsArrowDownLeft } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
import { BsFiletypeSql, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Page from "@/components/page";
import { fadeIn, upDesc } from "@/components/animations/animations";
import Filter from "@/components/filter";
import Footer from "@/components/home-page-ui/footer";
import WorkData from "@/components/work-data/workData";
import Link from "next/link";

export const up = {
  initial: {
    opacity: 0,
    height: "12rem",
  },
  animate: {
    opacity: 1,
    height: "1rem",
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.5 },
  },
};

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

  const projects = WorkData();

  const [filtered, setFiltered] = useState(projects);
  const [activeGenre, setActiveGenre] = useState("all");

  return (
    <Page>
      <div
        data-scroll
        data-scroll-speed="0.1"
        className="w-[100%] max-w-[1700px] mt-[11rem]  mx-auto px-28 max-md:px-10  flex flex-col justify-center max-sm:mt-[6rem] max-sm:px-4 "
      >
        <motion.h1
          variants={upDesc()}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          className="transition-all duration-0 backface text-[4.6rem] font-[300] w-[44rem] xl:text-[5.8rem] xl:w-[55rem] leading-[4.6rem] xl:leading-[5.5rem] tracking-tighter max-md:text-[4rem]  max-sm:leading-[3.4rem] max-sm:text-[3.4rem]  max-sm:w-full "
        >
          Some of the things I have built
        </motion.h1>
        <motion.div
          variants={upDesc()}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          className="transition-all duration-0 backface xl:self-center self-end max-sm:mt-4 "
        >
          <BsArrowDownLeft className=" text-[1.8rem]  " />
        </motion.div>
        <Filter
          setFiltered={setFiltered}
          projects={projects}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
      </div>
      <motion.div
        variants={up}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ once: true }}
        className="transition-all duration-0 backface w-full h-[10rem]"
      ></motion.div>
      <motion.div className="flex flex-col  gap-[8rem] max-sm:gap-[9rem] mb-40 max-w-[1700px]   mx-auto mt-[10rem] max-sm:mt-[5rem] ">
        <AnimatePresence>
          {filtered.map((project, i) => {
            const tech = project.tech;

            return (
              <div
                data-scroll
                data-scroll-speed="0.1"
                className={`flex max-lg:flex-col  items-center max-sm:px-4 px-20 gap-20 justify-center mx-auto max-sm:flex-col-reverse max-sm:gap-10  ${
                  i % 2 === 1 ? "flex-row-reverse" : ""
                }`}
                key={project.info}
              >
                <motion.div
                  className="transition-all duration-0 backface w-[50%] max-lg:w-[80%] max-sm:w-[100%]"
                  variants={fadeIn("right", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  exit="hidden"
                >
                  <div
                    key={project.number}
                    className="  flex flex-col justify-center"
                  >
                    <h1 className="ml-[-2rem] max-sm:ml-[0] mb-10 xl:text-[1.8rem] text-[1.7rem] font-bold  max-sm:text-[1.4rem] max-sm:mb-4">
                      {project.number}
                    </h1>
                    <div className="flex gap-3">
                      <p className="text-[3rem] xl:text-[3.2rem] max-sm:text-[2.8rem]">
                        {project.title}
                      </p>
                      <div className="flex gap-2 text-[1.4rem] xl:text-[1.6rem] xl:gap-4">
                        <Link target={"_blank"} href={project.githubSite}>
                          <BsGithub />
                        </Link>
                        <Link target={"_blank"} href={project.liveSite}>
                          <HiOutlineExternalLink />
                        </Link>
                      </div>
                    </div>
                    <div className="text-[1.3rem] max-sm:text-[1.1rem] flex gap-2 mt-4 font-[500] ">
                      <p className="uppercase ">{project.type} &#x2022;</p>
                      <Link target={"_blank"} href={project.liveSite}>
                        See Live
                      </Link>
                    </div>
                    <p className="text-[1.2rem] max-sm:text-[1.2rem] xl:text-[1.3rem] font-[200] mt-3 text-[#7E7E7E] ">
                      {project.info}
                    </p>
                    <div className="flex mt-6 gap-3 text-[1.7rem]">
                      {tech.map((tech) => tech)}
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  exit="hidden"
                  className="transition-all duration-0 backface  w-[50%] max-lg:w-[80%] max-sm:w-[100%]   xl:w-[40%] xxl:w-[48%] flex xl:justify-center  "
                >
                  <Image
                    className=" object-cover"
                    alt=""
                    src={project.picture}
                  ></Image>
                </motion.div>
              </div>
            );
          })}
        </AnimatePresence>
      </motion.div>
      <Footer />
    </Page>
  );
};

export default WorkPage;
