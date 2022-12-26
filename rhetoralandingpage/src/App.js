import logo from "./assets/Logo.svg";
import "./App.css";
import Amplify, { API } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./pages/Home";
import Ourstory from "./pages/Ourstory";
import Contactus from "./pages/Contactus";
import Joinwaitlist from "./pages/Joinwaitlist";
import Community from "./pages/Community.js";
import Invited from "./pages/Invited";
import JoinWaitlist from "./pages/Joinwaitlist";
import InviteFriend from "./pages/InviteFriend";

import ReactGA from "react-ga";

const tracking_ID = "UA-252717872-1";
ReactGA.initialize(tracking_ID);

const myAPI = "api4b919b3b";
const path = "/users/";

const App = () => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);

  //Function to fetch from our backend and update customers array
  function getUser(e) {
    let userId = e.input;
    API.get(myAPI, path + "/" + userId)
      .then((response) => {
        console.log(response);
        let newUsers = [...users];
        newUsers.push(response);
        setUsers(newUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Router>
      <div className="containter">
        <Helmet>
          <meta charSet="utf-8" />
          <title>rhetora</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="Cold calling practice" />
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js.hs-scripts.com/22700288.js"
          ></script>
          <script
            src="https://js.chargebee.com/v2/chargebee.js"
            data-cb-site="rhetora-test"
          ></script>
          <script
            charset="utf-8"
            src="https://js.chargebee.com/v2/115-94b9b381e1334549cd23.js"
          ></script>
          <link
            rel="stylesheet"
            href="https://js.chargebee.com/v2/animation.css"
            type="text/css"
          ></link>
        </Helmet>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/our-story" element={<Ourstory />}></Route>
          <Route path="/contact-us" element={<Contactus />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/invited-c03skupo" element={<Invited />}></Route>
          <Route path="/join-waitlist" element={<JoinWaitlist />}></Route>
          <Route path="/invite-friend" element={<InviteFriend />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
