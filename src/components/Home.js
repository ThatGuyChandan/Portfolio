import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiCode } from "react-icons/fi";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div
      id="home"
      className="relative w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#3b82f6",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false,
              },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#3b82f6",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "out",
              },
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 4,
              },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Hello, I'm <span className="text-blue-400">Chandan Thakur</span>
          </h1>
          <div className="text-xl md:text-3xl lg:text-4xl font-semibold text-blue-400 mb-8">
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Problem Solver",
                  "Tech Enthusiast",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            I build exceptional digital experiences that make an impact. 
            Specializing in creating responsive, user-friendly web applications 
            with modern technologies.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex space-x-6 mt-8"
        >
          <a
            href="https://github.com/ThatGuyChandan"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full border border-blue-400 hover:bg-blue-400 transition-all duration-300"
          >
            <FiGithub className="w-6 h-6 group-hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/chandan-thakur-969703250/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full border border-blue-400 hover:bg-blue-400 transition-all duration-300"
          >
            <FiLinkedin className="w-6 h-6 group-hover:text-white" />
          </a>
          <a
            href="https://leetcode.com/u/user5092N/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full border border-blue-400 hover:bg-blue-400 transition-all duration-300"
          >
            <FiCode className="w-6 h-6 group-hover:text-white" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center p-1">
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-1 h-1 bg-blue-400 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
