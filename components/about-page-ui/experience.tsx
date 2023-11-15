"use client";
import React, { useRef } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import { descText, fadeIn } from "../animations/animations";

const Experience = () => {
  const container = useRef(null);
  const isInView = useInView(container);
  const isMobile = window.innerWidth < 500;

  const phrase =
    ' "Skills make you valuable. Experience makes you exceptional. Together, they make you unstoppable. - cliché Instagram caption" ';

  return (
    <div
      ref={container}
      className="max-w-[1700px] mx-auto w-full max-sm:my-10 mt-28  flex flex-col px-10 max-sm:px-4 my-60"
    >
      {isMobile && (
        <h3 className="text-[2.4rem] tracking-tighter mt-4 px-4">
          My experience...
        </h3>
      )}
      {!isMobile && (
        <h3 className="text-end  max-sm:leading-[2.3rem] max-sm:self-start max-sm:text-start max-sm:w-[100%]  w-[80%]    self-end">
          {phrase.split(" ").map((word, index) => {
            return (
              <motion.span
                key={index}
                className="transition-all duration-0 backface ml-1 xl:text-[2.3rem] text-[1.9rem] inline-flex tracking-tighter overflow-hidden"
              >
                <motion.span
                  variants={descText()}
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
      )}

      <div className="flex gap-10 mx-auto max-lg:flex-col">
        <div className="flex gap-28 mt-16 max-lg:flex-col max-lg:gap-14 max-lg:mb-14 ">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="transition-all duration-0 backface w-[45%] mt-10   flex flex-col max-lg:w-[90%] max-lg:mx-auto max-lg:h-fit"
          >
            <p className="text-[#7C7B7B] text-[1.1rem] mb-1">01</p>
            <div className="bg-[#dedcdc] w-full h-[1px] mb-7"></div>
            <h2 className="text-[1.8rem] xl:text-[1.9rem]  mb-7">
              Tech Internship from School 2019
            </h2>
            <p className="text-[1.2rem] xl:text-[1.3rem] font-[200] text-[#686868]">
              My school arranged a program to give us real-world experience. The
              school tutor connected us with the tech company for the
              internship. During the four months, our main focus was on learning
              and getting involved in the basic tasks of software developers,
              giving us practical knowledge about the field.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="transition-all duration-0 backface w-[55%]  mt-10  flex flex-col  max-lg:w-[90%] max-lg:mx-auto max-lg:h-fit"
          >
            <p className="text-[#7C7B7B] text-[1.1rem] mb-1">02</p>
            <div className="bg-[#dedcdc] w-full h-[1px] mb-7"></div>
            <h2 className="text-[1.8rem] xl:text-[1.9rem] mb-7 ">
              Project Menager in Buma AS 2020-2022
            </h2>
            <p className=" font-[200] text-[#686868]">
              <p className=" text-[1.2rem] xl:text-[1.3rem] ">
                In my nearly three years as a project manager, I have figured
                out a smart way of doing things. I focus a lot on making sure
                the people on my team work well together.I want to highlight how
                important it is to have good relationships at work. I am lucky
                to have a reference from my old boss, vouching for my hard work
                and problem-solving skills. I do not just talk to my team; I
                also communicate directly with everyone interested in the
                project. This way, everyone is on the same page. In summary, I
                bring practical experience, adaptability, and a focus on
                teamwork.
              </p>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
