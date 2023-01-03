import React, { useState, useEffect, useRef } from "react";
import HowItWorksMobile from "./HowItWorksMobile";
import bannerReqAccess from "../assets/banner-req-access-2.svg";
import { Tabs } from "flowbite-react";
import "../styles/tabStyles.css";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);
  const tabsRef = useRef(null);
  const tabsRef2 = useRef(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div>
      <div
        className="flex flex-col items-center pb-4"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <p className="font-anek text-minor text-4xl font-semibold py-12">
          How rhetora Works
        </p>
        {/* Tabs section */}
        <div className="px-4 w-full">
          <div
            className="hidden md:block mb-20 bg-white w-full md:p-6 lg:p-12"
            style={{ borderRadius: "60px" }}
          >
            <div className="w-full rounded-2xl md:px-6 lg:px-12">
              <Tabs.Group
                aria-label="how rhetora works tabs 2 flex-nowrap"
                id="how-it-works-1"
                style="underline"
                ref={tabsRef}
                className="w-full border-none justify-center"
                onActiveTabChange={(tab) => setActiveTab(tab)}
              >
                <Tabs.Item active title="UNLIMITED MOCK CALLS">
                  <div className="container lg:px-4 xl:px-6 gap-8 pt-16 mx-auto flex flex-col-reverse md:flex md:flex-row items-center justify-between w-100">
                    <div className="font-inter w-full text-start md:w-3/6">
                      <p className="font-anek text-base lg:text-lg font-semibold uppercase text-minor">
                        Unlimited Mock Calls
                      </p>
                      <p className="font-anek text-4xl lg:text-5xl font-bold text-main lg:mt-4">
                        Dont Limit Yourself
                      </p>
                      <div className="mt-6">
                        <ul className="space-y-4 max-w-lg list-disc list-inside text-gray-500 dark:text-gray-400">
                          <li>
                            Managers tend to have only a couple of minutes a day
                            to address important matters, even less time to be
                            training their team.
                          </li>
                          <li>
                            Rhetora is patient. Allow sales reps to practice
                            cold calling offline in a stress-free enviroment
                            proven to best method to introducing new scripts and
                            roles.
                          </li>
                        </ul>
                      </div>
                      <div className="m-2 lg:m-4 border-l-4 border-minor p-1">
                        <p className="ml-4 text-xl lg:text-xl font-semibold font-anek text-subheading">
                          Train your team for the real world
                        </p>
                      </div>
                    </div>
                    <div className="w-full md:w-3/6">
                      <img
                        src={
                          require("../assets/unlimited mock calls.svg").default
                        }
                        alt="hero"
                        className="float-right"
                      />
                    </div>
                  </div>
                </Tabs.Item>
                <Tabs.Item
                  title="VISUALIZE TALK TRACK"
                  className="border-gray-300"
                >
                  <div className="container lg:px-4 xl:px-6  gap-8 pt-16 mx-auto flex flex-col-reverse md:flex md:flex-row items-center justify-between w-100">
                    <div className="font-inter w-full text-start md:w-3/6">
                      <p className="font-anek text-base lg:text-lg font-semibold uppercase text-minor">
                        VISUALIZE TALK TRACK
                      </p>
                      <p className="font-anek text-4xl lg:text-5xl font-bold text-main lg:mt-4">
                        Navigate Conversation
                      </p>
                      <div className="mt-6">
                        <ul className="space-y-4 max-w-lg list-disc list-inside text-gray-500 dark:text-gray-400">
                          <li>
                            Get comfortable navigating cold call conversations.
                            No more panic scrolling to find an objection
                            rebuttel.
                          </li>
                          <li>
                            Real-time call navigation with a visualized flow of
                            your call script. Have AI hand hold you all the way
                            to booking a meeting.
                          </li>
                        </ul>
                      </div>
                      <div className="m-2 lg:m-4 border-l-4 border-minor p-1">
                        <p className="ml-4 text-xl font-semibold font-anek text-subheading">
                          Never lose track of your call again.
                        </p>
                      </div>
                    </div>
                    <div className="w-full md:w-3/6">
                      <img
                        src={
                          require("../assets/visualize-talk-track.svg").default
                        }
                        alt="hero"
                        className="float-right"
                      />
                    </div>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="SCRIPT BUILDER">
                  <div className="container lg:px-4 xl:px-6  gap-8 pt-16 mx-auto flex flex-col-reverse md:flex md:flex-row items-center justify-between w-100">
                    <div className="font-inter w-full text-start md:w-3/6">
                      <p className="font-anek text-base lg:text-lg font-semibold uppercase text-minor">
                        SCRIPT BUILDER
                      </p>
                      <p className="font-anek text-4xl lg:text-5xl font-bold text-main lg:mt-4">
                        Tailor It. How You Desire It.
                      </p>
                      <div className="mt-6">
                        <ul className="space-y-4 max-w-lg list-disc list-inside text-gray-500 dark:text-gray-400">
                          <li>
                            Why practice generic and unrelated scripts? Most
                            reps don’t find their voice in cold calls. The
                            struggle ends now with rhetora.
                          </li>
                          <li>
                            Why practice generic and unrelated scripts? Most
                            reps don’t find their voice in cold calls. The
                            struggle ends now with rhetora.
                          </li>
                        </ul>
                      </div>
                      <div className="m-2 lg:m-4 border-l-4 border-minor p-1">
                        <p className="ml-4 text-xl font-semibold font-anek text-subheading">
                          Get it tailored or don’t wear it.
                        </p>
                      </div>
                    </div>
                    <div className="w-full md:w-3/6">
                      <img
                        src={require("../assets/script-builder.svg").default}
                        alt="hero"
                        className="float-right"
                      />
                    </div>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="AI SUGGESTIONS">
                  <div className="container lg:px-4 xl:px-6  gap-8 pt-16 mx-auto flex flex-col-reverse md:flex md:flex-row items-center justify-between w-100">
                    <div className="font-inter w-full text-start md:w-3/6">
                      <p className="font-anek text-base lg:text-lg font-semibold uppercase text-minor">
                        AI SUGGESTIONS
                      </p>
                      <p className="font-anek text-4xl lg:text-5xl font-bold text-main lg:mt-4">
                        Expert Recommendations
                      </p>
                      <div className="mt-6">
                        <ul className="space-y-4 max-w-lg list-disc list-inside text-gray-500 dark:text-gray-400">
                          <li>
                            60% of reps find objection handles from searching
                            the internet, leaving them with sub-par and
                            unrelated solutions.
                          </li>
                          <li>
                            Don’t think twice about finding a winning rebuttal,
                            have rhetora suggest the rebuttal with the highest
                            win rates.
                          </li>
                        </ul>
                      </div>
                      <div className="m-2 lg:m-4 border-l-4 border-minor p-1">
                        <p className="ml-4 text-xl font-semibold font-anek text-subheading">
                          Leaving you with time to do what you do best, selling.
                        </p>
                      </div>
                    </div>
                    <div className="w-full md:w-3/6">
                      <img
                        src={require("../assets/ai-suggestions.svg").default}
                        alt="hero"
                        className="float-right"
                      />
                    </div>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="ANALYTICS & INSIGHTS">
                  <div className="container lg:px-4 xl:px-6  gap-8 pt-16 mx-auto flex flex-col-reverse md:flex md:flex-row items-center justify-between w-100">
                    <div className="font-inter w-full text-start md:w-2/6">
                      <p className="font-anek text-base lg:text-lg font-semibold uppercase text-minor">
                        ANALYTICS & INSIGHTS
                      </p>
                      <p className="font-anek text-4xl lg:text-5xl font-bold text-main lg:mt-4">
                        An Insider’s View
                      </p>
                      <div className="mt-6">
                        <ul className="space-y-4 max-w-lg list-disc list-inside text-gray-500 dark:text-gray-400">
                          <li>
                            Managers must aquire the ability to lead and guide
                            their champions to the path of victory by making the
                            right decisions
                          </li>
                          <li>
                            Help your champions win more by learning who needs
                            coaching and what skills need to be developed based
                            on our insighs & analytics. Track quantiffiable
                            improvements over time, and prove the impact of your
                            programs
                          </li>
                        </ul>
                      </div>
                      <div className="m-2 lg:m-4 border-l-4 border-minor p-1">
                        <p className="ml-4 text-xl font-semibold font-anek text-subheading">
                          Reward your champions. Coach your champions. Cultivate
                          a winning sales team with data.
                        </p>
                      </div>
                    </div>
                    <div className="w-full md:w-4/6">
                      <img
                        src={
                          require("../assets/analytics-insights-hero.svg")
                            .default
                        }
                        alt="hero"
                        className="float-right"
                      />
                    </div>
                  </div>
                </Tabs.Item>
              </Tabs.Group>
            </div>
          </div>
        </div>
        {/* Mobile View */}
        <HowItWorksMobile />
        {/* Mobile View */}
        {/* Promotion banner */}
        <div
          className="hidden md:block -mb-28 bg-minorlight max-w-5xl rounded-lg px-10 py-16"
          style={{
            backgroundImage: `url(${bannerReqAccess})`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex items-center justify-between gap-16">
            <p className="text-2xl text-white font-anek">
              Ready to explode your response rates?
            </p>
            <button
              type="button"
              style={{ paddingTop: "13px" }}
              className="pb-2.5 px-5 mr-2 text-sm font-bold text-main focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-minor focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Request Access
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block p-4 mt-40 bg-white md:p-6 lg:p-20 flex flex-col items-center">
        {/* another tabs section */}
        <div className="w-full">
          <div
            className="hidden md:block mb-20 w-full md:p-6 lg:p-12"
            style={{ borderRadius: "60px", backgroundColor: "#f9f9f9" }}
          >
            <div className="w-full rounded-2xl">
              <Tabs.Group
                aria-label="how rhetora works tabs"
                id="how-it-works-2"
                style="underline"
                ref={tabsRef2}
                className="w-full border-none flex-nowrap"
                onActiveTabChange={(tab) => setActiveTab2(tab)}
              >
                <Tabs.Item title="SALES LEADER">
                  <div className="container gap-8 pt-8 mx-auto flex flex-col-reverse md:flex md:flex-row items-center justify-between w-100">
                    <div className="font-inter w-full text-start md:w-2/6">
                      <p className="font-anek text-4xl lg:text-5xl font-bold text-main lg:mt-0">
                        Lead Your Champions.
                      </p>
                      <div className="mt-6">
                        <ul className="space-y-4 max-w-lg text-gray-500 dark:text-gray-400">
                          <li>
                            Train your champions for the real world by providing
                            a scalable solution to cold call training.
                          </li>
                          <li>
                            Track your team’s progress and assess if they are
                            ready to face prospects.
                          </li>
                          <li>
                            Enable your salesforce to give the best first
                            impression when speaking to clients.
                          </li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <button
                          type="button"
                          className="text-white bg-minor hover:bg-minorlight focus:outline-none focus:ring-4 focus:ring-minor font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Book Demo
                        </button>
                      </div>
                    </div>
                    <div className="w-full md:w-4/6">
                      <img
                        src={
                          require("../assets/lead-your-championship-3.svg")
                            .default
                        }
                        alt="hero"
                        className="z-10"
                      />
                    </div>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="SALES REP">
                  <div className="container gap-8 lg:pl-4 pt-8 mx-auto flex flex-col-reverse md:flex md:flex-row items-center justify-between w-100">
                    <div className="font-inter w-full text-start md:w-2/6">
                      <p className="font-anek text-4xl lg:text-5xl font-bold text-main lg:mt-0">
                        Practice To Mastery.
                      </p>
                      <div className="mt-6">
                        <ul className="space-y-4 max-w-lg text-gray-500 dark:text-gray-400">
                          <li>
                            Practice your desired scripts unlimitely without
                            burning your lead list.
                          </li>
                          <li>
                            Stress-free solution to mastering your cold calling
                            scripts and roles.
                          </li>
                          <li>
                            Visualize and track the flow of your conversations.
                            Have AI guide you through all the way to booking a
                            meeting.
                          </li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <button
                          type="button"
                          className="text-white bg-minor hover:bg-minorlight focus:outline-none focus:ring-4 focus:ring-minor font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Book Access
                        </button>
                      </div>
                    </div>
                    <div className="w-full md:w-4/6 relative">
                      <img
                        src={require("../assets/sales-rep.svg").default}
                        alt="hero"
                        className="float-right  z-10"
                      />
                    </div>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="ENTERPRENEURS">
                  <div className="container gap-8 lg:px-4 pt-8 mx-auto flex flex-col-reverse md:flex md:flex-row items-center justify-between w-100">
                    <div className="font-inter w-full text-start md:w-2/6">
                      <p className="font-anek text-4xl lg:text-5xl font-bold text-main lg:mt-0">
                        Pitch Perfectly.
                      </p>
                      <div className="mt-6">
                        <ul className="space-y-4 max-w-lg text-gray-500 dark:text-gray-400">
                          <li>
                            Investors are some of the busiest personas to call
                            on. These professionals require the up-most
                            perfection when cold calling.
                          </li>
                          <li>
                            Be able to effectively convey your pitch without
                            repelling investors on the phone.
                          </li>
                          <li>
                            Book that intro meeting with investors by pitching
                            perfectly, practice your pitch to perfection.
                          </li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <button
                          type="button"
                          className="text-white bg-minor hover:bg-minorlight focus:outline-none focus:ring-4 focus:ring-minor font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Book Demo
                        </button>
                      </div>
                    </div>
                    <div className="w-full md:w-4/6 relative">
                      <img
                        src={require("../assets/Enterpreneurs.svg").default}
                        alt="hero"
                        className="float-right z-10"
                      />
                    </div>
                  </div>
                </Tabs.Item>
              </Tabs.Group>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
