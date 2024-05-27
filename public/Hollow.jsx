import React, { useRef } from "react";
import { Text, useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/hollow.glb");
  return (
    <group {...props} dispose={null} scale={0.74} position={[0, -1, 0]}>
      <group>
      <Text position={[-0.3, 4, -0.5]} font="./Poppins-Black.ttf" lineHeight={1} textAlign="center" color="white" fontSize={1}>
          Hello my name is Hamza {'\n'} 
          I like making fun {'\n'}
          & interactive things with {'\n'} 
          code
        </Text>
      </group>
    </group>
  );
}

useGLTF.preload("/hollow.glb");
