"use client";
import React, { useEffect, useState } from "react";
import "animate.css";
import ImageCanvas from "../ImageSlider/ImageSlider";
const HomePage = () => {
  return (
    <>
      <div
        id="home"
        className="bg-black w-full flex flex-grow justify-center items-center h-screen mt-26 px-32"
      >
        <ImageCanvas scrollHeight={"700px"} numFrames={84} width={"100%"} height={"100vh"}/>
      </div>
    </>
  );
};

export default HomePage;
