import logo from './assets/Logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'

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
    
    <div className="containter">
      <button type="button" className="btn btn-primary">Primary</button>
  {/* <div className="heronav">
    <nav className="nav">
      <div className="nav-left">
        <h3>rhetora</h3>
        <img src={require('./assets/hamburger.svg').default} />
      </div>
      <div className="nav-center">
        <h3>
          <a href="./">
          Home </a>
        </h3>
        <h3>
          <a href="Aboutus">
          About Us </a>
        </h3>
        <h3>
          <a href="Contact">
          Contact</a>
        </h3>
        <h3 id="joinWaitlist">
          <a id="joinWaitlista" href="JoinWaitlist">
          Join Waitlist </a>
        </h3>
      </div>
      <div className="nav-right">
      <img src={require('./assets/Logo.svg').default} />
      </div>
    </nav>
    <div className="hero">
      <div className="content-left">
        <h1 style={{ color: "#FF9933"}}>
          True Cold <br /> Calling Confidence <br /> Coming Soon
        </h1>
        <p style={{ color: "#FF9933", fontWeight: 500 }}>
          Mock Authentic Cold Calls without Losing Business
        </p>
        <div className="emailhero">
          <input type="text" placeholder="Enter Your Email" />
          <button className="requestaccess">Request Access</button>
        </div>
      </div>
      <div className="content-right">
      <img className="cards" src={require('./assets/Cards.svg').default} />
      </div>
    </div>
  </div>
  <div className="howrhetoraworks">
    <h2 id="hrw">How rhetora Works</h2>
    <div className="VYTT">
      <div className="content-left">
      <img src={require('./assets/talktrack.svg').default} />
      </div>
      <div className="content-right">
        <p style={{ fontWeight: 600 }}>Join the Waitlist</p>
        <h1>Visualize Your Talk Track</h1>
        <p>
          There is no better way to navigate a sales call without visualizing
          your talk track tree.
        </p>
      </div>
    </div>
    <div className="MCCOSF">
      <div className="content-left">
        <h1>Mock Cold Calls Offline Stress-free</h1>
        <p>
          No more awkward mock cold calling sessions with colleagues, practice
          offine in peace.
        </p>
      </div>
      <div className="content-right">
      <img src={require('./assets/zoom.svg').default} />
      </div>
    </div>
    <div className="SPRR">
      <div className="content-left">
        <h1>
          Script, Practice, <br /> Refine &amp; Repeat
        </h1>
        <p>3 Step process to unlock your next level sales person.</p>
      </div>
      <div className="content-right">
      <img src={require('./assets/diagram.svg').default} />
      </div>
    </div>
  </div>
  <div className="emailcapture">
    <h1 style={{ fontWeight: 600, color: "#050038" }}>
      rhetora is <br /> Launching Soon
    </h1>
    <h3 id='dbsp'>Designed by sales professionals, for sales professionals.</h3>
    <h3>
      Join <span className="waitinglistsignups">426</span> other ambitous
      salespeople on the waitlist.
    </h3>
    <div className="capture">
      <input type="Enter Your Email" placeholder="Enter Your Email"/>
      <button className="requestaccess">Request Access</button>
    </div>
  </div>
  <div className="footer">
    <h3><a href="home">Home</a></h3>
    <h3><a href="aboutUs">About Us</a></h3>
    <h3><a href="Contact">Contact</a></h3>
  </div> */}
</div>

  )
}

export default App;