import React, { useRef } from "react";
import { Text, useGLTF } from "@react-three/drei";

export function Model(props) {
  
  return (
    
    
      <Text position={[-0.3, 0, -0.5]} font="./Poppins-Black.ttf" lineHeight={1} textAlign="center" color="white" fontSize={1}>
          Hello my name is Hamza {'\n'} 
          I like making fun {'\n'}
          & interactive things with {'\n'} 
          code
        </Text>
    
  );
}

useGLTF.preload("/hollow.glb");
