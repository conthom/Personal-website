"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import FadeIn from "react-fade-in";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Techstack from "./Techstack";

const ResponsiveContent: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTabletOrDesktop, setIsTabletOrDesktop] = useState(true);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTabletOrDesktop(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  return (
    <div className="w-full flex flex-col items-center">

      <Image
        src="/Connor.png"
        alt="Connor Thompson"
        width={isMobile ? 150 : 250}
        height={isMobile ? 150 : 250}
        className="rounded-full"
      />

      <h1 className={`mt-4 font-mono ${isMobile ? "text-2xl" : "text-5xl"}`}>
        <Typewriter
          options={{
            strings: ["Hi, I'm Connor."],
            autoStart: true,
            loop: true,
            cursor: "|",
          }}
        />
      </h1>

      <div
        className={`mt-4 font-mono ${isMobile ? "text-lg" : "text-xl"} px-4 max-w-full`}
      >
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-2 text-center">
            <p className="w-full sm:w-auto">Full Stack Developer</p>
            <span className="hidden sm:inline text-gray-400">•</span>
            <div className="flex items-center justify-center gap-2 w-full sm:w-auto">
              <Image alt="IU Logo" src="/iulogo.png" width={24} height={24} />
              <p>Computer Science '26</p>
            </div>
            <span className="hidden sm:inline text-gray-400">•</span>
            <p className="w-full sm:w-auto">Building my AI / ML Skillset</p>
          </div>
        </FadeIn>
      </div>

      <div className="flex space-x-6 mt-6">
        <FadeIn>
          <div className="flex space-x-6">
            <Link
              href="https://github.com/conthom"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub className="w-8 h-8 md:w-10 md:h-10" />
            </Link>
            <Link
              href="https://linkedin.com/in/connorthompson26"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedin className="w-8 h-8 md:w-10 md:h-10" />
            </Link>
            <Link
              href="https://leetcode.com/u/connorhonor/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 md:w-10 md:h-10"
                fill="none"
                stroke="currentColor"
              >
                <path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"></path>
                <path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"></path>
              </svg>
            </Link>
            <Link
            href="/about#scrollbottom"
            rel="noopener noreferrer"
            className="group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 36"
              className="w-8 h-8 md:w-10 md:h-10 fill-white transition-colors duration-300 group-hover:fill-gray-400"
            >
              <path d="M18 0C8.065 0 0 8.065 0 18s8.065 18 18 18 18-8.065 18-18S27.935 0 18 0zm0 1c9.41 0 17.031 7.59 17.031 17S27.41 35.031 18 35.031C8.59 35.031.969 27.41.969 18 .969 8.59 8.59 1 18 1zM8.844 12.594a.5.5 0 0 0-.438.531V24.5a.5.5 0 0 0 .5.5h18.188a.5.5 0 0 0 .5-.5V13.187a.5.5 0 0 0-.5-.593H18l-9 .031a.5.5 0 0 0-.094-.031.5.5 0 0 0-.062 0zm9.156 1h7.375L18 18.219l-7.344-4.594L18 13.594zM9.406 14l8.344 5.219a.5.5 0 0 0 .531 0L26.594 14v10H9.406V14z"></path>
            </svg>
          </Link>
          </div>
        </FadeIn>
      </div>
        <FadeIn>
          <p
            className={`mt-4 rounded-full bg-black bg-opacity-30 p-4 ${isMobile ? "max-w-xs text-base" : "max-w-lg text-xl"}`}
          >
            I specialize in full-stack software development using JavaScript,
            React, and Next.js, with backend experience in Python, Flask,
            Firebase, and PostgreSQL.
          </p>
        </FadeIn>
      <div className="w-full bg-black bg-opacity-30 rounded-full mt-6 px-4 md:px-8 lg:px-16">
        <FadeIn>
          <div className="max-w-7xl mx-auto">
            <Techstack />
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default ResponsiveContent;
