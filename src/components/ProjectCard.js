
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({ project, openModal }) => {
  const { theme } = useTheme();

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 transform transition duration-500 hover:scale-105">
      <div
        className={`shadow-2xl rounded-xl cursor-pointer overflow-hidden h-full flex flex-col font-sans ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
        <div
          className="relative h-48 sm:h-56 overflow-hidden group"
          style={{
            backgroundImage: `url(${project.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className={`text-sm text-white`}>
              {project.summary}
            </p>
          </div>
        </div>
        <div className="p-6 flex-grow">
          <p
            className={`text-xl font-bold mb-2 font-serif ${
              theme === 'dark' ? 'text-primary-light' : 'text-primary-dark'
            }`}>
            {project.name}
          </p>
        </div>
        <div className="p-4 pt-0">
          <button
            onClick={() => openModal(project.id)}
            className={`w-full text-sm font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105 ${
              theme === 'dark'
                ? 'bg-primary hover:bg-primary-dark text-white'
                : 'bg-primary hover:bg-primary-dark text-white'
            }`}>
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
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ProjectCard;
