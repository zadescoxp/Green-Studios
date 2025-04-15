"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";

export default function About() {
  const texts = [
    "Green",
    "energy",
    "is",
    "any",
    "energy",
    "type",
    "that",
    "is",
    "generated",
    "from",
    "natural",
    "resources,",
    "such",
    "as",
    "sunlight,",
    "wind",
    "or",
    "water.",
    "It",
    "often",
    "comes",
    "from",
    "renewable",
    "energy",
    "sources",
    "although",
    "there",
    "are",
    "some",
    "differences",
    "between",
    "renewable",
    "and",
    "green",
    "energy.",
    "The",
    "key",
    "with",
    "these",
    "energy",
    "resources",
    "are",
    "that",
    "they",
    "don't",
    "harm",
    "the",
    "environment",
    "through",
    "factors",
    "such",
    "as",
    "releasing",
    "greenhouse",
    "gases",
    "into",
    "the",
    "atmosphere.",
  ];

  return (
    <div className="h-[200vh] w-screen flex items-center justify-center">
      <div className="flex items-baseline justify-center gap-4 leading-0 w-1/2 h-auto flex-wrap">
        {texts.map((text, index) => (
          <Text key={index} text={text} />
        ))}
      </div>
    </div>
  );
}

const Text = ({ text }: { text: string }) => {
  const element = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start 0.7"],
  });
  return (
    <motion.h2
      ref={element}
      className={`relative text-5xl text-foreground font-sans font-medium`}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
    >
      {text}
    </motion.h2>
  );
};
