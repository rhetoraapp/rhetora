import React from 'react';
import Navbar from '../components/navbar';
import SignupButton from '../components/communitywaitlist';
import Footer from '../components/footer';
import Background from '/Users/lukaeric/Desktop/rhetora/rhetora/rhetoralandingpage/src/assets/Hero-lines.svg';
import slackgraphic from '../assets/slackGraphic.png';

const invited = () => {

    return (
        <div>
          <Navbar/>
          <div id='i-background' style={{backgroundImage: `url(${Background})`,  backgroundSize: "cover"}}>
          <div className='container hero d-flex flex-column justify-content-around align-items-center'>
              <div className='spacer' style={{height:200}}></div>
            <h1 style={{color:'white', textAlign:'center'}}>You're Invited</h1>
            <p style={{color:'white', textAlign:'center'}}>Looking forward to seeing you at our launch event on Dec 1st!</p>
            <div className='d-flex justify-content-around align-items-center mt-5 i-btn'>
            <SignupButton/>   
            <button id='herobtn2'><a href="/community" id='herobtn2'>Learn More</a></button>
            </div>
            <div className='spacer' style={{height:80}}></div>
            <div className='i-img' style={{width:"80vw", backgroundImage: `url(${slackgraphic})`,  backgroundSize: "cover"}}>
            </div>
            </div>
          </div>
          <Footer/>
        </div>
      );
    };
   
  export default invited;