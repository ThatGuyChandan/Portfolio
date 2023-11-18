import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link as ScrollLink } from "react-scroll";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close the mobile menu after clicking a link
  };

  const handleScroll = () => {
    const scrollThreshold = 100; // Adjust this threshold as needed

    const homeSection = document.getElementById("home");
    const aboutSection = document.getElementById("about");
    const skillSection = document.getElementById("skill");
    const projectSection = document.getElementById("project");
    const contactSection = document.getElementById("contact");

    const sectionTops = {
      home: homeSection.offsetTop - scrollThreshold,
      about: aboutSection.offsetTop - scrollThreshold,
      skill: skillSection.offsetTop - scrollThreshold,
      project: projectSection.offsetTop - scrollThreshold,
      contact: contactSection.offsetTop - scrollThreshold,
    };

    const currentPosition = window.scrollY;

    if (
      currentPosition >= sectionTops.home &&
      currentPosition < sectionTops.about
    ) {
      setActiveLink("home");
    } else if (
      currentPosition >= sectionTops.about &&
      currentPosition < sectionTops.skill
    ) {
      setActiveLink("about");
    } else if (
      currentPosition >= sectionTops.skill &&
      currentPosition < sectionTops.project
    ) {
      setActiveLink("skill");
    } else if (
      currentPosition >= sectionTops.project &&
      currentPosition < sectionTops.contact
    ) {
      setActiveLink("project");
    } else if (currentPosition >= sectionTops.contact) {
      setActiveLink("contact");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 p-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="text-white cursor-pointer"
                onClick={() => {
                  handleLinkClick("home");
                }}
              >
                Portfolio
              </ScrollLink>
            </div>
            <div className="hidden sm:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  className={`hover:bg-blue-800 cursor-pointer hover:text-white ${
                    activeLink === "home" ? "text-blue-500" : "text-gray-300"
                  } px-3 py-2 rounded-md text-sm font-medium`}
                  onClick={() => {
                    handleLinkClick("home");
                  }}
                >
                  Home
                </ScrollLink>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className={`hover:bg-blue-800 cursor-pointer hover:text-white ${
                    activeLink === "about" ? "text-blue-500" : "text-gray-300"
                  } px-3 py-2 rounded-md text-sm font-medium`}
                  onClick={() => handleLinkClick("about")}
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="skill"
                  smooth={true}
                  duration={500}
                  className={`hover:bg-blue-800 cursor-pointer hover:text-white ${
                    activeLink === "skill" ? "text-blue-500" : "text-gray-300"
                  } px-3 py-2 rounded-md text-sm font-medium`}
                  onClick={() => handleLinkClick("skill")}
                >
                  Skills
                </ScrollLink>
                <ScrollLink
                  to="project"
                  smooth={true}
                  duration={500}
                  className={`hover:bg-blue-800 cursor-pointer hover:text-white ${
                    activeLink === "project" ? "text-blue-500" : "text-gray-300"
                  } px-3 py-2 rounded-md text-sm font-medium`}
                  onClick={() => handleLinkClick("project")}
                >
                  Projects
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className={`hover:bg-blue-800 cursor-pointer hover:text-white ${
                    activeLink === "contact" ? "text-blue-500" : "text-gray-300"
                  } px-3 py-2 rounded-md text-sm font-medium`}
                  onClick={() => handleLinkClick("contact")}
                >
                  Contact
                </ScrollLink>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-3 w-4 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-3 sm:w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="social-icon hidden sm:inline-flex md:inline-flex lg:inline-flex xl:inline-flex ">
            <a
              href="https://github.com/ThatGuyChandan"
              target="blank"
              className="group relative w-8 h-8 md:w-12 md:h-12 bg-opacity-10 inline-flex rounded-full mr-1 md:mr-2 border border-opacity-50 items-center justify-center overflow-hidden hover:scale-110 hover:bg-blue-800 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 hover:gray-700 "
                fill="white "
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/chandan-thakur-969703250/"
              target="blank"
              className="group relative w-8 h-8 md:w-12 md:h-12 bg-opacity-10 inline-flex rounded-full mr-1 md:mr-2 border border-opacity-50 items-center justify-center overflow-hidden hover:scale-110 hover:bg-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/_chandan.thakur/"
              target="blank"
              className="group relative w-8 h-8 md:w-12 md:h-12 bg-opacity-10 inline-flex rounded-full mr-1 md:mr-2 border border-opacity-50 items-center justify-center overflow-hidden hover:scale-110 hover:bg-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 "
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

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
              className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3"
            >
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className={`hover:bg-blue-800 cursor-pointer hover:text-white ${
                  activeLink === "home" ? "text-blue-500" : "text-gray-300"
                } px-3 py-2 rounded-md text-sm font-medium`}
                onClick={() => {
                  handleLinkClick("home");
                }}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className={`hover:bg-blue-800 cursor-pointer hover:text-white ${
                  activeLink === "about" ? "text-blue-500" : "text-gray-300"
                } px-3 py-2 rounded-md text-sm font-medium`}
                onClick={() => handleLinkClick("about")}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="skill"
                smooth={true}
                duration={500}
                className={`hover:bg-blue-800 cursor-pointer hover:text-white ${
                  activeLink === "skill" ? "text-blue-500" : "text-gray-300"
                } px-3 py-2 rounded-md text-sm font-medium`}
                onClick={() => handleLinkClick("skill")}
              >
                Skills
              </ScrollLink>
              <ScrollLink
                to="project"
                smooth={true}
                duration={500}
                className={`hover:bg-blue-800 cursor-pointer hover:text-white ${
                  activeLink === "project" ? "text-blue-500" : "text-gray-300"
                } px-3 py-2 rounded-md text-sm font-medium`}
                onClick={() => handleLinkClick("project")}
              >
                Projects
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className={`hover:bg-blue-800 cursor-pointer hover:text-white ${
                  activeLink === "contact" ? "text-blue-500" : "text-gray-300"
                } px-3 py-2 rounded-md text-sm font-medium`}
                onClick={() => handleLinkClick("contact")}
              >
                Contact
              </ScrollLink>
            </div>
          </div>
        )}
      </Transition>
      <div className="fixed bottom-4 right-4 border border-white rounded-full bg-blue-900 m-2 p-1 hover:bg-blue-700">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-6 h-6 text-white ${
              activeLink === "home" ? "hidden" : "" // Hide if at home section
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
