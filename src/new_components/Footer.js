import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import Union from '../assets/Union1.svg'
import { AiFillFacebook, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';



const Footer = ()=>{
  return(     
 <div style={{backgroundImage:`url(${Union})`, width:'100%',backgroundSize:'cover',overflow:"hidden"}}>
 <div style={{margin:'15%',color:'white',fontWeight:'600'}}>
    <div style={{flexWrap:'wrap', display:'flex',margin:'1em'}}>
    <div className='footer-item hide'>24-hour support</div>
    <div className='footer-item hide'>Serious about security & privacy</div>
    <div className='footer-item hide'>Highest levels of uptime the last 12 months</div>
</div> 
<div style={{display:'flex',flexWrap:'wrap'}}>
  <div style={{flexWrap:'wrap',display:'flex',margin:'1em',flexGrow: 1}}>
    <div className='footer-item' style={{flexGrow: '1'}}>rhetora</div>
    <div className='footer-item' style={{flexWrap:'wrap',display:'flex',justifyContent: 'space-evenly',flexGrow: '1'}}>
    <div >Home</div>
    <div>|</div>
    <div>Why rhetora.ai</div>
    <div>|</div>
    <div>Use Cases</div>
    <div>|</div>
    <div>Pricing</div>
    <div>|</div>
    <div>Resources</div>
    <div>|</div>
    <div>Book a Demo</div>
    </div>
    
</div> 
<div  style={{flexWrap:'wrap',display:'flex',justifyContent: 'space-evenly',flexGrow: 1}}>
    <div className='footer-item'><FaLinkedin/></div>
    <div className='footer-item'><FaFacebook/></div>
    <div className='footer-item'><FaInstagram/></div>
    <div className='footer-item'><FaTwitter/></div>
 </div> 
</div>

  </div>
  </div>
);
}

export default Footer;
