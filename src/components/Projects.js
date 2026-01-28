import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTheme } from '../context/ThemeContext';
import projectsData from "../data/projects.json";
import ProjectCard from './ProjectCard';
import useWindowSize from '../hooks/useWindowSize';

const Projects = () => {
  const [projects] = useState(projectsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();
  const { width } = useWindowSize();

  const getProjectsToShow = () => {
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return 3;
  };

  const projectsToShow = getProjectsToShow();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < projectsToShow; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  };

  const visibleProjects = getVisibleProjects();

  return (
    <div
      className={`antialiased font-sans ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-neutral-light'
      } py-16`}
      id="projects"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-bold tracking-widest uppercase text-blue-500">
            Projects
          </h2>
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Some of My Recent Work
          </h1>
        </div>
        <div className="relative">
          <div className="flex flex-wrap justify-center items-stretch -mx-4">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          <button
            onClick={handlePrev}
            className={`absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 rounded-full p-2 transition-colors ${
              theme === 'dark' 
                ? 'bg-white/10 text-white hover:bg-white/20' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className={`absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 rounded-full p-2 transition-colors ${
              theme === 'dark' 
                ? 'bg-white/10 text-white hover:bg-white/20' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;