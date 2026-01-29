const projectsData = [
  {
    id: 1,
    name: "ClosetOS",
    summary:
      "A full-stack fashion intelligence platform that helps users organize their wardrobe, generate outfits, and gain insights into their personal style using rule-based logic and optional AI.",
    details:
      "A full-stack fashion intelligence platform that helps users organize their wardrobe, generate outfits, and gain insights into their personal style using rule-based logic and optional AI. built using react, nodejs, postgres, express, neon, cloudinary, jwt-authentication, three-js, vite, unocss, and prisma-orm",
    technologies: [
      "react",
      "nodejs",
      "postgres",
      "express",
      "neon",
      "cloudinary",
      "jwt-authentication",
      "three-js",
      "vite",
      "unocss",
      "prisma-orm",
    ],
    github: "https://github.com/ThatGuyChandan/ClosetOS",
    liveLink: "https://closet-os-seven.vercel.app/",
  },
  {
    id: 2,
    name: "Blog Web",
    summary:
      "Designed and developed a dynamic blog website featuring user authentication and CRUD functionality using MongoDB, Node.js, and React.",
    details: `Implemented user registration and login forms for secure access. Enabled users to create, edit, and delete blog posts with MongoDB as the database. Utilized Node.js for server-side logic, handling authentication, and managing blog data.`,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "SMTP",
      "nodemailer",
      "HuggingFace",
      "react-quill",
    ],
    github: "https://github.com/ThatGuyChandan/blog-creating-website",
    liveLink: "https://blogsbychandan.vercel.app/",
  },
  {
    id: 3,
    name: "Gods Eye",
    summary:
      "This project is an AI-powered detection system that utilizes the CLIP model for analyzing visual inputs",
    details: `This project is an AI-powered detection system that utilizes the CLIP model for analyzing visual inputs (images and videos) to identify critical events such as violence, fire, or car crashes. The system is designed to handle real-time inputs and provide instant alerts using Telegram notifications for prompt action.`,
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Telegram-bot"],
    github: "https://github.com/ThatGuyChandan/GodsEye",
    liveLink: "",
  },
  {
    id: 4,
    name: "E-commerce Web",
    summary:
      "Implemented a dynamic shopping cart feature, allowing users to add and remove products with real-time updates of the total amount",
    details: `Developed a dynamic shopping cart feature, enabling users to seamlessly add and remove products with real-time updates, resulting in a 25% increase in user engagement and a 20% rise in average order value.
Integrated PayPal as a secure payment gateway for online transactions, enhancing the website's trustworthiness and contributing to a 30% boost in completed purchases.`,
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/ThatGuyChandan/phoneStore",
    liveLink: "https://phone-store-using-react.netlify.app/",
  },

  {
    id: 5,
    name: "voice-assistant",
    summary:
      "EGO is a personal AI assistant with a visually appealing interface and a modular skill system.",
    details: `EGO is a personal AI assistant with a visually appealing interface and a modular skill system. It listens for the wake word "EGO" and can perform a variety of tasks based on your voice commands.`,
    technologies: ["Python", "Vosk", "PyTorch", "GPT-2"],
    github: "https://github.com/ThatGuyChandan/voice-assistant",
    liveLink: "",
  },
  {
    id: 6,
    name: "bitTorrent",
    summary:
      "A simple, custom-built torrent client that interacts with the BitTorrent protocol to download files via peer-to-peer (P2P) networking.",
    details: `This is a simple, custom-built torrent client that interacts with the BitTorrent protocol to download files via peer-to-peer (P2P) networking. It connects to a tracker, communicates with peers, and downloads torrent pieces. All this is done using Node.js and UDP protocol.`,
    technologies: ["Node.js", "UDP", "BitTorrent Protocol"],
    github: "https://github.com/ThatGuyChandan/bitTorrent",
    liveLink: "",
  },
  {
    id: 7,
    name: "GlimmerWave",
    summary:
      "Designed and developed a feature-rich social media application using HTML, Tailwind CSS, TypeScript, React and Appwrite, enabling users to register, login, create posts, like, save, and delete posts, and leverage a powerful search functionality.",
    details: `Implemented secure user registration and login functionality to ensure a personalized and secure experience.    Enabled users to create and share posts seamlessly, fostering content creation and community engagement. Implemented a robust system for users to delete their own posts, providing control over shared content. Developed a powerful search feature, enabling users to discover relevant content and users efficiently. Implemented a versatile interaction system, allowing users to express appreciation for posts with a "like" feature and bookmark their favorite content through a post-saving functionality, fostering user engagement and facilitating content rediscovery.`,
    technologies: ["HTML", "Tailwind CSS", "TypeScript", "React", "Appwrite"],
    github: "https://github.com/ThatGuyChandan/SocialMediaWeb",
    liveLink: "",
  },

  {
    id: 8,
    name: "Resume Analyzer",
    summary:
      "An AI-powered web app that analyzes resumes and matches them with job descriptions.",
    details:
      "An AI-powered web app that analyzes resumes and matches them with job descriptions. It uses AWS services (S3, Lambda, Comprehend) to extract and evaluate resume content, providing ATS compatibility scores, keyword insights, and summaries to help job seekers optimize their applications.",
    technologies: [
      "react",
      "nodejs",
      "css",
      "aws-lambda",
      "aws-s3",
      "expressjs",
      "render",
      "vite",
      "vercel",
    ],
    github: "https://github.com/ThatGuyChandan/resume-analyzer",
    liveLink: "https://resume-analyzer-blue.vercel.app",
  },
];

export default projectsData;
