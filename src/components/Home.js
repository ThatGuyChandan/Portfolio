import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FiGithub, FiLinkedin, FiCode } from "react-icons/fi";
import Spline from "@splinetool/react-spline";

const Home = () => {
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 600], [0, 80]);
  const yFast = useTransform(scrollY, [0, 600], [0, 140]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.2]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 overflow-hidden bg-slate-950"
    >
      {/* Background gradient layers - inspiration style */}
      <motion.div
        style={{ y: ySlow }}
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-3xl"
      />
      <motion.div
        style={{ y: yFast }}
        className="pointer-events-none absolute top-20 right-0 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.18),transparent_60%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[90vh]">
        {/* Left Side - Content (50%) */}
        <motion.div style={{ opacity }} className="space-y-6 z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Hello, I'm <span className="text-primary-light">Chandan Thakur</span>
          </h1>
          <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-light">
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
          <p className="text-lg text-white/75 max-w-xl">
            I build exceptional digital experiences that make an impact. 
            Specializing in creating responsive, user-friendly web applications 
            with modern technologies.
          </p>
          <div className="flex gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 transition-colors shadow-lg shadow-blue-500/25"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-5 py-3 transition-colors"
            >
              About Me
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6 pt-4">
            <a
              href="https://github.com/ThatGuyChandan"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <FiGithub className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/chandan-thakur-969703250/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <FiLinkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://leetcode.com/u/user5092N/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <FiCode className="w-6 h-6 text-white" />
            </a>
          </div>
        </motion.div>

        {/* Right Side - 3D Keyboard (50%) */}
        <div className="relative h-[300px] md:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-slate-800/40">
          {/* Spline interactive scene */}
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
          {/* Subtle overlay for readability */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent z-10" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-sm z-10">
        <div className="flex items-center gap-2">
          <span>Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="w-1 h-3 rounded bg-white/60"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
