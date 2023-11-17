import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import projectsData from "../data/ProjectData";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const openModal = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };
  return (
    <div className="antialiased bg-gray-100 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className=" text-4xl font-bold text-center p-6 ">Projects</h1>
        <div className="flex justify-center  items-center min-h-screen  flex-wrap ">
          {/* project */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-4"
            >
              <div className="bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <div
                  className="bg-cover bg-center h-48 sm:h-56 p-4 border border-blue-300 rounded-xl m-2"
                  style={{
                    backgroundImage: `url(${project.imageUrl})`,
                  }}
                ></div>
                <div className="p-4">
                  <p className=" text-2xl sm:text-3xl text-blue-900 font-bold">
                    {project.name}
                  </p>
                </div>
                <div className="px-4 pt-3 pb-4 border-t border-blue-300 bg-gray-50">
                  <div className="flex items-center pt-2">
                    <div>
                      <h1 className=" text-xl sm:text-2xl text-blue-900">
                        Summary -
                      </h1>
                      <p className="text-xs text-gray-700">{project.summary}</p>
                    </div>
                  </div>
                </div>
                <div className="flex p-2 border-t border-blue-300 text-gray-700">
                  <div className="flex-1 inline-flex items-center">
                    <button
                      onClick={() => openModal(project.id)}
                      className="text-xs sm:text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 inline-flex items-center mt-2 xs:mt-4"
                    >
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4 ml-2"
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
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};

export default Projects;
