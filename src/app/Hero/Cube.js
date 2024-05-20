import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import "../../../src/app/globals.css";
import { Model } from "../../../public/Hollow";
const Cube = () => {
  const textures = useTexture("fit.jpg");

  return (
    <>
      <Model/>
    </>
  );
};

export default Cube;
