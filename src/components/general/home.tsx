"use client";
import Image from "next/image";

import { motion } from "motion/react";
import { textVar, textVar2 } from "@/utils/variants";

export default function Home() {
  return (
    <div className="relative font-sans flex flex-col items-center justify-center gap-4 h-screen text-8xl text-white">
      <div className="bg-[url('/bg.jpg')] absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-no-repeat bg-top bg-fixed"></div>
      <div className="bg-[rgba(0,0,0,0.3)] absolute top-0 left-0 w-full h-full"></div>
      <span className="flex items-baseline justify-center gap-4 relative">
        <Text1 text="TRANSFORMING" />
        <Text2 text="NATURE" />
      </span>

      <span className="flex items-baseline justify-center gap-4">
        <Text2 text="INTO" />
        <Text1 text="EVOLVING" />
      </span>

      <span className="flex items-baseline justify-center gap-4 relative">
        <Text1 text="ENEGRY" />
        <Text2 text="SOLUTIONS" />
      </span>

      <div className="h-[75px] flex items-center justify-center w-[75px] bg-transparent  absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:h-[90px] hover:w-[90px] transition-all">
        <motion.img
          src="/scroll.svg"
          className="object-fill absolute top-0 left-0"
          animate={{
            rotate: [0, 360],
            transition: {
              duration: 15,
              ease: "linear",
              repeat: Infinity,
            },
          }}
        ></motion.img>
        <Image
          src={"/arrow.svg"}
          alt="Arrow"
          height={10}
          width={10}
          className="h-[20px] w-auto"
        />
      </div>
    </div>
  );
}

const Text1 = ({ text }: { text: string }) => {
  return (
    <motion.h1
      className="relative font-semibold text-[107px]"
      variants={textVar}
      initial="initial"
      whileInView="whileInView"
    >
      {text}
    </motion.h1>
  );
};

const Text2 = ({ text }: { text: string }) => {
  return (
    <motion.h1
      className="relative font-pp"
      variants={textVar2}
      initial="initial"
      whileInView="whileInView"
    >
      {text}
    </motion.h1>
  );
};
