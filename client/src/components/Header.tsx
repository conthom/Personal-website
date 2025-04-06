"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa"; // Import the left arrow icon
import FadeIn from "react-fade-in";

export function Header() {
  const pathname = usePathname(); // Get current route
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if the user is on a project detail page
  const isProjectPage = ["/gantt", "/groceryapp", "/matrixpracticer"].includes(pathname);
  const isProjectsActive = pathname === "/projects" || isProjectPage;

  const colorMap = {
    "/projects": "text-blue-400 text-xl sm:text-2xl scale-105 underline",
    "/about": "text-green-400 text-xl sm:text-2xl scale-105 underline",
    "/resume": "text-red-400 text-xl sm:text-2xl scale-105 underline",
  } as const;

  return (
    <header className="fixed top-0 z-50 left-0 right-0 transition-all duration-300">
      <div
        className={cn(
          "rounded-full mx-auto flex items-center justify-between max-w-7xl px-4 sm:px-6 py-2 sm:py-4 transition-all duration-300 border",
          scrolled
            ? "border-white bg-black/50 backdrop-blur text-white"
            : "border-black bg-black text-gray-300"
        )}
      >
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
          <Image src="/connor logo.png" alt="Connor Logo" width={35} height={35} />
          <span
            className={cn(
              "font-mono text-xl sm:text-3xl font-bold transition-colors",
              scrolled ? "text-white" : "text-gray-300 group-hover:text-white"
            )}
          >
            Connor Thompson
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex-grow flex font-bold justify-center space-x-6 sm:space-x-16">
          {(["/projects", "/about", "/resume"] as const).map((href) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "relative transition-all duration-300 font-medium",
                pathname === href || (href === "/projects" && isProjectsActive)
                  ? colorMap[href]
                  : "text-white text-base sm:text-lg hover:scale-105 hover:text-opacity-80"
              )}
            >
              {href === "/projects" ? (
                isProjectPage ? (
                  <div className="flex items-center">
                    <FadeIn>
                      <FaArrowLeft className="text-white" />
                    </FadeIn>
                    <span>Projects</span>
                  </div>
                ) : (
                  "Projects"
                )
              ) : href === "/about" ? (
                "About"
              ) : (
                "Resume"
              )}
              <span
                className={cn(
                  "absolute left-0 bottom-0 w-full h-[2px] transition-transform duration-300",
                  pathname === href || (href === "/projects" && isProjectsActive)
                    ? "scale-x-100"
                    : "scale-x-0 hover:scale-x-100"
                )}
              ></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
