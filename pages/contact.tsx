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
import { fadeIn } from "@/components/animations/animations";

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
      <motion.h1
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="text-[5rem] px-24 mt-40 leading-[4.6rem] font-[600]"
      >
        Lets start working <br /> together
      </motion.h1>

      <BsArrowDownRight className="text-[1.7rem]  w-full  ml-60  mt-28  " />
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="px-24 flex mt-10 justify-center   gap-40"
      >
        <form className="w-[80%] h-full flex flex-col ">
          <div className="bg-[#cbcbcb] w-full h-[1px] mb-10"></div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-10">
              <p className="text-[#cbcbcb]">01</p>
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
              <p className="text-[#cbcbcb]">02</p>
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
              <p className="text-[#cbcbcb]">03</p>
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
            className=" px-10 mt-10 text-[1.3rem] text-white w-fit py-11  bg-black rounded-full max-lg:w-full"
          >
            Send
          </button>
        </form>
        <div className="w-[25%]  h-full flex flex-col gap-16">
          <div className="flex flex-col gap-1 text-[1.4rem]">
            <p className="uppercase text-[#7d7d7d] text-[0.9rem] mb-4">
              Contact details
            </p>
            <p>tomekmalocha@gmail.com</p>
            <p>+48 512 740 494</p>
            <p>Resume download</p>
          </div>
          <div className="flex flex-col gap-1 text-[1.4rem]">
            <p className="uppercase text-[#7d7d7d] text-[0.9rem] mb-4">
              Social Profiles
            </p>
            <p>Instagram</p>
            <p>Github</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </motion.div>
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
