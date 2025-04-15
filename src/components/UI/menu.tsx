"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <AnimatePresence>
      <div className=""></div>
    </AnimatePresence>
  );
}
