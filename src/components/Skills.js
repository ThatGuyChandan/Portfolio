import React, { useState } from "react";
import skillData from "../data/SkillData";

const Skills = () => {
  const [flippedCards, setFlippedCards] = useState(
    Array(skillData.length).fill(false)
  );

  const handleSkillClick = (index) => {
    setFlippedCards((prevFlippedCards) => {
      const newFlippedCards = [...prevFlippedCards];
      newFlippedCards[index] = !newFlippedCards[index];
      return newFlippedCards;
    });
  };

  return (
    <div className=" bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-8">Skills</h1>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 p-10">
        {skillData.map((skills, index) => (
          <div
            key={skills.id}
            className={`relative xl:mx-20 border rounded-2xl md:rounded-4xl ring ring-blue-500 ring-offset-1 md:ring-offset-2 text-center flex justify-center flex-col h-24 w-24 sm:h-40 sm:w-40 md:h-46 md:w-46 hover:cursor-pointer hover:bg-gray-200 hover:text-blue-500 hover:scale-110 transform transition-transform skill-icon-container ${
              flippedCards[index] ? "flipped" : ""
            }`}
            onClick={() => handleSkillClick(index)}
          >
            <div
              className={`flip-card ${flippedCards[index] ? "flipped" : ""}`}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <i
                    className={`${skills.icon} text-2xl sm:text-4xl md:text-5xl`}
                  ></i>
                  <h2 className="text-sm md:text-xl">{skills.skill}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
