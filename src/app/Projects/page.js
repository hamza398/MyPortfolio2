"use client";
import { extend } from "@react-three/fiber";
import * as THREE from 'three';
import { OrbitControls  } from "@react-three/drei";
import { Canvas} from "@react-three/fiber";
import React, { useState } from "react";
import Box from "./canvas";
import { CircleGeometry   } from "three";
 
extend({ SphereGeometry: THREE.SphereGeometry });
 
const Tabs = () => {
  const [value, setValue] = useState(1)
  const changeTab = (index) => {
    setValue(index)
  }
  return (
    <>
      <div className="project flex justify-around w-[100%]">
        {
          value === 1 && (<div className='p1 h-[500px] w-[530px]'>
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={2.5} />
              <OrbitControls />
              <Box scale={1.6} check= <sphereGeometry/> textures='/file.jpeg'  textures2='/file.jpeg' textures3='/file.jpeg' textures4='/file.jpeg'/>
            </Canvas>

          </div>)
        }
        {
          value === 2 && (<div className='p1 h-[500px] w-[530px]'>
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={2.5} />
              <OrbitControls />
              <Box scale={3.6} textures='/kl.png'  />
            </Canvas>

          </div>)
        }
        {
          value === 3 && (<div className='p1 h-[500px] w-[530px]'>
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={2.5} />
              <OrbitControls />
              <Box scale={1.6} check=<sphereGeometry/>  textures='/Granite08large_4K_BaseColor.png' textures2='/Granite08large_4K_Height.png' textures3='/Granite08large_4K_Normal.png' textures4='/Granite08large_4K_Roughness.png'  />
            </Canvas>

          </div>)
        }
        {
          value === 4 && (<div className='p1 h-[500px] w-[530px]'>
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={2.5} />
              <OrbitControls />
              <Box scale={3.6} check={   <boxGeometry  />}  textures='/Granite08large_4K_BaseColor.png' textures2='/Granite08large_4K_Height.png' textures3='/Granite08large_4K_Normal.png' textures4='/Granite08large_4K_Roughness.png' />
            </Canvas>

          </div>)
        }
        <div className=" h-[500px] links flex items-center flex-col justify-center ">

          <button href="" onClick={() => changeTab(1)} >Project1</button>
          <button href="" onClick={() => changeTab(2)} >Project2</button>
          <button href="" onClick={() => changeTab(3)} >Project3</button>
          <button href="" onClick={() => changeTab(4)} >Project4</button>
        </div>

      </div>
    </>
  );
};

export default Tabs;
