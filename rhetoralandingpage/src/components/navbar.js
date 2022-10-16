import React from 'react';
import $ from 'jquery';

const Home = () => {

    return (
      <div>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid mt-4">
    <a id='navbar-brand-main' className="navbar-brand" href="/">
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
          <a id='homelink' className="nav-link" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="/ourstory">
            Our Story
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="/contactus">
            Contact
          </a>
        </li>
        <li className="nav-item mx-5">
          <a id="joinwaitlistnavbtn" className="nav-link" href="/join">
            Join Waitlist</a>
        </li>
      </ul>
      <a className="navbar-brand" href="#">
    <img src={require('../assets/Logo.svg').default} />
    </a> 
    </div>
  </div>
</nav>
      </div>
    );
  };
  
  export default Home;