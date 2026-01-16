import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaFileAlt, FaBlog } from "react-icons/fa";

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`relative py-20 px-4 min-h-screen flex items-center justify-center ${
        theme === "dark"
          ? "bg-slate-950 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-base font-bold tracking-widest uppercase text-blue-500">
            About
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-2">
            A little more about me
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="lg:col-span-7 space-y-4 text-xl">
            <p className={`${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
              I'm a passionate software developer dedicated to building beautiful,
              functional, and user-centric digital experiences. I thrive on
              solving complex problems and turning ideas into reality. My journey
              in tech is driven by a relentless curiosity and a desire to learn
              and grow.
            </p>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              When I'm not coding, I enjoy exploring new technologies,
              contributing to open-source projects, and sharing my knowledge with
              the community through my blog.
            </p>
          </div>

          {/* Right Column - Highlights & Buttons */}
          <div className="lg:col-span-5">
            <div
              className={`rounded-2xl p-6 ${
                theme === "dark"
                  ? "bg-slate-800/40 border border-white/10"
                  : "bg-white/80 border border-blue-200"
              }`}
            >
              <h3 className="font-semibold text-2xl mb-4">Highlights</h3>
              <ul className={`space-y-3 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'} text-lg`}>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  <span>Building scalable web applications</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  <span>Developing robust APIs and backend services</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  <span>Implementing intuitive user interfaces</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-6">
                <a
                  href="https://drive.google.com/file/d/1haqJUe181JJTxl5qwORL1citM6-pOi0F/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:scale-105 gap-2"
                >
                  <FaFileAlt className="text-xl" /> Resume
                </a>
                <a
                  href="https://blogsbychandan.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:scale-105 gap-2"
                >
                  <FaBlog className="text-xl" /> My Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
