"use client";
import { AnimatePresence } from "framer-motion";
import React, { ReactNode, useEffect, useState } from "react";
import Nav from "./navbar/nav";
import Navbar from "./navbar/navbar";

import Preloader from "./preloader/preloader";

const Page = ({ children }: { children: ReactNode }) => {
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
