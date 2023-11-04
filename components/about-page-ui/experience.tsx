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
      className="max-w-[1700px] mx-auto w-full mt-28 flex flex-col px-10"
    >
      <h3 className="text-end text-[2rem] max-sm:self-start max-sm:text-start max-sm:w-[100%]  w-[80%]  font-bold  self-end">
        {phrase.split(" ").map((word, index) => {
          return (
            <motion.span
              key={index}
              className="text-[2rem]  max-sm:font-[300] max-sm:leading-[1.6rem] relative overflow-hidden inline-flex ml-1"
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
      <div className="flex gap-10  max-sm:mt-20 mt-28 text-[2rem] max-sm:border-b-[1px]">
        <p> My experience</p>
        <BsArrowDownRight className="mt-4 max-sm:hidden" />
      </div>
      <div className="flex gap-10 mx-auto max-lg:flex-col">
        <motion.div
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
          <div className="w-[60%] h-[60%] border-t-[2px] rounded-tl-3xl  border-l-[2px] absolute top-0 bottom-auto right-auto left-0 "></div>
          <div className="w-[60%] h-[60%] border-b-[2px] rounded-br-3xl  border-r-[2px] absolute top-auto bottom-0 right-0 left-auto "></div>
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
          <div className="w-[60%] h-[60%] border-b-[2px] rounded-bl-3xl  border-l-[2px] absolute top-auto bottom-0 right-auto left-0 "></div>
          <div className="w-[60%] h-[60%] border-t-[2px] rounded-tr-3xl  border-r-[2px] absolute top-0 bottom-auto right-0 left-auto "></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
