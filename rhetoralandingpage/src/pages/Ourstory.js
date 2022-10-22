import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Background from '/Users/lukaeric/Desktop/rhetora/rhetora/rhetoralandingpage/src/assets/Hero-lines.svg';

const Ourstory = () => {

    return (
      <div>
        <Navbar/>
        <div style={{height: "500px", backgroundImage: `url(${Background})`,  backgroundSize: "cover"}}>
          <div className='container hero'>
            <div className='spacer' style={{height:140}}></div>
          <h1 style={{color:'white'}}>The Story of rhetora</h1>
          <p style={{color:'white'}}>How Dumb & Dumber Met and Launched rhetora</p>
          <button id='herobtn'>Speak With Us</button>
          </div>
        </div>
        <div>
          <div className='d-flex flex-lg-row flex-column'>
          <div className='os-w col-lg-6 col-md-12 flex-column d-flex justify-content-center'>
            <h2 className='os-h2'>1.We met in Highschool</h2>
            <p className='os-p'>There is no better way to navigate a sales call without visualizing your talk track tree.</p>
          </div>
          <div className='os-b col-lg-6 col-md-12 d-flex justify-content-center'>
          <img className="img-fluid mt-5 os-img" src={require('../assets/v1.svg').default} />
          </div>
          </div>
          <div className='d-flex flex-lg-row flex-column'>
          <div className='os-w col-lg-6 col-md-12 flex-column d-flex justify-content-center'>
            <h2 className='os-h2'>2. We started being E-commerce business partners</h2>
            <p className='os-p'>There is no better way to navigate a sales call without visualizing your talk track tree.</p>
          </div>
          <div className='os-b col-lg-6 col-md-12 d-flex justify-content-center'>
          <img className="img-fluid mt-5 os-img-250" src={require('../assets/v2.svg').default} />
          </div>
          </div>
          <div className='d-flex flex-lg-row flex-column'>
          <div className='os-w col-lg-6 col-md-12 flex-column d-flex justify-content-center'>
            <h2 className='os-h2'>3. We realized a common pain with cold calling</h2>
            <p className='os-p'>There is no better way to navigate a sales call without visualizing your talk track tree.</p>
          </div>
          <div className='os-b col-lg-6 col-md-12 d-flex justify-content-center'>
          <img className="img-fluid mt-5 os-img" src={require('../assets/v3.svg').default} />
          </div>
          </div>
          <div className='d-flex flex-lg-row flex-column'>
          <div className='os-w col-lg-6 col-md-12 flex-column d-flex justify-content-center'>
            <h2 className='os-h2'>4. We quit our jobs to build rhetora 7/7 24/24</h2>
            <p className='os-p'>There is no better way to navigate a sales call without visualizing your talk track tree.</p>
          </div>
          <div className='os-b col-lg-6 col-md-12 d-flex justify-content-center'>
          <img className="img-fluid mt-5 os-img-250" src={require('../assets/v4.svg').default} />
          </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  };
  
  export default Ourstory;