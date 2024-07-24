import { OrbitControls, useTexture } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import React, { useEffect } from 'react';

const Box = ({ scale, position , textures,textures2 , textures3 ,textures4,check }) => {
  const THREE = useThree();  
  const textureMaps = useTexture({
    map: textures,
    normalMap: textures3,
    displacementMap: textures2,
    roughnessMap: textures4,
  });
  useEffect(() => {
    console.log('Loaded textures:', textureMaps);
  }, [textureMaps]);
  return (


    <mesh  scale={scale} position={position}>
       {check}
        <OrbitControls/>
          <meshStandardMaterial {...textureMaps} />
    </mesh>


  );
};

export default Box;
