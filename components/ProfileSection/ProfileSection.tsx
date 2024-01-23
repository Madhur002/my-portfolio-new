"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import '@fontsource/pacifico';
import { TbScribble } from 'react-icons/tb';
import { BsChevronDown } from 'react-icons/bs';

const ProfileSection = () => {

  return (
    <>
      <div
      id="profile-section"
        className={`flex h-screen justify-center items-center flex-col pic-div w-full`}
      >
        <div className="flex-grow flex mt-8 justify-between items-center w-full px-24">
        <div className={`text-[52px] h-full gap-8 mt-40 flex flex-col w-full justify-start pl-28 text-[#a63d95] font-bold `}>
          <p>It&apos;s Me Madhur</p>
          <div className="flex gap-6">
            <TbScribble className="text-[50px]"/>
          <p className="text-[20px] w-[70%] heading1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aliquid harum ab consectetur? Minus laborum eos quasi hic, vitae quo incidunt vel iste sapiente sequi, similique aliquam libero minima officiis alias nesciunt porro veritatis magni repellendus unde. Saepe iusto deserunt aliquam architecto laborum, dolorum aliquid a necessitatibus vitae illo labore odit dignissimos doloremque quidem reprehenderit ex quibusdam suscipit hic! Iure ipsum.</p>
          </div>
        </div>
          <div className={`mt-4`}>
            <Image
              className="bg-slate-600 rounded-full border-2 home-pic border-[#212121]"
              src="/myPic.png"
              alt=""
              height={450}
              width={450}
            />
          </div>
        </div>
        <div className="text-[#a63d95] flex justify-center items-center w-full"><BsChevronDown className="text-[30px] mb-8 font-bold"/></div>
      </div>
    </>
  );
};

export default ProfileSection;
