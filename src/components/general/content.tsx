"use client";

import { textVar } from "@/utils/variants";
import { motion } from "motion/react";

export default function Content() {
  return <div className=""></div>;
}

interface ComponentProps {
  imgArr: string[];
  title: string;
  deec: string;
  num: number;
}

const Component = ({ imgArr, title, deec, num }: ComponentProps) => {
  return (
    <div className="">
      <span>
        <motion.h1
          className="relative"
          variants={textVar}
          initial="initial"
          whileInView="whileInView"
        >
          {title}
        </motion.h1>
        <motion.p
          className="relative"
          variants={textVar}
          initial="initial"
          whileInView="whileInView"
        >
          {num} operational
        </motion.p>
      </span>
      <motion.p
        className="relative"
        variants={textVar}
        initial="initial"
        whileInView="whileInView"
      >
        {deec}
      </motion.p>
    </div>
  );
};
