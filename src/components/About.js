import React from "react";

const About = () => {
  return (
    <div className="max-w-2xl mx-auto p-6" id="about">
      <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
        About Me
      </h1>
      <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
        I'm a passionate web developer skilled in crafting innovative digital
        solutions. From cutting-edge front-end frameworks to robust back-end
        programming, I excel in turning ideas into reality. With a keen eye for
        detail and a commitment to seamless user experiences, I create web
        applications that exceed expectations. Constantly evolving with industry
        trends, I'm eager to collaborate on projects that bring digital visions
        to life. Explore my portfolio and let's discuss your next project!
      </p>
      <div>
        <a
          href="https://drive.google.com/file/d/1YIS6gSHsTEHflL2m399aQhNv20O2haBh/view?usp=sharing"
          target="blank"
          className="text-sm sm:text-lg  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 inline-block mt-4"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default About;
