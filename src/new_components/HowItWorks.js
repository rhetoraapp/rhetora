import './HowItWorks.css'
import SplitScreen from './SplitScreen';
const aboutSection = ()=>{

    const TailoredComponentLeft = () => {
        return (<div className="float-left">
        <h1 style={{lineHeight:'100%', fontSize:'3.4rem',color:'#ff9933'}}>Tailored Intel<br/><span style={{color:"white"}}>100+ Params</span></h1>
        <p style={{fontSize:'1.1rem',color:'white'}}>Rhetora's AI platform provides personalized sales consulting by deriving 100+ business parameters from user interactions and combining them with market and competitor intelligence. With this understanding of your business and sales cycle, Rhetora helps improve your sales performance and success, available to you 24/7.
              </p>
              <button style={{border:'1px solid rgb(256,256,256)',boxShadow: '0px 0px 2px 1px rgba(256,256,256)',borderRadius: '4rem',padding:'9px',font:'1rem "Segoe UI", Arial, sans-serif',fontWeight:'600',color:'white',background:'transparent'}}>Book a demo</button>
    </div>);
    }    
    const TailoredComponentRight = () => {
      return <div style={{alignItems:'centre',height:'100%'}}>
            <img style={{height:'100%'}}
        src={require("../assets/container.svg").default}
        alt="hero"
        className="float-right"
      />
      </div>;
    }
    
    const RecommendationComponentLeft = () => {
        return (<div className="float-left">
        <h1 style={{lineHeight:'100%',color:'white'}}><span style={{color:"#ff9933",fontSize:'2.2rem'}}> Recommendation</span><br/> Artificial</h1>
        <p style={{fontSize:'1.1rem',color:'white'}}>Rhetora's AI platform provides personalized sales consulting by deriving 100+ business parameters from user interactions and combining them with market and competitor intelligence. 
              </p>
              <button style={{border:'1px solid rgb(256,256,256)',boxShadow: '0px 0px 2px 1px rgba(256,256,256)',borderRadius: '4rem',padding:'9px',font:'1rem "Segoe UI", Arial, sans-serif',fontWeight:'600',color:'white',background:'transparent'}}>Book a demo</button>
    </div>);
    }    
    const RecommendationComponentRight = () => {
      return <div style={{alignItems:'centre',height:'100%'}}>
            <img style={{height:'100%',marginBottom:'65px'}}
        src={require("../assets/container.svg").default}
        alt="hero"
        className="float-right"
      />
      </div>;
    }
    
    
    const StrategicComponentRight = () => {
        return (<div className="float-left">
        <h1 style={{lineHeight:'100%', fontSize:'3.4rem',color:'#ff9933'}}>Be Strategic<br/><span style={{color:"white"}}>Plan Scripts</span></h1>
        <p style={{fontSize:'1.1rem',color:'white'}}>Rhetora's AI platform provides personalized sales consulting by deriving 100+ business parameters from user interactions and combining them with market and competitor intelligence. With this understanding of your business and sales cycle, Rhetora helps improve your sales performance and success, available to you 24/7.
              </p>
    </div>);
    }    
    const StrategicComponentLeft = () => {
      return <div style={{alignItems:'centre',height:'100%'}}>
            <img style={{height:'100%'}}
        src={require("../assets/container.svg").default}
        alt="hero"
        className="float-right"
      />
      </div>;
    }
    
    const UnlimitedCallComponent = () => {
        return (<div className="fadeBox" style={{width:'100%',padding:'20px',margin:'15px',marginLeft:'0',background:'linear-gradient(180deg, #FFCA94 0%, #FFFFFF 100%)',display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
                <div style={{display:'flex'}}><p style={{color:'white',display:'flex',fontSize:'17px',fontWeight:'600'}}>Unlimited Cold Calling Practice</p></div>

        <h1 style={{lineHeight:'100%', fontSize:'3.4rem',color:'white'}}>Unlimited Mock<br/> Cold Calls<br/><span style={{color:"#ff9933"}}>Free Your<br/> Manager's Time</span></h1>
    </div>);
    }    
    const FeelConfidentComponent = () => {
        return (<div className="fadeBox" style={{width:'100%',padding:'20px',margin:'15px',marginRight:'0',background: 'linear-gradient(225deg, #FFFFFF 0%, #FF9933 100%)',display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
                            <div style={{display:'flex'}}><p style={{color:'white',display:'flex',fontSize:'17px',fontWeight:'600'}}>Unlimited Cold Calling Practice</p></div>
        <h1 style={{lineHeight:'100%', fontSize:'3.4rem',color:'rgba(255, 255, 255, 0.6)'}}>No fear.<br/> No stress.<br/></h1><h1 style={{color:"white"}}>Just Book.</h1>
        <button style={{border:'1px solid rgb(256,256,256)',boxShadow: '0px 0px 2px 1px rgba(256,256,256)',borderRadius: '4rem',padding:'9px',font:'1rem "Segoe UI", Arial, sans-serif',fontWeight:'600',color:'white',background:'transparent'}}>Book a demo</button>
    </div>);
    }    
   
    return (
    <div >
        <div className="container">
        <div style={{display:'block',width:'65vw',color:'white',margin:'5rem'}}>
            <img style={{verticalAlign:'middle',paddingRight:10, width:'3.5rem',display:'block'}}
    src={require("../assets/Frame12.svg").default}
    className="navbar-logo"
    alt="rhetora Logo"
  />
  <h1>Sales Intelligence.<br/>Leap Over Competition.</h1>
    <p>Rhetora is an AI tool that helps sellers overcome the challenges of cold calling by providing visual scripts,anxiety-free moock calls, and objection handling recommendations. With Rhetora, sales managers can efficiently train their reps and boost their confidence for better cold call conversion rates and increased revenue
          </p>
          </div>
  
          <img
    src={require("../assets/AIFrame.svg").default}
    className="navbar-logo"
    alt="rhetora Logo"
  />
  <div className="fadeBox" style={{background: 'linear-gradient(17.62deg, #FFB163 9.07%, #FFD9B2 64.89%, #FFFFFF 112.38%, #FFFFFF 169.03%)'}}>
    <div style={{display:'flex',justifyContent:'end',paddingTop:'25px',paddingRight:'25px'}}><p style={{color:'#ff9933',display:'flex',fontSize:'17px',fontWeight:'600'}}>Tailored Company Intelligence</p></div>
    
    <SplitScreen  className="flexbox" leftWeight={1} rightWeight={1}>
        <TailoredComponentLeft/>
        <TailoredComponentRight/>
    </SplitScreen>
    </div>
  <div className="fadeBox" style={{background: 'linear-gradient(324.68deg, #FFBD7A 36.97%, #FFFFFF 123.87%)'}}>
    <div style={{display:'flex',paddingTop:'25px',paddingLeft:'25px'}}><p style={{color:'#ff9933',display:'flex',fontSize:'17px',fontWeight:'600'}}>Strategic Script Planning</p></div>
    
    <SplitScreen  className="flexbox" leftWeight={1} rightWeight={1}>
        <StrategicComponentLeft/>
        <StrategicComponentRight/>
    </SplitScreen>
    </div>

<div style={{width:'85vw'}}>
<SplitScreen  leftWeight={2} rightWeight={1}>
        <UnlimitedCallComponent/>
        <FeelConfidentComponent/>
    </SplitScreen>
</div>

    <div className="fadeBox" style={{background: 'linear-gradient(225deg, #FFFFFF 0%, #FF9933 100%)',margin:'30px'}}>
    <div style={{display:'flex',paddingTop:'25px',paddingLeft:'25px'}}><p style={{color:'white',display:'flex',fontSize:'17px',fontWeight:'600'}}>Unlimited Cold Calling Practice</p></div>
    
    <SplitScreen  leftWeight={1} rightWeight={1}>
        <RecommendationComponentLeft/>
        <RecommendationComponentRight/>
    </SplitScreen>
    </div>

        </div>
  </div>)
}
export default aboutSection