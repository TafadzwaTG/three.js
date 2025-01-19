import { useRef, useState, useEffect } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';
import gsap from 'gsap';

const Cube = ({ ...props }) => {
  const { nodes } = useGLTF('models/cube.glb');
  const texture = useTexture('textures/cube.png');

  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
    });

    timeline.to(cubeRef.current.rotation, {
      y: hovered ? '+=2' : `+=${Math.PI * 2}`,
      x: hovered ? '+=2' : `-=${Math.PI * 2}`,
      duration: 2.5,
      stagger: {
        each: 0.15,
      },
    });

    // Cleanup the GSAP animation on component unmount
    return () => {
      timeline.kill();
    };
  }, [hovered]); // Add `hovered` as a dependency to trigger the animation when it changes

  return (
    <Float floatIntensity={2}>
      <group position={[9, -4, 0]} rotation={[2.6, 0.8, -1.8]} scale={0.74} dispose={null} {...props}>
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)} // Make sure to reset hover state on leave
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload('models/cube.glb');

export default Cube;
