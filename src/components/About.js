import React from "react";
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { theme } = useTheme();

  return (
    <div 
      className={`max-w-2xl mx-auto p-6 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`} 
      id="about"
    >
      <h1 className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        About Me
      </h1>
      <p className={`text-sm sm:text-lg leading-relaxed ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
      }`}>
        I'm a passionate web developer skilled in crafting innovative digital
        solutions. From cutting-edge front-end frameworks to robust back-end
        programming, I excel in turning ideas into reality. With a keen eye for
        detail and a commitment to seamless user experiences, I create web
        applications that exceed expectations. Constantly evolving with industry
        trends, I'm eager to collaborate on projects that bring digital visions
        to life. Explore my portfolio and let's discuss your next project!
      </p>
      <div>
        <a
          href="https://drive.google.com/file/d/1zhgFZk7_cP8COBFRlhWkgv72T1yU68OQ/view?usp=sharing"
          target="blank"
          className="text-sm sm:text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 inline-block mt-4 mr-4"
        >
          Resume
        </a>
        <a
          href="https://medium.com/@chandanthakur.k123"
          target="blank"
          className="text-sm sm:text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 inline-block mt-4"
        >
          My Blog
        </a>
      </div>
    </div>
  );
};

export default About;
