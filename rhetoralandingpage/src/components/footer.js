import React from "react";

const footer = () => {
  return (
    <div className="relative mt-28 md:mt-64">
      <footer class="md:px-16 md:py-8 relative z-10">
        <div className="hidden md:grid grid-cols-3">
          <div className="flex items-center">
            <img
              src={require("../assets/24-hour-support.svg").default}
              alt="24-hours-support"
            />
            <p className="ml-2 font-anek font-medium text-white text-xl">
              24 hour support
            </p>
          </div>
          <div className="flex items-center">
            <img
              src={require("../assets/security.svg").default}
              alt="Serious about security & privacy"
            />
            <p className="ml-2 font-anek font-medium text-white text-xl">
              Serious about security & privacy
            </p>
          </div>
          <div className="flex items-center">
            <img
              src={require("../assets/meter.svg").default}
              alt="24-hours-support"
            />
            <p className="ml-2 font-anek font-medium text-white text-xl">
              Highest levels of uptime the last 12 months
            </p>
          </div>
        </div>
        <hr class="my-6 border-white sm:mx-auto lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="/" class="hidden md:flex items-center mb-4 sm:mb-0">
            <img
              src={require("../assets/logo-white.svg").default}
              class="mr-3 h-16 mb-0"
              alt="rhetora Logo"
            />
            <span class="self-center text-white text-2xl font-semibold whitespace-nowrap">
              rhetora
            </span>
          </a>
          <ul class="flex font-anek flex-wrap items-center justify-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className="">
              <a
                href="#"
                class="mx-4 text-white font-anek  hover:underline md:mr-6 "
              >
                Home
              </a>
            </li>
            <li className="border-l border-white">
              <a
                href="#"
                class="mx-4 text-white font-anek  hover:underline md:mr-6 "
              >
                Our Story
              </a>
            </li>
            <li className="border-l border-white">
              <a
                href="#"
                class="mx-4 text-white font-anek  hover:underline md:mr-6"
              >
                Community
              </a>
            </li>
            <li className="border-l border-white">
              <a
                href="#"
                class="mx-4 text-white font-anek  hover:underline md:mr-6 "
              >
                Contact
              </a>
            </li>
            <li className="border-l border-white">
              <a href="#" class="mx-4 text-white font-anek hover:underline">
                Join Waitlist
              </a>
            </li>
          </ul>
          <div className="grid grid-cols-4 md:gap-6">
            <div className="flex justify-center">
              <img
                src={require("../assets/linked-in-whote.svg").default}
                className="mb-0"
                alt="icons"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={require("../assets/facebook-white.svg").default}
                className="mb-0"
                alt="icons"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={require("../assets/insta-white.svg").default}
                className="mb-0"
                alt="icons"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={require("../assets/twitter-white.svg").default}
                className="mb-0"
                alt="icons"
              />
            </div>
          </div>
        </div>
        <span class="block text-center text-sm text-white sm:text-center">
          © 2022
          <a href="/" class="ml-1 text-white hover:underline">
            rhetora
          </a>
          . All Rights Reserved.
        </span>
      </footer>
      <img
        src={require("../assets/bg-footer.svg").default}
        alt="footer"
        className="hidden md:block absolute bottom-0 z-0"
      />
      <div className="md:hidden bg-minor h-full w-full absolute bottom-0 z-0"></div>
    </div>
  );
};

export default footer;
