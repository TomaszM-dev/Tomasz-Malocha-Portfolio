"use client";
import { useNavLink } from "@/nav-store";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import BlogData from "../data/blogData";

const BlogPostContainer = () => {
  const active = useNavLink();
  const router = useRouter();
  const [data, setData] = BlogData();
  const params = useParams();

  return (
    <div className="w-full  grid grid-cols-2 mt-28 gap-20  ">
      {[data].map((post) => {
        return (
          <Link
            href={{
              query: [data],
              pathname: post.href,
            }}
            onClick={() => {
              active.setActiveLink(post.titleThumb);
              router.push(post.href, {
                scroll: false,
              });
            }}
            className="w-full cursor-pointer"
            key={post.number}
          >
            <div className="bg-black h-[30rem] w-full flex items-center justify-center">
              <Image
                width={480}
                height={450}
                alt="post"
                className=" object-cover  h-64"
                src={post.image}
              ></Image>
            </div>
            <h2 className="text-[1.7rem] border-b-[1px] pt-10 pb-4">
              {post.titleThumb}
            </h2>

            <div className="flex uppercase justify-between mt-7 text-[#7E7E7E] font-thin">
              <p>{post.typeThumb}</p>
              <p>{post.date}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogPostContainer;
