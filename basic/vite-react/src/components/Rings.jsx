import { useRef, useEffect, useCallback } from "react";
import { Center, useTexture } from "@react-three/drei";
import gsap from "gsap";

const Rings = ({ position }) => {
  // Create a reference list to store the mesh references (rings)
  const refList = useRef([]);

  // Callback function to get the mesh reference and add it to the list
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  // Load the texture for the rings
  const texture = useTexture("textures/rings.png");

  // Update the position of the rings and animate their rotation
  useEffect(() => {
    // Check if the reference list is empty
    if (refList.current.length === 0) return;

    // Set the position for each ring in the refList
    refList.current.forEach((r) => {
      r.position.set(position[0], position[1], position[2]);
    });

    // Create a GSAP timeline to animate the rotation of the rings
    const timeline = gsap.timeline({
      repeat: -1, // Infinite loop for animation
      repeatDelay: 0.5, // Delay between repetitions
    });

    // Animate the rotation of each ring in the refList
    timeline.to(
      refList.current.map((r) => r.rotation),
      {
        y: `+=${Math.PI * 2}`, // Rotate the rings around the y-axis
        x: `-=${Math.PI * 2}`, // Rotate the rings around the x-axis
        duration: 2.5, // Duration of the animation
        stagger: {
          each: 0.15, // Stagger the rotation for each ring
        },
      }
    );

    // Cleanup function to kill the animation on unmount
    return () => {
      timeline.kill(); // Kill the GSAP animation
    };
  }, [position]); // Dependency array to update animation if position changes

  return (
    <Center>
      {" "}
      {/* Centers the group of rings in the scene */}
      <group scale={0.5}>
        {" "}
        {/* Scale down the group of rings */}
        {/* Create an array of 4 rings with unique geometries and materials */}
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            {" "}
            {/* Set the ref for each ring */}
            {/* Create a torus geometry with varying sizes */}
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            {/* Apply the texture to the ring material */}
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
