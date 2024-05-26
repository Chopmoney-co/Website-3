import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { NotFound } from "../assets";

const PageNotFound = () => {
  return (
    <div className=" h-[100vh] flex justify-center items-center mx-auto">
      <Player src={NotFound} className="player w-96" loop autoplay />
    </div>
  );
};

export default PageNotFound;
