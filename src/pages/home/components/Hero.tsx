import React from "react";
import { DownloadButton, LogoIcon } from "../../../assets";

const Hero = () => {
  return (
    <div className=" flex flex-col items-center justify-center lg:justify-normal content-center my-20">
      <div>
        <a href="/">
          <img
            className="mx-auto w-[100px] lg:w-[166px] mb-14 lg:mb-36"
            src={LogoIcon}
            alt=""
          />
        </a>
      </div>
      <div className="max-w-4xl text-center mx-auto ">
        <h1 className=" font-medium text-white text-4xl md:text-5xl lg:text-6xl">
          Stick to your budget with Chopmoney budgeting.
        </h1>
      </div>

      <div className="mt-5 max-w-2xl text-center mx-auto">
        <p className="text-[16px] lg:text-[20px] text-white">
          The only budgeting app designed exclusively for Ghanaians, powered by{" "}
          <span className="text-[#ECEC0B]"> mobile money technology.</span>
        </p>
      </div>

      <div className="mt-8 mb-14 lg:mb-36 flex justify-center">
        <img className="w-56 md:w-64 lg:w-full" src={DownloadButton} alt="" />
      </div>
    </div>
  );
};

export default Hero;
