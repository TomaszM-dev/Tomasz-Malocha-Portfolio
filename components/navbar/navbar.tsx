"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import me from "public/images/nav/me-photo.png";
import { usePathname } from "next/navigation";

import gsap from "gsap";
import { AnimatePresence } from "framer-motion";
import HamburgerNav from "./hamburger-nav";
import { useNavLink } from "@/nav-store";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

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

const Navbar = () => {
  const active = useNavLink();
  const pathname = usePathname();
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const button = useRef(null);

  useEffect(() => {
    let cur = "/";

    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: 100,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

  return (
    <>
      <div
        ref={header}
        className={`${
          pathname === "/" ? "bg-[#C8C6C9] text-white" : "text-black"
        } flex w-full items-center justify-between  px-10 pt-9 text-[1.3rem]  transition-all delay-1000`}
      >
        <>
          <Link
            suppressHydrationWarning
            onClick={() => {
              active.setActiveLink(navItems[0].title);
            }}
            href={navItems[0].href}
          >
            <Image
              alt="me"
              width={500}
              height={500}
              quality={100}
              src={me}
              className="w-14 h-14"
            />
          </Link>
        </>

        <div
          onClick={() => setIsActive(!isActive)}
          className="md:hidden pr-5 text-[1.5rem]"
        >
          Menu
        </div>

        {/* mobile nav */}
        <div
          data-scroll
          data-scroll-speed="0.05"
          className="flex text-[1.4rem] font-[300] gap-7  ml-10 max-md:hidden"
        >
          {navItems.slice(1).map((link) => (
            <>
              <Link
                suppressHydrationWarning
                onClick={() => active.setActiveLink(link.title)}
                href={link.href}
              >
                {link.title}
              </Link>
            </>
          ))}
        </div>
        <div
          data-scroll
          data-scroll-speed="0.05"
          className={`text-[1.1rem]  max-md:hidden text-white bg-black flex justify-center items-center px-7 rounded-lg py-3 `}
        >
          Resume
        </div>
      </div>
      {/* header button container */}
      <div ref={button} className={` scale-0 fixed right-2 top-2 z-[50]`}>
        {/* button */}
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="relative m-[2rem] w-[5.5rem] h-[5.5rem] rounded-full bg-[#1C1D20]
          flex cursor-pointer items-center justify-center "
        >
          {/* burger */}
          <div
            className={`w-[40%] bg-white h-[2px]  relative z-40 after:content-[""]  after:block after:h-[2px] after:w-[100%] after:m-auto after:bg-white after:relative after:top-[-10px]  before:content-[""] before:block before:h-[2px] before:w-[100%] before:m-auto before:bg-white before:relative before:top-[9px]  after:transition-all before:transition-all duration-300${
              isActive
                ? "after:transform after:rotate-45 after:top-[-1px]  before:transform before:rotate-[-45deg] before:top-[3px] h-0"
                : ""
            }`}
          ></div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <HamburgerNav
            isActive={isActive}
            setIsActive={setIsActive}
            navItems={navItems}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
