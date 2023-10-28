"use client";
import { useInView, motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import React, { useRef } from "react";
import { useEffect } from "react";
import { BsArrowDownLeft } from "react-icons/bs";
import { descText } from "../animations/animations";

const About = () => {
  const description = useRef(null);
  const seeMore = useRef(null);
  const phrase =
    "I am Tomasz Malocha, 23 year old guy, passionate about creating beautifull and functional websites";
  const isInView = useInView(description);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimations();
  }, []);

  const createAnimations = () => {
    console.log(seeMore);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: description.current,

        scrub: 0.1,
        start: `-20% 80%`,
        end: `bottom 83%`,
      },

      ease: "none",
      stagger: 0.01,
    });
    tl.from(seeMore.current, {
      x: "-200",
    });
    tl.to(seeMore.current, {
      x: "0",
    });
  };

  return (
    <div ref={description} className=" flex p-20 mt-10 gap-40 relative">
      <div className="flex-[45%] relative">
        <p className="uppercase text-[#AAA5A5]">About me</p>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <motion.span
                key={index}
                className="text-[1.9rem]  relative overflow-hidden inline-flex ml-1"
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
        </p>

        <BsArrowDownLeft className="text-[1.7rem] mt-[5rem] w-full mb-7" />
      </div>
      <div
        data-scroll
        data-scroll-speed="0.2"
        className="flex-[70%] flex flex-col gap-5 "
      >
        <div className="border-[1px] flex gap-5 p-5 rounded-lg">
          <p className="text-[1.6rem]">01</p>
          <div className="flex flex-col gap-2 ">
            <h4 className="text-[1.3rem] uppercase">Skill set</h4>
            <p className="text-[#7E7E7E] text-[1.1rem]">
              My favorite technologies to use are: Next.js, React.js as web
              applications, Tailwind for ui design, Prisma (ORM) for access and
              data menagment, TypeScript for type safety and PlanetScale for
              data storage
            </p>
          </div>
        </div>
        <div className="border-[1px] flex gap-5 p-5 rounded-lg">
          <p className="text-[1.6rem]">02</p>
          <div className="flex flex-col gap-2 ">
            <h4 className="text-[1.3rem] uppercase">Background</h4>
            <p className="text-[#7E7E7E] text-[1.1rem]">
              I have finished IT tech school in 2019, Menage to get a few
              certificates and get a qualifications e12,e13,e14
            </p>
          </div>
        </div>
        <div className="border-[1px] flex gap-5 p-5 rounded-lg">
          <p className="text-[1.6rem]">03</p>
          <div className="flex flex-col gap-2 ">
            <h4 className="text-[1.3rem] uppercase">Portfolio</h4>
            <p className="text-[#7E7E7E] text-[1.1rem]">
              In my portfolio there are 8 unique projects, 4 of them are full
              stack web applications
            </p>
          </div>
        </div>
      </div>
      <div
        ref={seeMore}
        className=" absolute left-0 top-[70%] bg-black text-[1.2rem] text-white    px-7 py-5 rounded-br-full rounded-tr-full w-fit "
      >
        See More about me
      </div>
    </div>
  );
};

export default About;
