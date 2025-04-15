"use client";

import { textVar } from "@/utils/variants";
import { motion } from "motion/react";
import Image from "next/image";

export default function Content() {
  return (
    <div className="w-screen flex flex-col items-center justify-center gap-40 font-sans py-20">
        <motion.h1 className="text-8xl relative font-bold" variants={textVar} initial="initial" whileInView="whileInView">Our Services</motion.h1>
      <Component
        imgArr={[
          "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/695342/pexels-photo-695342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/2017354/pexels-photo-2017354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]}
        title="Wind"
        deec={
          "Growing exponentially on a planet-first, sustainable journey. we continually strive to identify and elevate various regions of the country for wind resource potential and micro-siting."
        }
        num={1877.8}
        video={""}
        reverse={false}
      />
      <Component
        imgArr={[
          "https://images.pexels.com/photos/159243/solar-solar-cells-photovoltaic-environmentally-friendly-159243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/2800845/pexels-photo-2800845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/3331814/pexels-photo-3331814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/1599819/pexels-photo-1599819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]}
        title="Solar"
        deec={
          "Treading the path to a greener future one mindful step at a time. Our research-backed projects focus on emerging technology, solar radiation, grid infrastructure and geographical location."
        }
        num={10105.5}
        video={""}
        reverse={true}
      />
      <Component
        imgArr={[
          "https://images.pexels.com/photos/1605270/pexels-photo-1605270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/8853509/pexels-photo-8853509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/31564458/pexels-photo-31564458/free-photo-of-offshore-wind-farm-with-multiple-wind-turbines.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/414807/pexels-photo-414807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]}
        title="Hybrid"
        deec={
          "Emerging strong in the energy hybridization sector. we combine the best of both energy sources for optimal power generation round the clock. It's a win-win with reduced cost of sharing transmission lines."
        }
        num={2259.6}
        video={""}
        reverse={false}
      />
    </div>
  );
}

interface ComponentProps {
  imgArr: string[];
  title: string;
  deec: string;
  num: number;
  video: string;
  reverse: boolean;
}

const Component = ({ imgArr, title, deec, num, video, reverse }: ComponentProps) => {
  return (
    <div className={`flex items-top justify-center px-20 gap-20 ${reverse && "flex-row-reverse"}`}>
      <div className="max-w-1/3">
        <span className="flex items-baseline justify-between">
          <motion.h1
            className="relative text-2xl font-semibold"
            variants={textVar}
            initial="initial"
            whileInView="whileInView"
          >
            {title}
          </motion.h1>
          <motion.p
            className="relative text-sm text-gray-600"
            variants={textVar}
            initial="initial"
            whileInView="whileInView"
          >
            {num} operational
          </motion.p>
        </span>
        <motion.p
          className="relative text-sm"
          variants={textVar}
          initial="initial"
          whileInView="whileInView"
        >
          {deec}
        </motion.p>
        <video src={video}></video>
      </div>

      <div className="grid grid-cols-2">
        {imgArr.map((img, index) => (
          <div className="" key={index}>
            <Image src={img} alt="" height={200} width={350} />
          </div>
        ))}
      </div>
    </div>
  );
};
