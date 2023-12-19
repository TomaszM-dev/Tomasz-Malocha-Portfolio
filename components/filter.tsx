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
      variants={upDesc()}
      initial="initial"
      animate="animate"
      exit="exit"
      viewport={{ once: true }}
      className={`flex gap-2 items-center max-sm:flex-wrap max-sm:gap-y-5 text-[1.2rem] mt-20 font-[200] max-sm:mt-6 max-sm:justify-start`}
    >
      <button
        onClick={() => setActiveGenre("all")}
        className={`max-sm:px-8 max-sm:text-[1.2rem] max-sm:py-5 px-10 py-6 border-[1px] border-[#dddddd] rounded-[4rem] ${
          activeGenre === "all" ? "bg-black border-none text-white " : ""
        }`}
      >
        All
      </button>
      <button
        onClick={() => setActiveGenre("landing")}
        className={`max-sm:px-8 max-sm:text-[1.2rem] max-sm:py-5 px-10 py-5 border-[1px] border-[#dddddd] rounded-[4rem] ${
          activeGenre === "landing" ? "bg-black border-none text-white " : ""
        }`}
      >
        Landing Pages
      </button>
      <button
        onClick={() => setActiveGenre("application")}
        className={`max-sm:px-8 max-sm:text-[1.2rem] max-sm:py-5 px-10 py-5 border-[1px] border-[#dddddd] rounded-[4rem] ${
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

export default Filter;
