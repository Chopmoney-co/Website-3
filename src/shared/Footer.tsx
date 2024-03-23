import React from "react";
import { AppStore, LogoIcon, PlayStore } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[85rem] md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 lg:grid-cols-2">
          <div className="">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img className="mx-auto w-[100px]" src={LogoIcon} alt="" />
            </a>
            <div className="flex flex-row sm:items-center sm:gap-y-0 gap-x-4">
              <a
                className="font-normal text-white hover:text-[#ECEC0B]"
                href="https://onelink.to/gx8jhf"
              >
                Download Now
              </a>
              <a
                className="font-normal text-white hover:text-[#ECEC0B]"
                href="https://chopmoneyco.wordpress.com/"
              >
                Blog
              </a>
            </div>
            <div className="flex flex-row sm:gap-y-0 gap-x-4">
              <a
                className="font-normal text-white hover:text-[#ECEC0B]"
                href="/about-us"
              >
                About Us
              </a>
              <Link
                className="font-normal text-white hover:text-[#ECEC0B]"
                to="/privacy-policy"
              >
                Privacy Policy
              </Link>
              <Link
                className="font-normal text-white hover:text-[#ECEC0B]"
                to="/term-of-use"
              >
                Terms of Use
              </Link>
              <Link
                className="font-normal text-white hover:text-[#ECEC0B]"
                to="/contact-us"
              >
                Contact Us
              </Link>
            </div>
            <p className="mt-4  text-white">
              © 2021 Chopmoney. All rights reserved
            </p>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 fill-white"
                >
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg
                  viewBox="0 0 30 30"
                  fill="currentColor"
                  className="h-6 fill-white"
                >
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 fill-white"
                >
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-xs lg:ml-auto">
            <p className="mt-4 text-lg text-white">Get the app</p>
            <div className="pt-4">
              <a href="https://apps.apple.com/us/app/chopmoney/id6444722445">
                <img className="mb-2" src={AppStore} alt="" />
              </a>
              <a
                className="my-2"
                href="https://play.google.com/store/apps/details?id=co.chopmoney.app&pli=1"
              >
                <img src={PlayStore} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
