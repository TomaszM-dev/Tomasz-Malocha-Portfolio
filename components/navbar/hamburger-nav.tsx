import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import {
  containerVars,
  fadeIn,
  menuLinkVars,
  menuSlide,
  menuVars,
  upProjects,
} from "../animations/animations";
import Link from "next/link";
import { useNavLink } from "@/nav-store";
import CurveNav from "../curves/curve-nav";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const HamburgerNav = ({ setIsActive, isActive }) => {
  const active = useNavLink();
  const router = useRouter();

  const handleClick = (link) => {
    active.setActiveLink(link.title);

    router.push(link.href, {
      scroll: false,
    });
  };
  return (
    <motion.div
      onClick={() => setIsActive(!isActive)}
      className="fixed w-full h-full  z-[10] top-0 left-0"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={menuVars}
        initial="initial"
        exit="exit"
        animate="animate"
        className="h-screen origin-top-right max-md:w-full w-[28rem] xl:w-[32rem] fixed right-0 top-0 text-white z-20  bg-[#101010] "
      >
        <div className="w-full  mt-48 px-20 h-full box-border flex flex-col    ">
          <motion.p
            variants={fadeIn("up", 0)}
            initial="hidden"
            whileInView={"show"}
            className="uppercase text-[#999] text-[0.9rem]"
          >
            navigation
          </motion.p>
          <motion.p
            variants={fadeIn("up", 0)}
            initial="hidden"
            whileInView={"show"}
            className="w-full mx-auto h-[1px] bg-[#999] mb-10 "
          ></motion.p>
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="open"
            exit="initial"
            className="flex flex-col"
          >
            {navItems.map((link, index) => (
              <motion.div variants={menuLinkVars} key={index}>
                <p
                  className="text-[3.4rem] max-sm:text-[3.1rem] leading-[3.8rem] cursor-pointer"
                  suppressHydrationWarning
                  onClick={() => handleClick(link)}
                >
                  {link.title}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p className="uppercase text-[#999] text-end text-[0.9rem] mt-40">
            Socials & Resume
          </motion.p>
          <motion.p className="w-full mx-auto h-[1px] bg-[#999] mb-12 "></motion.p>
          <motion.div
            variants={fadeIn("down", 0)}
            initial="hidden"
            whileInView={"show"}
            className="flex gap-6  max-sm:gap-10 text-[1.1rem] max-sm:hidden"
          >
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>Github</p>
            <p>Resume</p>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0)}
            initial="hidden"
            whileInView={"show"}
            className="flex gap-6 md:hidden max-sm:gap-6 text-[1.6rem]"
          >
            <BsGithub />
            <BsLinkedin />
            <BsInstagram />
          </motion.div>
        </div>
        <CurveNav />
      </motion.div>
    </motion.div>
  );
};

export default HamburgerNav;
