import React from "react";
import { useTheme } from '../context/ThemeContext';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Experience = () => {
  const { theme } = useTheme();

  const experiences = [
    {
      id: 1,
      role: "Back End Developer",
      company: "Do Dash",
      companyLinkedIn: "https://www.linkedin.com/company/dodash/",
      type: "Internship",
      duration: "12 Aug 2024 - 12 Nov 2024",
      location: "Hyderabad, Telangana, India",
      workType: "Hybrid",
      responsibilities: [
        "Developed and optimized the back-end architecture for a quick commerce platform using Node.js, MongoDB, and JavaScript.",
        "Implemented a robust inventory management module, streamlining product tracking, availability, and real-time updates.",
        "Contributing to the development of the trip module, optimizing delivery route planning and driver assignment.",
        "Collaborate closely with front-end teams to ensure seamless integration of back-end functionality with user-facing features."
      ]
    }
  ];

  return (
    <section
      className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} py-12`}
      id="experience"
    >
      <div className="flex-grow flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-bold tracking-widest uppercase text-blue-500">
            Experience
          </h2>
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            My Professional Journey
          </h1>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] ${
                theme === 'dark' 
                  ? 'bg-white' 
                  : 'bg-gray-900'
              }`}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h3 className={`text-2xl font-bold ${
                      theme === 'dark' ? 'text-gray-900' : 'text-white'
                    }`}>
                      {exp.role}
                    </h3>
                    <div className={`text-lg mt-2 flex items-center gap-2 ${
                      theme === 'dark' ? 'text-gray-700' : 'text-gray-300'
                    }`}>
                      {exp.company}
                      <a 
                        href={exp.companyLinkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center hover:text-blue-500 transition-colors duration-300 ${
                          theme === 'dark' ? 'text-blue-600' : 'text-blue-400'
                        }`}
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                      <span className="mx-1">·</span>
                      <span className="font-medium">{exp.type}</span>
                    </div>
                  </div>
                </div>

                {/* Duration and Location */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className={`flex items-center ${
                    theme === 'dark' ? 'text-gray-700' : 'text-gray-300'
                  }`}>
                    <FaClock className="mr-2" />
                    <span className="font-medium">{exp.duration}</span>
                  </div>
                  <div className={`flex items-center ${
                    theme === 'dark' ? 'text-gray-700' : 'text-gray-300'
                  }`}>
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{exp.location} · <span className="font-medium">{exp.workType}</span></span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className={`list-disc pl-6 space-y-3 ${
                  theme === 'dark' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  {exp.responsibilities.map((responsibility, index) => (
                    <li key={index} className="leading-relaxed">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 