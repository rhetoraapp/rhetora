import { React, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Background from "../assets/Hero-background.svg";
import HubspotForm from "react-hubspot-form";
import ReactGA from "react-ga";
import "../styles/joinWaitListForm.css";

const Join = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const textGradientStyle = (background) => ({
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent",
    background,
  });

  return (
    <div>
      <Navbar />
      <div
        style={{ height: "100vh", backgroundImage: `url(${Background})`, backgroundSize: "cover" }}
      >
        <div className="d-flex justify-content-center">
          <div className="col-8 mt-5 d-flex justify-center flex-column">
            <h1
              className="tc mt-5 text-5xl"
              style={{
                ...textGradientStyle(
                  "radial-gradient(50.31% 50.31% at 51.49% 49.69%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(87.84deg, #FFBE0B 14.27%, #FF9933 26.9%, rgba(255, 153, 51, 0.85) 37.9%, rgba(255, 0, 110, 0.77) 49.83%, rgba(131, 56, 236, 0.799403) 59.71%, #8338EC 69.42%, #3A86FF 85.23%)"
                ),
              }}
            >
              March 19th 2023. <br />
              rhetora.ai Unleashed.
            </h1>
            <div className="mt-4 flex flex-col h-[55vh]">
              <div className="flex flex-row basis-3/4 flex-1 mb-3">
                <div className="bg-graylight rounded-[17px] basis-1/4 text-center mr-3 p-3">
                  <div className="flex flex-col">
                    <div
                      className="tc text-5xl"
                      style={{
                        ...textGradientStyle(
                          "linear-gradient(93.79deg, #FF9933 18.63%, #FD71AF 89.95%) font-bold"
                        ),
                      }}
                    >
                      Script Builder
                    </div>
                  </div>
                </div>

                <div className="flex flex-col basis-1/2">
                  <div className="flex flex-row basis-1/3 rounded-[17px] text-center mr-3">
                    <div className="bg-graylight rounded-[17px] flex-1 mr-3">s</div>
                    <div className="bg-graylight rounded-[17px] flex-1"> s</div>
                  </div>
                  <div className="bg-graylight rounded-[17px] flex-1 mt-3 mr-3"></div>
                </div>

                <div className="bg-graylight rounded-[17px] basis-1/4 text-center">s</div>
              </div>
              <div className="flex flex-row basis-1/4">
                <div className="bg-graylight rounded-[17px] flex-1 text-center mr-3">s</div>
                <div className="bg-graylight rounded-[17px] flex-1 text-center mr-3">s</div>
                <div className="bg-graylight rounded-[17px] flex-1 text-center ">s</div>
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
