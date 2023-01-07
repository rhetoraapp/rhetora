import {React,useEffect} from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Background from '../assets/Hero-background.svg';
import HubspotForm from 'react-hubspot-form';
import ReactGA from "react-ga";
import "../styles/joinWaitListForm.css";

const Join = () => {

useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  },[]);

    return (
      <div>
        <Navbar/>
        <div style={{height: "100vh", backgroundImage: `url(${Background})`,  backgroundSize: "cover"}}>
          <div className='d-flex justify-content-center'>
          <div className='col-8 mt-5 d-flex justify-center flex-column'>
            <h1 className='tc mt-5'>rhetora is <br></br>Launching Soon</h1>
            <p className='tc'>Designed by sales professionals, for sales professionals.</p>
            <div id='cinputdiv' className=''>
            <HubspotForm
            portalId='22700288'
            formId='5d003db2-c7e7-4230-b51f-cf526b584d4b'
            onSubmit={() => console.log('Submit!')}
            onReady={(form) => console.log('Form ready!')}
            loading={<div>Loading...</div>}
            />
          </div>

          </div>

        </div>
      </div>
      <Footer/>
      </div>
    );
  };
   
  export default Join;