import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { LogoIcon } from "../assets";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-[#1f1f1f] relative">
        <section className="h-[100vh]  flex items-center justify-center">
          <a href="/" className="absolute inset-x-0 top-10 h-16 ">
            <img className="mx-auto h-20" src={LogoIcon} alt="" />
          </a>

          <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center 2xl:p-0 md:py-32 md:px-10 lg:px-32 xl:max-w-4xl">
            <h1 className="text-4xl text-[#ECEC08] font-bold leading-none sm:text-5xl 2xl:text-6xl">
              The Chopmoney story.
            </h1>
            <p className="my-2 sm:my-4 text-[#ECEC08] text-sm font-bold 2xl:text-base">
              Looking for a smart and easy way to stick to your budget?
            </p>
            <p className="my-2 sm:my-4 text-sm text-white 2xl:text-base">
              Chopmoney is the perfect solution. With our daily automatic
              payouts, you can save up and spend wisely - all while living your
              best life. Best of all, it's free to use!
            </p>
            <p className="my-2 sm:my-4 text-sm text-white 2xl:text-base">
              As a daring problem identified, people generally want to have more
              money aka become rich. Books on financial knowledge all say
              <span className="font-bold">
                “Create a budget and stick to it”{" "}
              </span>{" "}
              as if it’s that easy, we realized the problem does not lie with
              the budget creation but rather the habit of sticking to it and
              that led us to Chopmoney.
            </p>
            <div className="flex flex-row flex-wrap justify-center">
              <a
                href="https://apps.apple.com/app/chopmoney/id6444722445"
                className="px-8 py-4 m-2 text-xs font-semibold rounded bg-[#2c2c2c] text-white hover:scale-110 duration-300 transform"
              >
                Apple Store
                <AiFillApple className="text-xl inline m-auto ml-4" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=co.chopmoney.app"
                className="px-8 py-4 m-2 text-xs font-semibold border border-white rounded text-white hover:scale-110 duration-300 transform"
              >
                Play Store
                <FaGooglePlay className="text-sm inline m-auto ml-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
