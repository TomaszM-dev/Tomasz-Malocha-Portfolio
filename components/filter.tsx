import React, { useEffect } from "react";
import { easeInOut, motion } from "framer-motion";
import { upDesc } from "./animations/animations";

const Filter = ({
  setActiveGenre,
  activeGenre,
  setFiltered,
  projects,
}: any) => {
  useEffect(() => {
    if (activeGenre === "all") {
      setFiltered(projects);
      return;
    }
    const filtered = projects.filter((item: any) =>
      item.filter.includes(activeGenre)
    );

    setFiltered(filtered);
    console.log(filtered);
  }, [activeGenre]);

  return (
    <motion.div
      variants={upDesc}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: true }}
      className={`flex gap-2 items-center max-sm:flex-wrap max-sm:gap-y-5 text-[1.4rem] mt-20 font-[200] max-sm:mt-14 max-sm:justify-start`}
    >
      <button
        onClick={() => setActiveGenre("all")}
        className={`px-10 py-5 border-[1px] border-[#dddddd] rounded-[4rem] ${
          activeGenre === "all" ? "bg-black border-none text-white " : ""
        }`}
      >
        All
      </button>
      <button
        onClick={() => setActiveGenre("landing")}
        className={`px-10 py-5 border-[1px] border-[#dddddd] rounded-[4rem] ${
          activeGenre === "landing" ? "bg-black border-none text-white " : ""
        }`}
      >
        Landing Pages
      </button>
      <button
        onClick={() => setActiveGenre("application")}
        className={`px-10 py-5 border-[1px] border-[#dddddd] rounded-[4rem] ${
          activeGenre === "application"
            ? "bg-black border-none text-white "
            : ""
        }`}
      >
        Applications
      </button>
    </motion.div>
  );
};

const showAnimationVariant = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,

    transition: {
      duration: 0.8,
      ease: easeInOut,
    },
  },
};

export default Filter;
