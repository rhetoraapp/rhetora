import React from "react";
import "../styles/EarlyAccessForm.css";
import HubspotForm from "react-hubspot-form";
import HeroSectionForm from "./forms/HeroSectionForm";


const HeroSection = () => {
  return (
    <div>
      <div className="container max-w-5xl pt-24 md:pt-16 pb-16 mx-auto flex flex-col sm:flex md:flex-row items-center justify-between gap-8 w-100">
        <div className="font-inter w-full text-start md:w-3/6">
          <h2 className="text-4xl lg:text-5xl font-bold text-main">
            Eliminate Cold Calling <br />
            Anxiety
          </h2>
          <p className="text-start font-normal text-lg text-subtext mt-3">
            Empower your salesforce with the confidence, knowledge, and skills
            using the first AI cold calling coach for unlimited mock calls. Ramp
            sales reps in days, instead of weeks without burning your lead list.
          </p>
          <HeroSectionForm />
          {/* <div id="hero-form-container">
            <button style={{ paddingTop: "13px" }} id="hero-form-button">
              Early Access
            </button>
            <input
              type="email"
              id="hero-form-input"
              placeholder="name@rhetora.cc"
              required
            />
          </div> */}
          {/* <div className="flex items-center gap-2 mt-5 border border-gray-700 rounded-full p-1 w-full md:w-3/4 lg:w-full">
            <button
              style={{ paddingTop: "13px" }}
              className="w-48 md:w-60 bg-minor uppercase pb-2 px-3 rounded-full text-white text-sm lg:text-lg font-medium"
            >
              Early Access
            </button>
            <input
              type="email"
              id="email"
              className="border-none w-full placeholder:text-start placeholder:text-lg text-gray-900 text-lg rounded-full focus:ring-transparent block p-2.5"
              placeholder="name@rhetora.cc"
              required
            />
          </div> */}
        </div>
        <div className="w-full md:w-3/6 lg:pb-32">
          <img
            src={require("../assets/hero-image.svg").default}
            alt="hero"
            className="float-right"
          />
        </div>
      </div>
      <div className="-mt-4 md:py-10 mx-20">
        <div className="flex flex-col text-sm font-semibold items-center uppercase">
          <p style={{ color: "#7C828D" }}>As seen on</p>
          <div className="my-10 grid grid-cols-3 md:grid-cols-3 gap-8">
            <div className="flex justify-center">
              <a href="https://www.vernamagazine.com/accelerate-your-startups-growth-with-rhetoras-ai-powered-sales-training/"><img
                src={require("../assets/disrupt.svg").default}
                alt="disrupt"
                className="m-0"
              /></a>
            </div>
            <div className="flex justify-center">
            <a href="https://timebusinessnews.com/experience-the-future-of-sales-training-with-rhetora-the-ai-powered-startup-based-in-the-uae/"><img
                src={require("../assets/timesbusinessnews.svg").default}
                alt="timesbusinessnews"
                className="m-0"
              /></a>
            </div>
            <div className="flex justify-center">
            <a href="https://www.digitaljournal.com/pr/join-the-startup-revolution-with-rhetoras-ai-driven-sales-training-platform-based-in-the-uae"><img
                src={require("../assets/digitaljournal.svg").default}
                alt="digitaljournal"
                className="m-0"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
