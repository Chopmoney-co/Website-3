import React from "react";
import { LogoIcon } from "../assets";

function TermsofUse() {
  return (
    <div className="bg-[#2c2c2c]">
      <section className="w-full px-4 py-24 mx-auto max-w-4xl">
        <a href="/">
          <img className="mb-16" src={LogoIcon} alt="" />
        </a>
        <div className="flex flex-col ">
          <div>
            <h1 className="mt-12 mb-8 text-xl font-bold leading-snug tracking-tight text-[#ECEC0B] md:text-5xl">
              Terms of Use:
            </h1>
            <h2 className="mb-2 text-xl font-semibold leading-snug tracking-tight text-[#ECEC0B] md:text-2xl">
              By using our mobile app, you agree to the following terms:
            </h2>
            <ul className="list-disc">
              <li className="mb-4 text-base font-normal text-white">
                You are responsible for maintaining the confidentiality of your
                account and password.
              </li>
              <li className="mb-4 text-base font-normal text-white">
                You are responsible for all activities that occur under your
                account
              </li>
              <li className="mb-4 text-base font-normal text-white">
                You agree to provide accurate and complete information when
                creating an account You are responsible for maintaining the
                confidentiality of your account and password.
              </li>
              <li className="mb-4 text-base font-normal text-white">
                You agree to use our app only for lawful purposes and in
                accordance with these terms of use.
              </li>
              <li className="mb-4 text-base font-normal text-white">
                You agree to not use our app to engage in any illegal or
                fraudulent activities.
              </li>
              <li className="mb-4 text-base font-normal text-white">
                You agree to indemnify and hold harmless Chopmoney and its
                affiliates, officers, agents, and employees from any claim or
                demand, including reasonable attorneys' fees, made by any third
                party due to or arising out of your use of our app.
              </li>
              <li className="mb-4 text-base font-normal text-white">
                We reserve the right to terminate your account and access to our
                app if you violate these terms of use.
              </li>
              <li className="mb-4 text-base font-normal text-white">
                We reserve the right to make changes to these terms of use at
                any time.
              </li>
              <li className="mb-4 text-base font-normal text-white">
                By using Chopmoney, you acknowledge that you have read and
                understood this Privacy Policy and our Terms of Use, and you
                agree to be bound by them.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsofUse;
