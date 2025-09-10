# My Portfolio

This is a personal portfolio website built with React, showcasing my projects, skills, and experience. The website is designed to be responsive, visually appealing, and easy to navigate.

## Features

- **Responsive Design:** Optimized for various screen sizes, from mobile devices to large desktops.
- **Interactive UI:** Engaging user interface with subtle animations and transitions.
- **Dynamic Project Showcase:** Projects are loaded from a JSON file, making it easy to add and manage new projects. Each project has a dedicated modal for detailed information.
- **Categorized Skills:** Skills and technologies are categorized and displayed with relevant icons for better readability and understanding of expertise.
- **Theme Toggle:** Light and dark mode toggle for personalized browsing experience.
- **Modern Styling:** Built with Tailwind CSS for efficient and utility-first styling.

## Technologies Used

- **Frontend:**
  - React.js
  - Tailwind CSS
  - Framer Motion (for animations)
  - React-Scroll (for smooth scrolling navigation)
  - React-Typewriter-Effect (for typing animation)
  - React-TSParticles (for background particles)
  - React-Icons (for various icons)

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/ (Reusable UI components like NavBar, Footer, ProjectCard, etc.)
│   ├── context/ (React Context for theme management)
│   ├── data/ (JSON files for project and skill data)
│   ├── App.js (Main application component)
│   ├── index.js (Entry point of the React application)
│   └── ... (other CSS and test files)
├── package.json
├── tailwind.config.js
└── ... (other configuration files)
```

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/ThatGuyChandan/Portfolio.git
    cd Portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm start
    ```

    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deployment

The project is configured for deployment on GitHub Pages. You can deploy it by running:

```bash
npm run deploy
```

## Customization

- **Projects:** Add or modify project details in `src/data/projects.json`.
- **Skills:** Update your skills and categories in `src/data/SkillData.js`.
- **Content:** Modify text content in respective components (`Home.js`, `About.js`, etc.).
- **Styling:** Customize the theme and styles in `tailwind.config.js` and individual component files.

## License

This project is open source and available under the [MIT License](LICENSE).