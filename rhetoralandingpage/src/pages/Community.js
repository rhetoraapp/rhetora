import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Background from "../assets/background-long.svg";
import slackgraphic from "../assets/slackGraphic.png";
import HubspotForm from "react-hubspot-form";

const community = () => {
  return (
    <div>
      <Navbar />
      <div className="container px-10 py-32 mx-auto flex flex-col items-center justify-between w-100">
        <div className="text-center flex flex-col items-center">
          <p className="text-6xl text-main font-bold">
            Become a <span className="text-minor">Rhetorian</span>
          </p>
          <p className="text-6xl text-main font-bold">
            Become a <span className="text-minor">Champion</span>
          </p>
          <p className="w-full md:w-2/3 mt-6">
            Are you tired of feeling alone in your sales job? Do you want to
            connect with like-minded professionals to bounce ideas off of and
            improve your skills? If so, you're in the right place. Rhetora
            Community is a vibrant and active Slack channel with hundreds of
            sales professionals from all industries and experience levels
          </p>
          <div className="flex items-center gap-2 mt-5 border border-gray-700 rounded-full p-1 w-full md:w-3/6">
            <button className="w-48 md:w-60 bg-minor uppercase py-2 px-3 rounded-full text-white text-xs md:text-lg font-medium">
              ENQUIRE
            </button>
            <input
              type="email"
              id="email"
              className="border-none p-0 w-full placeholder:text-base placeholder:text-start text-gray-900 text-sm rounded-lg focus:ring-transparent block p-2.5"
              placeholder="EMAIL"
              required
            />
          </div>
        </div>
        <div className="py-32">
          <img src={require("../assets/Main.svg").default} alt="community" />
        </div>
        <div>
          <div className="">
            <p className="text-6xl text-center text-main font-bold">
              Exclusive Access Includes
            </p>
            <p className="text-base text-center text-main">
              Access to Over 100+ sales professionals across the world
              connecting daily
            </p>
          </div>
          <div className="mt-16">
            <div className="mt-16 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <img
                  src={require("../assets/network-like-minded.svg").default}
                  alt="network"
                />
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-2xl mb-2 text-main font-bold  ">
                  Network with like-minded
                </p>
                <p className="text-base text-main ">
                  Networking is an essential part of the sales profession. By
                  building connections with other professionals, we can learn
                  from their experiences, gain valuable insights, and even find
                  new leads and opportunities.
                  <hr className="border-none my-2" />
                  The Rhetora Community is a great place to network with other
                  sales professionals. Our active slack channel is a hub for
                  discussion and networking, where members can connect with each
                  other and build valuable relationships.
                </p>
              </div>
            </div>
            <div className="mt-16 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <img
                  src={require("../assets/network-like-minded.svg").default}
                  alt="network"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-2xl mb-2 text-main font-bold  ">
                  Learn from industry leaders
                </p>
                <p className="text-base text-main ">
                  Collaborating with like-minded people is essential to the
                  success of any career, let alone in sales. Our members work
                  together and share ideas, we learn from each other, improve
                  our skills, and achieve our goals more effectively.
                  <hr className="border-none my-2" />
                  The Rhetora Community provides a platform for sales
                  professionals to collaborate and share best practices. Our
                  slack channel is where members bounce ideas off of one another
                  and seek advice from experienced professionals.
                </p>
              </div>
            </div>
            <div className="mt-16 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <img
                  src={require("../assets/network-like-minded.svg").default}
                  alt="network"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-2xl mb-2 text-main font-bold  ">
                  A real sense of belonging
                </p>
                <p className="text-base text-main ">
                  Belonging is an important aspect of any professional
                  environment. The Rhetora Community creates a sense of
                  belonging for sales professionals by constantly encouraging
                  genuine conversation, real life events and a chill
                  environment. Our meme slack channel is the most active slack
                  channel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default community;
