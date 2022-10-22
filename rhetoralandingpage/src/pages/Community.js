import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Background from '/Users/lukaeric/Desktop/rhetora/rhetora/rhetoralandingpage/src/assets/background-long.svg';
import slackgraphic from '../assets/slackGraphic.png';
import HubspotForm from 'react-hubspot-form';

const community = () => {

    return (
      <div>
        <Navbar/>
        <div style={{height: "1285px", backgroundImage: `url(${Background})`,  backgroundSize: "cover"}}>
        <div className='container hero'>
            <div className='spacer' style={{height:165}}></div>
          <h1 style={{color:'white', textAlign:'center'}}>Our Invite-Only <br></br>Sales Professionals <br></br>Slack Community </h1>
          <p style={{color:'white', textAlign:'center'}}>Network with some of the brighest sellers</p>
          <button id='herobtn'>Enquire</button>
          <div style={{height: "100vh", backgroundImage: `url(${slackgraphic})`,  backgroundSize: "cover"}}>
          </div>
          </div>
        </div>
        <div className='story d-flex' style={{backgroundColor:"#111B35", height:414}} >
          <div className=''>
            <h3>Over 100+ sales professionals across the world connect daily</h3>
          </div>
          <div className=''>
          <img className='img-fluid' src={require('../assets/Attributes.svg').default} />
          </div>
        </div>
        <Footer/>
      </div>
    );
  };
   
  export default community;