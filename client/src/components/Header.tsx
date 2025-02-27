import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-black bg-opacity-50 h-16">
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        {/* Logo & Mobile Menu Button */}
        <div className="flex items-center justify-between w-full md:w-auto p-3 md:p-1">
          <Link href="/" className="flex items-center text-3xl text-white font-medium">
            <Image src="connor logo.png" alt="Connor Logo" className="h-8 w-8 mr-10" />
            Connor Thompson
          </Link>
          <button
            className="text-white md:hidden px-3 py-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="md:flex flex-grow items-center">
          <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-1xl md:text-base">
            {/* Projects Dropdown */}
            <div className="relative">
              <button
                className="text-gray-300 hover:text-white font-semibold flex items-center"
                onMouseEnter={() => setProjectsOpen(true)}
                onMouseLeave={() => setProjectsOpen(false)}
              >
                Projects
                <svg
                  className={`ml-2 h-5 w-5 transition-transform ${projectsOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown Content */}
              {projectsOpen && (
                <div
                  className="absolute z-10 mt-3 w-64 bg-black rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                  onMouseEnter={() => setProjectsOpen(true)}
                  onMouseLeave={() => setProjectsOpen(false)}
                >
                  <div className="p-4 space-y-2">
                    <Link href="/gantt" className="block text-white hover:bg-gray-800 p-2 rounded-md">
                      <p className="font-medium">G4NTT - AI Business Action Plan Generator</p>
                      <p className="text-sm text-gray-500">Full-stack web app for Gantt chart generation.</p>
                    </Link>
                    <Link href="/matrixpracticer" className="block text-white hover:bg-gray-800 p-2 rounded-md">
                      <p className="font-medium">Project Two</p>
                      <p className="text-sm text-gray-500">Description of project two.</p>
                    </Link>
                    <Link href="/groceryapp" className="block text-white hover:bg-gray-800 p-2 rounded-md">
                      <p className="font-medium">Project Three</p>
                      <p className="text-sm text-gray-500">Description of project three.</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/resume" className="mr-12 ml-11 text-gray-300 hover:text-white font-semibold">
              Resume
            </Link>
            <Link href="/about" className="mr-5 text-gray-300 hover:text-white font-semibold">
              About Me
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
