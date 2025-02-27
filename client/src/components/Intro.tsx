import React from 'react';
import Image from 'next/image';
import TechyBackground from '@/components/TechyBackground'; // Assuming correct import
import TechStack from '@/components/Techstack'
import Link from 'next/link';
// @ts-expect-error okay
import FadeIn from "text-fade-in";
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons
// Icons
const LeetCodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="45"  // Ensure the icon has a width
    height="45" // Ensure the icon has a height
    fill="none"
    stroke="currentColor" // Set stroke color to current text color
>
    <path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"></path>
    <path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"></path>
  </svg>
);
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 36 36" id="mail"     fill="white">
    <path d="M18 0C8.065 0 0 8.065 0 18s8.065 18 18 18 18-8.065 18-18S27.935 0 18 0zm0 1c9.41 0 17.031 7.59 17.031 17S27.41 35.031 18 35.031C8.59 35.031.969 27.41.969 18 .969 8.59 8.59 1 18 1zM8.844 12.594a.5.5 0 0 0-.438.531V24.5a.5.5 0 0 0 .5.5h18.188a.5.5 0 0 0 .5-.5V13.187a.5.5 0 0 0-.5-.593H18l-9 .031a.5.5 0 0 0-.094-.031.5.5 0 0 0-.062 0zm9.156 1h7.375L18 18.219l-7.344-4.594L18 13.594zM9.406 14l8.344 5.219a.5.5 0 0 0 .531 0L26.594 14v10H9.406V14z"></path>
  </svg>
);
export default function Intro() {

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* Full-screen background */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1
      }}>
        <TechyBackground />
      </div>

      {/* Content section */}
      <div className="flex flex-col justify-center items-center h-full relative z-10 text-white mt-20">
        <Image
          src="/Connor.jpg"
          alt="Connor Thompson"
          width={250}
          height={250}
          className="rounded-full"
        />
        <div className="text-6xl mt-4 text-center font-mono">
          <Typewriter
        options={{
          strings: ["Hi, I'm Connor."],
          autoStart: true,
          loop: true,
          cursor: "|",
        }}
        />
        </div>
        <div className="text-2xl text-center font-mono">
          <FadeIn linear lines text-l>
        <p className="font-mono text-2xl mb-4 p-5">Full Stack Developer</p>
        <p className="text-2xl mb-4 p-5">•</p>
        <div className="flex items-center mb-4 p-5 fill-white">
        <Image
          alt = "IU Logo"
          src="/iulogo.png"
          width={28}
          height={28}
        />
          <p className="font-mono text-2xl px-2">Computer Science &apos;'26</p>
        </div>
        <p className="text-2xl mb-4 p-5">•</p>
        <p className="font-mono text-2xl mb-4 p-5">Building my AI / ML Skillset</p>
          </FadeIn>
        </div>
        {/* Social Links */}
        <div className="flex space-x-6 mt-6 text-5xl"> {/* Increased text size to make icons larger */}
          <Link href="https://github.com/conthom" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub />
          </Link>
          <Link href="https://linkedin.com/in/connorthompson26" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin />
          </Link>
          <Link href="https://leetcode.com/u/connorhonor/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <LeetCodeIcon />
          </Link>
          <Link href="/about" rel="noopener noreferrer" className="hover:text-gray-400"> {/* Link to your contact page */}
            <EmailIcon/>
          </Link>
        </div>
        <FadeIn linear lines>
        <p className="mt-4 max-w-xl mx-auto text-xl text-center bg-black bg-opacity-30 p-4 rounded">
          I specialize in full-stack software development using JavaScript, React, and Next.js, with backend experience in Python, Flask, Firebase, and PostgreSQL.
        </p>
        </FadeIn>
        {/* Tech Stack */}
        <div className="text-center">
          <div className="flex justify-center space-x-6 text-5xl">
            <TechStack/>
          </div>
        </div>

      </div>
      </div>
  );
}
