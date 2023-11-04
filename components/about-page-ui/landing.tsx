import Image from "next/image";
import React from "react";
import about from "public/images/hero/about-hero.png";
import { BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import me from "public/images/hero/me.png";
import { motion } from "framer-motion";
import { upDesc } from "../animations/animations";

const Landing = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="0.1"
      className="w-[100%] max-w-[1700px] mt-[11rem]  mx-auto px-28 max-md:px-10  flex flex-col justify-center max-sm:mt-[8rem] my-[8rem] "
    >
      <motion.h1
        variants={upDesc}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        className="text-[4.6rem] w-[44rem] xl:text-[5.5rem] xl:w-[55rem] leading-[4.6rem] font-[500] max-md:text-[4rem] max-sm:w-fit max-sm:leading-[3rem] max-sm:text-[3rem]"
      >
        I want to give you a glimpse into my world
      </motion.h1>
      <motion.div
        viewport={{ once: true }}
        variants={upDesc}
        initial="initial"
        whileInView="animate"
        exit="exit"
        className=" mt-20  max-sm:mt-10"
      >
        <div className="flex flex-col  w-[40%]">
          <p className="text-[1.1rem] uppercase text-[#ababab] font-[700] ">
            My socials
          </p>
          <div className="flex gap-4 text-[1.8rem] mt-2  ">
            <BsGithub />
            <BsInstagram />
            <BsLinkedin />
          </div>
        </div>
      </motion.div>
      <div />
    </div>
    // <div className="w-[100%] h-[65vh] max-w-[1900px]   mx-auto px-4 max-md:px-10  flex flex-row-reverse xl:px-20  justify-center items-center overflow-hidden max-lg:flex-col max-lg:h-[100vh] max-lg:mt-40 max-sm:mt-28">
    //   <div
    //     className="w-[80%] max-lg:w-[85%] max-sm:w-[100%]"
    //     data-scroll
    //     data-scroll-speed="0.1"
    //   >
    //     <motion.h1
    //       variants={upDesc}
    //       viewport={{ once: true }}
    //       initial="initial"
    //       whileInView="animate"
    //       exit="exit"
    //       className=" text-[4.8rem] w-[40rem] xl:text-[5.5rem] xl:w-[50rem] leading-[4.6rem] font-[600] max-md:text-[4rem] max-sm:w-fit max-sm:leading-[4rem] max-sm:text-[4rem]"
    //     >
    //       I want to give you a glimpse into my world
    //     </motion.h1>
    //     <motion.div
    //       viewport={{ once: true }}
    //       variants={upDesc}
    //       initial="initial"
    //       whileInView="animate"
    //       exit="exit"
    //       className=" mt-20  max-sm:mt-10"
    //     >
    //       <div className="flex flex-col  w-[40%]">
    //         <p className="text-[1.4rem] uppercase ">My socials</p>
    //         <div className="flex gap-4 text-[1.8rem] mt-2 text-[#7C7B7B] ">
    //           <BsGithub />
    //           <BsInstagram />
    //           <BsLinkedin />
    //         </div>
    //       </div>
    //     </motion.div>
    //   </div>
    // </div>
  );
};

export default Landing;
