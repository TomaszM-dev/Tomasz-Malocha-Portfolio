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
import { usePathname, useRouter } from "next/navigation";
import { useNavLink } from "@/nav-store";

const Footer = () => {
  const pathname = usePathname();
  const textSlide = useRef(null);
  const container = useRef(null);
  const isInView = useInView(textSlide);
  const router = useRouter();
  const active = useNavLink();

  const isMobile = window.innerWidth < 500;

  return (
    <div
      className={` w-full  text-white bg-[#030303] flex flex-col relative ${
        pathname === "/" && !isMobile
          ? "mt-[-24rem]   max-md:mt-[-27rem] pt-60 max-sm:pt-40"
          : " pt-36"
      }`}
    >
      <div className="w-full flex flex-col max-w-[1000px] mx-auto px-4  ">
        <div className="flex  items-center   max-md:gap-4">
          <Image
            alt="me"
            width={500}
            height={500}
            src={me}
            className="w-[5rem] h-[5rem] max-md:w-[3.5rem] max-md:h-[3.5rem] mb-2"
          />
          <h2 className="ml-[1rem] max-sm:ml-[0.3rem] text-[3.1rem] max-md:text-[2.1rem]   w-[60%] max-sm:w-[100%] max-sm:text-[2rem] leading-10">
            I am open for
          </h2>
          <BsArrowDownLeft className="text-[1.8rem] ml-10 mt-10 max-md:hidden" />
        </div>
        <h3 className=" text-[3.1rem] max-md:text-[2.1rem]   w-[60%] max-sm:w-[100%] max-sm:text-[2rem] leading-10">
          hiring lets work together !
        </h3>
        <div className="w-full h-[1px] mt-28 max-sm:mx-auto  max-sm:w-[95%] bg-[#313131] max-sm:mt-36"></div>
        <div
          onClick={() => {
            active.setActiveLink("Contact");
            router.push("/contact", {
              scroll: false,
            });
          }}
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
      <div className=" max-sm:px-4 text-[#7d7d7d] text-[1rem]  px-10 py-8 items-center mt-28 flex justify-between">
        <p className="">
          Code by TomaszM-dev{" "}
          <span className="max-sm:hidden">
            ● Inspiration: dennissnellenberg.com
          </span>
        </p>
        <div className="flex gap-4 text-[1.4rem]">
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
    </div>
  );
};

export default Footer;
