import React, { useEffect } from "react";
import "../../styles/EarlyAccessForm.css";

const CommunityPageForm = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          portalId: "22700288",
          formId: "410031c8-6287-4d4e-805f-70137ed4c156",
          target: "#communityEnquiryForm",
        });
      }
    });
  }, []);

  return (
    // <div>
    <div id="communityEnquiryForm"></div>
    // </div>
  );
};

export default CommunityPageForm;
