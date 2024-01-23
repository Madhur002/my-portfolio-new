import React, { useState } from "react";
import { BiSolidMoon } from "react-icons/bi";
import { HiSun } from "react-icons/hi";
import "animate.css";

const Navbar = () => {
  const [div, setDiv] = useState("home");
  function scrollToDiv(divId: any) {
    setDiv(divId);
    const element = document.getElementById(divId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="fixed h-20 top-0 left-0 w-full z-50">
      <div className="h-full flex justify-end w-full items-end gap-3">
        <div className="animate__animated animate__backInDown animate__slow animate__delay-2s bg-[#00000070] border border-[#ffffff7a] backdrop-blur-xl rounded-full text-white h-11 w-11 flex justify-center items-center">
          <BiSolidMoon />
        </div>
        <ul className="animate__animated animate__backInDown animate__slow animate__delay-2s flex justify-end items-end px-6 py-3 mr-10 gap-8 text-white font-semibold text-sm bg-[#00000070] border border-[#ffffff7a] backdrop-blur-xl rounded-full">
          <li
            onClick={() => scrollToDiv("home")}
            className={`${
              div === "home" ? "font-bold text-white cursor-pointer" : "text-[#ffffffc8] cursor-pointer"
            }`}
          >
            Home
          </li>
          <li
            onClick={() => scrollToDiv("project-section")}
            className={`${
              div === "project-section"
                ? "font-bold text-white cursor-pointer"
                : "text-[#ffffffc8] cursor-pointer"
            }`}
          >
            Projects
          </li>
          <li
            onClick={() => scrollToDiv("skill-section")}
            className={`${
              div === "skill-section"
                ? "font-bold text-white cursor-pointer"
                : "text-[#ffffffc8] cursor-pointer"
            }`}
          >
            Skills
          </li>
          <li
            onClick={() => scrollToDiv("contact-section")}
            className={`${
              div === "contact-section"
                ? "font-bold text-white cursor-pointer"
                : "text-[#ffffffc8] cursor-pointer"
            }`}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
