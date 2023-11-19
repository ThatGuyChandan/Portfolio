import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import ProjectModal from "./ProjectModal";
import projectsData from "../data/ProjectData";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [containerHeight, setContainerHeight] = useState("auto");

  const containerRef = useRef(null);

  const openModal = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const toggleProjectsView = () => {
    setShowAllProjects((prevShowAllProjects) => !prevShowAllProjects);
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
    <div className="antialiased bg-gray-100 font-serif font-light" id="project">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center p-6 text-gray-900">
          Projects
        </h1>
        <div
          ref={containerRef}
          className="flex flex-wrap justify-center items-stretch -mx-4 overflow-hidden transition-height"
          style={{ height: containerHeight }}
        >
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="max-w-sm w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
            >
              <div className="bg-gray-200 shadow-2xl rounded-xl cursor-pointer overflow-hidden transform transition duration-300 hover:scale-105 hover:ring-2 hover:ring-blue-400">
                <div
                  className="relative h-48 sm:h-56 overflow-hidden "
                  style={{
                    backgroundImage: `url(${project.imageUrl})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
                </div>
                <div className="p-4">
                  <p className="text-xl text-blue-900 font-bold mb-2">
                    {project.name}
                  </p>
                  <p className="text-sm text-gray-900">{project.summary}</p>
                </div>
                <div className="flex justify-end p-4">
                  <button
                    onClick={() => openModal(project.id)}
                    className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
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
        <div className="flex justify-center mt-4 mb-4">
          <button
            onClick={toggleProjectsView}
            className="flex items-center text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          >
            {showAllProjects ? (
              <>
                View Less Projects
                <FiChevronUp className="ml-2" />
              </>
            ) : (
              <>
                View More Projects
                <FiChevronDown className="ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          projects={projects}
          selectedProject={selectedProject}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Projects;
