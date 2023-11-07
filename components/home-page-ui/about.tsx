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
      className="max-w-[1700px] mx-auto flex max-lg:p-10 p-20 mt-10 max-sm:mt-20 gap-40 max-lg:gap-14 relative max-lg:flex-col overflow-hidden max-sm:p-2"
    >
      <div className="flex-[45%] relative flex flex-col gap-1">
        <p className="uppercase text-[#AAA5A5] text-sm mb-2 max-sm:ml-2 ">
          About me
        </p>

        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <motion.span
                key={index}
                className="inline-flex ml-2 max-sm:leading-[2.3rem] text-[1.8rem] xl:text-[2rem] font-[300] overflow-hidden leading-[2.8rem]"
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
        </p>

        <div
          onClick={() => {
            active.setActiveLink("About");
            router.push("/about", {
              scroll: false,
            });
          }}
          data-scroll
          data-scroll-speed="0.1"
          className=" max-sm:hidden cursor-pointer bg-black w-fit h-fit text-white font-[200] text-[1.2rem] px-10 py-16 rounded-[50%] mt-14  ml-0"
        >
          About me
        </div>
      </div>
      <div className="flex-[70%] flex flex-col gap-5 ">
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="border-[1px] flex gap-5 max-sm:gap-4 p-5 rounded-lg max-sm:px-4 transition-all duration-0 backface"
        >
          <p className="text-[1rem] text-[#7e7e7e] max-sm:hidden">01</p>
          <div className="flex flex-col gap-2 ">
            <h4 className="text-[1.2rem] uppercase">Skill set</h4>
            <p className="text-[#7E7E7E] font-[200]  text-[1.1rem] xl:text-[1.2rem]">
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
          className="border-[1px] flex gap-5 p-5 rounded-lg transition-all duration-0 backface"
        >
          <p className="text-[1rem] text-[#7e7e7e] max-sm:hidden">02</p>
          <div className="flex flex-col gap-2 ">
            <h4 className="text-[1.3rem] uppercase  ">Background</h4>
            <p className="text-[#7E7E7E] font-[200]  text-[1.1rem] xl:text-[1.2rem]">
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
          className="border-[1px] transition-all duration-0 backface flex gap-5 p-5 rounded-lg "
        >
          <p className="text-[1rem] text-[#7e7e7e] max-sm:hidden">03</p>
          <div className="flex flex-col gap-2 ">
            <h4 className="text-[1.3rem] uppercase xl:text-[1.3rem] ">
              Portfolio
            </h4>
            <p className="text-[#7E7E7E] text-[1.1rem] font-[200] xl:text-[1.2rem]">
              In my portfolio there are 8 unique projects, 4 of them are full
              stack web applications
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
