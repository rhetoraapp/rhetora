import React from 'react';

const componentDidMount = () => { 
    const el = document.createElement('script');
    el.onload = () => {
      window.Chargebee.init({
        "site": "rhetora-test"
      });
      window.Chargebee.registerAgain();
      // this.setState({ chargebeeReady: true });
    };
    el.setAttribute('src', 'https://js.chargebee.com/v2/chargebee.js');
    document.body.appendChild(el);

    return (
        <button id='herobtn'><a 
        id='herobtn'
        style={{ "text-decoration":"none"}}
        href="javascript:void(0)"
        data-cb-type="checkout" 
        data-cb-item-0="Community-Plan-USD-Monthly" 
        data-cb-item-0-quantity="1" 
        data-cb-item-1="Believer-USD-Monthly" 
        data-cb-item-1-quantity="1" 
        >Sign up</a></button>
)};
  
  export default componentDidMount;