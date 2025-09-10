import React, { useState, useRef, useEffect, lazy, Suspense } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useTheme } from '../context/ThemeContext';
import projectsData from "../data/projects.json";
import ProjectCard from './ProjectCard';

// Lazy load the ProjectModal component
const ProjectModal = lazy(() => import('./ProjectModal'));

const Projects = () => {
  const [projects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [containerHeight, setContainerHeight] = useState("auto");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { theme } = useTheme();
  const containerRef = useRef(null);

  const openModal = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const toggleProjectsView = () => {
    setIsTransitioning(true);
    setShowAllProjects((prevShowAllProjects) => !prevShowAllProjects);
    setTimeout(() => setIsTransitioning(false), 500); // Match this with transition duration
  };

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(
        showAllProjects ? `${containerRef.current.scrollHeight}px` : "auto"
      );
    }
  }, [showAllProjects]);

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <div
      className={`antialiased font-sans ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-neutral-light'
      } py-16`}
      id="projects"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 font-serif ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Projects
          </h1>
          <div className={`w-24 h-1 mx-auto bg-primary`}></div>
        </div>
        <div
          ref={containerRef}
          className="flex flex-wrap justify-center items-stretch -mx-4 overflow-hidden transition-all duration-500 ease-in-out"
          style={{ height: containerHeight }}
        >
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={toggleProjectsView}
            disabled={isTransitioning}
            className={`flex items-center text-sm font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg ${
              theme === 'dark' 
                ? 'bg-primary hover:bg-primary-dark text-white' 
                : 'bg-primary hover:bg-primary-dark text-white'
            }`}
          >
            {showAllProjects ? (
              <>
                View Less Projects
                <FiChevronUp className="ml-2 transition-transform duration-300" />
              </>
            ) : (
              <>
                View More Projects
                <FiChevronDown className="ml-2 transition-transform duration-300" />
              </>
            )}
          </button>
        </div>
      </div>
      {selectedProject && (
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectModal
            projects={projects}
            selectedProject={selectedProject}
            onClose={closeModal}
          />
        </Suspense>
      )}
    </div>
  );
};

export default Projects;