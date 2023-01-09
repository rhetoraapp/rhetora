import {React,useEffect} from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Background from '../assets/Hero-lines.svg';
import ReactGA from "react-ga";
// import Hero from '../components/Hero/Hero';
// import group48 from '../components/Hero/group48.png';
import Banner from "../components/Hero/BackgroundImg";
const Ourstory = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  },[]);

    return (
      <div>
        <Navbar/>
          <Banner />
        <Footer/>
        
        
        
      </div>
    );
  };
  
  export default Ourstory;