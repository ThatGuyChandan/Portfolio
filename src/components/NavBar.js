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

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
  
      const sections = ['home', 'about', 'skills', 'certificates', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 100;
  
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
  
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-sm font-sans ${
        scrolled
          ? (theme === 'dark'
              ? 'bg-gray-900/80 shadow-lg'
              : 'bg-white/80 shadow-lg')
          : (theme === 'dark'
              ? 'bg-gray-900/60'
              : 'bg-white/60')
      }`}
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
              } hover:text-primary transition-colors duration-300`}
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
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  theme === 'dark'
                    ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                    : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
                } ${activeLink === "home" ? (theme === 'dark' ? 'text-white bg-gray-800' : 'text-gray-900 bg-neutral-100') : ''}`}
                onClick={() => handleLinkClick("home")}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  theme === 'dark'
                    ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                    : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
                } ${activeLink === "about" ? (theme === 'dark' ? 'text-white bg-gray-800' : 'text-gray-900 bg-neutral-100') : ''}`}
                onClick={() => handleLinkClick("about")}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  theme === 'dark'
                    ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                    : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
                } ${activeLink === "skills" ? (theme === 'dark' ? 'text-white bg-gray-800' : 'text-gray-900 bg-neutral-100') : ''}`}
                onClick={() => handleLinkClick("skills")}
              >
                Skills
              </ScrollLink>
              <ScrollLink
                to="certificates"
                smooth={true}
                duration={500}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  theme === 'dark'
                    ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                    : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
                } ${activeLink === "certificates" ? (theme === 'dark' ? 'text-white bg-gray-800' : 'text-gray-900 bg-neutral-100') : ''}`}
                onClick={() => handleLinkClick("certificates")}
              >
                Certification
              </ScrollLink>
              <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  theme === 'dark'
                    ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                    : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
                } ${activeLink === "experience" ? (theme === 'dark' ? 'text-white bg-gray-800' : 'text-gray-900 bg-neutral-100') : ''}`}
                onClick={() => handleLinkClick("experience")}
              >
                Experience
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  theme === 'dark'
                    ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                    : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
                } ${activeLink === "projects" ? (theme === 'dark' ? 'text-white bg-gray-800' : 'text-gray-900 bg-neutral-100') : ''}`}
                onClick={() => handleLinkClick("projects")}
              >
                Projects
              </ScrollLink>
              <div className="flex items-center space-x-2">
                <a
                  href="https://github.com/ThatGuyChandan"
                  target="blank"
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                      : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
                  }`}
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/chandan-thakur-969703250/"
                  target="blank"
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                      : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
                  }`}
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="https://leetcode.com/u/user5092N/"
                  target="blank"
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                      : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
                  }`}
                >
                  <FiCode size={20} />
                </a>
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                      : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
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
                    ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                    : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
                }`}
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/chandan-thakur-969703250/"
                target="blank"
                className={`p-2 rounded-full transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                    : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
                }`}
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://leetcode.com/u/user5092N/"
                target="blank"
                className={`p-2 rounded-full transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                    : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
                }`}
              >
                <FiCode size={20} />
              </a>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                    : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
                }`}
              >
                {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                theme === 'dark'
                  ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                  : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
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
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 cursor-pointer ${
                  theme === 'dark'
                    ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                    : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
                }`}
                onClick={() => handleLinkClick("home")}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 cursor-pointer ${
                  theme === 'dark'
                    ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                    : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
                }`}
                onClick={() => handleLinkClick("about")}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 cursor-pointer ${
                  theme === 'dark'
                    ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                    : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
                }`}
                onClick={() => handleLinkClick("skills")}
              >
                Skills
              </ScrollLink>
              <ScrollLink
                to="certificates"
                smooth={true}
                duration={500}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 cursor-pointer ${
                  theme === 'dark'
                    ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                    : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
                }`}
                onClick={() => handleLinkClick("certificates")}
              >
                Certification
              </ScrollLink>
              <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 cursor-pointer ${
                  theme === 'dark'
                    ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                    : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
                }`}
                onClick={() => handleLinkClick("experience")}
              >
                Experience
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 cursor-pointer ${
                  theme === 'dark'
                    ? 'text-neutral-300 hover:text-white hover:bg-gray-800'
                    : 'text-neutral-700 hover:text-gray-900 hover:bg-neutral-100'
                }`}
                onClick={() => handleLinkClick("projects")}
              >
                Projects
              </ScrollLink>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Nav;
