"use client";

import { cubicBezier, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Loading() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = 500; // update every 500ms

    if (count < 100) {
      const timer = setTimeout(() => {
        setCount((prev) => Math.min(prev + 10, 100));
      }, interval);
      return () => clearTimeout(timer);
    }
  }, [count]);

  // while (count < 100) {
  //   setCount(count + 10);
  //   // Simulate a loading process
  // }

  return (
    <motion.div
      className="h-screen w-screen fixed top-0 z-50 flex items-center justify-center bg-transparent overflow-hidden flex-col"
      animate={{
        display: "none",
        transition: {
          delay: 8,
          duration: 0.1,
        },
      }}
    >
      <motion.div
        className="h-1/2 w-screen bg-black relative"
        initial={{ top: 0 }}
        animate={{
          top: "-100%",
          transition: {
            delay: 6,
            duration: 1.5,
            ease: cubicBezier(0.5, 0, 0.5, 1),
          },
        }}
      ></motion.div>
      <motion.div
        className="h-1/2 w-screen bg-black relative"
        initial={{ top: 0 }}
        animate={{
          top: "100%",
          transition: {
            delay: 6,
            duration: 1.5,
            ease: cubicBezier(0.5, 0, 0.5, 1),
          },
        }}
      >
        <motion.span className="absolute top-1/2 left-1/2 -translate-x-1/2 font-ppi text-[200px] leading-none text-white">
          {count}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
