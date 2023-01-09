import {React,useEffect} from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Background from '../assets/Hero-background.svg';
import ReactGA from "react-ga";
import "../styles/contactUsForm.css";
import TwentyNineteen from "../components/TwentyNineteen";

const Contactus = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  },[]);
  
    return (
      <div>
        <Navbar/>
        <div style={{height: "100vh", backgroundImage: `url(${Background})`,  backgroundSize: "cover"}}>
        <div className='d-flex p-5 mt-5 justify-content-end'>
          <TwentyNineteen />
              
          </div>

        </div>
        <Footer/>
      </div>
    );
  };
   
  export default Contactus;