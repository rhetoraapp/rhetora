import React from 'react';
import svg from './Hero.svg';
function HeroSVG(props) {
  return (
    <svg width={props.width} height={props.height} viewBox="0 0 100 100">
      {svg}
    </svg>
  );
}

export default HeroSVG;