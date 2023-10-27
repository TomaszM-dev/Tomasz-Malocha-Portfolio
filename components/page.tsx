"use client";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Navbar from "./nav";
import Preloader from "./preloader";

const Page = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Page;
