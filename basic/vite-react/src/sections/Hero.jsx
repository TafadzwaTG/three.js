import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import useMediaQuery from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  // Check for different screen sizes to adjust 3D model scaling
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // Calculate dynamic sizes for 3D objects based on screen size
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section id="home" className="min-h-screen w-full flex flex-col relative">
      {/* Text Section */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3 flex-grow">
        <p className="sm:text-4xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I'm TafadzwaTG <span className="waving-hand">👋🏼</span>
        </p>
        <p className="text-sm text-gray_gradient text-center">
          Building Products and Brands
        </p>
      </div>

      {/* 3D Canvas Section */}
      <div className="w-full h-full absolute inset-0 mt-50 sm:mt-40">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* Camera setup */}
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            {/* Wrapper for handling camera movement */}
            <HeroCamera isMobile={isMobile}>
              {/* 3D scene with HackerRoom model */}
              <HackerRoom
                position={sizes.deskPosition}
                scale={sizes.deskScale}
                rotation={[0, -Math.PI, 0]}
              />
            </HeroCamera>

            {/* 3D objects in the scene */}
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>

            {/* Lighting for the 3D scene */}
            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 10]} intensity={2} />
          </Suspense>
        </Canvas>
      </div>

      {/* Fixed Button Section */}
      { /*<div className="absolute bottom-0 left-0 right-0 w-full z-10 c-space flex justify-center mb-8">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>*/ }
    </section>
  );
};

export default Hero;
