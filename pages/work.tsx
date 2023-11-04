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
        className="w-[100%] max-w-[1700px] mt-[11rem]  mx-auto px-28 max-md:px-10  flex flex-col justify-center max-sm:mt-[8rem]  "
      >
        <motion.h1
          variants={upDesc}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          className="text-[4.6rem] w-[44rem] xl:text-[5.5rem] xl:w-[55rem] leading-[4.6rem] font-[500] max-md:text-[4rem] max-sm:w-fit max-sm:leading-[3rem] max-sm:text-[3rem] "
        >
          Some of the things I have built
        </motion.h1>
        <motion.div
          variants={upDesc}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          className="xl:self-center self-end "
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
        className=" w-full h-[10rem]"
      ></motion.div>
      <motion.div className="flex flex-col gap-[7rem] max-sm:gap-[4rem] mb-40 max-w-[1700px]  mx-auto mt-[10rem] max-sm:mt-[5rem] ">
        <AnimatePresence>
          {filtered.map((project, i) => {
            const tech = project.tech;

            return (
              <div
                data-scroll
                data-scroll-speed="0.1"
                className={`flex max-lg:flex-col
                max-sm:flex-col-reverse  items-center max-sm:px-10 max-md:px-4 px-20 gap-20 justify-center mx-auto ${
                  i % 2 === 1 ? "flex-row-reverse" : ""
                }`}
                key={project.info}
              >
                <motion.div
                  className=" w-[50%] max-lg:w-[80%] max-sm:w-[100%]"
                  variants={fadeIn("right", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  exit="hidden"
                >
                  <div
                    key={project.number}
                    className="  flex flex-col justify-center"
                  >
                    <h1 className="ml-[-2rem] max-sm:ml-[0] mb-10 xl:text-[2.3rem] text-[2rem] font-bold  max-sm:mb-4">
                      0{i + 1}
                    </h1>
                    <div className="flex gap-3">
                      <p className="text-[3.4rem] max-sm:text-[3rem] xl:text-[3.5rem] leading-[3.4rem]">
                        {project.title}
                      </p>
                      <div className="flex gap-2 text-[1.6rem] xl:text-[1.9rem] xl:gap-4">
                        <Link target={"_blank"} href={project.githubSite}>
                          <BsGithub />
                        </Link>
                        <Link target={"_blank"} href={project.liveSite}>
                          <HiOutlineExternalLink />
                        </Link>
                      </div>
                    </div>
                    <div className="text-[1.4rem] flex gap-2 mt-4 font-bold ">
                      <p className="uppercase ">{project.type} &#x2022;</p>
                      <Link target={"_blank"} href={project.liveSite}>
                        See Live
                      </Link>
                    </div>
                    <p className="text-[1.2rem] xl:text-[1.6rem] mt-3 text-[#7E7E7E] font-[400]">
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
                  className="w-[50%] max-lg:w-[80%] max-sm:w-[100%]   xl:w-[40%] xxl:w-[48%] flex xl:justify-center  "
                >
                  <Image className=" " alt="" src={project.picture}></Image>
                </motion.div>
              </div>
            );
          })}
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
