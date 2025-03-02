import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Typewriter from "typewriter-effect";
import { MeshWobbleMaterial } from "@react-three/drei";

const WavyMesh = () => {
  return (
    <mesh scale={[5, 5, 5]} position={[0, 0, -5]}>
      <planeGeometry args={[10, 10, 50, 50]} />
      <MeshWobbleMaterial color="#1E293B" speed={1} factor={0.6} />
    </mesh>
  );
};

const Home = () => {
  return (
    <div
      id="home"
      className="relative w-full h-screen bg-gray-900 overflow-hidden"
    >
      {/* 3D Background */}
      <Canvas className="absolute top-0 left-0 w-full h-full z-0">
        <ambientLight intensity={0.5} />
        <WavyMesh />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* Foreground Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 text-white">
        <div>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
            Hello,
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
            I'm Chandan Thakur.
          </h1>
          <div className="text-xl md:text-3xl lg:text-5xl font-semibold text-blue-400">
            <Typewriter
              options={{
                delay: 100,
                typeSpeed: 20,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "I'm a <span className='text-blue-400'>Web Developer.</span>"
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    "I'm a <span className='text-blue-400'>Web Developer.</span>"
                  )
                  .start();
              }}
            />
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="relative z-10 flex flex-col py-40 sm:hidden">
        <a
          href="https://github.com/ThatGuyChandan"
          target="blank"
          className="group relative m-1 w-8 h-8 bg-opacity-10 inline-flex rounded-full mr-2 border border-opacity-50 items-center justify-center overflow-hidden hover:scale-110 hover:bg-blue-800 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 "
            fill="white "
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/chandan-thakur-969703250/"
          target="blank"
          className="group relative m-1 w-8 h-8 bg-opacity-10 inline-flex rounded-full mr-2 border border-opacity-50 items-center justify-center overflow-hidden hover:scale-110 hover:bg-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </a>
        <a
          href="https://leetcode.com/u/user5092N/"
          target="blank"
          className="group relative m-1 w-8 h-8 bg-opacity-10 inline-flex rounded-full mr-2 border border-opacity-50 items-center justify-center overflow-hidden hover:scale-110 hover:bg-blue-800"
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="white"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;
