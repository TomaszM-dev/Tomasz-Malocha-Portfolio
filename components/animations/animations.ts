export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

export const upDesc = () => {
  const isMobile = window.innerWidth < 500;
  if (!isMobile) {
    return {
      initial: {
        opacity: 0,

        y: 200,
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.5 },
      },
    };
  }
};
export const upProjects = () => {
  const isMobile = window.innerWidth < 500;
  if (!isMobile) {
    return {
      initial: {
        opacity: 0,

        y: 100,
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.5 },
      },
    };
  }
};
export const upText = () => {
  const isMobile = window.innerWidth < 500;
  if (!isMobile) {
    return {
      initial: {
        opacity: 0,

        bottom: -150,
      },
      animate: {
        opacity: 1,
        bottom: 0,
        transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.6 },
      },
    };
  }
};

export const descText = () => {
  const isMobile = window.innerWidth < 600;
  if (!isMobile) {
    return {
      initial: {
        y: "100%",
      },
      open: (i: number) => ({
        y: "0%",
        transition: { duration: 0.5, delay: 0.05 * i },
      }),
      closed: {
        y: "100%",
        transition: { duration: 0.5 },
      },
    };
  }
};

export const fadeIn = (direction: string, delay: number) => {
  const isMobile = window.innerWidth < 600;
  console.log(isMobile);
  if (!isMobile) {
    return {
      hidden: {
        y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
        opacity: 0,
        transition: {
          type: "tween",
          duration: 0.8,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
        x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  }
};

export const menuSlide = () => {
  const isMobile = window.innerWidth < 500;
  if (!isMobile) {
    return {
      initial: { x: "calc(100% + 100px)" },
      enter: {
        x: "0",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      },
      exit: {
        x: "calc(100% + 100px)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      },
    };
  }
};

export const scale = () => {
  const isMobile = window.innerWidth < 500;
  if (!isMobile) {
    return {
      open: { scale: 1, transition: { duration: 0.3 } },
      closed: { scale: 0, transition: { duration: 0.4 } },
    };
  }
};

export const menuVars = () => {
  const isMobile = window.innerWidth < 500;
  if (!isMobile) {
    return {
      initial: {
        scaleX: 0,
      },
      animate: {
        scaleX: 1,
        transition: {
          duration: 0.5,
          ease: [0.12, 0, 0.39, 0],
        },
      },

      exit: {
        scaleX: 0,
        transition: {
          delay: 0.5,
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    };
  }
};

export const menuLinkVars = () => {
  const isMobile = window.innerWidth < 500;
  if (!isMobile) {
    return {
      initial: {
        x: "10vh",
        opacity: 0,
        transition: {
          duration: 0.3,
          ease: [1, 1, 0.36, 1],
        },
      },
      open: {
        x: "0",
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: [1, 1, 0.36, 1],
        },
      },
    };
  }
};

export const containerVars = () => {
  const isMobile = window.innerWidth < 500;
  if (!isMobile) {
    return {
      initial: {
        transition: {
          staggerChildren: 0.09,
          staggerDirection: -1,
        },
      },
      open: {
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.09,
        },
      },
    };
  }
};
