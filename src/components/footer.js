import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className="relative mt-28 md:mt-56 lg:mt-80">
      <footer className="md:px-16 md:py-8 relative z-10">
        <div className="hidden lg:grid grid-cols-3">
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
              High preforming sales community
            </p>
          </div>
        </div>
        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:gap-8 sm:justify-around">
          <a href="/" className="hidden md:flex items-center mb-4 sm:mb-0">
            <img
              src={require("../assets/logo-white.svg").default}
              className="mr-3 h-16 mb-0"
              alt="rhetora Logo"
            />
            <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">
              rhetora
            </span>
          </a>
          <ul className="flex font-anek my-16 md:my-6  flex-wrap items-center justify-center  text-sm text-gray-500 dark:text-gray-400">
            <li className="">
              <Link
                to="/"
                className="mx-4 text-white font-anek  hover:underline md:mr-6 "
              >
                Home
              </Link>
            </li>
            <li className="border-l border-white">
              <Link
                to="/our-story"
                className="mx-4 text-white font-anek  hover:underline md:mr-6 "
              >
                Our Story
              </Link>
            </li>
            <li className="border-l border-white">
              <Link
                to="/community"
                className="mx-4 text-white font-anek  hover:underline md:mr-6"
              >
                Community
              </Link>
            </li>
            <li className="border-l border-white">
              <Link
                to="/contact-us"
                className="mx-4 text-white font-anek  hover:underline md:mr-6 "
              >
                Contact
              </Link>
            </li>
            <li className="border-l border-white">
              <Link
                to="/join-waitlist"
                className="mx-4 text-white font-anek hover:underline"
              >
                Join Waitlist
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-center gap-4 md:gap-6">
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
        <span className="mt-4 block text-center text-sm text-white sm:text-center">
          © 2022
          <a href="/" className="ml-1 text-white hover:underline">
            rhetora
          </a>
          . All Rights Reserved.
        </span>
      </footer>
      <img
        src={require("../assets/bg-footer.svg").default}
        alt="footer"
        className="hidden md:block absolute bottom-0 z-0 mb-0"
      />
      <div className="md:hidden bg-minor h-full w-full absolute bottom-0 z-0"></div>
    </div>
  );
};

export default footer;
