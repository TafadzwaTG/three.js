import { useRef, useEffect, useCallback } from 'react';
import { Center, useTexture } from '@react-three/drei';
import gsap from 'gsap';

const Rings = ({ position }) => {
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture('textures/rings.png');

  useEffect(() => {
    if (refList.current.length === 0) return;

    refList.current.forEach((r) => {
      r.position.set(position[0], position[1], position[2]);
    });

    const timeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
    });

    timeline.to(
      refList.current.map((r) => r.rotation),
      {
        y: `+=${Math.PI * 2}`,
        x: `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: {
          each: 0.15,
        },
      }
    );

    return () => {
      timeline.kill(); // Cleanup the GSAP animation on component unmount
    };
  }, [position]); // Dependency array to update animation if position changes

  return (
    <Center>
      <group scale={0.5}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
