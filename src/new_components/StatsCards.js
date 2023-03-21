import './HowItWorks.css'
import SplitScreen from './SplitScreen';
import Footer from './Footer';
const StatSection = ()=>{
    
    const IntegrationsComponentRight = () => {
        return (<div className="float-left" style={{padding:'2rem'}}>
        
        <p style={{fontSize:'1.1rem',color:'white'}}>Yield farming, Elon-led fearless Martian Pioneer. Tragically market capped Bitcoin miner. Miami-based VC scout. Softbank-injected dropbox alternative. Friends and Family raising, rationalist Job-seeker Friends and Family raising, rationalist Job-seeker
              </p>
              <button style={{border:'1px solid rgb(256,256,256)',boxShadow: '0px 0px 2px 1px rgba(256,256,256)',borderRadius: '4rem',padding:'9px',font:'1rem "Segoe UI", Arial, sans-serif',fontWeight:'600',color:'white',background:'transparent'}}>Book a demo</button>
    </div>);
    }    
    const IntegrationsComponentLeft = () => {
      return <div style={{alignItems:'centre',alignContent:'center',justifyContent:'center',display:'flex',width:'100%'}}>
            <div style={{width:'90%',alignItems:'centre',flexWrap:'wrap',alignContent:'center', justifyContent:'center',display:'flex'}}>
           <div><div>
           <img
        src={require("../assets/Frame 11.svg").default}
        alt="hero"
      />
            <img
        src={require("../assets/Frame 11-1.svg").default}
        alt="hero"
      />
            <img
        src={require("../assets/Frame 12.svg").default}
        alt="hero"
      />
            <img
        src={require("../assets/Frame 13.svg").default}
        alt="hero"
      />
           </div>
            <div>
            <img
        src={require("../assets/Frame 14.svg").default}
        alt="hero"
      />
            <img
        src={require("../assets/Frame 15.svg").default}
        alt="hero"
      />
            <img
        src={require("../assets/Frame 16.svg").default}
        alt="hero"
      />
            <img
        src={require("../assets/Frame 17.svg").default}
        alt="hero"
      />
            </div>
           <div>
           <img
        src={require("../assets/Frame 18.svg").default}
        alt="hero"
      />
            <img
        src={require("../assets/Frame 19.svg").default}
        alt="hero"
      />
            <img
        src={require("../assets/Frame 20.svg").default}
        alt="hero"
      />
            <img
        src={require("../assets/Frame 21.svg").default}
        alt="hero"
      />
           </div></div>
            </div>
      </div>;
    } 
   
    return (
    <div >
        <div className="container" style={{backgroundColor:'#FFEBD7'}}>
        <div style={{display:'block',width:'65vw',color:'#ff9933'}}>
  <h1>In your world<br/><span style={{color: '#FFC387'}}>You can create <br/>unreal beauty</span></h1>
    <p style={{color:'#757575'}}>Product Hunt posting, digital E-vape tool. San Francisacan contrarian Conference attendee SPAC leading Testflight user. First mover-advantage TechCrunch reader. Alexis Ohanian-tweeted overhyped ed-Tech series D. VR headset wearable network effect.
          </p>
          </div>
  
          <img
    src={require("../assets/MacBook Pro 16.svg").default}
    className="navbar-logo"
    alt="rhetora Logo"
    style={{padding:'30px',marginBottom:'55px'}}
  />

<div className="fadeBoxContainer" style={{background:'none',width:'87vw',justifyContent:'space-evenly'}}>
    <div className="fadeBox small" style={{display:'flex',height:'400px',alignItems: 'stretch',background: 'linear-gradient(161.68deg, #FF9933 27.22%, rgba(255, 153, 51, 0.54) 99.98%)'}}>
    <div style={{display:'flex',paddingTop:'25px',paddingLeft:'25px'}}><p style={{color:'white',display:'flex',fontSize:'17px',fontWeight:'600'}}>Feature</p></div>

    </div>
    <div className="fadeBox small" style={{display:'flex',height:'400px',alignItems: 'stretch',background: 'linear-gradient(187.48deg, #FF9933 21.08%, rgba(255, 153, 51, 0.54) 97.28%)'}}>
    <div style={{display:'flex',paddingTop:'25px',paddingLeft:'25px'}}><p style={{color:'white',display:'flex',fontSize:'17px',fontWeight:'600'}}>Feature</p></div>

    </div>
    <div className="fadeBox small" style={{display:'flex',height:'400px',alignContent:'center',alignItems: 'stretch',background: 'linear-gradient(18.34deg, #FF9933 27.16%, rgba(255, 153, 51, 0.54) 100%)'}}>
    <div style={{display:'flex',paddingTop:'25px',paddingLeft:'25px'}}><p style={{color:'white',display:'flex',fontSize:'17px',fontWeight:'600'}}>Feature</p></div>

    </div>
</div>

    <div className="fadeBox" style={{background: 'linear-gradient(180deg, #FF9933 0%, rgba(255, 153, 51, 0.89) 70.26%, #FFD7AF 110.57%)'}}>
    <div style={{display:'flex',paddingTop:'25px',paddingLeft:'25px'}}><p style={{color:'white',display:'flex',fontSize:'17px',fontWeight:'600'}}>Unlimited Cold Calling Practice</p></div>
    
    <SplitScreen  leftWeight={1} rightWeight={1}>
        <IntegrationsComponentLeft/>
        <IntegrationsComponentRight/>
    </SplitScreen>
    </div>

<Footer/>

        </div>
  </div>)
}
export default StatSection