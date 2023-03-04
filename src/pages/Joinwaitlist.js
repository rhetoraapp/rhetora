import { React, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Background from "../assets/Hero-background.svg";
import HubspotForm from "react-hubspot-form";
import ReactGA from "react-ga";
import "../styles/joinWaitListForm.css";

const Heading = ({ children, className, background }) => {
  return (
    <div
      className={`tc font-semibold ${className}`}
      style={{
        background,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
    </div>
  );
};

const Join = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const [email, setEmail] = useState("");

  return (
    <div>
      <Navbar />
      <div style={{ height: "100vh", backgroundImage: `url(${Background})`, backgroundSize: "cover" }}>
        <div className="justify-content-center mx-auto max-w-[90vw] lg:max-w-[1024px] xl:max-w-[1200px]">
          <div className=" d-flex flex-column mt-5 justify-center">
            <Heading
              className="text-3xl md:mt-5 md:text-5xl"
              background="radial-gradient(50.31% 50.31% at 51.49% 49.69%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(87.84deg, #FFBE0B 14.27%, #FF9933 26.9%, rgba(255, 153, 51, 0.85) 37.9%, rgba(255, 0, 110, 0.77) 49.83%, rgba(131, 56, 236, 0.799403) 59.71%, #8338EC 69.42%, #3A86FF 85.23%)"
            >
              March 19th 2023. <br />
              rhetora.ai Unleashed.
            </Heading>

            <div className="flex md:h-[55vh] flex-col md:mt-4">

              {/* Row 1 */}
              <div className="flex flex-1 basis-3/4 flex-col md:flex-row">

                {/* Column 1 large, Column 2 Mobile */}
                <div className="my-1.5 flex basis-1/4 rounded-[17px] bg-graylight p-3 text-center md:mr-3 md:order-1 order-2">
                  <div className="flex flex-col py-4 px-1.5">
                    <Heading
                      className="text-5xl"
                      background="linear-gradient(101.53deg, #FFBE0B 10.97%, #FF9933 33.08%, rgba(255, 153, 51, 0.85) 40.29%, rgba(255, 0, 110, 0.77) 49.79%, rgba(131, 56, 236, 0.799403) 58.63%, #8338EC 75.6%, #3A86FF 96%)"
                    >
                      Script Builder
                    </Heading>

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

                    <div className="flex flex-col rounded-[10px] bg-lightgreen p-3 text-left text-sm shadow">
                      <div className="flex h-6 w-full flex-row justify-between">
                        <span className="h-6 rounded-lg bg-darkgreen px-3 pt-1.5 text-xs text-lightgreen">Meeting Set</span>
                        <img className="mb-0 h-5" src={require("../assets/checkmark.svg").default} />
                      </div>
                      <div className="mt-2 font-medium">Meeting set with prospect!</div>
                    </div>
                  </div>
                </div>
                
                 {/* Column 2 large, Column 1 Mobile */}
                <div className="flex basis-1/2 flex-col order-1 md:!order-2">
                  <div className="flex basis-1/3 flex-col rounded-[17px] text-center md:mr-3 md:flex-row order-2 md:order-1">
                    <div className="my-1.5 basis-1/3 rounded-[17px] bg-graylight md:mr-3"></div>

                    <div className="my-1.5 flex-1 rounded-[17px] bg-graylight p-3">
                      <div className="flex flex-col rounded-[10px] bg-white px-3 py-2.5 text-left text-sm shadow">
                        <div className="flex h-6 w-full flex-row justify-between">
                          <span className="h-6 rounded-lg bg-lightgreen px-3 pt-1.5 text-xs">User Response</span>
                          <img className="mb-0" src={require("../assets/profile-icon.svg").default} />
                        </div>
                        <div className="mt-2 font-light">
                          <span className="font-medium">Hey Anthony, it’s Jason </span> looking to see if you have 60 seconds. <br />
                        </div>

                        <div className="flex h-6 w-full flex-row justify-between">
                          <div className="mt-2 flex text-xs font-light">
                            <div class="mt-0.5 mr-1 h-2 w-2 rounded-full bg-red-500"></div>Listening...
                          </div>
                          <div className="rounded-lg bg-[#E9ECF4] p-1 text-xs">100%</div>
                        </div>
                      </div>

                      <Heading
                        className="mt-3 text-3xl"
                        background="linear-gradient(101.53deg, #FFBE0B 10.97%, #FF9933 33.08%, rgba(255, 153, 51, 0.85) 40.29%, rgba(255, 0, 110, 0.77) 49.79%, rgba(131, 56, 236, 0.799403) 58.63%, #8338EC 75.6%, #3A86FF 96%)"
                      >
                        Live Call Navigation
                      </Heading>
                    </div>
                  </div>

                  {/* Main Section */}
                  <div className="my-1.5 flex  flex-1 flex-col rounded-[17px] bg-graylight p-3 md:mr-3 md:order-2 order-1">
                    <Heading
                      className="mt-10 w-full text-3xl md:text-5xl"
                      background="linear-gradient(101.53deg, #FFBE0B 10.97%, #FF9933 33.08%, rgba(255, 153, 51, 0.85) 40.29%, rgba(255, 0, 110, 0.77) 49.79%, rgba(131, 56, 236, 0.799403) 58.63%, #8338EC 75.6%, #3A86FF 96%)"
                    >
                      Join The Movement <br />
                      <span className="text-4xl md:text-6xl">Enter Your Email</span>
                    </Heading>
                    <span
                      style={{
                        background:
                          "linear-gradient(98.89deg, #FFBE0B -486.28%, #FF9933 -365.64%, rgba(255, 153, 51, 0.85) 10.08%, rgba(255, 0, 110, 0.77) 51.33%, rgba(131, 56, 236, 0.799403) 91.34%, #8338EC 406.77%, #3A86FF 693.75%)",
                      }}
                      className="mx-auto h-6  rounded-lg bg-lightgreen px-3 pt-1.5 text-xs text-white shadow"
                    >
                      Limited Seats
                    </span>
                    <div className="mt-4 mb-1.5 flex h-11 w-full max-w-lg mx-auto justify-between rounded-full border bg-white p-2.5 shadow">
                      <input
                        className="ml-3.5 h-full w-full flex-1 bg-transparent  pt-1 outline-none"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div className="mr-1.5 mt-0.5 flex text-slate-400">
                        press enter{" "}
                        <span>
                          <img src={require("../assets/enter-arrow.svg").default} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                 {/* Column 3*/}
                <div className="flex basis-1/4 flex-col rounded-[17px] text-center order-3">
                  <div className="my-1.5 flex w-full flex-1 flex-col rounded-[17px] bg-graylight p-3 text-center">
                    <img className="my-auto px-4 pt-3 mb-4" src={require("../assets/companies.svg").default} />
                    <Heading
                      className="my-auto w-full text-3xl xl:text-4xl"
                      background="linear-gradient(101.53deg, #FFBE0B 10.97%, #FF9933 33.08%, rgba(255, 153, 51, 0.85) 40.29%, rgba(255, 0, 110, 0.77) 49.79%, rgba(131, 56, 236, 0.799403) 58.63%, #8338EC 75.6%, #3A86FF 96%)"
                    >
                      <span className="text-4xl xl:text-5xl">AUTO-PILOT</span>
                      <br />
                      Sales Assistant
                    </Heading>
                  </div>
                  <div className="my-1.5 flex basis-1/4 flex-row">
                    <div className="flex flex-1 rounded-[17px] bg-graylight p-3 text-center md:mr-3"></div>
                    <div className="flex flex-1 rounded-[17px] bg-graylight p-3 text-center"></div>
                  </div>
                </div>
              </div>


              {/* Row 2 */}
              <div className="flex basis-1/4 flex-col md:flex-row ">
                <div className="my-1.5 flex flex-1 flex-col rounded-[17px] bg-graylight p-3 text-center md:mr-3">
                  <Heading
                    className="mt-auto pb-2 text-5xl"
                    background="linear-gradient(101.53deg, #FFBE0B 10.97%, #FF9933 33.08%, rgba(255, 153, 51, 0.85) 40.29%, rgba(255, 0, 110, 0.77) 49.79%, rgba(131, 56, 236, 0.799403) 58.63%, #8338EC 75.6%, #3A86FF 96%)"
                  >
                    Rebuttal Suggestions
                  </Heading>
                  <div className="mb-auto mx-auto h-6 w-max rounded-lg bg-cream px-4 pt-1 text-sm font-medium text-[#A65300] shadow-md">RHET V2</div>
                </div>
                <div className="my-1.5 flex flex-col flex-1 rounded-[17px] bg-graylight p-3 text-center md:mr-3">
                  <div className="my-3 flex flex-row justify-between">
                    <div className="h-6 mx-2 w-max rounded-lg bg-lightgreen px-3 pt-1 text-sm font-medium text-green-800 shadow-md -mt-3">Amazing Speed!</div>
                    <div className="h-6 mx-2  w-max rounded-lg bg-cream px-4 pt-1 text-sm font-medium text-[#A65300] shadow-md">Speed Up!</div>
                  </div>
                  <Heading
                    className="my-auto text-5xl"
                    background="linear-gradient(101.53deg, #FFBE0B 10.97%, #FF9933 33.08%, rgba(255, 153, 51, 0.85) 40.29%, rgba(255, 0, 110, 0.77) 49.79%, rgba(131, 56, 236, 0.799403) 58.63%, #8338EC 75.6%, #3A86FF 96%)"
                  >
                    Speech <br/> Analytics
                  </Heading>
                  <div className="mt-3 flex flex-row justify-between">
                  <div className="h-6 ml-4  w-max rounded-lg bg-cream px-2.5 pt-1 text-sm font-medium text-[#A65300] shadow-md">Get to the point!</div>
                    <div className="h-6 mr-4 w-max rounded-lg bg-lightgreen px-3.5 pt-1 text-sm font-medium text-green-800 shadow-md -mt-3.5">Keep it up!</div>
                  </div>
                </div>
                <div className="my-1.5 flex flex-1 rounded-[17px] bg-graylight p-3 text-center">
                  <Heading className="my-auto w-full  text-4xl" background="linear-gradient(93.79deg, #FF9933 18.63%, #FD71AF 89.95%)">
                    <span className="text-6xl">UNLIMITED</span> <br />
                    Mock Cold Calls
                  </Heading>
                </div>
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
