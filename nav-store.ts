"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type NavState = {
  setActiveLink: (link: string) => void;
  activeLink: string;
};

export const useNavLink = create<NavState>()(
  persist(
    (set) => ({
      activeLink: "Home",
      setActiveLink: (link) =>
        set((state) => {
          return { activeLink: link };
        }),
    }),
    { name: "link-store" }
  )
);
