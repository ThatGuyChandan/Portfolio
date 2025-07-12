import React, { useState } from "react";
import skillData from "../data/SkillData";

const Skills = () => {
  // Group skills by category
  const categories = Array.from(new Set(skillData.map(skill => skill.category)));
  const skillsByCategory = categories.map(category => ({
    category,
    skills: skillData.filter(skill => skill.category === category)
  }));

  const [flippedCards, setFlippedCards] = useState(
    Array(skillData.length).fill(false)
  );

  const handleSkillClick = (index) => {
    setFlippedCards((prevFlippedCards) => {
      const newFlippedCards = [...prevFlippedCards];
      newFlippedCards[index] = !prevFlippedCards[index];
      return newFlippedCards;
    });
  };

  // Category color mapping
  const categoryColors = {
    "Languages": "from-blue-500 to-blue-600",
    "Frontend": "from-green-500 to-green-600", 
    "Backend/Database": "from-purple-500 to-purple-600",
    "Hosting/DevOps": "from-orange-500 to-orange-600",
    "Tools": "from-red-500 to-red-600"
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20 pb-20 px-4" id="skills">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h1>
        <p className="text-gray-300 text-center mb-12 text-lg">
          A comprehensive collection of my technical expertise
        </p>
        
        <div className="space-y-12">
          {skillsByCategory.map(({ category, skills }) => (
            <div key={category} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center mb-8">
                <div className={`w-1 h-8 bg-gradient-to-b ${categoryColors[category] || "from-gray-500 to-gray-600"} rounded-full mr-4`}></div>
                <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
                  {category}
                </h2>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.id}
                    className="group relative bg-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer"
                    onClick={() => handleSkillClick(skillData.findIndex(s => s.id === skill.id))}
                  >
                    <div className="flex flex-col items-center justify-center h-24">
                      <i className={`${skill.icon} text-4xl mb-3 group-hover:scale-110 transition-transform duration-300`}></i>
                      <h3 className="text-sm font-semibold text-center text-gray-200 group-hover:text-blue-300 transition-colors duration-300">
                        {skill.skill}
                      </h3>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
