import React from 'react';
import Navbar from '../components/navbar';
import SignupButton from '../components/signupButton';
import Footer from '../components/footer';
import Background from '/Users/lukaeric/Desktop/rhetora/rhetora/rhetoralandingpage/src/assets/Hero-lines.svg';
import slackgraphic from '../assets/slackGraphic.png';

const invited = () => {

    return (
        <div>
          <Navbar/>
          <div style={{height: "1268px", backgroundImage: `url(${Background})`,  backgroundSize: "cover"}}>
          <div className='container hero d-flex flex-column justify-content-around align-items-center'>
              <div className='spacer' style={{height:200}}></div>
            <h1 style={{color:'white', textAlign:'center'}}>You're Invited!</h1>
            <p style={{color:'white', textAlign:'center'}}>Looking forward to seeing you at our launch event Nov. 14th</p>
            <div style={{"width":"40%"}} className='d-flex justify-content-around align-items-center mt-5'>
            <SignupButton/>   
            <button id='herobtn'><a href="/community" id='herobtn'>Learn More</a></button>
            </div>
            <div className='spacer' style={{height:80}}></div>
            <div style={{width:"80vw",height: "750px", backgroundImage: `url(${slackgraphic})`,  backgroundSize: "cover"}}>
            </div>
            </div>
          </div>
          <Footer/>
        </div>
      );
    };
   
  export default invited;