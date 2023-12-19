import BlogData from "@/components/data/blogData";
import Page from "@/components/page";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import { upDesc } from "@/components/animations/animations";
import Link from "next/link";
import { BsArrowDownLeft } from "react-icons/bs";
import BlogPostContainer from "@/components/blog-page/blogPostContainer";
import { useNavLink } from "@/nav-store";

const BlogDetails = ({ data }) => {
  const params = useParams();
  console.log(params);
  const pathname = usePathname();
  // const data = BlogData().filter((data) => data.href === pathname);
  console.log(data);
  return (
    <Page>
      {data?.map((post) => {
        return (
          <div
            key={post.number}
            className="w-[100%] max-w-[1700px] mt-[11rem] mb-40  mx-auto px-28 max-md:px-10  flex flex-col justify-center max-sm:mt-[6rem] max-sm:px-4"
          >
            <motion.h1
              variants={upDesc()}
              initial="initial"
              whileInView="animate"
              exit="exit"
              viewport={{ once: true, amount: 0.2 }}
              className="transition-all duration-0 backface text-[4.6rem] font-[300] w-[44rem] xl:text-[5.6rem] xl:w-[55rem] leading-[4.6rem] xl:leading-[5.5rem] tracking-tighter max-md:text-[4rem]  max-sm:leading-[3.4rem] max-sm:text-[3rem]  max-sm:w-full"
            >
              {post.titleThumb}
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
            </motion.div>
            <div />
          </div>
        );
      })}
    </Page>
  );
};

export default BlogDetails;
