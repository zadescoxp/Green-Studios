"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-screen h-auto top-0 left-0 flex items-center justify-between px-10 py-5 z-40 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <Link href={"/"}>
        <h1 className="text-2xl font-bold leading-none">
          Green
          <br />
          Studios.
        </h1>
      </Link>

      <div className="flex items-center gap-5 font-medium text-lg">
        <Link href={"/about"} className="relative group">
          <div
            className={`absolute -bottom-1 left-0 w-full h-[2px] ${
              isScrolled ? "bg-black" : "bg-white"
            } scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100`}
          ></div>
          About
        </Link>
        <Link href={"/work"} className="relative group">
          <div
            className={`absolute -bottom-1 left-0 w-full h-[2px] ${
              isScrolled ? "bg-black" : "bg-white"
            } scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100`}
          ></div>
          Work
        </Link>
        <Link href={"/contact"} className="relative group">
          <div
            className={`absolute -bottom-1 left-0 w-full h-[2px] ${
              isScrolled ? "bg-black" : "bg-white"
            } scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100`}
          ></div>
          Contact
        </Link>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}
