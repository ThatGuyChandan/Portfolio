import React, { useState } from "react";

const ProjectModal = ({ projects, selectedProject, onClose }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(
    projects.findIndex((project) => project.id === selectedProject.id)
  );

  const forward = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const backward = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const project = projects[currentProjectIndex];
  const languages = project.language.split(",");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-70 "></div>
      <div className="bg-white p-12 rounded-lg z-10  m-14  sm:m-24 overflow-y-auto max-h-full ">
        <div>
          <button
            onClick={onClose}
            className="absolute animate-bounce top-3 right-2 border border-blue-500 bg-blue-500 text-white hover:text-gray-900 hover:bg-white rounded-full"
          >
            <span className="text-xl px-2">x</span>
          </button>
          <button
            onClick={forward}
            className="absolute  top-80 right-2 border border-blue-500 bg-blue-500 text-white hover:text-gray-900 hover:bg-white rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button
            onClick={backward}
            className="absolute  top-80 left-2 border border-blue-500 bg-blue-500 text-white hover:text-gray-900 hover:bg-white rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>
          <div
            className="  h-60 md:h-80 border rounded-2xl "
            style={{
              backgroundImage: `url(${project.imageUrl})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h1 className="bold text-blue-900 text-lg sm:text-xl py-2 sm:my-4 border-b-2 border-blue-500">
            {project.name}
          </h1>
          <h1 className="bold text-blue-900 text-lg sm:text-xl mt-2">
            Details-
          </h1>
          <scroll>
            <ul className="list-disc ml-4 sm:ml-6 py-4 ">
              {project.details.split("\n").map((point, index) => (
                <li key={index} className="text-xs sm:text-sm">
                  {point}
                </li>
              ))}
            </ul>
          </scroll>

          <div>
            <p className="text-sm sm:text-lg border-t-2 border-blue-500 text-blue-900">
              Languages:
            </p>
            <ul className="list-disc ml-4 sm:ml-6 flex flex-col flex-wrap h-24">
              {languages.map((language, index) => (
                <li key={index} className=" text-xs sm:text-sm">
                  {language}
                </li>
              ))}
            </ul>
          </div>
          <div className="my-4 ">
            <a
              href={`${project.github}`}
              target="none"
              className="text-xs sm:text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-md transition duration-300 inline-flex items-center mt-2 xs:mt-4"
            >
              Github
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mx-2 hover:gray-700"
                fill="white "
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
