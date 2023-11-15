import React from "react";

const About = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
        About Me
      </h1>
      <p className=" text-sm sm:text-lg   text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div>
        <a
          href="#resume"
          className="text-sm sm:text-lg  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 inline-block mt-4"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default About;
