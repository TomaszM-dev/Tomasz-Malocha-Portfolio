"use client";
import React, { useRef } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import { descText, fadeIn } from "../animations/animations";

const Experience = () => {
  const container = useRef(null);
  const isInView = useInView(container);

  const phrase =
    "The will to win, the desire to succeed, the urge to reach your full potential… these are the keys that will unlock the door to personal excellence.” - Confucius";

  return (
    <div
      ref={container}
      className="max-w-[1700px] mx-auto w-full max-sm:my-10 mt-28 flex flex-col px-10 max-sm:px-4 my-60"
    >
      <h3 className="text-end  max-sm:leading-[2.3rem] max-sm:self-start max-sm:text-start max-sm:w-[100%]  w-[80%]    self-end">
        {phrase.split(" ").map((word, index) => {
          return (
            <motion.span
              key={index}
              className="ml-1 xl:text-[2.3rem] text-[1.9rem] inline-flex tracking-tighter overflow-hidden"
            >
              <motion.span
                variants={descText}
                custom={index}
                animate={isInView ? "open" : "closed"}
                key={index}
                className=""
              >
                {word}
              </motion.span>
            </motion.span>
          );
        })}
      </h3>

      <div className="flex gap-10 mx-auto max-lg:flex-col">
        <div className="flex gap-28 mt-16 max-lg:flex-col max-lg:gap-14 max-lg:mb-14 ">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-[45%] mt-10   flex flex-col max-lg:w-[90%] max-lg:mx-auto max-lg:h-fit"
          >
            <p className="text-[#7C7B7B] text-[1.1rem] mb-1">01</p>
            <div className="bg-[#dedcdc] w-full h-[1px] mb-7"></div>
            <h2 className="text-[1.7rem]  mb-7">
              Tech Internship from School 2019
            </h2>
            <p className="text-[1.1rem] font-[200] §text-[#686868]">
              My school provided us an internship as a students we completed 4
              months of working for tech company
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-[55%]  mt-10  flex flex-col  max-lg:w-[90%] max-lg:mx-auto max-lg:h-fit"
          >
            <p className="text-[#7C7B7B] text-[1.1rem] mb-1">02</p>
            <div className="bg-[#dedcdc] w-full h-[1px] mb-7"></div>
            <h2 className="text-[1.7rem]  mb-7 ">
              Project Leader in Buma AS 2020-2022
            </h2>
            <p className=" font-[200] text-[#686868]">
              <p className=" text-[1.1rem]  ">
                Though not coding related as a PR I have menaged to develop
                skills that are essential for working in a group of people.
                Skills like: Solving problems, Conflict resolution, Time
                management Stakeholder management, Adaptability
              </p>
            </p>
          </motion.div>
        </div>
        {/* <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          className="relative w-[30rem] h-[16rem]  mt-20 overflow-hidden flex items-center justify-center px-8 max-lg:w-[80%] max-lg:mx-auto max-sm:w-[100%] max-sm:mt-18 "
        >
          <div className="flex flex-col  text-[1.6rem]  ">
            <h4 className=" ">
              01 <span className="ml-4 "></span>Tech Internship from School 2019
            </h4>
            <p className="text-[#7e7e7e] px-10 text-[1.3rem] mt-5">
              My school provided us an internship as a students we completed 4
              months of working for tech company
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          className="relative w-[60%]   mt-20 overflow-hidden flex items-center justify-center px-8 max-lg:w-[80%] max-lg:mx-auto max-lg:py-8 max-lg:mt-4 max-sm:w-[100%]  "
        >
          <div className=" flex flex-col  text-[1.6rem]  ">
            <h4 className=" ">
              02 <span className="ml-4 "></span>Project Leader in Buma AS
              2020-2022
            </h4>
            <p className="text-[#7e7e7e] px-10 text-[1.3rem] mt-5 ">
              Though not coding related as a PR I have menaged to develop skills
              that are essential for working in a group of people.
            </p>
            <p className="text-[#7e7e7e] px-10 text-[1.3rem] mt-5 ">
              Skills like: Solving problems, Conflict resolution, Time
              management Stakeholder management, Adaptability
            </p>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Experience;
