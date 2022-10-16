import logo from './assets/Logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Helmet} from "react-helmet";

import Home from './pages/Home';
import Ourstory from './pages/Ourstory';
import Contactus from './pages/Contactus';
import Joinwaitlist from './pages/Joinwaitlist';

const myAPI = "api4b919b3b"
const path = '/users/'; 

const App = () => {
  const [input, setInput] = useState("")
  const [users, setUsers] = useState([])

  //Function to fetch from our backend and update customers array
  function getUser(e) {
    let userId = e.input
    API.get(myAPI, path + "/" + userId)
       .then(response => {
         console.log(response)
         let newUsers = [...users]
         newUsers.push(response)
         setUsers(newUsers)

       })
       .catch(error => {
         console.log(error)
       })
  }

  return (
    <Router>
    <div className="containter">
    <Helmet>
                <meta charSet="utf-8" />
                <title>rhetora</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Cold calling practice" />
                <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/22700288.js"></script>
            </Helmet>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/ourstory" element={<Ourstory />} ></Route>
        <Route path="/contactus" element={<Contactus />} ></Route>
        <Route path="/join" element={<Joinwaitlist />} ></Route>
      </Routes>
    </div>
    </Router>
  )
}

export default App;