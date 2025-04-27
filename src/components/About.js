import React from "react";
import { useTheme } from '../context/ThemeContext';
import { FaFileAlt, FaBlog } from 'react-icons/fa';

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`relative flex flex-col justify-center items-center min-h-screen px-6 sm:px-12 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      } animate-fade-in`}
    >
      {/* Decorative SVG Blob */}
      <svg className="absolute -top-32 -left-32 w-96 h-96 opacity-10 pointer-events-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#3B82F6" d="M44.8,-67.2C56.7,-59.2,63.7,-44.2,68.2,-29.2C72.7,-14.2,74.7,0.8,70.2,14.7C65.7,28.6,54.7,41.4,41.2,50.2C27.7,59,11.8,63.8,-2.7,67.1C-17.2,70.4,-30.4,72.2,-41.7,65.2C-53,58.2,-62.4,42.4,-67.2,25.6C-72,8.8,-72.2,-9.9,-65.7,-24.7C-59.2,-39.5,-46,-50.3,-31.7,-57.7C-17.4,-65.1,-2,-69.1,13.7,-72.1C29.4,-75.1,44.8,-67.2,44.8,-67.2Z" transform="translate(100 100)" />
      </svg>

      {/* Profile Image */}
      <div className="flex justify-center mb-6 z-10">
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
          alt="Profile"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-lg border-4 border-blue-500 object-cover bg-white"
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center z-10">
        About Me
      </h1>

      {/* Underline */}
      <div className="w-20 h-1 mb-8 bg-blue-600 rounded-full z-10"></div>

      {/* Paragraph */}
      <p className="text-lg sm:text-xl max-w-3xl text-center leading-relaxed mb-8 z-10">
        I'm a passionate web developer skilled in crafting innovative digital solutions.
        From cutting-edge front-end frameworks to robust back-end programming,
        I excel in turning ideas into reality. Always evolving with industry trends,
        I'm eager to collaborate on projects that bring digital visions to life. 
        Let's build something amazing together!
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 z-10">
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
    </section>
  );
};

export default About;
