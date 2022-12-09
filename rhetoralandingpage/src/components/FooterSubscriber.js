import React from "react";

const FooterSubscriber = () => {
  return (
    <div className="flex justify-center md:absolute w-full z-20">
      <div className="-mb-28 bg-main w-full md:w-1/2 md:rounded-lg px-10 py-4">
        <div className="md:flex md:flex-col items-center justify-between gap-8">
          <p className="text-2xl text-white font-anek">
            Ready to explode your response rates?
          </p>
          {/* CTA */}
          <div className="mt-5 border border-white w-full md:w-3/4 rounded-full">
            <div className="m-1 flex items-center gap-2 border border-white rounded-full bg-white w-98/100">
              <button className="w-48 md:w-60 bg-minor uppercase py-2 px-3 rounded-full text-white text-xs md:text-lg font-medium">
                Early Access
              </button>
              <input
                type="email"
                id="email"
                className="border-none placeholder:text-base p-0 w-full placeholder:text-start text-gray-900 text-sm rounded-lg focus:ring-transparent block p-2.5"
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
