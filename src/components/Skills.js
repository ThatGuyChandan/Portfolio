
import React from "react";
import skillData from "../data/SkillData";
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { theme } = useTheme();
  // Group skills by category
  const categories = Array.from(new Set(skillData.map(skill => skill.category)));
  const skillsByCategory = categories.map(category => ({
    category,
    skills: skillData.filter(skill => skill.category === category)
  }));

  return (
    <section className={`font-sans ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-900 text-white'
    } pt-20 pb-20 px-4`} id="skills">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className={`text-5xl font-bold text-center mb-4 font-serif ${
          theme === 'dark' ? 'text-primary-light' : 'text-primary-dark'
        }`}>
          Skills & Technologies
        </h1>
        <p className={`text-center mb-12 text-lg ${
          theme === 'dark' ? 'text-neutral-300' : 'text-gray-400'
        }`}>
          A comprehensive collection of my technical expertise
        </p>
        
        <div className="space-y-12">
          {skillsByCategory.map(({ category, skills }) => (
            <div key={category} className={`rounded-2xl p-8 border ${
              theme === 'dark' ? 'bg-gray-800/50 border-gray-700/50' : 'bg-neutral-100 border-neutral-300/50'
            }`}>
              <h2 className={`text-3xl font-bold uppercase tracking-wider mb-6 font-serif ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>
                {category}
              </h2>
              
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 ${
                      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-neutral-dark text-white'
                    }`}
                  >
                    {skill.icon && <span className="text-xl">{skill.icon}</span>}
                    <span className="text-sm font-medium">{skill.skill}</span>
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
