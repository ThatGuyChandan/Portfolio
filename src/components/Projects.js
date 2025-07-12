import React, { useState, useRef, useEffect, lazy, Suspense } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useTheme } from '../context/ThemeContext';
import projectsData from "../data/ProjectData";

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
      className={`antialiased ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      } font-serif font-light py-16`}
      id="projects"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Projects
          </h1>
          <div className={`w-24 h-1 mx-auto ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'
          }`}></div>
        </div>
        <div
          ref={containerRef}
          className="flex flex-wrap justify-center items-stretch -mx-4 overflow-hidden transition-all duration-500 ease-in-out"
          style={{ height: containerHeight }}
        >
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 transform transition duration-500 hover:scale-105"
            >
              <div
                className={`${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                } shadow-2xl rounded-xl cursor-pointer overflow-hidden h-full flex flex-col`}
              >
                <div
                  className="relative h-48 sm:h-56 overflow-hidden group"
                  style={{
                    backgroundImage: `url(${project.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-200' : 'text-white'
                    }`}>
                      {project.summary}
                    </p>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <p
                    className={`text-xl ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-900'
                    } font-bold mb-2`}
                  >
                    {project.name}
                  </p>
                </div>
                <div className="p-4 pt-0">
                  <button
                    onClick={() => openModal(project.id)}
                    className={`w-full text-sm ${
                      theme === 'dark' 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-blue-500 hover:bg-blue-600'
                    } text-white font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105`}
                  >
                    View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 ml-2 inline-block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={toggleProjectsView}
            disabled={isTransitioning}
            className={`flex items-center text-sm ${
              theme === 'dark' 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg`}
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
