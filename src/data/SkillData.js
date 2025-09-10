import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaSlack, FaBootstrap, FaRobot } from 'react-icons/fa';
import { SiJavascript, SiCplusplus, SiTailwindcss, SiRedux, SiExpress, SiMongodb, SiPostgresql, SiNetlify, SiVercel, SiPostman, SiRender } from 'react-icons/si';

const skillData = [
  // Languages
  { id: 1, skill: "JavaScript", category: "Languages", level: "Advanced", icon: <SiJavascript /> },
  { id: 2, skill: "Java", category: "Languages", level: "Intermediate", icon: <FaJava /> },
  { id: 3, skill: "C++", category: "Languages", level: "Intermediate", icon: <SiCplusplus /> },
  { id: 4, skill: "Python", category: "Languages", level: "Intermediate", icon: <FaPython /> },

  // Frontend
  { id: 5, skill: "HTML", category: "Frontend", level: "Advanced", icon: <FaHtml5 /> },
  { id: 6, skill: "CSS", category: "Frontend", level: "Advanced", icon: <FaCss3Alt /> },
  { id: 7, skill: "React", category: "Frontend", level: "Advanced", icon: <FaReact /> },
  { id: 8, skill: "Tailwind CSS", category: "Frontend", level: "Advanced", icon: <SiTailwindcss /> },
  { id: 9, skill: "Bootstrap", category: "Frontend", level: "Advanced", icon: <FaBootstrap /> },
  { id: 10, skill: "Redux", category: "Frontend", level: "Intermediate", icon: <SiRedux /> },

  // Backend
  { id: 11, skill: "Node.js", category: "Backend", level: "Advanced", icon: <FaNodeJs /> },
  { id: 12, skill: "Express", category: "Backend", level: "Advanced", icon: <SiExpress /> },

  // Database
  { id: 13, skill: "SQL", category: "Database", level: "Advanced", icon: null }, // No specific icon for SQL
  { id: 14, skill: "MongoDB", category: "Database", level: "Advanced", icon: <SiMongodb /> },
  { id: 15, skill: "PostgreSQL", category: "Database", level: "Intermediate", icon: <SiPostgresql /> },

  // Hosting/Cloud/DevOps
  { id: 16, skill: "AWS", category: "Cloud/DevOps", level: "Intermediate", icon: <FaAws /> },
  { id: 17, skill: "Docker", category: "Cloud/DevOps", level: "Intermediate", icon: <FaDocker /> },
  { id: 18, skill: "Netlify", category: "Cloud/DevOps", level: "Advanced", icon: <SiNetlify /> },
  { id: 19, skill: "Vercel", category: "Cloud/DevOps", level: "Advanced", icon: <SiVercel /> },
  { id: 20, skill: "Render", category: "Cloud/DevOps", alt: "cloud", level: "Advanced", icon: <SiRender /> },

  // Tools
  { id: 21, skill: "Git", category: "Tools", level: "Advanced", icon: <FaGitAlt /> },
  { id: 22, skill: "Slack", category: "Tools", level: "Advanced", icon: <FaSlack /> },
  { id: 23, skill: "Postman", category: "Tools", level: "Advanced", icon: <SiPostman /> },
  { id: 24, skill: "Cursor", category: "Tools", alt: "editor", level: "Advanced", icon: null }, // No specific icon for Cursor
  { id: 25, skill: "ChatGPT", category: "Tools", alt: "ai", level: "Advanced", icon: <FaRobot /> },
];

export default skillData;
