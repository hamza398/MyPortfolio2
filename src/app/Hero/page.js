'use client'
import React, { useEffect, useRef, useState } from "react";
import "../globals.css";
import Pc from "./Pc";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { gsap } from "gsap";
import Cube from "./Cube";
const Header = ({
  
}) => {
  const elementRef = useRef(null);
  const threeRef = useRef(null)

const threeAnimate  =  {
  
  duration: 2.5,
ease: "power1.in",
x: "-130%"

}
  useEffect(() => {
    const element = elementRef.current;
    const three = threeRef.current; 

    if (three) {
      gsap.to(three, threeAnimate);
    }
    return () => gsap.killTweensOf(element);
  },[]);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div
        
        className="h-[100vh] relative  "
        style={{
          background:
            "linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)",
        }}
      >
        <div className="header"></div>
        <div className=" ml-14   relative z-30 header-text flex items-center justify-center flex-col h-[27rem] w-[60%] p-7 ">
          <Canvas>
          <ambientLight intensity={1.5} />
            <directionalLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              castShadow
              shadow-mapSize={[2024, 2024]}
            />
            <pointLight position={[10, 0, 0]} />
          <OrbitControls/>
            <Cube/>
          </Canvas>
        </div>
        <div ref={threeRef} className="canvasComponent h-[100vh] w-[600px] absolute top-0 left-[1500px] ">
          <Canvas shadows>
            <OrbitControls />
            <ambientLight intensity={1.5} />
            <directionalLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              castShadow
              shadow-mapSize={[2024, 2024]}
            />
            <pointLight position={[10, 0, 0]} />
            <Pc />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Header;
