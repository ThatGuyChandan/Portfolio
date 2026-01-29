import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTheme } from '../context/ThemeContext';
import projectsData from "../data/ProjectData.js";
import ProjectCard from './ProjectCard';
import useWindowSize from '../hooks/useWindowSize';

const Projects = () => {
  const [projects] = useState(projectsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();
  const { width } = useWindowSize();
  const slideIntervalRef = useRef(null); // Renamed to avoid conflict

  const getProjectsToShow = useCallback(() => {
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return 3;
  }, [width]);

  const handleNext = useCallback((auto = false) => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    if (!auto) {
      // Clear and restart timer on manual interaction
      clearInterval(slideIntervalRef.current);
      slideIntervalRef.current = setInterval(() => {
        handleNext(true);
      }, 25000);
    }
  }, [projects]); // 'projects.length' removed, 'projects' is stable

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    // Clear and restart timer on manual interaction
    clearInterval(slideIntervalRef.current);
    slideIntervalRef.current = setInterval(() => {
      handleNext(true);
    }, 25000);
  }, [projects, handleNext]); // 'projects.length' removed, 'projects' is stable

  useEffect(() => {
    slideIntervalRef.current = setInterval(() => {
      handleNext(true);
    }, 25000);

    return () => clearInterval(slideIntervalRef.current);
  }, [handleNext]); // Now handleNext is stable due to useCallback

  const getVisibleProjects = useCallback(() => {
    const visible = [];
    const projectsToShow = getProjectsToShow(); // Recalculate projectsToShow inside useCallback
    for (let i = 0; i < projectsToShow; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  }, [currentIndex, projects, getProjectsToShow]); // 'projects.length' removed, 'projects' is stable

  const visibleProjects = getVisibleProjects();

  return (
    <div
      className={`antialiased font-sans ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
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
        <div className="mt-16 text-center">
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            Explore more projects on my GitHub profile.
          </p>
          <a
            href="https://github.com/ThatGuyChandan"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm transition-colors
              ${theme === 'dark' 
                ? 'text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500' 
                : 'text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400'
              }`}
          >
            Visit GitHub
            <ArrowRight className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;