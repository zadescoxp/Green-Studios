"use client";

import { motion } from "motion/react";
import { textVar } from "@/utils/variants";

export default function Goals() {
  return (
    <div className="flex items-center justify-center flex-col gap-10 h-screen font-sans relative text-white">
      <div className="bg-[url('/goals.jpg')] absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-no-repeat bg-top bg-fixed"></div>
      <div className="bg-[rgba(0,0,0,0.3)] absolute top-0 left-0 w-full h-full"></div>
      <motion.h1
        className="text-8xl font-semibold realtive"
        variants={textVar}
        initial="initial"
        whileInView="whileInView"
      >
        Our Goals
      </motion.h1>
      <div className="flex items-center justify-center gap-20">
        <div className="flex flex-col items-start justify-center gap-10">
          <span className="">
            <motion.h2
              className="text-3xl  font-semibold relative"
              variants={textVar}
              initial="initial"
              whileInView="whileInView"
            >
              50 GW
            </motion.h2>
            <motion.p
              className="relative text-gray-200"
              variants={textVar}
              initial="initial"
              whileInView="whileInView"
            >
              Renewable Portfolio by 2030
            </motion.p>
          </span>
          <span className="">
            <motion.h2
              className="text-3xl  font-semibold relative"
              variants={textVar}
              initial="initial"
              whileInView="whileInView"
            >
              Fulfilled Commitment
            </motion.h2>
            <motion.p
              className="relative text-gray-200"
              variants={textVar}
              initial="initial"
              whileInView="whileInView"
            >
              Zero Waste to Landfill
            </motion.p>
          </span>
          <span className="">
            <motion.h2
              className="text-3xl  font-semibold relative"
              variants={textVar}
              initial="initial"
              whileInView="whileInView"
            >
              Water positive
            </motion.h2>
            <motion.p
              className="relative text-gray-200"
              variants={textVar}
              initial="initial"
              whileInView="whileInView"
            >
              More than 200 MW Capacity Plants
            </motion.p>
          </span>
        </div>

        <div className="flex flex-col items-end justify-center gap-10 text-right">
          <span className="">
            <motion.h2
              className="text-3xl  font-semibold relative"
              variants={textVar}
              initial="initial"
              whileInView="whileInView"
            >
              14,242.9 MW
            </motion.h2>
            <motion.p
              className="relative text-gray-200"
              variants={textVar}
              initial="initial"
              whileInView="whileInView"
            >
              Total Operational Renewable Portfolio
            </motion.p>
          </span>
          <span className="">
            <motion.h2
              className="text-3xl  font-semibold relative"
              variants={textVar}
              initial="initial"
              whileInView="whileInView"
            >
              24.15 Million Tons of CO2 emissions
            </motion.h2>
            <motion.p
              className="relative text-gray-200"
              variants={textVar}
              initial="initial"
              whileInView="whileInView"
            >
              will be avoided annually
            </motion.p>
          </span>
          <span className="">
            <motion.h2
              className="text-3xl  font-semibold relative"
              variants={textVar}
              initial="initial"
              whileInView="whileInView"
            >
              Certified 100%
            </motion.h2>
            <motion.p
              className="relative text-gray-200"
              variants={textVar}
              initial="initial"
              whileInView="whileInView"
            >
              Single-Use Plastic Free
            </motion.p>
          </span>
        </div>
      </div>
    </div>
  );
}
