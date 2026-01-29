import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';
import { Github, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const { theme } = useTheme();

  return (
    <div
      className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
    >
      <div
        className={`group rounded-2xl border overflow-hidden h-full flex flex-col ${
          theme === 'dark'
            ? 'border-white/10 bg-slate-800/40'
            : 'border-gray-200 bg-white'
        } transition-colors`}
      >
        <div className="p-5 flex-grow flex flex-col">
          <div className="flex-grow">
            <h3 className={`font-semibold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {project.name}
            </h3>
            <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              {project.summary}
            </p>
          </div>
          <div className="mt-4 flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 text-xs px-2 py-1 rounded ${
                  theme === 'dark' ? 'bg-blue-900/20 text-blue-500 hover:bg-blue-900/40' : 'bg-blue-100 text-blue-500 hover:bg-blue-200'
                }`}
              >
                <Github size={14} />
                GitHub
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 text-xs px-2 py-1 rounded ${
                  theme === 'dark' ? 'bg-blue-900/20 text-blue-500 hover:bg-blue-900/40' : 'bg-blue-100 text-blue-500 hover:bg-blue-200'
                }`}
              >
                <ArrowUpRight size={14} />
                Live
              </a>
            )}
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
    details: PropTypes.string.isRequired,
    github: PropTypes.string,
    liveLink: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
