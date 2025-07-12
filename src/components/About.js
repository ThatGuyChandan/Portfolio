import React from "react";
import { useTheme } from '../context/ThemeContext';
import { FaFileAlt, FaBlog } from 'react-icons/fa';

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`relative flex flex-col justify-center items-center px-4 min-h-screen ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white'
          : 'bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-900'
      } animate-fade-in`}
    >
      {/* Decorative SVG Blob */}
      <svg className="absolute -top-32 -left-32 w-96 h-96 opacity-10 pointer-events-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#3B82F6" d="M44.8,-67.2C56.7,-59.2,63.7,-44.2,68.2,-29.2C72.7,-14.2,74.7,0.8,70.2,14.7C65.7,28.6,54.7,41.4,41.2,50.2C27.7,59,11.8,63.8,-2.7,67.1C-17.2,70.4,-30.4,72.2,-41.7,65.2C-53,58.2,-62.4,42.4,-67.2,25.6C-72,8.8,-72.2,-9.9,-65.7,-24.7C-59.2,-39.5,-46,-50.3,-31.7,-57.7C-17.4,-65.1,-2,-69.1,13.7,-72.1C29.4,-75.1,44.8,-67.2,44.8,-67.2Z" transform="translate(100 100)" />
      </svg>

      {/* Card Container */}
      <div className={`relative z-10 w-full max-w-3xl rounded-3xl shadow-2xl p-8 md:p-14 flex flex-col items-center ${
        theme === 'dark'
          ? 'bg-gray-900/80 backdrop-blur-md border border-blue-800'
          : 'bg-white/80 backdrop-blur-md border border-blue-200'
      }`}>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center">About Me</h1>
        <div className="w-20 h-1 mb-8 bg-blue-600 rounded-full mx-auto"></div>
        <div className="w-full text-center space-y-6">
          <p className="text-lg sm:text-xl leading-relaxed">
            I'm a software developer who believes in the power of clean code and thoughtful design. When I'm not crafting digital solutions, you'll find me exploring the latest tech trends or sharing insights through my blog. I thrive on challenges that push boundaries and love collaborating with teams to build something meaningful. Every line of code I write is a step toward making technology more accessible and impactful.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-6">
          <a
            href="https://drive.google.com/file/d/1zhgFZk7_cP8COBFRlhWkgv72T1yU68OQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:scale-105 gap-2"
          >
            <FaFileAlt className="text-xl" /> Resume
          </a>
          <a
            href="https://medium.com/@chandanthakur.k123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:scale-105 gap-2"
          >
            <FaBlog className="text-xl" /> My Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
