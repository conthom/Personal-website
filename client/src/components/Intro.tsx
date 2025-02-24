"use client"
import React from 'react';
import Image from 'next/image';
import TechyBackground from '@/components/TechyBackground'; // Assuming correct import
// @ts-ignore
import FadeIn from "text-fade-in";
import Typewriter from 'typewriter-effect';

export default function Intro() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* Full-screen background */}
      <div style={{ 
        position: "absolute", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        zIndex: -1, // Background should be behind all content
      }}>
        <TechyBackground />
      </div>

      {/* Content section */}
      <div className="flex flex-col justify-center items-center h-full relative z-10 ">
        <Image
          src="/Connor.jpg"
          alt="Connor Thompson"
          width={250}
          height={250}
          className="rounded-full"
        />
        <div className="text-white text-6xl mt-4 text-center font-mono">
          <Typewriter
            options={{
              strings: ["hi, I'm Connor."],
              autoStart: true,
              loop: true,
              cursor: "|",
            }}
          />
        </div>
        <div className="text-2xl mt-4 text-center font-mono">
          <FadeIn linear lines text-l>
            <p className="font-mono text-2xl mb-4 p-5">FULL STACK DEV</p>
            <p className="text-2xl mb-4 p-5">•</p>
            <p className="font-mono text-2xl mb-4 p-5">IU COMPUTER SCIENCE '26</p>
            <p className="text-2xl mb-4 p-5">•</p>
            <p className="font-mono text-2xl mb-4 p-5">GAMER AT HEART</p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
