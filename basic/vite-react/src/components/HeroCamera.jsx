import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const HeroCamera = ({ isMobile, children }) => {
  // Create a reference for the group container
  const group = useRef();

  // Update the camera position and rotation on each frame
  useFrame((state, delta) => {
    // Damp the camera position towards the target position
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    // If not on mobile, add slight rotation effect based on mouse movement
    if (!isMobile) {
      easing.dampE(
        group.current.rotation,
        [-state.pointer.y / 3, state.pointer.x / 5, 0],
        0.25,
        delta
      ); // Adjust rotation based on pointer position
    }
  });

  // Return the group container, scaling slightly for emphasis
  return (
    <group ref={group} scale={1.2}>
      {children}
    </group>
  );
};

export default HeroCamera;
