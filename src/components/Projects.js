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
    <div className="antialiased bg-gray-100 font-serif font-light" id="project">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center p-6 text-gray-900">
          Projects
        </h1>
        <div className="flex flex-wrap justify-center items-stretch -mx-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="max-w-sm w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
            >
              <div className="bg-white shadow-2xl rounded-xl cursor-pointer overflow-hidden transform transition duration-300 hover:scale-105 hover:ring-2 hover:ring-blue-400">
                <div
                  className="relative h-48 sm:h-56 overflow-hidden"
                  style={{
                    backgroundImage: `url(${project.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
                </div>
                <div className="p-4">
                  <p className="text-xl text-white font-bold mb-2">
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
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};

export default Projects;
