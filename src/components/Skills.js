import React from "react";

const Skills = () => {
  return (
    <div className="bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-8">Skills</h1>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 p-10 ">
        <div className="border rounded-2xl md:rounded-4xl ring ring-blue-500 ring-offset-1 md:ring-offset-2 text-center flex justify-center flex-col h-24 w-24 sm:h-40 sm:w-40 md:h-46 md:w-46 skill-icon-container hover:scale-110 transform transition-transform hover:text-blue-500 hover:cursor-pointer hover:bg-gray-200">
          <i className="devicon-html5-plain colored text-2xl sm:text-4xl md:text-5xl"></i>
          <h2 className="text-sm md:text-xl">HTML</h2>
        </div>
        <div className="border rounded-2xl md:rounded-4xl ring ring-blue-500 ring-offset-1 md:ring-offset-2 text-center flex justify-center flex-col  h-24 w-24 sm:h-40 sm:w-40 md:h-46 md:w-46 skill-icon-container hover:scale-110 transform transition-transform hover:text-blue-500 hover:cursor-pointer hover:bg-gray-200">
          <i className="devicon-css3-plain colored text-2xl sm:text-4xl md:text-5xl"></i>
          <h2 className="text-sm md:text-xl">CSS</h2>
        </div>
        <div className="border rounded-2xl md:rounded-4xl ring ring-blue-500 ring-offset-1 md:ring-offset-2 text-center flex justify-center flex-col  h-24 w-24 sm:h-40 sm:w-40 md:h-46 md:w-46 skill-icon-container hover:scale-110 transform transition-transform hover:text-blue-500 hover:cursor-pointer hover:bg-gray-200">
          <i className="devicon-javascript-plain colored text-2xl sm:text-4xl md:text-5xl"></i>
          <h2 className="text-xs md:text-xl">Javascript</h2>
        </div>
        <div className="border rounded-2xl md:rounded-4xl ring ring-blue-500 ring-offset-1 md:ring-offset-2 text-center flex justify-center flex-col  h-24 w-24 sm:h-40 sm:w-40 md:h-46 md:w-46 skill-icon-container hover:scale-110 transform transition-transform hover:text-blue-500 hover:cursor-pointer hover:bg-gray-200">
          <i className="devicon-react-original colored text-2xl sm:text-4xl md:text-5xl"></i>
          <h2 className="text-sm md:text-xl">React</h2>
        </div>
        <div className="border rounded-2xl md:rounded-4xl ring ring-blue-500 ring-offset-1 md:ring-offset-2 text-center flex justify-center flex-col  h-24 w-24 sm:h-40 sm:w-40 md:h-46 md:w-46 skill-icon-container hover:scale-110 transform transition-transform hover:text-blue-500 hover:cursor-pointer hover:bg-gray-200">
          <i className="devicon-cplusplus-plain colored text-2xl sm:text-4xl md:text-5xl"></i>
          <h2 className="text-sm md:text-xl">C++</h2>
        </div>
        <div className="border rounded-2xl md:rounded-4xl ring ring-blue-500 ring-offset-1 md:ring-offset-2 text-center flex justify-center flex-col  h-24 w-24 sm:h-40 sm:w-40 md:h-46 md:w-46 skill-icon-container hover:scale-110 transform transition-transform hover:text-blue-500 hover:cursor-pointer hover:bg-gray-200">
          <i className="devicon-java-plain colored text-2xl sm:text-4xl md:text-5xl"></i>
          <h2 className="text-sm md:text-xl">Java</h2>
        </div>
        <div className="border rounded-2xl md:rounded-4xl ring ring-blue-500 ring-offset-1 md:ring-offset-2 text-center flex justify-center flex-col  h-24 w-24 sm:h-40 sm:w-40 md:h-46 md:w-46 skill-icon-container hover:scale-110 transform transition-transform hover:text-blue-500 hover:cursor-pointer hover:bg-gray-200">
          <i className="devicon-nodejs-plain colored text-2xl sm:text-4xl md:text-5xl"></i>
          <h2 className="text-xs md:text-xl">Node.js</h2>
        </div>
        <div className="border rounded-2xl md:rounded-4xl ring ring-blue-500 ring-offset-1 md:ring-offset-2 text-center flex justify-center flex-col  h-24 w-24 sm:h-40 sm:w-40 md:h-46 md:w-46 skill-icon-container hover:scale-110 transform transition-transform hover:text-blue-500 hover:cursor-pointer hover:bg-gray-200">
          <i className="devicon-mongodb-plain colored text-2xl sm:text-4xl md:text-5xl"></i>
          <h2 className="text-xs md:text-xl">MongoDB</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
