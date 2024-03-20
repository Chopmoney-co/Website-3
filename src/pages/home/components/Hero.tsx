import React from "react";
import { DownloadButton } from "../../../assets";

const Hero = () => {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center content-center">
      <div className="max-w-4xl text-center mx-auto ">
        <h1 className="leading-normal font-medium text-white text-4xl md:text-5xl lg:text-6xl">
          Stick to your budget with Chopmoney budgeting.
        </h1>
      </div>

      <div className="mt-5 max-w-2xl text-center mx-auto">
        <p className="text-[16px] lg:text-[20px] text-white">
          The only budgeting app designed exclusively for Ghanaians, powered by{" "}
          <span className="text-[#ECEC0B]"> mobile money technology.</span>
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <img className="w-48 md:w-56 lg:w-full" src={DownloadButton} alt="" />
      </div>
    </div>
  );
};

export default Hero;
