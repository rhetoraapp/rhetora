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
      <div className="heronav">
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid mt-4">
    <a id='navbar-brand-main' className="navbar-brand" href="#">
      rhetora
    </a> 
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
        <li className="nav-item mx-3">
          <a className="nav-link" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="#">
            About Us
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
        <li className="nav-item mx-5">
          <a id="joinwaitlistnavbtn" className="nav-link" href="#">
            Join Waitlist</a>
        </li>
      </ul>
      <a className="navbar-brand" href="#">
    <img src={require('./assets/Logo.svg').default} />
    </a> 
    </div>
  </div>
</nav>
    <div className='hero container mt-5'>
      <div className='row justify-content-around'>
      <div className='col-lg-8 col-sm-10 c'>
      <div className='row'>
          <h1 id='herotitle'> True Cold <br /> Calling Confidence <br /> Coming Soon</h1>
          <p id='herop'>Mock Authentic Cold Calls without Losing Business</p>
        </div>
        <div className='d-flex justify-content-md-start justify-content-around'>
        <input id='heroinput' className='row-10 col-lg-8 col-xl-6' placeholder='Enter Your Email'></input>
        <button className='row-10 col-lg-4 col-xl-3' id='herobtn'>Request Access</button>
        </div>
      </div>
      <div className='col-lg-3 d-none d-sm-none d-md-none d-lg-block c'>
      <img className="cards img-fluid mt-5" src={require('./assets/Cards.svg').default} />
      </div>
      </div>
    </div>

  </div>

      <div className='VYTT container mt-5'>
      <div className='row justify-content-around'>
      <h1 id='hrw'>How rhetora Works</h1>
      <div className='col-lg-6 col-sm-10 c d-flex justify-content-center'>
      <img className='img-fluid' src={require('./assets/talktrack.svg').default} />
      </div>
      <div className='col-lg-4 col-sm-10 c'>
      <p className='my-5' style={{ fontWeight: 600 }}>Join the Waitlist</p>
        <h1>Visualize Your Talk Track</h1>
        <p>There is no better way to navigate a sales call without visualizing
          your talk track tree.
        </p>
      </div>
      </div>
      </div>

      <div className='MCCOSF container mt-5 g'>
      <div className='row justify-content-around'>
      <div className='col-lg-6 col-sm-10 c '>
      <h1 className='tr' style={{ marginTop: 125 }}>Mock Cold Calls Offline Stress-free</h1>
        <p className='tr' >No more awkward mock cold calling sessions with colleagues, practice
          offine in peace.
        </p>
      </div>
      <div className='col-lg-4 col-sm-10 c d-flex justify-content-center'>
      <img className='img-fluid ' src={require('./assets/zoom.svg').default} />
      </div>
      </div>
      </div>

      <div className='SPRR container mt-5'>
      <div className='row justify-content-around'>
      <div className='col-lg-6 col-sm-10 c'>
      <h1 className='tr' style={{ marginTop: 125 }}>
          Script, Practice, <br /> Refine &amp; Repeat
        </h1>
        <p className='tr'>3 Step process to unlock your next level sales person.</p>
      </div>
      <div className='col-lg-4 col-sm-10 c d-flex justify-content-center'>
      <img className='img-fluid' src={require('./assets/diagram.svg').default} />
      </div>
      </div>

      <div className='emailcapture container mt-5 g'>
      <div className='row justify-content-around'>
      <div className='col-lg-12 col-sm-10 c'>
      <h1 style={{ fontWeight: 600, color: "#050038", textAlign:'center', marginTop:70 }}>
      rhetora is <br /> Launching Soon
    </h1>
    <h4 className='tc mt-5' id='dbsp'>Designed by sales professionals, for sales professionals.</h4>
    <h4 className='tc mt-5'>
      Join <span className="waitinglistsignups">426</span> other ambitous
      salespeople on the waitlist.
    </h4>
    <div className="capture d-flex justify-content-center">
    <input id='heroinput' className='col-10 col-lg-7 col-xl-5' placeholder='Enter Your Email'></input>
        <button className='col-10 col-lg-3 col-xl-2' id='herobtn'>Request Access</button>
    </div>
      </div>
      </div>
      </div>

</div>
<footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-3 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-3 text-muted">About Us</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-3 text-muted">Contact</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-3 text-muted">Join Waitlist</a></li>
    </ul>
    <p class="text-center text-muted">© 2022 rhetora</p>
  </footer>
    
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