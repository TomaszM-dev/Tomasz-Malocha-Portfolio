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

type HamburgerProps = {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  navItems: [{ href: string; title: string }];
  isActive: boolean;
};

const HamburgerNav = ({ setIsActive, isActive, navItems }: HamburgerProps) => {
  const active = useNavLink();
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (link: { title: string; href: string }) => {
    active.setActiveLink(link.title);

    router.push(link.href, {
      scroll: false,
    });
  };

  console.log(pathname);

  return (
    <motion.div
      onClick={() => setIsActive(!isActive)}
      className="fixed w-full h-full  z-[40] top-0 left-0"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={menuVars()}
        initial="initial"
        exit="exit"
        animate="animate"
        className="h-screen transition-all duration-0 backface origin-top-right max-md:w-full w-[28rem] xl:w-[33rem] fixed right-0 top-0 text-white z-60  bg-[#010101]  "
      >
        <div className="w-full justify-between max-sm:mt-[8rem] mt-48 px-20 max-sm:px-6 shadow-2xl shadow-black  gap-20 box-border flex flex-col    ">
          <div className="z-40">
            <motion.p
              variants={fadeIn("up", 0)}
              initial="hidden"
              whileInView={"show"}
              className="uppercase transition-all duration-0 backface text-[#999] textxs "
            >
              navigation
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0)}
              initial="hidden"
              whileInView={"show"}
              className="w-full  transition-all duration-0 backface mx-auto h-[1px] bg-[#646464] mb-10  mt-4"
            ></motion.p>
            <motion.div
              variants={containerVars()}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col transition-all duration-0 backface "
            >
              {navItems.map((link, index) => (
                <motion.div
                  variants={menuLinkVars()}
                  key={index}
                  className="transition-all duration-0 backface group z-40 flex group-hover items-center justify-between "
                >
                  <p
                    className="textxl  xl:text-[3.3rem] xl:leading-[4.3rem] leading-[4.1rem] cursor-pointer max-sm:text-[3.1rem] max-sm:leading-[4.1rem]"
                    suppressHydrationWarning
                    onClick={() => handleClick(link)}
                  >
                    {link.title}
                  </p>
                  <p
                    className={`text-[1.5rem]  ${
                      pathname === link.href ? "block" : "hidden"
                    }  `}
                  >
                    ●
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="z-40">
            <motion.p className="uppercase text-[#999] text-end textxs mt-40">
              Socials & Resume
            </motion.p>
            <motion.p className="w-full mx-auto h-[1px] bg-[#646464] mb-10 mt-4 "></motion.p>
            <motion.div
              variants={fadeIn("down", 0)}
              initial="hidden"
              whileInView={"show"}
              className="flex gap-6  max-sm:gap-10 text-[0.8rem] xl:text-[1rem] "
            >
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
              <Link href="/TMalochaCV.pdf" target="_blank">
                Resume
              </Link>
            </motion.div>
          </div>
        </div>
        <CurveNav />
      </motion.div>
    </motion.div>
  );
};

export default HamburgerNav;
