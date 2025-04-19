import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import "./App.css";
import About from "./components/About";
import Certifiacte from "./components/Certifiacte";
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
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Certifiacte />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
