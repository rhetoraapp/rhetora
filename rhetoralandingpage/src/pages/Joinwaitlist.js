import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Background from "../assets/Hero-lines.svg";
import HubspotForm from "react-hubspot-form";

const JoinWaitlist = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          height: "100%",
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
        }}
      >
        <div className="d-flex justify-content-center">
          <div className="col-8 p-12 bg-white rounded-3xl shadow my-5 d-flex justify-center flex-column">
            <h1 className="tc text-main">
              rhetora is <br></br>Launching Soon
            </h1>
            <p className="tc mt-2">
              Designed by sales professionals, for sales professionals.
            </p>
            <div className="grids grids-col-1 md:grids-col-2">
              <input
                type="text"
                placeholder="Name"
                className="border border-main rounded-lg placeholder:text-base plceholder:text-left "
              />
            </div>
            {/*<div id="cinputdiv" className="">
               <HubspotForm
                portalId="22700288"
                formId="5d003db2-c7e7-4230-b51f-cf526b584d4b"
                onSubmit={() => console.log("Submit!")}
                onReady={(form) => console.log("Form ready!")}
                loading={<div>Loading...</div>}
              /> 
            </div>*/}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JoinWaitlist;
