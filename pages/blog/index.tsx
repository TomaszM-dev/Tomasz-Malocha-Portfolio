import React from "react";
import { motion } from "framer-motion";
import { upDesc } from "@/components/animations/animations";
import Link from "next/link";
import Page from "@/components/page";
import { Gi3DStairs } from "react-icons/gi";
import { BiArrowToBottom } from "react-icons/bi";
import { BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";
import BlogPostContainer from "@/components/blog-page/blogPostContainer";

const Blog = () => {
  return (
    <Page>
      <div className="w-[100%] max-w-[1700px] mt-[11rem] mb-40  mx-auto px-28 max-md:px-10  flex flex-col justify-center max-sm:mt-[6rem] max-sm:px-4">
        <motion.h1
          variants={upDesc()}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          className="transition-all duration-0 backface text-[4.6rem] font-[300] w-[44rem] xl:text-[5.6rem] xl:w-[55rem] leading-[4.6rem] xl:leading-[5.5rem] tracking-tighter max-md:text-[4rem]  max-sm:leading-[3.4rem] max-sm:text-[3rem]  max-sm:w-full"
        >
          Welcome to my blog feel free to explore.
        </motion.h1>
        <motion.div
          viewport={{ once: true }}
          variants={upDesc()}
          initial="initial"
          animate="animate"
          exit="exit"
          className="transition-all duration-0 backface mt-20  flex flex-col max-sm:mt-10"
        >
          <div className="flex flex-col mt-10  max-sm:mt-8 w-[100%] h-[1px] bg-[#cbcbcb]"></div>
          <Link
            target="_blank"
            href="https://www.instagram.com/tommek.23/"
            data-scroll
            data-scroll-speed="0.1"
            className="  cursor-pointer bg-black w-fit h-fit text-white font-[200] text-[2rem]  max-sm:text-[2rem] max-sm:px-10 max-sm:py-10 max-sm:mt-[-4rem] px-12 py-12 rounded-[50%] mt-[-5rem] self-end  mr-10 "
          >
            <BsArrowDownLeft />
          </Link>
        </motion.div>
        <div />
        <BlogPostContainer />
      </div>
    </Page>
  );
};

export default Blog;
