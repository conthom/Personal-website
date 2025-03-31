import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function MatrixPracticer() {
  const [iframeHeight, setIframeHeight] = useState("calc(100vh - 300px)");

  useEffect(() => {
    // Adjust iframe height based on header height and description section
    const updateIframeHeight = () => {
      const headerElement = document.querySelector("header");
      const descriptionElement = document.querySelector(".description-section");

      const headerHeight = headerElement
        ? (headerElement as HTMLElement).offsetHeight
        : 80;
      const descriptionHeight = descriptionElement
        ? (descriptionElement as HTMLElement).offsetHeight
        : 220;

      // Add extra padding to ensure enough space
      setIframeHeight(
        `calc(100vh - ${headerHeight + descriptionHeight + 40}px)`,
      );
    };

    // Run after a short delay to ensure all elements are rendered
    const timer = setTimeout(() => {
      updateIframeHeight();
    }, 100);

    window.addEventListener("resize", updateIframeHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateIframeHeight);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Head>
        <title>Matrix Practicer | Connor Thompson</title>
        <link rel="icon" href="/connor logo.png" />
        <meta
          name="description"
          content="Matrix Practice tool for linear algebra calculations"
        />
      </Head>

      <div className="description-section bg-gradient-to-r from-blue-900 to-purple-900 text-white py-8 px-4 md:px-8 mt-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Matrix Reduction Practice
          </h1>
          <p className="text-lg mb-4">
            A tool I developed to help students practice row reduction of
            matrices, a fundamental skill in linear algebra.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Features:</h2>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Interactive matrix reduction practice</li>
                <li>Multiple difficulty levels (Easy, Medium, Hard)</li>
                <li>Speed tracking to measure improvement</li>
                <li>Responsive design for all devices</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Next.js for frontend and backend development </li>
                <li>
                  React for building interactive and reusable UI components
                </li>
                <li>Node.js runtime for server-side matrix reduction logic</li>
                <li>
                  TypeScript for type safety, improved code quality, and better
                  developer experience
                </li>
                <li>Tailwind CSS for efficient and responsive styling</li>
                <li>Deployed on Vercel for fast and reliable hosting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow w-full p-4 pt-8">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-6">
          <iframe
            src="https://matrix-practice.vercel.app/"
            title="Matrix Practice"
            className="w-full border-none"
            style={{
              height: iframeHeight,
              display: "block",
              minHeight: "1000px", // Ensure minimum height
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </main>
    </div>
  );
}
