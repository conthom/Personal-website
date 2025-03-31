import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [closeTimer, setCloseTimer] = useState(null);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide the navbar when scrolling down
      } else {
        setIsVisible(true); // Show the navbar when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const handleDropdownToggle = () => {
    setProjectsOpen(!projectsOpen);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMouseEnter = () => {
    if (closeTimer) {
      clearTimeout(closeTimer);
      setCloseTimer(null);
    }
    setProjectsOpen(true);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setProjectsOpen(false);
    }, 300); // 300ms delay before closing
    setCloseTimer(timer as unknown as null);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-transform duration-300 ${
        isVisible ? 'transform-none' : '-translate-y-full'
      }`}
    >
      <div className="w-full bg-black/60 backdrop-blur-md">
        <div className="max-w-5xl mx-auto p-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-xl md:text-3xl text-gray-300 hover:text-white font-medium">
              <Image
                src="/connor logo.png"
                alt="Connor Logo"
                width={50}
                height={50}
                className="h-8 w-8 mr-4 md:mr-10"
              />
              Connor Thompson
            </Link>
            <button
              onClick={handleMobileMenuToggle}
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

          <nav
            className={`${mobileMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-center mt-4 transition-all duration-300`}
          >
            <div className="flex flex-row justify-center items-center md:space-x-8">
              <div
                className="relative px-4 md:px-0"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="text-gray-300 hover:text-white font-semibold flex items-center whitespace-nowrap"
                  onClick={handleDropdownToggle}
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
        {/* Projects drop down */}
        <div
        className={`absolute z-10 mt-3 bg-black/60 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 
              transition-all duration-200 w-[90vw] md:w-64 -left-12 md:left-0 transform-none md:transform-none 
              ${projectsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                {/* Dropdown content here */}
                  <div className="p-4 space-y-3">
                  <Link href="/gantt" className="block text-white hover:bg-white/10 p-3 rounded-md transition-colors">
                      <p className="font-medium text-base">G4NTT - AI Business Action Plan Generator</p>
                      <p className="text-sm text-gray-300 mt-1">Web app for business action plan generation using a Gantt chart. Placing us 2nd in Luddy hackathon 2024. Made with Sky Angeles and Nicholas Goh.</p>
                    </Link>
                    <Link href="/matrixpracticer" className="block text-white hover:bg-white/10 p-3 rounded-md transition-colors">
                      <p className="font-medium text-base">Matrix Reduction Practicer</p>
                      <p className="text-sm text-gray-300 mt-1">A web app I developed to help students practice row reduction of matrices, a fundamental skill in linear algebra.</p>
                    </Link>
                    <Link href="/groceryapp" className="block text-white hover:bg-white/10 p-3 rounded-md transition-colors">
                      <p className="font-medium text-base">Community Grocery List App</p>
                      <p className="text-sm text-gray-300 mt-1">
                      A grocery list Android app featuring seven screens for efficient list management and sharing.</p>
                    </Link>
                 
                  </div>
                </div>
              </div>

              <Link href="/resume" className="px-4 md:px-0 text-gray-300 hover:text-white font-semibold whitespace-nowrap">
                Resume
              </Link>
              <Link href="/about" className="px-4 md:px-0 text-gray-300 hover:text-white font-semibold whitespace-nowrap">
                About Me
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}