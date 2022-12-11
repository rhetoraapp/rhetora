import React from "react";
import bannerReqAccess from "../assets/banner-req-access.svg";

const FooterSubscriber = () => {
  return (
    <div className="flex justify-center md:absolute w-full z-20">
      <div
        className="-mb-28 bg-main w-full md:w-3/4 lg:w-4/6 rounded-lg md:rounded-lg px-10 py-16"
        style={{ backgroundImage: `url(${bannerReqAccess})` }}
      >
        <div className="sm:w-2/3 md:w-full mx-auto flex flex-col items-center justify-between gap-8">
          <p className="text-2xl text-white font-anek">
            If you made it this far, we must be striking a chord.
          </p>
          {/* CTA */}
          <div className="mt-4 md:mt-0 border border-white w-full md:w-3/4 rounded-full">
            <div className="m-1 flex items-center gap-2 border border-white rounded-full bg-white w-98/100">
              <button
                style={{ paddingTop: "13px" }}
                className="w-48 md:w-60 bg-main uppercase pb-2 px-3 rounded-full text-white text-xs md:text-lg font-medium"
              >
                Early Access
              </button>
              <input
                type="email"
                id="email"
                className="border-none placeholder:text-base w-full placeholder:text-start text-gray-900 text-sm rounded-lg focus:ring-transparent block p-2.5"
                placeholder="name@rhetora.cc"
                required
              />
            </div>
          </div>
          {/* CTA */}
        </div>
      </div>
    </div>
  );
};

export default FooterSubscriber;
