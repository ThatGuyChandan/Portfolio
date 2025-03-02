const projectsData = [
  {
    id: 1,
    name: "Gods Eye",
    summary:
      "This project is an AI-powered detection system that utilizes the CLIP model for analyzing visual inputs",
    details: `This project is an AI-powered detection system that utilizes the CLIP model for analyzing visual inputs (images and videos) to identify critical events such as violence, fire, or car crashes. 
    The system is designed to handle real-time inputs and provide instant alerts using Telegram notifications for prompt action.`,
    imageUrl: "./assets/godsEye.png",
    language: " HTML,CSS,JavaScript,Python,Telegram-bot",
    github: "https://github.com/ThatGuyChandan/GodsEye",
    liveLink: "",
  },
  {
    id: 2,
    name: "E-commerce Web",
    summary:
      "Implemented a dynamic shopping cart feature, allowing users to add and remove products with real-time updates of the total amount",
    details: `Developed a dynamic shopping cart feature, enabling users to seamlessly add and remove products with real-time updates, resulting in a 25% increase in user engagement and a 20% rise in average order value.
Integrated PayPal as a secure payment gateway for online transactions, enhancing the website's trustworthiness and contributing to a 30% boost in completed purchases.`,
    imageUrl: "./assets/phoneStore.png",
    language: " HTML,CSS,JavaScript,React",
    github: "https://github.com/ThatGuyChandan/phoneStore",
    liveLink: "https://phone-store-using-react.netlify.app/",
  },
  {
    id: 3,
    name: "Blog Web",
    summary:
      "Designed and developed a dynamic blog website featuring user authentication and CRUD functionality using MongoDB, Node.js, and React.",
    details: `Implemented user registration and login forms for secure access.
Enabled users to create, edit, and delete blog posts with MongoDB as the database.
Utilized Node.js for server-side logic, handling authentication, and managing blog data.`,
    imageUrl: "./assets/blog.png",
    language: " HTML, CSS, JavaScript,React,Node.js,MongoDB",
    github: "https://github.com/ThatGuyChandan/blog-creating-website",
    liveLink: "",
  },
  {
    id: 4,
    name: "GlimmerWave",
    summary:
      "Designed and developed a feature-rich social media application using HTML, Tailwind CSS, TypeScript, React and Appwrite, enabling users to register, login, create posts, like, save, and delete posts, and leverage a powerful search functionality.",
    details: `Implemented secure user registration and login functionality to ensure a personalized and secure experience.
    Enabled users to create and share posts seamlessly, fostering content creation and community engagement.
Implemented a robust system for users to delete their own posts, providing control over shared content.
Developed a powerful search feature, enabling users to discover relevant content and users efficiently.
Implemented a versatile interaction system, allowing users to express appreciation for posts with a "like" feature and bookmark their favorite content through a post-saving functionality, fostering user engagement and facilitating content rediscovery.`,
    imageUrl: "./assets/socialmedia.png",
    language: " HTML, Tailwind CSS, TypeScript, React",
    github: "https://github.com/ThatGuyChandan/SocialMediaWeb",
    liveLink: "",
  },
  {
    id: 5,
    name: "Task Manager",
    summary:
      "Designed and developed a dynamic task management web application using HTML, CSS, JavaScript, Node.js, and MongoDB. The application allows users to seamlessly add, delete, update, and mark tasks as complete.",
    details: `Implemented a user-friendly interface for adding, updating, and deleting tasks, providing a seamless task management experience.
Developed robust backend functionality using Node.js to handle task operations efficiently.
Integrated a feature allowing users to mark tasks as complete, providing a clear visual indication of task progress and completion status.
Utilized MongoDB to store and manage task data, ensuring data consistency and reliability.`,
    imageUrl: "./assets/task.png",
    language: " HTML, CSS, JavaScript,Node.js,MongoDB",
    github: "https://github.com/ThatGuyChandan/to-do-app2",
    liveLink: "",
  },
  {
    id: 6,
    name: "Health Care Web",
    summary:
      "Conceptualized and developed a comprehensive healthcare website utilizing HTML, CSS, JavaScript, PHP, and SQL, with the capability for users to book appointments and seamlessly reach out through the contact section.",
    details: `Developed a visually appealing and responsive user interface using HTML for structure, CSS for styling, and JavaScript for dynamic interactions.
    Implemented a user-friendly interface for scheduling healthcare appointments, enhancing accessibility for users.
Utilized PHP for server-side scripting to process and store appointment data securely in the SQL database.
Designed and integrated a contact section for users to easily connect with healthcare providers or administrators.
Implemented PHP to handle form submissions, ensuring secure communication and efficient data processing and Utilized SQL (via Xampp) for database management, ensuring efficient storage and retrieval of appointment and contact data. `,
    imageUrl: "./assets/healthCare.png",
    language: " HTML, CSS, JavaScript, PHP, SQL",
    github: "https://github.com/ThatGuyChandan/health-care-website",
    liveLink: "",
  },

  {
    id: 7,
    name: "University Landing Page",
    summary:
      "Designed and developed a visually appealing and interactive university landing page using HTML, CSS, and JavaScript.",
    details: `Designed a visually appealing and user-friendly layout, emphasizing the university's brand and creating a positive first impression.
    Created a responsive layout to ensure an optimal viewing experience across various devices, including desktops, tablets, and mobile phones.
    Incorporated JavaScript for interactive elements, enhancing user engagement and providing a dynamic browsing experience.`,
    imageUrl: "./assets/landing.png",
    language: " HTML, CSS, JavaScript",
    github: "https://github.com/ThatGuyChandan/landing-page",
    liveLink: "https://topuniversity.netlify.app/",
  },
  {
    id: 8,
    name: "URL Shortener",
    summary:
      "Developed a versatile URL shortener application using Node.js, JavaScript, MongoDB, EJS, and Bootstrap. The application not only shortens URLs but also allows for deletion, while keeping track of the number of times each link is clicked.",
    details: `Implemented a robust URL shortening system to create concise and shareable links for long URLs.
Utilized Node.js for server-side logic, ensuring efficient URL shortening operations.
Enabled users to delete short links, providing control and flexibility over the generated links.
Integrated a click-tracking mechanism to monitor and display the number of times each short link is clicked.`,
    imageUrl: "./assets/linkShortener.png",
    language: " Node.js,JavaScript,MongoDB,EJS,Bootstrap",
    github: "https://github.com/ThatGuyChandan/linkShortener",
    liveLink: "",
  },
  {
    id: 9,
    name: "Tic Tac Toe",
    summary:
      "Tic Tac Toe is a classic implementation of the popular game built using React.js",
    details: `React Tic Tac Toe is a classic implementation of the popular game built using React.js. It offers an interactive gaming experience with responsive design, state management, and win detection algorithms. Players can enjoy fair turn-based gameplay, with options to restart and responsive UI for various devices.`,
    imageUrl: "./assets/ticTacToe.png",
    language: " HTML,CSS,JavaScript,React",
    github: "https://github.com/ThatGuyChandan/TicTacToe",
    liveLink: "",
  },
  {
    id: 10,
    name: "ePixala",
    summary:
      "Crafted an aesthetically pleasing website that captivates users through a seamless blend of animations and responsive design. Leveraging HTML, CSS, and JavaScript, the site delivers a delightful scrolling experience, showcasing its full potential on large screens.",
    details: `Designed a visually appealing website that combines creativity and functionality to leave a lasting impression on visitors.
    Implemented scroll-triggered animations that engage users as they navigate through the site, enhancing the overall user experience.
    `,
    imageUrl: "./assets/scroll.png",
    language: " HTML, CSS, JavaScript",
    github: "https://github.com/ThatGuyChandan/ePixala",
    liveLink: "https://relaxed-stardust-4e0571.netlify.app/",
  },
];

export default projectsData;
