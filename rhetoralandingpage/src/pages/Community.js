import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Background from "../assets/background-long.svg";
import slackgraphic from "../assets/slackGraphic.png";
import HubspotForm from "react-hubspot-form";
import "../styles/EarlyAccessForm.css";
import FooterSubscriber from "../components/FooterSubscriber";
const image1 = require("../assets/network-like-minded.svg").default;
const image2 = require("../assets/learn-from industry.svg").default;
const image3 = require("../assets/real-sense-of-belonging.svg").default;

const community = () => {
  const exclusiveAccess = [
    {
      id: 1,
      title: "Network with like-minded",
      p1: "Networking is an essential part of the sales profession. By building connections with other professionals, we can learn from their experiences, gain valuable insights, and even find new leads and opportunities.",
      p2: "The Rhetora Community is a great place to network with other sales professionals. Our active slack channel is a hub for discussion and networking, where members can connect with each other and build valuable relationships.",
      image: image1,
    },
    {
      id: 2,
      title: "Learn from industry leaders",
      p1: "Collaborating with like-minded people is essential to the success of any career, let alone in sales. Our members work together and share ideas, we learn from each other, improve our skills, and achieve our goals more effectively.",
      p2: "The Rhetora Community provides a platform for sales professionals to collaborate and share best practices. Our slack channel is where members bounce ideas off of one another and seek advice from experienced professionals.",
      image: image2,
    },
    {
      id: 3,
      title: "A real sense of belonging",
      p1: "Belonging is an important aspect of any professional environment. The Rhetora Community creates a sense of belonging for sales professionals by constantly encouraging genuine conversation, real life events and a chill environment. Our meme slack channel is the most active slack channel.",
      image: image3,
    },
  ];
  return (
    <div>
      <Navbar />
      {/* <HubspotForm
        portalId="22700288"
        formId="521db1b3-1952-49a9-893b-c45a72bbfe05"
        onSubmit={() => console.log("Submit!")}
        onReady={(form) => console.log("Form ready!")}
        loading={<div>Loading...</div>}
      /> */}
      <div className="md:container py-32 mx-auto flex flex-col items-center justify-between w-100">
        <div className="text-center px-10 flex flex-col items-center">
          <p className="text-4xl md:text-5xl text-main font-bold">
            Become a <span className="text-minor">Rhetorian</span>
          </p>
          <p className="text-4xl md:text-5xl text-main font-bold">
            Become a <span className="text-minor">Champion</span>
          </p>
          <p className="w-full md:w-2/3 mt-6 text-lg">
            Are you tired of feeling alone in your sales job? Do you want to
            connect with like-minded professionals to bounce ideas off of and
            improve your skills? If so, you're in the right place. Rhetora
            Community is a vibrant and active Slack channel with hundreds of
            sales professionals from all industries and experience levels
          </p>
          <div
            id="community-form-container"
            // className="flex items-center gap-2 mt-5 border border-gray-700 rounded-full p-1 w-full md:w-3/6"
          >
            <button
              style={{ padding: "10px", paddingTop: "14px" }}
              id="community-form-button"
              // className="w-48 md:w-60 bg-minor uppercase rounded-full text-white text-xs md:text-lg font-medium"
            >
              ENQUIRE
            </button>
            <input
              type="email"
              id="community-form-input"
              // className="border-none p-0 w-full placeholder:text-base placeholder:text-start text-gray-900 text-sm rounded-lg focus:ring-transparent block p-2.5"
              placeholder="EMAIL"
              required
            />
          </div>
        </div>
        <div className="md:hidden w-full">
          <img
            src={require("../assets/community-main-mobile.svg").default}
            alt="community"
            className="mx-auto w-full md:w-full"
          />
        </div>
        <div className="hidden md:block w-full">
          <img
            src={
              require("../assets/main-community-with-color-blur.svg").default
            }
            alt="community"
            className="mx-auto w-full md:w-full"
          />
        </div>
        <div className="px-10">
          <div className="">
            <p className="text-3xl md:text-6xl text-center text-main font-bold">
              Exclusive Access Includes
            </p>
            <p className="text-base text-center text-main">
              Access to Over 100+ sales professionals across the world
              connecting daily
            </p>
          </div>
          <div className="mt-16">
            {exclusiveAccess.map((item) => (
              <div
                key={item.id}
                className="mt-16 flex flex-col md:flex-row gap-24 items-center"
              >
                <div className="md:w-1/2">
                  <img src={item.image} alt="network" className="w-full" />
                </div>
                <div className="w-full md:w-1/2">
                  <p className="text-2xl mb-2 text-main font-bold  ">
                    {item.title}
                  </p>
                  <p className="text-base text-main w-full md:w-5/6">
                    {item.p1}
                  </p>
                  {item.p2 && (
                    <p className="text-base text-main border-none my-2 w-full md:w-5/6">
                      {item.p2}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterSubscriber title="Join the community save your quota" />
      <Footer />
    </div>
  );
};

export default community;
