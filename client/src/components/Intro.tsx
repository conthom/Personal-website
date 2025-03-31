"use client";
import React from "react";
import TechyBackground from "@/components/TechyBackground";
import ResponsiveContent from "@/components/ResponsiveContent";

export default function Intro() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <TechyBackground />
      </div>

      <div className="flex flex-col items-center text-white px-6 text-center sm:mt-24 mt-16">
        <ResponsiveContent />
      </div>
    </div>
  );
}
