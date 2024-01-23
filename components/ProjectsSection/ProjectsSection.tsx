"use client";
import { useEffect, useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import Image from "next/image";
import "animate.css";
const ProjectsSection = () => {
  const [project, setProject] = useState(3);
  const [scrollY, setScrollY] = useState(0);
  console.log("scrollY");
  console.log(scrollY);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        id="project-section"
        className="flex flex-col h-screen bg-[#000000] w-full gap-2"
      >
        <div className="flex items-center gap-4">
          <p className="heading2 text-[70px] w-72 my-8 ml-44">Projects</p>
          <p className="text-[70px] heading3">
            <span className="heading-i">i &apos;ve made</span>
          </p>
        </div>
        <div className="h-full w-full flex mb-[100px] px-40">
          <div className="h-[87%] w-full flex justify-center items-center gap-4 rounded-2xl mb-[100px]">
            {project === 0 && (
              <>
                {" "}
                <div className="w-3/4 animate__animated animate__fadeIn animate__slow h-full border-4 border-orange-500 relative rounded-2xl">
                  <Image
                    className="rounded-2xl"
                    src="/myTube1.png"
                    alt=""
                    layout="fill"
                    objectFit="fill"
                  />
                </div>
                <div className="w-1/2 animate__animated animate__fadeIn animate__slow h-full bg-orange-500 justify-between rounded-2xl flex flex-col items-center pt-6 px-4 relative">
                  <div className="flex flex-col items-left gap-2">
                    <p className="text-[50px] text-black proj1">My tube</p>
                    <p className="text-[20px] text-black proj2 font-bold text-left">
                      <span className="proj3 text-[25px]">M</span> y Tube, is a
                      dynamic YouTube clone built using React. It leverages the
                      <span className="text-white">RapidAPI</span> YouTube v3
                      Api to provide users with personalized recommendations and
                      dynamically generated search results. As the developer, I
                      designed and implemented the app to deliver a
                      user-friendly experience.
                    </p>
                  </div>
                  <div className="w-full absolute text-black text-[25px] flex justify-end mb-4 mr-6 bottom-0">
                    <BsPlusCircleFill />
                  </div>
                </div>
              </>
            )}
            {project === 1 && (
              <>
                {" "}
                <div className="w-3/4 animate__animated animate__fadeIn animate__slow h-full border-4 border-[#bb31b9] relative rounded-2xl">
                  <Image
                    className="rounded-2xl"
                    src="/project-taskly.png"
                    alt=""
                    layout="fill"
                    objectFit="fill"
                  />
                </div>
                <div className="w-1/2 animate__animated animate__fadeIn animate__slow h-full bg-[#bb31b9] justify-between rounded-2xl flex flex-col items-center pt-6 px-4 relative">
                  <div className="flex flex-col items-left gap-2">
                    <p className="text-[50px] text-black proj1">Taskly</p>
                    <p className="text-[20px] text-black proj2 font-bold text-left">
                      <span className="proj3 text-[25px]">T</span> askly is a
                      dynamic and user-friendly todo management application
                      built using <span className="text-white">MERN-Stack</span>
                      . It provides users with a comprehensive platform to
                      create, edit, and delete todos, while also offering
                      advanced features such as user authentication, dark and
                      light mode options, dynamic search.
                    </p>
                  </div>
                  <div className="w-full absolute text-black text-[25px] flex justify-end mb-4 mr-6 bottom-0">
                    <BsPlusCircleFill />
                  </div>
                </div>
              </>
            )}
            {project === 2 && (
              <>
                {" "}
                <div className="w-3/4 animate__animated animate__fadeIn animate__slow h-full border-4 border-[#4bc6ff] relative rounded-2xl">
                  <Image
                    className="rounded-2xl"
                    src="/doubthai.png"
                    alt=""
                    layout="fill"
                    objectFit="fill"
                  />
                </div>
                <div className="w-1/2 animate__animated animate__fadeIn animate__slow h-full bg-[#4bc6ff] justify-between rounded-2xl flex flex-col items-center pt-6 px-4 relative">
                  <div className="flex flex-col items-left gap-2">
                    <p className="text-[50px] text-black proj1">Doubt hai</p>
                    <p className="text-[20px] text-black proj2 font-bold text-left">
                      <span className="proj3 text-[25px]">I</span> developed the
                      frontend for the Doubt Hai application, dedicated to
                      resolving students&apos; inquiries. My contributions
                      included implementing chat functionality with{" "}
                      <span className="text-[#ffffff]">AI</span> using
                      websockets and APIs, as well as integrating features such
                      as chat history, all within the Next.js 13 framework.
                    </p>
                  </div>
                  <div className="w-full absolute text-black text-[25px] flex justify-end mb-4 mr-6 bottom-0">
                    <BsPlusCircleFill />
                  </div>
                </div>
              </>
            )}
            {project === 3 && (
              <>
                {" "}
                <div className="w-3/4 animate__animated animate__fadeIn animate__slow h-full border-4 border-[#ff2b72] relative rounded-2xl">
                  <Image
                    className="rounded-2xl"
                    src="/joolt.png"
                    alt=""
                    layout="fill"
                    objectFit="fill"
                  />
                </div>
                <div className="w-1/2 animate__animated animate__fadeIn animate__slow h-full bg-[#ff2b72] justify-between rounded-2xl flex flex-col items-center pt-6 px-4 relative">
                  <div className="flex flex-col items-left gap-2">
                    <p className="text-[50px] text-black proj1">Joolt</p>
                    <p className="text-[20px] text-black proj2 font-bold text-left">
                      <span className="proj3 text-[25px]">I</span> developed
                      both the frontend and backend for the Joolt{" "}
                      <span className="text-white">Masterclass</span> , a
                      platform dedicated to monitoring the progress of
                      student&apos;s in their courses. This system provides
                      badges to student&apos;s based on their achievements and
                      tracks the courses they have taken.
                    </p>
                  </div>
                  <div className="w-full absolute text-black text-[25px] flex justify-end mb-4 mr-6 bottom-0">
                    <BsPlusCircleFill />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {scrollY >= 780 && (
          <>
            <div className="fixed h-[100px] w-full flex justify-center items-center bottom-0 z-50">
              <div className="h-full w-full flex justify-center px-10 items-center gap-3">
                <ul className="animate__animated animate__fadeIn animate__slow animate__delay-2s flex justify-evenly items-center py-4 text-white w-[200px] font-semibold text-sm bg-[#ffffff3a] border border-[#ffffff7a] backdrop-blur-xl rounded-full">
                  <li
                    className={`${
                      project === 0
                        ? "bg-[#ffffff] border-4 border-orange-500 w-4 h-4 rounded-full"
                        : "bg-[#ffffff7c] w-4 h-4 rounded-full"
                    }`}
                    onClick={() => setProject(0)}
                  ></li>
                  <li
                    className={`${
                      project === 1
                        ? "bg-[#ffffff] border-4 border-[#bb31b9] w-4 h-4 rounded-full"
                        : "bg-[#ffffff7c] w-4 h-4 rounded-full"
                    }`}
                    onClick={() => setProject(1)}
                  ></li>
                  <li
                    className={`${
                      project === 2
                        ? "bg-[#ffffff] border-4 border-[#4bc6ff] w-4 h-4 rounded-full"
                        : "bg-[#ffffff7c] w-4 h-4 rounded-full"
                    }`}
                    onClick={() => setProject(2)}
                  ></li>
                  <li
                    className={`${
                      project === 3
                        ? "bg-[#ffffff] border-4 border-[#ff2b72] w-4 h-4 rounded-full"
                        : "bg-[#ffffff7c] w-4 h-4 rounded-full"
                    }`}
                    onClick={() => setProject(3)}
                  ></li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProjectsSection;
