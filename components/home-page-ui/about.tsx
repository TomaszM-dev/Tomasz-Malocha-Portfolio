"use client";
import { useNavLink } from "@/nav-store";
import { useInView, motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/navigation";

import React, { useRef } from "react";
import { useEffect } from "react";
import { BsArrowDownLeft } from "react-icons/bs";
import { descText, fadeIn } from "../animations/animations";

const About = () => {
  const router = useRouter();
  const description = useRef(null);
  const seeMore = useRef(null);
  const active = useNavLink();
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
        start: `-20% 40%`,
        end: `bottom 33%`,
      },

      ease: "none",
      stagger: 0.01,
    });
    tl.from(seeMore.current, {
      x: "-300",
    });
    tl.to(seeMore.current, {
      x: "0",
    });
  };

  return (
    <div
      ref={description}
      className="max-w-[1600px] mx-auto flex max-lg:p-10 p-20 mt-10 gap-40 max-lg:gap-14 relative max-lg:flex-col overflow-hidden"
    >
      <div className="flex-[45%] relative flex flex-col gap-1">
        <p className="uppercase text-[#AAA5A5]">About me</p>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <motion.span
                key={index}
                className="leading-[2.8rem] text-[1.9rem] xl:text-[2.1rem] relative overflow-hidden inline-flex ml-1"
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

        <BsArrowDownLeft className="max-lg:hidden self-center  text-[1.7rem] mt-[7rem]  w-fit mb-7" />
      </div>
      <div className="flex-[70%] flex flex-col gap-5 ">
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="border-[1px] flex gap-5 p-5 rounded-lg"
        >
          <p className="text-[1.6rem] ">01</p>
          <div className="flex flex-col gap-2 ">
            <h4 className="text-[1.3rem] xl:text-[1.5rem] uppercase">
              Skill set
            </h4>
            <p className="text-[#7E7E7E] text-[1.1rem] xl:text-[1.3rem]">
              My favorite technologies to use are: Next.js, React.js as web
              applications, Tailwind for ui design, Prisma (ORM) for access and
              data menagment, TypeScript for type safety and PlanetScale for
              data storage
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="border-[1px] flex gap-5 p-5 rounded-lg"
        >
          <p className="text-[1.6rem]">02</p>
          <div className="flex flex-col gap-2 ">
            <h4 className="text-[1.3rem] uppercase xl:text-[1.5rem] ">
              Background
            </h4>
            <p className="text-[#7E7E7E] text-[1.1rem] xl:text-[1.3rem]">
              I have finished IT tech school in 2019, Menage to get a few
              certificates and get a qualifications e12,e13,e14
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="border-[1px] flex gap-5 p-5 rounded-lg"
        >
          <p className="text-[1.6rem]">03</p>
          <div className="flex flex-col gap-2 ">
            <h4 className="text-[1.3rem] uppercase xl:text-[1.5rem] ">
              Portfolio
            </h4>
            <p className="text-[#7E7E7E] text-[1.1rem] xl:text-[1.3rem]">
              In my portfolio there are 8 unique projects, 4 of them are full
              stack web applications
            </p>
          </div>
        </motion.div>
      </div>
      <div
        onClick={() => {
          active.setActiveLink("About");
          router.push("/about", {
            scroll: false,
          });
        }}
        ref={seeMore}
        className=" cursor-pointer max-lg:hidden absolute left-0 xl:left-46 top-[70%] bg-black text-[1.2rem] text-white    px-7  xl:px-20 py-5 rounded-br-full xl:text-[1.4rem] rounded-tr-full w-fit  "
      >
        See More about me
      </div>
    </div>
  );
};

export default About;
