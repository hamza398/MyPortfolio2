"use client";
import Image from "next/image";
import React from "react";
import hamza from "./images/moon.png";
const About = (props) => {
  return (
    <>
      <div className="info">
        <h1 className="text-black text-8xl z-40 relative uppercase">welcome</h1>
        <h1 ref={elementRef} className=" mt-[-900px] h1 text-4xl text-white font-extrabold">
            👋 Hi, I'm{" "}
            <span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative text-[#FF76CE] h-[]"
            >
              Hamza
            </span>
            , <br />
            I like making <br /> <span className="text-[#d26499a8]">
              fun
            </span> & <br /> interactive things <br /> with{" "}
            <span className="text-[#333]">code</span>.
          </h1>
    
      </div>
    </>
  );
};

export default About;
