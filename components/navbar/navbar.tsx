"use client";

// next react
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

// anim  photos
import gsap from "gsap";
import { AnimatePresence } from "framer-motion";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import me from "public/images/nav/me-photo.png";
import { AiOutlineClose } from "react-icons/ai";
// comp
import HamburgerNav from "./hamburger-nav";

// zustand state
import { useNavLink } from "@/nav-store";
import { link } from "fs";

// nav links data
type navProps = {
  href: string;
  title: string;
};

const navItems: navProps[] = [
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
  const [isActive, setIsActive] = useState<boolean>(false);
  const header = useRef(null);
  const button = useRef(null);
  const button2 = useRef(null);

  // closing on path change
  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  // anim
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
            // @ts-ignore
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
        } flex w-full items-center justify-between max-sm:pt-6  px-10 pt-9 max-sm:px-4  transition-all delay-1000`}
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
          className="md:hidden textsm font-[100]"
        >
          <span className={`text-[1rem] font-[200] mr-1 `}>●</span> Menu
        </div>

        <div
          data-scroll
          data-scroll-speed="0.05"
          className="flex text-[1.2rem] xl:text-[1.25rem] gap-7 font-[200]  ml-10 max-md:hidden"
        >
          {navItems.slice(1).map((link) => (
            <div key={link.href} className="flex flex-col mt-2 items-center">
              <Link
                suppressHydrationWarning
                onClick={() => active.setActiveLink(link.title)}
                href={link.href}
              >
                {link.title}
              </Link>
              <p
                className={`text-[1rem]  transition-all delay-1000 ${
                  pathname.split("/")[1] === link.href.split("/")[1]
                    ? "text-black "
                    : "text-transparent"
                }`}
              >
                ●
              </p>
            </div>
          ))}
        </div>
        <Link
          data-scroll
          data-scroll-speed="0.05"
          href="/TMalochaCV.pdf"
          target="_blank"
          className={`xl:text-[1.1rem] px-6 py-3   max-md:hidden text-white bg-black flex justify-center items-center xl:px-7 rounded-lg xl:py-3 `}
        >
          Resume
        </Link>
      </div>
      {/* header button container */}
      <div ref={button} className={` scale-0 fixed right-2 top-2 z-[50]`}>
        {/* button */}
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="relative m-[2rem] max-sm:m-[1rem]  w-[5rem] h-[5rem] rounded-full bg-[#0b0b0b]
          flex cursor-pointer items-center justify-center "
        >
          {/* burger */}
          {!isActive && (
            <div
              className={`w-[45%] bg-white h-[2px]  relative z-40 after:content-[""]  after:block after:h-[2px] after:w-[100%] after:mx-auto after:bg-white after:relative after:top-[-10px]  before:content-[""] before:block before:h-[2px] before:w-[100%] before:m-auto before:bg-white before:relative before:top-[9px]  after:transition-all before:transition-all duration-300  `}
            ></div>
          )}
          {isActive && <AiOutlineClose className="text-white text-[2rem]" />}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && (
          <HamburgerNav
            isActive={isActive}
            setIsActive={setIsActive}
            // @ts-ignore
            navItems={navItems}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
