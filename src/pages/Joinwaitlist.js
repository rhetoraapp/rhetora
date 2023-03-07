import { React, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Background from "../assets/Hero-background.svg";
import ReactGA from "react-ga";
import { Fade } from "react-reveal";
import { WaitlistModal } from "../components/WaitlistModal";
import "../styles/joinWaitListForm.css";
import { JoinWaitlistRequest } from "../api";
import { EMAIL_REGEX } from "../utils/contants";

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
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [waitlistData, setWaitlistData] = useState({});

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // validate email
      if (!email.match(EMAIL_REGEX)) {
        alert("Please enter a valid email address");
        return;
      }

      const data = await JoinWaitlistRequest(email);
      setWaitlistData(data);
      openModal();
      setEmail("");
    } catch (error) {
      alert("Something went wrong. Please try again later");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = viewportWidth < 768;
  const second = 1000;
  return (
    <>
      <div className={loading ? `opacity-40` : "opacity-100"}>
        <Navbar />

        <div style={{ height: "100vh", backgroundImage: `url(${Background})`, backgroundSize: "cover" }}>
          <div className="justify-content-center mx-auto max-w-[90vw] lg:max-w-[1024px] xl:max-w-[1200px]">
            <WaitlistModal isOpen={modalOpen} closeModal={closeModal} waitlistData={waitlistData} />
            <div className=" d-flex flex-column mt-5 justify-center">
              <Heading
                className="text-3xl md:mt-5 md:text-5xl"
                background="radial-gradient(50.31% 50.31% at 51.49% 49.69%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(87.84deg, #FFBE0B 14.27%, #FF9933 26.9%, rgba(255, 153, 51, 0.85) 37.9%, rgba(255, 0, 110, 0.77) 49.83%, rgba(131, 56, 236, 0.799403) 59.71%, #8338EC 69.42%, #3A86FF 85.23%)"
              >
                March 19th 2023. <br />
                rhetora.ai Unleashed.
              </Heading>

              <div className="flex flex-col md:mt-4 md:h-[55vh]">
                {/* Row 1 */}
                <div className="flex flex-1 basis-3/4 flex-col md:flex-row">
                  {/* Column 1 large, Column 2 Mobile */}
                  <Fade duration={1000} delay={isMobile ? 0 : second * 2}>
                    <div className="order-2 my-1.5 flex basis-1/4 rounded-[17px] bg-graylight p-3 text-center md:order-1 md:mr-3">
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
                  </Fade>

                  {/* Column 2 large, Column 1 Mobile */}
                  <div className="order-1 flex basis-1/2 flex-col md:!order-2">
                    <div className="order-2 flex basis-1/3 flex-col rounded-[17px] text-center md:order-1 md:mr-3 md:flex-row">
                      <Fade duration={1000} delay={isMobile ? 0 : second * 8}>
                        <div className="my-1.5 basis-1/3 rounded-[17px] bg-graylight md:mr-3"></div>
                      </Fade>
                      <Fade duration={1000} delay={isMobile ? 0 : second * 5}>
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
                      </Fade>
                    </div>

                    {/* Main Section */}
                    <Fade duration={1000} delay={isMobile ? 0 : second * 9}>
                      <div className="order-1 my-1.5  flex flex-1 flex-col rounded-[17px] bg-graylight p-3 md:!order-2 md:mr-3">
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
                        <div className="mx-auto mt-4 mb-1.5 flex h-11 w-full max-w-lg justify-between rounded-full border bg-white p-2.5 shadow">
                          <form onSubmit={handleSubmit}>
                            <input
                              className="ml-3.5 h-full w-full flex-1 bg-transparent  pt-1 outline-none"
                              placeholder="Email Address"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </form>
                          <div className="mr-1.5 mt-0.5 flex text-slate-400">
                            press enter{" "}
                            <span>
                              <img src={require("../assets/enter-arrow.svg").default} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </div>

                  {/* Column 3*/}
                  <div className="order-3 flex basis-1/4 flex-col rounded-[17px] text-center">
                    <Fade duration={1000} delay={isMobile ? 0 : second * 3}>
                      <div className="my-1.5 flex w-full flex-1 flex-col rounded-[17px] bg-graylight p-3 text-center">
                        <img className="my-auto mb-4 px-4 pt-3" src={require("../assets/companies.svg").default} />
                        <Heading
                          className="my-auto w-full text-3xl xl:text-4xl"
                          background="linear-gradient(101.53deg, #FFBE0B 10.97%, #FF9933 33.08%, rgba(255, 153, 51, 0.85) 40.29%, rgba(255, 0, 110, 0.77) 49.79%, rgba(131, 56, 236, 0.799403) 58.63%, #8338EC 75.6%, #3A86FF 96%)"
                        >
                          <span className="text-4xl xl:text-5xl">AUTO-PILOT</span>
                          <br />
                          Sales Assistant
                        </Heading>
                      </div>
                    </Fade>
                    <Fade duration={1000} delay={isMobile ? 0 : second * 7}>
                      <div className="my-1.5 flex basis-1/4 flex-row">
                        <div className="flex flex-1 rounded-[17px] bg-graylight p-3 text-center md:mr-3"></div>
                        <div className="flex flex-1 rounded-[17px] bg-graylight p-3 text-center"></div>
                      </div>
                    </Fade>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex basis-1/4 flex-col md:flex-row ">
                  <Fade duration={1000} delay={isMobile ? 0 : second * 4}>
                    <div className="my-1.5 flex flex-1 flex-col rounded-[17px] bg-graylight p-3 text-center md:mr-3">
                      <Heading
                        className="mt-auto pb-2 text-5xl"
                        background="linear-gradient(101.53deg, #FFBE0B 10.97%, #FF9933 33.08%, rgba(255, 153, 51, 0.85) 40.29%, rgba(255, 0, 110, 0.77) 49.79%, rgba(131, 56, 236, 0.799403) 58.63%, #8338EC 75.6%, #3A86FF 96%)"
                      >
                        Rebuttal Suggestions
                      </Heading>
                      <div className="mx-auto mb-auto h-6 w-max rounded-lg bg-cream px-4 pt-1 text-sm font-medium text-[#A65300] shadow-md">
                        RHET V2
                      </div>
                    </div>
                  </Fade>
                  <Fade duration={1000} delay={isMobile ? 0 : second * 6}>
                    <div className="my-1.5 flex flex-1 flex-col rounded-[17px] bg-graylight p-3 text-center md:mr-3">
                      <div className="my-3 flex flex-row justify-between">
                        <div className="mx-2 -mt-3 h-6 w-max rounded-lg bg-lightgreen px-3 pt-1 text-sm font-medium text-green-800 shadow-md">
                          Amazing Speed!
                        </div>
                        <div className="mx-2 h-6  w-max rounded-lg bg-cream px-4 pt-1 text-sm font-medium text-[#A65300] shadow-md">Speed Up!</div>
                      </div>
                      <Heading
                        className="my-auto text-5xl"
                        background="linear-gradient(101.53deg, #FFBE0B 10.97%, #FF9933 33.08%, rgba(255, 153, 51, 0.85) 40.29%, rgba(255, 0, 110, 0.77) 49.79%, rgba(131, 56, 236, 0.799403) 58.63%, #8338EC 75.6%, #3A86FF 96%)"
                      >
                        Speech <br /> Analytics
                      </Heading>
                      <div className="mt-3 flex flex-row justify-between">
                        <div className="ml-4 h-6  w-max rounded-lg bg-cream px-2.5 pt-1 text-sm font-medium text-[#A65300] shadow-md">
                          Get to the point!
                        </div>
                        <div className="mr-4 -mt-3.5 h-6 w-max rounded-lg bg-lightgreen px-3.5 pt-1 text-sm font-medium text-green-800 shadow-md">
                          Keep it up!
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade duration={1000} delay={isMobile ? 0 : second}>
                    <div className="my-1.5 flex flex-1 rounded-[17px] bg-graylight p-3 text-center">
                      <Heading className="my-auto w-full  text-4xl" background="linear-gradient(93.79deg, #FF9933 18.63%, #FD71AF 89.95%)">
                        <span className="text-6xl">UNLIMITED</span> <br />
                        Mock Cold Calls
                      </Heading>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      {/* Loading Screen */}
      {loading && (
        <div role="status" class="fixed top-2/4 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 !opacity-100">
          <svg
            aria-hidden="true"
            class="text-gray-200 dark:text-gray-600 mr-2  h-16 w-16 animate-spin fill-minor"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      )}
    </>
  );
};

export default Join;
