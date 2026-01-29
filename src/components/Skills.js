
import React, { useState } from "react";
import skillData from "../data/SkillData";
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { theme } = useTheme();
  const categories = Array.from(new Set(skillData.map(skill => skill.category)));
  const [activeTab, setActiveTab] = useState(categories[0]);

  const skillsForActiveTab = skillData.filter(skill => skill.category === activeTab);

  return (
    <section className={`font-sans ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
    } py-20 px-4`} id="skills">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-base font-bold tracking-widest uppercase text-blue-500">
            Skills
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-2">
            My Technical Expertise
          </h1>
        </div>
        
        <div className={`flex justify-start border-b mb-8 overflow-x-auto whitespace-nowrap ${
          theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
        }`}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`py-3 px-6 text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                activeTab === category
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skillsForActiveTab.map((skill) => (
            <div
              key={skill.id}
              className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              {skill.icon && (
                <div className="text-3xl mb-2 text-blue-500">{skill.icon}</div>
              )}
              <span className="text-xs font-semibold text-center">{skill.skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
