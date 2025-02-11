import React, { useEffect, useMemo, useRef } from "react";
import { useGLTF, useFBX } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import { useAnimations } from '@react-three/drei';

const Developer = ({ animationName = "idle", ...props }) => {
  const group = useRef();

  // Load the GLTF model
  const { scene, nodes, materials } = useGLTF("/models/animations/developer.glb");

  // Clone the scene to avoid modifying the original
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  // Debugging: Log available nodes
  useEffect(() => {
    console.log("GLTF Nodes:", nodes);
    console.log("Materials:", materials);
  }, [nodes, materials]);

  // Load animations
  const { animations: idleAnimation } = useFBX("/models/animations/idle.fbx");
  const { animations: saluteAnimation } = useFBX("/models/animations/salute.fbx");
  const { animations: clappingAnimation } = useFBX("/models/animations/clapping.fbx");
  const { animations: victoryAnimation } = useFBX("/models/animations/victory.fbx");

  // Ensure animations are loaded properly
  if (!idleAnimation.length || !saluteAnimation.length || !clappingAnimation.length || !victoryAnimation.length) {
    console.warn("One or more animations failed to load!");
    return null;
  }

  // Assign animation names
  idleAnimation[0].name = "idle";
  saluteAnimation[0].name = "salute";
  clappingAnimation[0].name = "clapping";
  victoryAnimation[0].name = "victory";

  // Set up animations
  const { actions } = useAnimations(
    [...idleAnimation, ...saluteAnimation, ...clappingAnimation, ...victoryAnimation],
    group
  );

  // Debugging: Log available animations
  useEffect(() => {
    console.log("Available Animations:", Object.keys(actions));
  }, [actions]);

  // Handle animation changes
  useEffect(() => {
    if (actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
    }

    return () => {
      if (actions[animationName]) {
        actions[animationName].fadeOut(0.5);
      }
    };
  }, [animationName, actions]);

  // Ensure nodes exist before rendering
  if (!nodes || !materials) return null;

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Use Armature if Hips does not exist */}
      {nodes.Hips ? (
        <primitive object={nodes.Hips} />
      ) : nodes.Armature ? (
        <primitive object={nodes.Armature} />
      ) : (
        console.warn("Neither 'Hips' nor 'Armature' found in model.")
      )}

      <skinnedMesh
        geometry={nodes?.Wolf3D_Hair?.geometry}
        material={materials?.Wolf3D_Hair}
        skeleton={nodes?.Wolf3D_Hair?.skeleton}
      />
      <skinnedMesh
        geometry={nodes?.Wolf3D_Glasses?.geometry}
        material={materials?.Wolf3D_Glasses}
        skeleton={nodes?.Wolf3D_Glasses?.skeleton}
      />
      <skinnedMesh
        geometry={nodes?.Wolf3D_Body?.geometry}
        material={materials?.Wolf3D_Body}
        skeleton={nodes?.Wolf3D_Body?.skeleton}
      />
      <skinnedMesh
        geometry={nodes?.Wolf3D_Outfit_Bottom?.geometry}
        material={materials?.Wolf3D_Outfit_Bottom}
        skeleton={nodes?.Wolf3D_Outfit_Bottom?.skeleton}
      />
      <skinnedMesh
        geometry={nodes?.Wolf3D_Outfit_Footwear?.geometry}
        material={materials?.Wolf3D_Outfit_Footwear}
        skeleton={nodes?.Wolf3D_Outfit_Footwear?.skeleton}
      />
      <skinnedMesh
        geometry={nodes?.Wolf3D_Outfit_Top?.geometry}
        material={materials?.Wolf3D_Outfit_Top}
        skeleton={nodes?.Wolf3D_Outfit_Top?.skeleton}
      />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes?.EyeLeft?.geometry}
        material={materials?.Wolf3D_Eye}
        skeleton={nodes?.EyeLeft?.skeleton}
        morphTargetDictionary={nodes?.EyeLeft?.morphTargetDictionary}
        morphTargetInfluences={nodes?.EyeLeft?.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes?.EyeRight?.geometry}
        material={materials?.Wolf3D_Eye}
        skeleton={nodes?.EyeRight?.skeleton}
        morphTargetDictionary={nodes?.EyeRight?.morphTargetDictionary}
        morphTargetInfluences={nodes?.EyeRight?.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes?.Wolf3D_Head?.geometry}
        material={materials?.Wolf3D_Skin}
        skeleton={nodes?.Wolf3D_Head?.skeleton}
        morphTargetDictionary={nodes?.Wolf3D_Head?.morphTargetDictionary}
        morphTargetInfluences={nodes?.Wolf3D_Head?.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes?.Wolf3D_Teeth?.geometry}
        material={materials?.Wolf3D_Teeth}
        skeleton={nodes?.Wolf3D_Teeth?.skeleton}
        morphTargetDictionary={nodes?.Wolf3D_Teeth?.morphTargetDictionary}
        morphTargetInfluences={nodes?.Wolf3D_Teeth?.morphTargetInfluences}
      />
    </group>
  );
};

// Preload model
useGLTF.preload("/models/animations/developer.glb");

export default Developer;
