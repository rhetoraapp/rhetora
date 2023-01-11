import React from "react";
import luca from "../assets/luka-line.png";
import mazen from "../assets/mazen-line.png";
function TwentyNineteen() {
  return (
    <div className="d-flex w-full">
            <div style={{ width: "50%" }} id="TwntyNntnStory">
              <div className="tr">
                <img src={luca} alt="" />
              </div>
              <p id="name" className="">
                Luka
              </p>
              <div className="tc">
                <div className="year">2019</div>
                <div className="yearDescription">
                  Luka and Mazen have been business partners for many years,
                  having met in high school and bonded over our shared mentality
                  and entrepreneurial spirit. We have always been driven to find
                  ways to improve upon existing ideas and create new solutions
                  to problems.
                </div>
              </div>
              <div className="tr">
                <img src={mazen} alt="mazen" />
              </div>
              <p id="name">mazen</p>
            </div>
          </div>
  );
}

export default TwentyNineteen;
