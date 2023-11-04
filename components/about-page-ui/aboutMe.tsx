import Image from "next/image";
import React from "react";
import me from "public/images/aboutme.png";

const AboutMe = () => {
  return (
    <div className="mt-60  h-screen max-w-[1700px] max-sm:flex-col max-sm:flex-col-reverse max-sm:h-fit max-sm:mt-10 mx-auto px-10 flex items-center w-full gap-20 max-sm:gap-10">
      <div className="w-fit h-[100%] relative  max-lg:h-[70%] ">
        <Image
          data-scroll
          data-scroll-speed="0.1"
          width={700}
          alt=""
          quality={100}
          src={me}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="w-[50%] flex flex-col   gap-4   h-full max-sm:w-[100%] ">
        <p className="text-[1.4rem] max-sm:mt-20 max-sm:mb-4 max-sm:leading-[2.rem]">
          Coding serves as my creative canvas, a medium to unravel challenges,
          and a conduit to contribute to the world s betterment through
          technological progress . Beyond coding, I m passionate about
          mindfulness, self-care, self improvement, and weight lifting. I
          believe in the importance of a healthy body to complement a healthy
          mind.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
