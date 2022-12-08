import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Background from '../assets/background-long.svg';
import slackgraphic from '../assets/slackGraphic.png';
import HubspotForm from 'react-hubspot-form';

const community = () => {

    return (
      <div>
        <Navbar/>
        <div id='c-background' style={{backgroundImage: `url(${Background})`,  backgroundSize: "cover"}}>
        <div className='container hero'>
            <div className='spacer' style={{height:165}}></div>
          <h1 style={{color:'white', textAlign:'center'}}>Our Invite-Only <br></br>Sales Professionals <br></br>Slack Community </h1>
          <p style={{color:'white', textAlign:'center'}}>Network with some of the brighest sellers</p>
          <div className="d-flex justify-content-center align-items-center">
          <button id='herobtn2'><a href="#enquire" id='herobtn2'>Enquire</a></button>
          </div>
          <div id='c-slackgraphic' style={{backgroundImage: `url(${slackgraphic})`,  backgroundSize: "cover"}}>
          </div>
          </div>
        </div>
        <div style={{backgroundColor:"#111B35", height:414}} className="d-flex justify-content-center align-items-center'">
        <div  style={{"width":"80%"}} className='story d-flex flex-lg-row flex-column justify-content-around align-items-center'>
          <div className='text-white'>
            <h3>Over 100+ sales professionals <br></br> around the world connect daily</h3>
          </div>
          <div>
          <img className='img-fluid' src={require('../assets/Attributes.svg').default} />
          </div>
          </div>
        </div>
        <div style={{height: "900px"}}>
          <h1 id='enquire' style={{textAlign:"center", marginTop:170, "color":"#050038"}}>Community, <br></br> without Limits.</h1>
        <div className='emailcapture container mt-5 g'>
      <div className='row justify-content-around'>
      <div className='col-lg-12 col-sm-10 c n'>
      <h1 style={{ fontWeight: 600, color: "#050038", textAlign:'center', marginTop:120 }}>
      Enquire
    </h1>
    <h4 className='tc' style={{marginTop:100}}>
    We’ll reach out with more information about our community
    </h4>
    <div className="capture d-flex justify-content-center mt-4">
    <HubspotForm
            portalId='22700288'
            formId='521db1b3-1952-49a9-893b-c45a72bbfe05'
            onSubmit={() => console.log('Submit!')}
            onReady={(form) => console.log('Form ready!')}
            loading={<div>Loading...</div>}
            />
    {/* <input id='heroinput' className='col-10 col-lg-7 col-xl-5' placeholder='Enter Your Email'></input>
        <button className='col-10 col-lg-3 col-xl-2' id='herobtn'>Request Access</button> */}
    </div>
      </div>
      </div>
      </div>

        </div>
        <Footer/>
      </div>
    );
  };
   
  export default community;