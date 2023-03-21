import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';



const HorizontalNavbar = ()=>{
  return(
    <ul className='nav-menu'>
    <li className='nav-item'>
      <NavLink to='/' className='nav-links'>
        Why rhetora.ai
      </NavLink>
      <div className="dropdown">
      <div style={{flexWrap:'wrap',display:'flex',margin:'1em'}}>
      <div className="containernew">
  <div className="row">
CORE SERVICES</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> Practice mock calls<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> Live call assisstance<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> Automate admin tasks<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>
</div>
      
<div className="containernew" style={{marginLeft:'3rem'}}>
  <div className="row">
SOLUTIONS</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> Build sales scripts<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> Align your cold callers<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>

</div>            
      </div>
      <div style={{display:'block',backgroundColor:'#F4F4F4',margin:'1em'}}>
        <div style={{display:'flex',flex:'1 1 0'}}>
        <button style={{ padding:'0.7em',width:'50%',border:'none',fontWeight:600}}>Platform Overview</button>
        <button style={{ padding:'0.7em',width:'50%',border:'none',borderRadius:'1rem',fontWeight:600}}>Overview</button>
        </div>
      </div>
      </div>
    </li>
    <li className='nav-item'>
      <NavLink to='/useCases' className='nav-links'>
        Use cases
      </NavLink>
      <div className="dropdown" style={{right:'auto'}}>
      <div style={{flexWrap:'wrap',display:'flex',margin:'1em',textAlign:'left',color:'black',fontSize:'1rem',lineHeight:'200%'}}>
      <div>For Sales Reps <br/> For Sales Leaders<br/> For Entrepreneurs</div>

    
      </div>

      </div>
    </li>
    <li className='nav-item'>
      <NavLink to='/pricing' className='nav-links'>
        Pricing
      </NavLink>
    </li>
    <li className='nav-item'>
      <NavLink to='/resources' className='nav-links'>
        Resources
      </NavLink>
      <div className="dropdown" style={{right:'5%'}}>
      <div style={{flexWrap:'wrap',display:'flex',margin:'1em'}}>
      <div className="containernew">

<div className="row">RESOURCES</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> Rebuttal Generator<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> Sales Blog<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>

</div>
      
<div className="containernew" style={{marginLeft:'3rem'}}>
<div className="row tohide" style={{color:"white"}}>RESOURCES</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> Our Story<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> Contact Us<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>

</div>            
      </div>

      </div>
    </li>
    <li className='nav-item tohide' >
      <a href='#' className='nav-links' style={{pointerEvents:'none'}}>
        |
      </a>
    </li>     
    <li className='nav-item'>
      <NavLink to='/bookDemo' className='nav-links'>
        Book a demo
      </NavLink>
    </li>     
    <li className='nav-item'>
      <NavLink to='/login' className='nav-links'>
        Login
      </NavLink>
    </li> </ul>
  )
}



const VerticalNavbar = ({click})=>{
  return(
    <div className={click ? "vertical-menu active":"vertical-menu"} style={{right:'5%'}}>

    <div style={{flexWrap:'wrap',display:'flex',margin:'1em'}}>
    <div className="containernew">
    <div className="row">
Why rhetora.ai</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> Build sales scripts<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> Align your teams<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>

</div>   
<div className="containernew" >
<div className="row tohide" style={{color:"white"}}>
RESOURCES</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> Sales build<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> Integrations<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>

</div>      </div>

<div style={{flexWrap:'wrap',display:'flex',margin:'1em'}}>

    <div className="containernew">
    <div className="row">
Use Cases</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> For Sales Reps<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> For Entreprenuers<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>

</div>    

<div className="containernew" >
<div className="row tohide" style={{color:"white"}}>
RESOURCES</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> For Sales Leaders<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> Contact Us<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>

</div>       </div>

<div style={{flexWrap:'wrap',display:'flex',margin:'1em'}}>

    <div className="containernew">
    <div className="row">
Resources</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> Rebuttal Generator<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> Sales Blog<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> Pricing<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>

</div>    

<div className="containernew" >
<div className="row tohide" style={{color:"white"}}>
RESOURCES</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> Our Story<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>
<div className="row">
<div className="col-image">
<img src={require("../assets/Frame 60783.svg").default} alt="bullet" style={{height:'2.2rem',verticalAlign:'centre'}}/>
</div>
<div className="col-text">

<div style={{paddingTop: '0.5rem', lineHeight:'115%', textAlign:'left',color:'black'}}> Contact Us<br/><small style={{color:'#6D6D6D'}}>this can be a text we use later<br/></small></div>
</div>
</div>

</div>            
    </div>
    <div style={{display:'block',margin:'1em'}}>
              <div style={{display:'flex',flex:'1 1 0'}}>
              <button style={{ padding:'0.7em',width:'100%',border:'none',fontWeight:600,backgroundColor:'#F4F4F4',borderRadius:'0.5rem'}}>Build Sales Scripts</button>
              </div>
            </div>
    </div>
  )
    }




function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
      
            <a href='/' className='navbar-logo'>
            <img style={{verticalAlign:'middle',paddingRight:10, width:'3rem'}}
              src={require("../assets/Logo-Regular.svg").default}
              className="navbar-logo"
              alt="rhetora Logo"
            />
          rhetora.ai
        </a>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
<HorizontalNavbar/>
<VerticalNavbar click={click}/>
      </div>
    </nav>
  );
}

export default Navbar;
