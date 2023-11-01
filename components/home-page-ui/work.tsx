import React, { useEffect, useRef } from "react";
import { BsArrowDownLeft, BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/animations";
import Link from "next/link";
import { useNavLink } from "@/nav-store";
import { useRouter } from "next/navigation";
import WorkData from "../work-data/workData";

const Work = () => {
  const projects = WorkData();
  const gallery = useRef(null);
  const active = useNavLink();
  const router = useRouter();

  return (
    <div
      ref={gallery}
      className="flex flex-col gap-[7rem] max-w-[1900px] max-sm:gap-[3rem]  mx-auto mt-[7rem]"
    >
      {projects.map((project, i) => {
        const tech = project.tech;
        console.log(tech);

        return (
          <div
            data-scroll
            data-scroll-speed="0.1"
            className={`flex max-lg:flex-col  items-center max-sm:px-10 px-20 gap-20 justify-center mx-auto ${
              i === 1 ? "flex-row-reverse" : ""
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
                <h1 className="ml-[-2rem] max-sm:ml-[0] mb-10 xl:text-[3rem] text-[2rem] font-bold ">
                  {project.number}
                </h1>
                <div className="flex gap-3">
                  <p className="text-[3.4rem] xl:text-[5rem]">
                    {project.title}
                  </p>
                  <div className="flex gap-2 text-[1.6rem] xl:text-[2.3rem] xl:gap-4">
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
      <div className="flex flex-col mt-10">
        <BsArrowDownLeft className="w-[30%] text-[1.7rem]  ml-48  mb-7" />
        <p
          onClick={() => {
            active.setActiveLink("Work");
            router.push("/work", {
              scroll: false,
            });
          }}
          className="cursor-pointer  pl-10  text-[2rem] border-b-2 w-[80%] mx-auto border-b-slate-100"
        >
          See More work
        </p>
      </div>
    </div>
  );
};

export default Work;
