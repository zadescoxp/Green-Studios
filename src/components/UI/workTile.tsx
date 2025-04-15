"use client";

import { textVar, textVar2 } from "@/utils/variants";
import { AnimatePresence, cubicBezier, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  slno: number;
  title: string;
  description: string;
  images: string[];
  date: string;
  type: string;
  link: string;
}

export default function WorkTile({
  slno,
  title,
  description,
  images,
  date,
  type,
  link,
}: Props) {
  const TitleComponent = () => {
    return (
      <Link href={link} target="_blank">
        <div className="flex items-center justify-center gap-4 flex-col sticky top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-1/2 z-10">
          <span className="flex items-baseline justify-between w-full bg-[#EE0000] mix-blend-screen">
            <motion.h1
              variants={textVar2}
              initial="initial"
              whileInView="whileInView"
              className="font-ppi text-9xl leading-none relative"
            >
              0{slno}
            </motion.h1>
            <motion.h1
              variants={textVar}
              initial="initial"
              whileInView="whileInView"
              className="font-sans font-semibold text-[145px] leading-none relative"
            >
              {title}
            </motion.h1>
          </span>
          <span className="flex items-end justify-between w-full">
            <span>
              <motion.p
                variants={textVar}
                initial="initial"
                whileInView="whileInView"
                className="font-ppi text-lg text-[#EE0000] relative"
              >
                {type}
              </motion.p>
              <motion.p
                variants={textVar}
                initial="initial"
                whileInView="whileInView"
                className="font-sans text-lg relative"
              >
                {date}
              </motion.p>
            </span>
            <motion.p
              variants={textVar}
              initial="initial"
              whileInView="whileInView"
              className="font-sans text-sm font-medium w-[75%] text-right relative"
            >
              {description}
            </motion.p>
          </span>
        </div>
      </Link>
    );
  };

  return (
    <div className="w-screen relative">
      <AnimatePresence>
        <TitleComponent />
      </AnimatePresence>
      <div className="flex justify-around flex-wrap items-center w-full">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            loading="lazy"
            height={1000}
            width={1000}
            alt=""
            className={`w-[37%] h-auto rounded-lg shadow-lg ${
              index % 2 === 0 ? "mt-96" : "-mt-40"
            }`}
          />
        ))}
      </div>
      <div className="w-screen h-screen"></div>
    </div>
  );
}
