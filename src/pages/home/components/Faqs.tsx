import React, { useState } from "react";

const Faqs = () => {
  const [faq, setFaq] = useState([
    {
      question: "What is a Chopmoney?",
      answer:
        "Chopmoney is a budgeting app that helps you to stick to your budget by allowing you to set daily spend limits on your expenses.",
      open: true,
    },
    {
      question: "How do I get started with Chopmoney?",
      answer:
        "Simply download the Chopmoney app from Google Play or the App Store, sign up using your mobile money number, and follow the prompts to set up your account.",
      open: false,
    },
    {
      question: "Can I link Chopmoney to my bank account?",
      answer:
        "Chopmoney is available for all mobile money networks. Unfortunately, we do not support banks.",
      open: false,
    },
    {
      question: "Is Chopmoney free to use?",
      answer:
        "Yes, Chopmoney is free to download and use. However, there may be charges associated with mobile money transactions, depending on your mobile network provider.",
      open: false,
    },
    {
      question: "How do I create a budget with Chopmoney?",
      answer:
        "To create a budget, enter your daily spending limit, specify the duration of your budget, and top up the total amount from your mobile money wallet.",
      open: false,
    },
    {
      question: "Can I adjust my budget after I've created it?",
      answer:
        "No, you cannot adjust a budget once it's been created. However, you have the option to create multiple budgets with different parameters to suit your needs. If you need to make changes, you can create a new budget with the updated settings.",
      open: false,
    },
    {
      question: "How do I know when my budget is ready to cash out?",
      answer:
        "Chopmoney will send you notifications when your budget is ready to cash out, based on your specified duration and spending limits.",
      open: false,
    },
    {
      question: "Is my financial information secure with Chopmoney?",
      answer:
        "Yes, Chopmoney takes security seriously and uses encryption and other measures to protect your financial data.",
      open: false,
    },
  ]);

  const toggleFaq = (index) => {
    setFaq(
      faq.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }

        return item;
      })
    );
  };

  return (
    <section className="py-10 sm:py-16  lg:py-24">
      <div className="mx-auto ">
        <div className=" mx-auto ">
          <h2
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1000"
            className="text-2xl font-medium  text-white"
          >
            We get asked these a lot!
          </h2>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="1500"
          data-aos-duration="1500"
          className="bg-[#2c2c2c] px-2 lg:px-6 mx-auto mt-5 rounded-xl"
        >
          {faq.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-200 pt-6 pb-8 ${
                index === faq.length - 1
                  ? ""
                  : "border-[#515151] border-b-[1px]"
              } cursor-pointer `}
            >
              <button
                type="button"
                className="flex items-center justify-between w-full "
                onClick={() => toggleFaq(index)}
              >
                <span className="flex text-left text-md font-bold text-[#FDF70C]">
                  {" "}
                  {item.question}{" "}
                </span>

                <svg
                  className={`w-6 h-6 text-[#515151] ${
                    item.open ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className={`${item.open ? "block" : "hidden"} text-white `}>
                <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
