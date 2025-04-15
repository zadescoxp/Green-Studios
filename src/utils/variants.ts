import { cubicBezier } from "motion/react";

const textVar = {
  initial: {
    top: 100,
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
  },
  whileInView: {
    top: 0,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      ease: cubicBezier(0, 0.55, 0.45, 1),
      duration: 0.75,
    },
  },
};

const textVar2 = {
  initial: {
    opacity: 0,
    scale: 0.2,
  },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: cubicBezier(0, 0.55, 0.45, 1),
    },
  },
};

export { textVar, textVar2 };
