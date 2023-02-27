import React, { useEffect } from "react";
import "../../styles/EarlyAccessForm.css";

const FooterSubscriberForm = () => {
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
          formId: "b11eb42e-a78b-4917-bd94-88923f7ece1c",
          target: "#footerSubscriberForm",
        });
      }
    });
  }, []);

  return (
    <div>
      <div id="footerSubscriberForm"></div>
    </div>
  );
};

export default FooterSubscriberForm;
