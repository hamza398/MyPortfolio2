"use client";
import React, { useState } from "react";

const Tabs = () => {
  const [value, setValue] = useState(0);
  const setTab = (e) => {
    setValue(e);
  };
  return (
    <>
      <div className="h-[100vh] flex justify-center items-center">
        <div className="buttons">
          <button
            onClick={() => {
              setTab(0);
            }}
          >
            ONE
          </button>
          <button
            onClick={() => {
              setTab(1);
            }}
          >
            TWO
          </button>
          <button
            onClick={() => {
              setTab(2);
            }}
          >
            THREE
          </button>
        </div>
      </div>
      <div>
        <div className={value === 0 ? "visible" : "hidden"}>ONE CONTENT</div>

        <div className={value === 1 ? "visible" : "hidden"}>TWO CONTENT</div>

        <div className={value === 2 ? "visible" : "hidden"}>THREE CONTENT</div>
      </div>
    </>
  );
};

export default Tabs;
