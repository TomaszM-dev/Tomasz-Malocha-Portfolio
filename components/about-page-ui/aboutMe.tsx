import Image from "next/image";
import React from "react";
import me from "public/images/aboutme.png";
import { motion } from "framer-motion";
import { upDesc } from "../animations/animations";

const AboutMe = () => {
  return (
    <motion.div
      variants={upDesc}
      initial="initial"
      animate="animate"
      exit="exit"
      viewport={{ once: true }}
      className="   max-w-[1800px] max-lg:flex-col max-lg:flex-col-reverse max-sm:h-fit max-sm:mt-10 mx-auto px-20 max-sm:px-6 flex  w-full gap-10 max-sm:gap-10"
    >
      <div className="w-fit h-[100%] relative  max-lg:h-[70%] max-sm:w-[100%] max-sm:px-0 px-10 ">
        <Image
          width={660}
          alt=""
          quality={100}
          src={me}
          className="object-cover "
        />
      </div>
      <div className="w-[30%] max-lg:w-[100%] flex flex-col   gap-4   h-full max-sm:w-[100%] ">
        <p className="text-[1.2rem] font-[300] max-sm:mt-8 max-sm:mb-4 max-sm:leading-[2.rem] max-sm:text-[1.1rem]">
          Coding serves as my creative canvas, a medium to unravel challenges,
          and a conduit to contribute to the world s betterment through
          technological progress . Beyond coding, I m passionate about
          mindfulness, self-care, self improvement, and weight lifting. I
          believe in the importance of a healthy body to complement a healthy
          mind.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutMe;
