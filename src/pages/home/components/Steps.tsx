import React from "react";
import { Bullet1, Bullet2, Bullet3 } from "../../../assets";

const Steps = () => {
  const steps = [
    {
      image: Bullet1,
      description:
        "Download and sign up on Chopmoney with your mobile money number.",
    },
    {
      image: Bullet2,
      description:
        "Tap create a budget, enter how much you want to spend daily over a 5 - 30 day period",
    },
    {
      image: Bullet3,
      description:
        "Tap top up to successfully create your budget by topping up the total from your mobile money wallet.",
    },
  ];
  return (
    <div>
      <div className="md:mx-auto mt-12 mb-6">
        <p className="text-white md:text-2xl">
          Create a budget in three easy steps.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-cover w-full h-full col-span-2 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex p-4 items-center rounded-xl m-2 bg-[#2d2d2d]"
            >
              <div className="mr-4">
                <div className="flex items-center justify-center">
                  <img src={step.image} alt="" />
                </div>
              </div>
              <div>
                <h6 className=" font-medium leading-5 text-white">
                  {step.description}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
