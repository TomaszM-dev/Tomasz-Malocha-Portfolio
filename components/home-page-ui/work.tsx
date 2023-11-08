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
      className="flex flex-col gap-[7rem] max-w-[1700px] max-sm:gap-[5rem] xl:mt-[10rem] mx-auto mt-[6rem] max-sm:mt-10"
    >
      {projects.slice(0, 2).map((project, i) => {
        const tech = project.tech;

        return (
          <div
            data-scroll
            data-scroll-speed="0.1"
            className={`flex max-lg:flex-col  items-center max-sm:px-4 px-20 gap-20 justify-center mx-auto ${
              i === 1 ? "flex-row-reverse" : ""
            }`}
            key={project.info}
          >
            <motion.div
              className=" w-[50%] max-lg:w-[80%] max-sm:w-[100%] transition-all duration-0 backface"
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
                  <p className="text-[2.9rem] xl:text-[3.2rem] max-sm:text-[2.8rem]">
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
                <p className="text-[1.3rem] max-sm:text-[1.2rem] xl:text-[1.5rem] font-[200] mt-3 text-[#7E7E7E] ">
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
              className="w-[50%] transition-all max-lg:w-[80%] max-sm:w-[100%] duration-0  xl:w-[40%] xxl:w-[48%] flex xl:justify-center  backface "
            >
              <Image className=" " alt="" src={project.picture}></Image>
            </motion.div>
          </div>
        );
      })}
      <div className="flex flex-col mt-4 self-center">
        <p
          onClick={() => {
            active.setActiveLink("Work");
            router.push("/work", {
              scroll: false,
            });
          }}
          className="cursor-pointer w-full px-9 py-6 rounded-full font-[200] text-[1.2rem] border-[1px] mb-24  mx-auto "
        >
          See More work
        </p>
      </div>
    </div>
  );
};

export default Work;
