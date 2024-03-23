import React from "react";
import { LogoIcon } from "../assets";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#1F1F1F]">
      <section className="w-full px-4 py-24 mx-auto max-w-4xl">
        <a href="/">
          <img className="mb-16" src={LogoIcon} alt="" />
        </a>
        <div className="flex flex-col ">
          <div>
            <h1 className="mb-2 text-xl font-bold leading-snug tracking-tight text-[#ECEC0B] md:text-5xl">
              Privacy Policy
            </h1>
            <p className="my-8 text-base font-normal text-white">
              At Chopmoney, we are committed to protecting the privacy of our
              users. This Privacy Policy explains how we collect, use, disclose,
              and protect personal information through our mobile app and
              website.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold leading-snug tracking-tight text-[#ECEC0B] md:text-2xl">
              Collection of Personal Information:
            </h2>
            <p className="mb-4 text-base font-normal text-white">
              We collect personal information that you voluntarily provide to us
              when you create an account, such as your name, email address, and
              phone number. In addition, we may collect information about your
              location, and device type when you use our app.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold leading-snug tracking-tight text-[#ECEC0B] md:text-2xl">
              Use of Personal Information:
            </h2>
            <p className="mb-4 text-base font-normal text-white">
              We use personal information to provide and improve our services,
              as well as to communicate with you. We may also use your
              information to send you promotional materials or to send you
              updates on our app. We may also use your information for research
              and analysis purposes, to improve our products and services and to
              better understand our users’ needs.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold leading-snug tracking-tight text-[#ECEC0B] md:text-2xl">
              Disclosure of Personal Information:
            </h2>
            <p className="mb-4 text-base font-normal text-white">
              We will not share your personal information with third parties
              without your consent, except as required by law or as described in
              this Privacy Policy. We may share your personal information with
              our affiliates and business partners, but only for the purpose of
              providing our services to you. We may also share your personal
              information with third-party service providers, such as payment
              processors, but only to the extent necessary to perform their
              services.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold leading-snug tracking-tight text-[#ECEC0B] md:text-2xl">
              Security of Personal Information:
            </h2>
            <p className="mb-4 text-base font-normal text-white">
              We take the security of your personal information seriously and
              take appropriate measures to protect it from unauthorized access
              or disclosure. We have implemented appropriate technical and
              organizational measures to protect your personal information from
              loss, theft, unauthorized access, and unauthorized alteration.
              However, please note that no method of transmitting or storing
              data is completely secure, and we cannot guarantee the absolute
              security of your personal information
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
