import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const handleDropdownToggle = () => {
    setProjectsOpen(!projectsOpen);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setProjectsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setProjectsOpen(false);
    }, 300);
    setCloseTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

  return (
    <header className="fixed w-full z-50">
      <div className="w-full bg-black/60 backdrop-blur-md">
        <div className="max-w-5xl mx-auto p-4">
          {/* Logo & Mobile Menu Button */}
          <div className={`flex items-center justify-between transition-all duration-300 ${isVisible ? 'opacity-100 h-8' : 'opacity-0 h-0 overflow-hidden'}`}>
            <Link href="/" className="flex items-center text-xl md:text-3xl text-white font-medium">
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

          {/* Navigation Links */}
          <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-center ${isVisible ? 'mt-4' : 'mt-2'} transition-all duration-300`}>
            <div className="flex flex-row justify-center items-center md:space-x-8 bg-transparent">
              {/* Projects Dropdown */}
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

                {/* Dropdown Content */}
                <div
                  className={`absolute z-10 mt-3 w-64 backdrop-blur-md bg-black/80 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 transition-all duration-200 ${
                    projectsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="p-4 space-y-2">
                    <Link href="/gantt" className="block text-white hover:bg-white/10 p-2 rounded-md transition-colors">
                      <p className="font-medium">G4NTT - AI Business Action Plan Generator</p>
                      <p className="text-sm text-gray-300">Full-stack web app for Gantt chart generation.</p>
                    </Link>
                    <Link href="/matrixpracticer" className="block text-white hover:bg-white/10 p-2 rounded-md transition-colors">
                      <p className="font-medium">Project Two</p>
                      <p className="text-sm text-gray-300">Description of project two.</p>
                    </Link>
                    <Link href="/groceryapp" className="block text-white hover:bg-white/10 p-2 rounded-md transition-colors">
                      <p className="font-medium">Project Three</p>
                      <p className="text-sm text-gray-300">Description of project three.</p>
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
