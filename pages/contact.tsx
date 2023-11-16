"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  BsArrowDownLeft,
  BsArrowDownRight,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Page from "@/components/page";
import { fadeIn, upDesc } from "@/components/animations/animations";
import Link from "next/link";

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z9t8klm",
        "template_z4xlitc",
        // @ts-ignore
        form.current,
        "zE7tbk7fYOIPB1uI5"
      )
      .then(
        (result: any) => {
          console.log(result.text);
          e.target.reset();
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

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
      <main className="w-[100%] max-w-[1700px] mt-[11rem]  mx-auto px-28 max-md:px-10  flex flex-col justify-center max-sm:mt-[5rem] max-sm:px-4 ">
        <BsArrowDownLeft className="self-end text-[2rem] max-sm:mb-6" />
        <motion.h1
          variants={upDesc()}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true }}
          className="transition-all duration-0 backface text-[4.6rem] font-[300] w-[44rem] xl:text-[5.8rem] xl:w-[55rem] leading-[4.6rem] xl:leading-[5.5rem] tracking-tighter max-md:text-[4rem]  max-sm:leading-[3.4rem] max-sm:text-[2.9rem]  max-sm:w-full"
        >
          Lets start working <br /> together
        </motion.h1>

        <motion.div
          variants={upDesc()}
          initial="initial"
          animate="animate"
          exit="exit"
          viewport={{ once: true }}
          className="transition-all duration-0 backface px-0 flex mt-36 justify-center max-md:flex-col-reverse max-md:px-0  gap-20 max-sm:mt-20"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-[80%] h-full flex flex-col  max-md:w-[100%]"
          >
            <div className="bg-[#cbcbcb] w-full h-[1px] mb-10"></div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-10">
                <p className="text-[#9c9c9c] text-[1.2rem]">01</p>
                <label className="text-[1.4rem]">Whats your name?</label>
              </div>
              <input
                className=" px-[4rem] outline-none  text-[1.2rem]"
                type="text"
                placeholder="John Doe*"
                required
                name="user_name"
              />
            </div>
            <div className="bg-[#cbcbcb] w-full h-[1px] my-10 "></div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-10">
                <p className="text-[#cbcbcb] text-[1.2rem]">02</p>
                <label className="text-[1.4rem]">Whats your email?</label>
              </div>
              <input
                className=" px-[4rem]  outline-none text-[1.2rem]"
                placeholder="John@gmail.com"
                required
                name="user_name"
              />
            </div>
            <div className="bg-[#cbcbcb] w-full h-[1px] my-10"></div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-10">
                <p className="text-[#cbcbcb] text-[1.2rem]">03</p>
                <label className="text-[1.4rem] ">Your message</label>
              </div>
              <textarea
                className=" px-[4rem] focus:outline-none  text-[1.2rem]"
                placeholder="Hey Tomasz..."
                required
                name="user_name"
              />
            </div>

            <button
              type="submit"
              value="Send"
              className="max-sm:px-7 max-sm:py-9 max-sm:w-fit px-10 mt-10 text-[1.3rem] max-sm:text-[1.1rem]  text-white w-fit py-12  bg-black rounded-full max-lg:w-full"
            >
              Send
            </button>
          </form>
          <div className="w-[25%] max-md:w-[70%] max-sm:gap-12  h-full flex flex-col gap-16">
            <div className="flex flex-col gap-1 text-[1.3rem]">
              <p className="uppercase text-[#7d7d7d] text-[0.8rem] mb-4 max-sm:mb-0">
                Contact details
              </p>
              <p>tomekmalocha@gmail.com</p>
              <p>+48 512 740 494</p>
              <Link
                download={"/TMalochaCV.pdf"}
                href="/TMalochaCV.pdf"
                target="_blank"
              >
                Resume Download
              </Link>
            </div>
            <div className="flex flex-col gap-1 text-[1.3rem]">
              <p className="uppercase text-[#7d7d7d] text-[0.8rem] mb-4 max-sm:mb-0">
                Social Profiles
              </p>
              <Link
                target={"_blank"}
                href="https://www.instagram.com/tommek.23/"
              >
                Instagram
              </Link>
              <Link target={"_blank"} href="https://github.com/TomaszM-dev">
                Github
              </Link>
              <Link
                target={"_blank"}
                href="https://www.linkedin.com/in/tomaszmalocha/"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
      <div className="bg-black text-[#7d7d7d]  text-[1rem] px-10 py-8 items-center mt-28 flex max-sm:px-4 justify-between">
        <p className="">
          Code by TomaszM-dev{" "}
          <span className="max-sm:hidden">
            ● Design Inspiration: dennissnellenberg.com
          </span>
        </p>
        <div className=" flex gap-4 text-[1.4rem]">
          <Link target={"_blank"} href="https://www.instagram.com/tommek.23/">
            <BsInstagram />
          </Link>
          <Link target={"_blank"} href="https://github.com/TomaszM-dev">
            <BsGithub />
          </Link>
          <Link
            target={"_blank"}
            href="https://www.linkedin.com/in/tomaszmalocha/"
          >
            <BsLinkedin />
          </Link>
        </div>
      </div>
    </Page>
  );
};

export default ContactPage;
