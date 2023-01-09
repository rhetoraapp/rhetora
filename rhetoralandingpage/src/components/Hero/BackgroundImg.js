import React from 'react';
import img from './Hero.png';
const Banner = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(" + img + ")" }}>
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 xl:py-48">
        
      </div>
    </div>
  );
}

export default Banner;