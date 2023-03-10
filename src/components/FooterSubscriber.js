import React from "react";
import bannerReqAccess from "../assets/banner-req-access.svg";
import "../styles/EarlyAccessForm.css";
import WaitlistForm from "./forms/WaitlistForm";

const FooterSubscriber = ({ title }) => {
  return (
    <div className="flex justify-center md:absolute w-full">
      <div
        className="-mb-28 bg-main w-full md:w-5/6 lg:w-4/6 rounded-none md:rounded-lg px-10 py-16"
        style={{ backgroundImage: `url(${bannerReqAccess})` }}
      >
        <div className="sm:w-2/3 md:w-full mx-auto flex flex-col items-center justify-between gap-8">
          <p className="text-2xl text-white font-anek">{title}</p>
          {/* CTA */}
          <div className="mt-4 md:mt-0 w-full md:w-3/4 rounded-full">
            <WaitlistForm color={"bg-[#050038]"}/>
          </div>
          {/* CTA */}
        </div>
      </div>
    </div>
  );
};

export default FooterSubscriber;
