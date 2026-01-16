import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, openModal }) => {
  const { theme } = useTheme();

  return (
    <div
      className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
      onClick={() => openModal(project.id)}
    >
      <div
        className={`group rounded-2xl border overflow-hidden cursor-pointer h-full flex flex-col ${
          theme === 'dark'
            ? 'border-white/10 bg-slate-800/40 hover:border-white/20'
            : 'border-gray-200 bg-white hover:border-gray-300'
        } transition-colors`}
      >
        <div className="relative h-44 bg-slate-900">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
        </div>
        <div className="p-5 flex-grow flex flex-col">
          <div className="flex-grow">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className={`font-semibold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {project.name}
                </h3>
                <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                  {project.summary}
                </p>
              </div>
              <div
                className={`shrink-0 mt-1 rounded-full p-2 transition-colors ${
                  theme === 'dark'
                    ? 'bg-white/10 text-white group-hover:bg-white/20'
                    : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                }`}
              >
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies && project.technologies.map((tech) => (
              <span
                key={tech}
                className={`text-xs px-2 py-1 rounded ${
                  theme === 'dark' ? 'bg-white/10 text-white/80' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
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
    technologies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ProjectCard;
