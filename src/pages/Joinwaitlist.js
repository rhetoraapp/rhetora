import { React, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Background from "../assets/Hero-background.svg";
import HubspotForm from "react-hubspot-form";
import ReactGA from "react-ga";
import "../styles/joinWaitListForm.css";

const Card = ({ children }) => {
  return (
    <div className="my-2 flex flex-col rounded-[10px] bg-white p-3 text-left text-sm shadow">
      <div className="mt-1.5 flex w-full flex-row justify-between">
        <div className="rounded-xl bg-lightgreen px-2.5 pt-1 text-xs">User Response</div>
        <img src={require("../assets/profile-icon.svg").default} />
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
};

const Join = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const textGradientStyle = (background) => {
    return {
      background,
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
    };
  };

  return (
    <div>
      <Navbar />
      <div style={{ height: "100vh", backgroundImage: `url(${Background})`, backgroundSize: "cover" }}>
        <div className="justify-content-center mx-auto max-w-[90vw] lg:max-w-[1000px]">
          <div className=" d-flex flex-column mt-5 justify-center">
            <h1
              className="tc text-3xl md:mt-5 md:text-5xl"
              style={{
                ...textGradientStyle(
                  "radial-gradient(50.31% 50.31% at 51.49% 49.69%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(87.84deg, #FFBE0B 14.27%, #FF9933 26.9%, rgba(255, 153, 51, 0.85) 37.9%, rgba(255, 0, 110, 0.77) 49.83%, rgba(131, 56, 236, 0.799403) 59.71%, #8338EC 69.42%, #3A86FF 85.23%)"
                ),
              }}
            >
              March 19th 2023. <br />
              rhetora.ai Unleashed.
            </h1>
            <div className="flex h-[55vh] flex-col md:mt-4">
              <div className="flex flex-1 basis-3/4 flex-col md:flex-row ">
                <div className="my-1.5 basis-1/4 rounded-[17px] bg-graylight p-3 text-center md:mr-3">
                  <div className="flex flex-col py-3 px-1.5">
                    <div
                      className="tc text-5xl"
                      style={{
                        ...textGradientStyle(
                          " linear-gradient(101.53deg, #FFBE0B 10.97%, #FF9933 33.08%, rgba(255, 153, 51, 0.85) 40.29%, rgba(255, 0, 110, 0.77) 49.79%, rgba(131, 56, 236, 0.799403) 58.63%, #8338EC 75.6%, #3A86FF 96%)"
                        ),
                      }}
                    >
                      Script Builder
                    </div>

                    <div className="my-2 flex flex-col rounded-[10px] bg-white p-3 text-left text-sm shadow">
                      <div className="flex h-6 w-full flex-row justify-between">
                        <span className="h-6 rounded-lg bg-lightgreen px-3 pt-1.5 text-xs">User Response</span>
                        <img className="mb-0" src={require("../assets/profile-icon.svg").default} />
                      </div>
                      <div className="mt-2 font-medium">
                        I’m calling to see if we can find some time to chat on Thursday. <br />
                        <br /> We help sales leaders ramp their reps quicker using an AI mock cold calling solution.
                      </div>
                    </div>

                    <img className="mb-0 -mt-1.5 h-8" src={require("../assets/connector.svg").default} />

                    <div className="my-2 flex flex-col rounded-[10px] bg-lightgreen p-3 text-left text-sm shadow">
                      <div className="flex h-6 w-full flex-row justify-between">
                        <span className="h-6 rounded-lg bg-darkgreen px-3 pt-1.5 text-xs text-lightgreen">Meeting Set</span>
                        <img className="mb-0 h-5" src={require("../assets/checkmark.svg").default} />
                      </div>
                      <div className="mt-2 font-medium">Meeting set with prospect!</div>
                    </div>
                  </div>
                </div>

                <div className="flex basis-1/2 flex-col">
                  <div className="flex basis-1/3 flex-col rounded-[17px] text-center md:mr-3 md:flex-row">
                    <div className="my-1.5 flex-1 rounded-[17px] bg-graylight md:mr-3"></div>
                    <div className="my-1.5 flex-1 rounded-[17px] bg-graylight"> </div>
                  </div>
                  <div className="my-1.5 flex-1 rounded-[17px] bg-graylight md:mr-3"></div>
                </div>

                <div className="my-1.5 basis-1/4 rounded-[17px] bg-graylight text-center"></div>
              </div>
              <div className="flex basis-1/4 flex-col md:flex-row ">
                <div className="my-1.5 flex-1 rounded-[17px] bg-graylight text-center md:mr-3"></div>
                <div className="my-1.5 flex-1 rounded-[17px] bg-graylight text-center md:mr-3"></div>
                <div className="my-1.5 flex-1 rounded-[17px] bg-graylight text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Join;
