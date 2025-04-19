import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-opacity-90 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      } ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className={`text-xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              } hover:text-blue-500 transition-colors duration-300`}
              onClick={() => handleLinkClick("home")}
            >
              Portfolio
            </ScrollLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                } ${activeLink === "home" ? (theme === 'dark' ? 'text-white bg-gray-800' : 'text-gray-900 bg-gray-100') : ''}`}
                onClick={() => handleLinkClick("home")}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                } ${activeLink === "about" ? (theme === 'dark' ? 'text-white bg-gray-800' : 'text-gray-900 bg-gray-100') : ''}`}
                onClick={() => handleLinkClick("about")}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="skill"
                smooth={true}
                duration={500}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                } ${activeLink === "skill" ? (theme === 'dark' ? 'text-white bg-gray-800' : 'text-gray-900 bg-gray-100') : ''}`}
                onClick={() => handleLinkClick("skill")}
              >
                Skills
              </ScrollLink>
              <ScrollLink
                to="project"
                smooth={true}
                duration={500}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                } ${activeLink === "project" ? (theme === 'dark' ? 'text-white bg-gray-800' : 'text-gray-900 bg-gray-100') : ''}`}
                onClick={() => handleLinkClick("project")}
              >
                Projects
              </ScrollLink>
              <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                } ${activeLink === "experience" ? (theme === 'dark' ? 'text-white bg-gray-800' : 'text-gray-900 bg-gray-100') : ''}`}
                onClick={() => handleLinkClick("experience")}
              >
                Experience
              </ScrollLink>
              <div className="flex items-center space-x-2">
                <a
                  href="https://github.com/ThatGuyChandan"
                  target="blank"
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/chandan-thakur-969703250/"
                  target="blank"
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="https://leetcode.com/u/user5092N/"
                  target="blank"
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <FiCode size={20} />
                </a>
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <div className="flex items-center space-x-2 mr-2">
              <a
                href="https://github.com/ThatGuyChandan"
                target="blank"
                className={`p-2 rounded-full transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/chandan-thakur-969703250/"
                target="blank"
                className={`p-2 rounded-full transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://leetcode.com/u/user5092N/"
                target="blank"
                className={`p-2 rounded-full transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <FiCode size={20} />
              </a>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="sm:hidden" id="mobile-menu">
            <div
              ref={ref}
              className={`flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
                onClick={() => handleLinkClick("home")}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
                onClick={() => handleLinkClick("about")}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="skill"
                smooth={true}
                duration={500}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
                onClick={() => handleLinkClick("skill")}
              >
                Skills
              </ScrollLink>
              <ScrollLink
                to="project"
                smooth={true}
                duration={500}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
                onClick={() => handleLinkClick("project")}
              >
                Projects
              </ScrollLink>
              <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
                onClick={() => handleLinkClick("experience")}
              >
                Experience
              </ScrollLink>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Nav;
