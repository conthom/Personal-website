import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Gantt() {
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
        <title>
          G4NTT - AI Business Action Plan Generator | Connor Thompson
        </title>
        <link rel="icon" href="/connor logo.png" />
        <meta
          name="description"
          content="G4NTT - AI-powered business action plan generator with Gantt chart visualization"
        />
      </Head>

      <div className="description-section bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-8 px-4 md:px-8 mt-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            G4NTT - AI Business Action Plan Generator
          </h1>
          <p className="text-lg mb-4">
            A collaborative project with Sky Angeles and Nicholas Goh that
            generates comprehensive business action plans with Gantt chart
            visualization.
          </p>
          <div className="mb-6">
            <div className="md:flex md:gap-10">
              <div className="md:w-1/3">
                <h2 className="text-xl font-semibold mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>AI-powered business action plan generation</li>
                  <li>Interactive Gantt chart visualization</li>
                  <li>Export options (PDF, Excel, CSV)</li>
                  <li>Customizable timeline and task management</li>
                  <li>Responsive design for all devices</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-3">
                  Technologies Used:
                </h2>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Next.js for frontend development</li>
                  <li>React for UI components</li>
                  <li>Python Flask for API routing and backend business information handling</li>
                  <li>Scikit-learn and Pandas for data preprocessing and analysis</li>
                  <li>OpenAI API for plan generation</li>
                  <li>Tailwind CSS for styling</li>
                  <li>Vercel for deployment</li>
                </ul>
              </div>

              <div className="md:w-2/3 md:mt-0">
                <h3 className="text-xl font-semibold mb-4">
                  System Architecture
                </h3>
                <div
                  className="relative w-full"
                  style={{ height: "500px", width: "100%" }}
                >
                  <Image
                    src="/gantt-diagram.png"
                    alt="G4NTT System Architecture Diagram"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left center"
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="relative w-full" style={{ height: "350px" }}>
              <Image
                src="/gantt-chart.png"
                alt="G4NTT Chart Example"
                layout="fill"
                objectFit="contain"
                objectPosition="left center"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-red-300 font-semibold mb-4">
        **Note:** The G4NTT service is currently not up and running due to
        backend API and subscription costs. I hope to rehost it in the future.
        You can click the youtube icon in the top right of the iframe below to
        view a demo video.
      </p>
      <main className="flex-grow w-full p-4">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://g4ntt.vercel.app/"
            title="G4NTT - AI Business Action Plan Generator"
            className="w-full border-none"
            style={{
              height: iframeHeight,
              display: "block",
              minHeight: "800px", // Ensure minimum height
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </main>
    </div>
  );
}
