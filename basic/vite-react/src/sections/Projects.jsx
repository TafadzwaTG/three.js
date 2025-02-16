import { Suspense } from "react";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';
import { myProjects } from "../constants"; 

// Calculate the number of projects to display
const projectCount = myProjects.length;

const Projects = () => {
  // State to store the index of the currently selected project
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
   // Get the current project based on the selected index
  const currentProject = myProjects[selectedProjectIndex];

  // Function to handle navigation between projects
  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {

      // Update the index based on the direction
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-20">
      <p className="head-text">My work</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        
          {/* Left side section displaying project details */}
        <div className="flex flex-col gap-5 relative sm-p-10 py-10 px-5 shadow-2xl shadow-black-200">
           {/* Spotlight image for the current project */}
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          {/* Project details */}
          <div
            className="p-3 backdrop-filter backdrop-blue-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>

          {/* Project title, description, and tags */}
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          {/* Project tags and source code link */}
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Source Code</p>
              <img
                src="/assets/arrow-up.png"
                className="w-3 h-3"
                alt="arrow"
              />
            </a>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left arrow"
                className="w-4 h-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        {/* Right side section displaying the 3D model of the project */}
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>

             {/* Lighting setup */}
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />

             {/* Center the 3D model and apply scale and rotation */}
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  {/* 3D computer model with texture */}
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>

             {/* Orbit controls to allow user interaction with the 3D model */}
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;