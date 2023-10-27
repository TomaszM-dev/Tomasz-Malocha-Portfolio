"use client";
import { useNavLink } from "@/nav-store";
import Link from "next/link";

import React, { useState } from "react";

const navItems = [
  {
    title: "Home",
    href: "/",
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
  console.log(active.activeLink);

  return (
    <div className="w-full text-[1.4rem] bg-slate-200 h-10 items-center py-10 px-10 flex justify-between">
      <div className="flex gap-10">
        {navItems.map((link) => (
          <>
            <Link
              onClick={() => active.setActiveLink(link.title)}
              href={link.href}
            >
              {link.title}
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
