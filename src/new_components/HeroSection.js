import "./HeroSection.css"
import React, {useState} from "react";
import Player from "./VideoPlayer";

const LeftHandComponent = () => {
	return (<div className="float-left">
    <h1 style={{lineHeight:'100%', fontSize:'3rem'}}>Eliminate Cold Calling Anxiety</h1>
    <p style={{fontSize:'1.1rem'}}>Empower your salesforce with the confidence, knowledge, and skills using the first AI cold calling coach for unlimited mock calls. Ramp sales reps in days, instead of weeks without burning your lead list.
          </p>
<div style={{outline:'1px solid rgb(216, 213, 213)',borderRadius: '4rem',width:'90%',marginTop:'25px'}}>
    <button style={{border:'none',borderRadius: '4rem',margin:'7px',padding:'9px',font:'0.9rem "Segoe UI", Arial, sans-serif',fontWeight:'600',color:'white',backgroundColor:'#ff9933'}}>EARLY ACCESS</button>
          <input type='email' className="input-field" ></input>
</div>          </div>);
}

const RightHandComponent = () => {
  const [show,setShow] = useState(false)
  return <div style={{alignItems:'centre',height:'100%'}}>
<Player onClose={()=>setShow(false)} show={show}/>
        <img style={{height:'100%'}}
    src={require("../assets/container.svg").default}
    alt="hero"
    className="float-right"
    // onClick={()=>setShow(true)}
  />
  </div>;
}

const HeroSection = () => {
	return (
		<div style={{width:'100vw'}}>
            <div className="flexbox" >
			<div style={{flex:4}}>
				<LeftHandComponent style={{display:'flex',alignItems:'center',justifyContent:'center'}}/>
			</div>
			<div style={{flex:4}}>
				<RightHandComponent style={{verticalAlign:'middle',height:'100%'}}/>
			</div>
		</div>


<div style={{display:'block',width:'80vw',margin:'0 auto', marginBottom:'3rem',textAlign:'center',padding:'15px'}}>
  <p style={{ color: "#797d85", fontWeight:'600', lineHeight:'200%',padding:'15px',fontSize:'1.2rem'}}>AS SEEN ON</p>
  <div className="flexbox">
    <div style={{flex:4}}>
      <a href="https://disruptmagazine.com/accelerate-your-startups-growth-with-rhetoras-ai-powered-sales-training/" target="_blank" rel="noopener noreferrer"><img
        src={require("../assets/disrupt.svg").default}
        alt="disrupt"
        className="m-0"
      /></a>
    </div>
    <div style={{flex:7}}>
    <a href="https://www.digitaljournal.com/pr/join-the-startup-revolution-with-rhetoras-ai-driven-sales-training-platform-based-in-the-uae" target="_blank" rel="noopener noreferrer"><img
        src={require("../assets/digitaljournal.svg").default}
        alt="digital"
        className="m-0"
      /></a>
    </div>
    <div style={{flex:5}}>
    <a href="https://timebusinessnews.com/experience-the-future-of-sales-training-with-rhetora-the-ai-powered-startup-based-in-the-uae/" target="_blank" rel="noopener noreferrer"><img
        src={require("../assets/timesbusinessnews.svg").default}
        alt="tbn"
        className="m-0"
      /></a>
    </div>
  </div>
</div>
      </div>  
	);
};

export default HeroSection