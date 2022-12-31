import React, { useEffect } from "react";
import "../../styles/EarlyAccessForm.css"

const HeroSectionForm = () => {
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
          formId: "50796c8b-289f-4c2b-a333-79fbf7c3fb84",
          target: "#hubspotForm",
        });
      }
    });
  }, []);

  return (
    <div>
      <div id="hubspotForm"></div>
    </div>
  );
};

export default HeroSectionForm;
