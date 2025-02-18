import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Target = (props) => {
  // Create a reference for the target mesh to manipulate its position
  const targetRef = useRef();

  // Load the GLTF model of the target using useGLTF
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  // useEffect to animate the target when the component mounts
  useEffect(() => {
    // Check if the target mesh is available
    if (targetRef.current) {
      // Animate the target mesh using GSAP
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5, // Move the target up by 0.5 units
        duration: 1.5, // Duration of the animation
        repeat: -1, // Repeat the animation indefinitely
        yoyo: true, // Reverse the animation
        ease: "power1.inOut", // Easing function
      });
    }
  }, []); // Empty dependency array to run the effect only once

  return (
    // Render the target mesh with the loaded GLTF model
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {/* Render the loaded GLTF model as a primitive object */}
      <primitive object={scene} />
    </mesh>
  );
};

// Preload the GLTF model to improve performance by loading it before the component is rendered
useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
);

export default Target;
