import React from "react";
import { Bullet1, Bullet2, Bullet3, PhoneImage } from "../../../assets";

const Steps = () => {
  const steps = [
    {
      image: Bullet1,
      title: "First, get the app, obviously 🙄.",
      description:
        "Download and sign up on Chopmoney with your mobile money number.",
    },
    {
      image: Bullet2,
      title: "Tap ‘Create a budget’",
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
        <p
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="500"
          className="text-white text-center lg:text-left text-2xl"
        >
          Create a budget in three easy steps.
        </p>
      </div>
      <div className="grid gap-2 lg:grid-cols-2 my-auto sm:mx-auto">
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
          className="bg-[#2C2C2C] h-[440px] hover:bg-[#373737] m-2 lg:mr-0 rounded-xl mt-auto relative overflow-hidden"
        >
          <img
            className="absolute bottom-0 left-0 right-0 mx-auto translate-y-10 w-[23rem] transition duration-500 ease-in-out hover:translate-y-0 hover:transition hover:duration-500  hover:ease-in-out"
            src={PhoneImage}
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center">
          {steps.map((step, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              data-aos-duration="500"
              key={index}
              className="flex p-8 items-center rounded-xl m-2 bg-[#2d2d2d] hover:bg-[#373737]"
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
