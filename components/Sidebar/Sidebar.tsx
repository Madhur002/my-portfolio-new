"use client"
import React, { useEffect, useState } from 'react';
import 'animate.css';

const Sidebar = () => {
const [div, setDiv] = useState("home")
  function scrollToDiv(divId: any) {
    setDiv(divId);
    const element = document.getElementById(divId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  // border: '2px solid white'
  return (
    <div className="fixed h-screen flex justify-center items-center left-0 z-50">
      <div className="h-full flex justify-center px-10 items-center gap-3">
        <ul className="animate__animated animate__fadeIn animate__slow animate__delay-3s flex flex-col justify-evenly items-center py-4 text-white w-11 font-semibold text-sm bg-[#00000070] border border-[#ffffff7a] backdrop-blur-xl rounded-full">
          <li
            className={`${div === "home" ? "bg-[#27d6ad] w-2 h-6 rounded-t-full border-2 border-white" : "bg-[#27d6ad] w-2 h-6 rounded-t-full"}`}
            onClick={() => scrollToDiv("home")}
          ></li>
          <li
            className={`${div === "profile-section" ? "bg-[#8127d6] w-2 h-6 rounded-t-full border-2 border-white" : "bg-[#8127d6] w-2 h-6 rounded-t-full"}`}
            onClick={() => scrollToDiv("profile-section")}
          ></li>
          <li
            className={`${div === "project-section" ? "bg-[#d62784] w-2 h-6 rounded-t-full border-2 border-white" : "bg-[#d62784] w-2 h-6 rounded-t-full"}`}
            onClick={() => scrollToDiv("project-section")}
          ></li>
          <li
            className={`${div === "skill-section" ? "bg-[#d62727] w-2 h-6 rounded-t-full border-2 border-white rounded-b-full" : "bg-[#d62727] w-2 h-6 rounded-t-full rounded-b-full"}`}
            onClick={() => scrollToDiv("skill-section")}
          ></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
