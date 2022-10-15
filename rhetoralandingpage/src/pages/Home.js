import React from 'react';
import Navbar from '../components/navbar';
import HubspotForm from 'react-hubspot-form';

const Home = () => {

    return (
      <div>
       <div className="heronav">
        <Navbar/>
    <div className='hero container mt-5'>
      <div className='row justify-content-around'>
      <div className='col-lg-8 col-sm-10 c'>
      <div className='row'>
          <h1 id='herotitle'> True Cold <br /> Calling Confidence <br /> Coming Soon</h1>
          <p id='herop'>Mock Authentic Cold Calls without Losing Business</p>
        </div>
        <div className='d-flex justify-content-md-start justify-content-around'>
        <HubspotForm
            portalId='22700288'
            formId='521db1b3-1952-49a9-893b-c45a72bbfe05'
            onSubmit={() => console.log('Submit!')}
            onReady={(form) => console.log('Form ready!')}
            loading={<div>Loading...</div>}
            />
        {/* <input id='heroinput' className='row-10 col-lg-8 col-xl-6' placeholder='Enter Your Email'></input>
        <button className='row-10 col-lg-4 col-xl-3' id='herobtn'>Request Access</button> */}
        </div>
      </div>
      <div className='col-lg-3 d-none d-sm-none d-md-none d-lg-block c'>
      <img className="img-fluid mt-5" src={require('../assets/Cards.svg').default} />
      </div>
      </div>
    </div>

  </div>

      <div className='VYTT container mt-5'>
      <div className='row justify-content-around'>
      <h1 id='hrw'>How rhetora Works</h1>
      <div className='col-lg-6 col-sm-10 c d-flex justify-content-center'>
      <img className='img-fluid' src={require('../assets/talktrack.svg').default} />
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
      <img className='img-fluid ' src={require('../assets/zoom.svg').default} />
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
      <img className='img-fluid' src={require('../assets/diagram.svg').default} />
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
<footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-3 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-3 text-muted">About Us</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-3 text-muted">Contact</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-3 text-muted">Join Waitlist</a></li>
    </ul>
    <p class="text-center text-muted">© 2022 rhetora</p>
  </footer>
      </div>
    );
  };
  
  export default Home;