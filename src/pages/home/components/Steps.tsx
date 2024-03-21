import React from "react";
import { Bullet1, Bullet2, Bullet3, PhoneImage } from "../../../assets";

const Steps = () => {
  const steps = [
    {
      image: Bullet1,
      title: "First, get the app, obviously.",
      description:
        "Download and sign up on Chopmoney with your mobile money number.",
    },
    {
      image: Bullet2,
      title: "Tap create a budget.",
      description:
        "Enter how much you want to spend daily over a 5 - 30 day period",
    },
    {
      image: Bullet3,
      title: "Top up from mobile money (any network)",
      description: `Tap "top up" to successfully create your budget by topping up the total from your mobile money wallet.`,
    },
  ];
  return (
    <div>
      <div className="md:mx-auto mt-12 mb-6">
        <p className="text-white md:text-2xl">
          Create a budget in three easy steps.
        </p>
      </div>
      <div className="grid gap-2 lg:grid-cols-2 sm:mx-auto">
        <div className="bg-[#2C2C2C] rounded-xl mt-auto pt-10">
          <img
            className="w-80 pt-5 mx-auto  shadow-lg"
            src={PhoneImage}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex p-8 items-center rounded-xl m-2 bg-[#2d2d2d]"
            >
              <div className="mr-4">
                <div className="flex items-center justify-center">
                  <img className="w-16" src={step.image} alt="" />
                </div>
              </div>
              <div className="max-w-sm">
                <h5 className=" font-bold  text-[#FDFE0C]">{step.title}</h5>
                <p className="font-medium  text-white">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
