import React, { useEffect } from "react";
import { useTheme } from '../context/ThemeContext';
import { FiExternalLink } from 'react-icons/fi';
import { FaAward } from 'react-icons/fa';
import certi from "../data/Certificate";

const Certificate = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} py-12`}
      id="certificates"
    >
      <div className="flex-grow flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-16">
          <FaAward className={`text-4xl mr-4 ${
            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
          }`} />
          <h1 
            className={`text-4xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Certifications
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certi.map((certificate) => (
            <div
              key={certificate.id}
              className="group flex flex-col items-center p-8 rounded-2xl bg-white shadow-lg"
            >
              {/* Badge Container */}
              <div className="mb-6 w-48 h-48">
                <div
                  className="w-full h-full"
                  data-iframe-width="192"
                  data-iframe-height="192"
                  data-share-badge-id={certificate.id}
                  data-share-badge-host="https://www.credly.com"
                ></div>
              </div>

              {/* Certificate Info */}
              <div className="text-center w-full">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {certificate.name}
                </h3>
                <p className="text-sm mb-4 text-gray-600">
                  {certificate.issuer}
                </p>
                
                {/* View Button */}
                <button className="inline-flex items-center px-6 py-2 rounded-lg text-sm font-medium bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-300">
                  <FiExternalLink className="mr-2" />
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
