"use client";
import React, { useEffect, useRef, useState } from "react";
import { BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import { descText, fadeIn, upDesc } from "../animations/animations";

const Skills = () => {
  const textSlide = useRef(null);
  const isInView = useInView(textSlide);
  const headline = "My skills that I possess ...";
  const phrase =
    "Next.js, React.js, JavaScript, TypeScript, Java, Git, HTML, Tailwind CSS,  CSS / Sass / Styled-Components, Bootstrap,  Babel, RESTful API, GraphQL, Prisma,ORM, Responsive Design, AJAX, Browser Developer Tools, Redux, Zustand, Lighhouse, CORS, JWT, Docker, GSAP, Framer Motion, Paralax Design, CMS Integration,  PWAs, Clerk, Zod, Figma, LightRoom, Photoshop, ";
  const phrase2 =
    "OOP, Functional Programming, Data Structures and Algorithms, State Menagment, Asynchronous Programming, Web Security Practises, Semantic HTML, Progressive Enhancement, Testing Debugging, CMS, Command Line, Graphic design tools,SSG, SSR,CSR, Containerization, Google Analytics ";
  const phrase3 =
    "Active Listening, Conflickt Resolution, Feedback Delivery, Facilitation Skills, Networking, Stakeholder Management,Project Management Methodologie (Scrum, Agile), Team Leadership, Decision-Making, Motivation and Team Building";

  return (
    <div className="bg-[#f3f3f3] max-sm:mt-10 h-full">
      <div className="max-w-[1700px] flex flex-col max-sm:px-4 gap-10 px-10 pt-28 py-40  w-full  mx-auto max-sm:pt-10 max-sm:gap-1">
        <motion.h2
          ref={textSlide}
          viewport={{ once: true }}
          variants={upDesc()}
          initial="initial"
          animate="animate"
          exit="exit"
          className="tracking-tighter text-[3.3rem] max-sm:text-[2.4rem] font-[500]"
        >
          {headline.split(" ").map((word, index) => {
            return (
              <motion.span
                key={index}
                className="transition-all duration-0 backface text-[3.4rem] max-sm:text-[2.4rem] max-sm:font-[400] font-[400] xl:text-[3.5rem] leading-[3.4rem]  relative overflow-hidden inline-flex ml-2"
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
        </motion.h2>
        <div className="flex gap-28 mt-10 max-xl:flex-col max-xl:gap-14 max-xl:mb-14 ">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="transition-all duration-0 backface w-[35%] h-96  flex flex-col max-xl:w-[90%] max-xl:mx-auto max-xl:h-fit"
          >
            <p className="text-[#7C7B7B] text-[1.1rem] mb-1">01</p>
            <div className="bg-[#dedcdc] w-full h-[1px] mb-7"></div>
            <h2 className="xl:text-[1.9rem] text-[1.8rem]  mb-7">
              Languages & Technologies
            </h2>
            <p className="xl:text-[1.3rem] text-[1.2rem] font-[200] text-[#686868]">
              {" "}
              {phrase}
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="transition-all duration-0 backface w-[33%] h-96  flex flex-col  max-xl:w-[90%] max-xl:mx-auto max-xl:h-fit"
          >
            <p className="text-[#7C7B7B] text-[1.1rem] mb-1">02</p>
            <div className="bg-[#dedcdc] w-full h-[1px] mb-7"></div>
            <h2 className="xl:text-[1.9rem] text-[1.8rem] mb-7">
              Technical Skills
            </h2>
            <p className="xl:text-[1.3rem] text-[1.2rem] font-[200] text-[#686868]">
              {phrase2}
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="transition-all duration-0 backface w-[33%] h-96  flex flex-col  max-xl:w-[90%] max-xl:mx-auto max-xl:h-fit"
          >
            <p className="text-[#7C7B7B] text-[1.1rem] mb-1">03</p>
            <div className="bg-[#dedcdc] w-full h-[1px] mb-7"></div>
            <h2 className="xl:text-[1.9rem] text-[1.8rem] mb-7">Soft Skills</h2>
            <p className="xl:text-[1.3rem] text-[1.2rem] font-[200] text-[#686868]">
              {" "}
              {phrase3}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
