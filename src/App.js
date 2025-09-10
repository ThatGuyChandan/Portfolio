import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import "./App.css";
import About from "./components/About";
import Certifiacte from "./components/Certificate";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from './components/Experience';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <NavBar />
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="certificates">
          <Certifiacte />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
