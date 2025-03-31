"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, {useState, useEffect} from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="fixed top-0 z-50 left-0 right-0 transition-all duration-300">
      <div
        className={cn(
          "rounded-full mx-auto flex items-center justify-between max-w-7xl px-6 py-4 transition-all duration-300",
          scrolled ? "my-4 rounded-full border border-border/30 bg-black/80 backdrop-blur" : "bg-black"
        )}
      >
        {/* Logo + Name (Now Clickable with Hover Effect) */}
        <Link href="/" className="flex items-center space-x-3 group">
          <Image src="/connor logo.png" alt="Connor Logo" width={40} height={40} />
          <span className="font-mono text-white text-3xl font-bold transition-colors group-hover:text-gray-300">
            Connor Thompson
          </span>
        </Link>

        {/* Centered Navigation with More Spacing */}
        <nav className="flex-grow flex font-bold justify-center space-x-20">
          <Link
            href="/projects"
            className="relative text-white text-xl font-medium transition-all duration-300 hover:text-blue-400 hover:scale-110"
          >
            Projects
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-400 scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
          </Link>
          <Link
            href="/about"
            className="relative text-white text-xl font-medium transition-all duration-300 hover:text-green-400 hover:scale-110"
          >
            About
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-400 scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
