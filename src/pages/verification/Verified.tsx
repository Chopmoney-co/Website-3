import React, { useEffect } from "react";
import Carousel from "../home/components/Carousel";
import { Player } from "@lottiefiles/react-lottie-player";
import { LogoIcon, VerifiedGif } from "../../assets";
import { useParams } from "react-router-dom";
import { useEmailVerifyMutation } from "../../services/email-service";
import Loader from "./components/Loader";

const Verified = () => {
  const { userId, token } = useParams();
  const [emailVerify, { isLoading, isSuccess, isError }] =
    useEmailVerifyMutation();

  useEffect(() => {
    if (userId && token) {
      emailVerify({ userId, token });
    }
  }, [userId, token, emailVerify]);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div>Verification failed. Please try again.</div>;
  }
  if (isSuccess) {
    return (
      <div>
        <div className="relative overflow-hidden bg-[#1F1F1F]">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" flex flex-col items-center justify-center lg:justify-normal content-center mt-20">
              <div>
                <a href="/">
                  <img
                    className="mx-auto w-[100px] lg:w-[166px] mb-16 "
                    src={LogoIcon}
                    alt=""
                  />
                </a>
              </div>
              <div className="mb-16">
                <Player
                  src={VerifiedGif}
                  className="player  w-32"
                  loop
                  autoplay
                />
              </div>
              <div className="max-w-4xl text-center mx-auto ">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="500"
                  className=" font-medium text-white text-4xl md:text-5xl lg:text-6xl"
                >
                  Verification Successful!
                </h1>
              </div>

              <div className="mt-5 max-w-2xl text-center mx-auto">
                <p
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  className="text-[16px] lg:text-[20px] text-white"
                >
                  Welcome to the only budgeting app designed exclusively for
                  Ghanaians, powered by
                  <span className="text-[#ECEC0B]"> mobile money</span>.
                </p>
              </div>

              <div className="mt-8 mb-14 lg:mb-28 flex justify-center">
                <a
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  data-aos-duration="1500"
                  href="https://onelink.to/gx8jhf"
                  className=" px-6 py-3 md:px-10 md:py-5 relative text-xl rounded-full group overflow-hidden font-medium bg-transparent text-white inline-block border-[1px]  border-white hover:border-black"
                >
                  <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#ECEC0B] group-hover:h-full opacity-90"></span>
                  <span className="relative group-hover:text-black">
                    Open Chopmoney
                  </span>
                </a>
              </div>
            </div>

            <Carousel />
          </div>
        </div>
      </div>
    );
  }
  return null; // Return null while the verification request is being made
};
export default Verified;
