import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

const RotatingCube = () => { 
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1, 32]} />
      <meshNormalMaterial color={'#468585'} emissive={'#468585'} />
      <sparkles count={100} scale={10} size={6} speed={0.5} noise={0.5} color={'#9CDBA6'} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas 
      style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      backgroundColor="#101010"
    >
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight position={[1, 1, 1]} intensity={1} color={'#ffffff'} />
      <RotatingCube />
    </Canvas>
  );
};

export default App;
