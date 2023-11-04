"use client";
import React, { useEffect, useState } from "react";
import {
  BsArrowDownLeft,
  BsArrowDownRight,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { motion } from "framer-motion";

import Page from "@/components/page";
import { fadeIn, upDesc } from "@/components/animations/animations";

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      console.log(locomotiveScroll);

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <Page>
      <main className="w-[100%] max-w-[1500px] mt-[11rem]  mx-auto px-28 max-md:px-10  flex flex-col justify-center max-sm:mt-[8rem] ">
        <BsArrowDownLeft className="self-end text-[1.7rem] max-sm:mb-6" />
        <motion.h1
          variants={upDesc}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true }}
          className="text-[4.6rem] w-[44rem] xl:text-[5.5rem] xl:w-[55rem] leading-[4.6rem] font-[500] max-md:text-[4rem] max-sm:w-fit max-sm:leading-[3rem] max-sm:text-[3rem] lg:mb-20"
        >
          Lets start working <br /> together
        </motion.h1>

        <motion.div
          variants={upDesc}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true }}
          className="px-0 flex mt-16 justify-center max-md:flex-col-reverse max-md:px-4  gap-20"
        >
          <form className="w-[80%] h-full flex flex-col  max-md:w-[100%]">
            <div className="bg-[#cbcbcb] w-full h-[1px] mb-10"></div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-10">
                <p className="text-[#9c9c9c] text-[1.4rem]">01</p>
                <label className="text-[1.5rem]">Whats your name?</label>
              </div>
              <input
                className=" px-[3.6rem]   text-[1.3rem]"
                type="text"
                placeholder="John Doe*"
                required
                name="user_name"
              />
            </div>
            <div className="bg-[#cbcbcb] w-full h-[1px] my-10 "></div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-10">
                <p className="text-[#cbcbcb] text-[1.4rem]">02</p>
                <label className="text-[1.5rem]">Whats your email?</label>
              </div>
              <input
                className=" px-[3.6rem]   text-[1.3rem]"
                placeholder="John@gmail.com"
                required
                name="user_name"
              />
            </div>
            <div className="bg-[#cbcbcb] w-full h-[1px] my-10"></div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-10">
                <p className="text-[#cbcbcb] text-[1.4rem]">03</p>
                <label className="text-[1.5rem]">Your message</label>
              </div>
              <textarea
                className=" px-[3.6rem]   text-[1.3rem]"
                placeholder="Hey Tomasz..."
                required
                name="user_name"
              />
            </div>

            <button
              type="submit"
              value="Send"
              className="max-sm:px-4 max-sm:py-6 max-sm:w-[50%]  px-10 mt-10 text-[1.3rem] text-white w-fit py-11  bg-black rounded-full max-lg:w-full"
            >
              Send
            </button>
          </form>
          <div className="w-[25%] max-md:w-[70%] max-sm:gap-12  h-full flex flex-col gap-16">
            <div className="flex flex-col gap-1 text-[1.4rem]">
              <p className="uppercase text-[#7d7d7d] text-[0.9rem] mb-4 max-sm:mb-0">
                Contact details
              </p>
              <p>tomekmalocha@gmail.com</p>
              <p>+48 512 740 494</p>
              <p>Resume download</p>
            </div>
            <div className="flex flex-col gap-1 text-[1.4rem]">
              <p className="uppercase text-[#7d7d7d] text-[0.9rem] mb-4 max-sm:mb-0">
                Social Profiles
              </p>
              <p>Instagram</p>
              <p>Github</p>
              <p>LinkedIn</p>
            </div>
          </div>
        </motion.div>
      </main>
      <div className="bg-black text-white text-[1.2rem] px-10 py-8 items-center mt-28 flex justify-between">
        <p className="">Code by TomaszM-dev</p>
        <div className="flex gap-4 text-[1.4rem]">
          <BsGithub />
          <BsLinkedin />
          <BsInstagram />
        </div>
      </div>
    </Page>
  );
};

export default ContactPage;
