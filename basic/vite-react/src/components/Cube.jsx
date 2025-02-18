import { useRef, useState, useEffect } from "react";
import { Float, useGLTF, useTexture } from "@react-three/drei";
import gsap from "gsap";

// Cube component that renders a 3D model and animates its rotation on hover
const Cube = ({ ...props }) => {
  // Load the 3D model using the useGLTF hook
  const { nodes } = useGLTF("models/cube.glb");

  // Load the texture for the cube
  const texture = useTexture("textures/cube.png");

  // Create a reference to the cube mesh
  const cubeRef = useRef();

  // State to track hover state
  const [hovered, setHovered] = useState(false);

  // Effect to animate the cube's rotation using GSAP
  useEffect(() => {
    // Check if the cube mesh is available
    if (!cubeRef.current) return;

    // Create a GSAP timeline for the cube animation
    const timeline = gsap.timeline({
      repeat: -1, // Infinite loop
      repeatDelay: 0.5, // Pause for 0.5 seconds before repeating
    });

    // Rotate the cube continuously, adjusting rotation speed when hovered
    timeline.to(cubeRef.current.rotation, {
      y: hovered ? "+=2" : `+=${Math.PI * 2}`, // Rotate faster when hovered
      x: hovered ? "+=2" : `-=${Math.PI * 2}`, // Rotate in opposite direction
      duration: 2.5, // Animation duration
      stagger: { each: 0.15 }, // Stagger rotation for each axis
    });

    // Cleanup function to kill the animation on unmount
    return () => {
      timeline.kill(); // Cleanup animation on unmount
    };
  }, [hovered]); // Ensure effect runs on hover state change

  return (
    // Float component to add floating effect to the cube
    <Float floatIntensity={2}>
      <group
        position={[9, -4, 0]}
        rotation={[2.6, 0.8, -1.8]}
        scale={0.74}
        dispose={null}
        {...props}
      >
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={() => setHovered(true)} // Detect when the mouse enters the cube
          onPointerLeave={() => setHovered(false)} // Detect when the mouse leaves the cube
        >
          {/* Apply the texture to the cube material */}
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

// Preload the 3D model to avoid loading delay
useGLTF.preload("models/cube.glb");

export default Cube;
