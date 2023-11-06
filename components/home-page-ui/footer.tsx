"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsArrowDownLeft,
} from "react-icons/bs";
import { descText, fadeIn } from "../animations/animations";
import Link from "next/link";
import Image from "next/image";
import me from "public/images/nav/me-photo.png";
import { usePathname } from "next/navigation";

const Footer = ({ info, title }: { info: string; title: string }) => {
  const pathname = usePathname();
  const textSlide = useRef(null);
  const container = useRef(null);
  const isInView = useInView(textSlide);

  return (
    <div
      className={` w-full  text-white bg-[#030303] flex flex-col relative ${
        pathname === "/"
          ? "mt-[-24rem]   max-md:mt-[-27rem] pt-60 max-sm:pt-40"
          : " pt-36"
      }`}
    >
      <div className="w-full flex flex-col max-w-[1000px] mx-auto px-4  ">
        <div className="flex gap-10   max-md:gap-4">
          <Image
            alt="me"
            width={500}
            height={500}
            src={me}
            className="w-[8rem] h-[8rem] max-md:w-[5rem] max-md:h-[5rem]"
          />
          <h2 className="text-[3rem] max-md:text-[2.1rem] max-md:leading-[2.5rem] leading-[3.6rem]  w-[60%] max-sm:w-[100%] max-sm:text-[1.9rem]">
            I am open for hiring, lets work together !
          </h2>
          <BsArrowDownLeft className="text-[1.8rem] ml-24 mt-10 max-md:hidden" />
        </div>
        <div className="w-full h-[1px] mt-28 max-sm:mx-auto  max-sm:w-[95%] bg-[#313131] max-sm:mt-36"></div>
        <div
          // onClick={() => {
          //   active.setActiveLink("About");
          //   router.push("/about", {
          //     scroll: false,
          //   });
          // }}
          data-scroll
          data-scroll-speed="0.1"
          className="  cursor-pointer bg-[#0a0a0a] w-fit h-fit text-white font-[200] text-[1.2rem] px-[3rem] py-[5rem] max-sm:py-[3.5rem] max-sm:px-[1.5rem] rounded-[50%] mt-[-6rem] max-sm:mt-[-4rem]   self-end mx-10  "
        >
          Get in touch
        </div>
        <div className="items-center flex w-full  max-sm:flex-col max-sm:gap-4 mt-10 gap-10 ">
          <p className="text-[1.1rem] w-fit  border-[1px] border-[#afafaf4e] px-8 py-7 rounded-full max-sm:w-full text-center ">
            tomekmalocha@gmail.com
          </p>
          <p className="text-[1.1rem] w-fit  border-[1px] border-[#afafaf4e] px-8 py-7 rounded-full  max-sm:w-full text-center">
            +48 512 740 494
          </p>
        </div>
      </div>
      <div className=" text-[#7d7d7d] text-[1rem] px-10 py-8 items-center mt-28 flex justify-between">
        <p className="">
          Code by TomaszM-dev ● Inspiration: dennissnellenberg.com{" "}
        </p>
        <div className="flex gap-4 text-[1.4rem]">
          <BsGithub />
          <BsLinkedin />
          <BsInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
