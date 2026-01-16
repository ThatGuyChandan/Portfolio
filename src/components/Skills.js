
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
        <div className="text-center mb-12">
          <h2 className="text-base font-bold tracking-widest uppercase text-blue-500">
            Skills
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-2">
            My Technical Expertise
          </h1>
        </div>
        
        <div className="space-y-12">
          {skillsByCategory.map(({ category, skills }) => (
            <div key={category} className={`rounded-2xl p-8 border ${
              theme === 'dark' ? 'bg-gray-800/50 border-gray-700/50' : 'bg-neutral-100 border-neutral-300/50'
            }`}>
              <h2 className={`text-3xl font-bold uppercase tracking-wider mb-6 ${
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
