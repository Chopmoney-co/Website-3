import React from "react";
import { Bannerimg } from "../../../assets";

const Banner = () => {
  return (
    <div>
      <div className="px-4 mx-auto rounded-xl bg-[#FF55C4] sm:px-6 lg:px-8 ">
        <div className=" py-8 lg:py-0">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
            <div className="lg:max-w-sm text-center md:py-10  md:text-left">
              <blockquote>
                <p className="text-3xl  font-medium text-gray-900">
                  Create a budget in three easy steps.
                </p>
              </blockquote>
              <a
                href="https://onelink.to/gx8jhf"
                className="inline-flex mt-8  items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-black bg-[#FDF70C] border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Download for Android & iOS
              </a>
            </div>

            <div className="relative my-auto">
              <img className="my-auto" src={Bannerimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
