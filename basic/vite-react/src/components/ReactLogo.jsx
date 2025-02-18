import { Float, useGLTF } from "@react-three/drei";

const ReactLogo = (props) => {
  // Load the GLTF model for the React logo from the specified path
  const { nodes, materials } = useGLTF("models/react.glb");

  return (
    // Float component to add floating effect to the React logo
    <Float floatIntensity={1}>
      {/* Group container for the React logo, with specified position and scale */}
      <group position={[8, 8, 0]} scale={0.4} {...props} dispose={null}>
        {/* Mesh for the React logo, with specified geometry, material, position, rotation, and scale */}
        <mesh
          geometry={nodes["React-Logo_Material002_0"].geometry} // Access the specific geometry from the loaded GLTF model
          material={materials["Material.002"]} // Access the material associated with the geometry
          position={[0, 0.079, 0.181]} // Set the position of the mesh
          rotation={[0, 0, -Math.PI / 2]} // Set the rotation of the mesh
          scale={[0.392, 0.392, 0.527]} // Set the scale of the mesh
        />
      </group>
    </Float>
  );
};

// Preload the React logo model to ensure it is loaded before rendering
useGLTF.preload("models/react.glb");

export default ReactLogo;
