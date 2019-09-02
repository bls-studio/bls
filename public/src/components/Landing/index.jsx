import React, { useState, useEffect, useRef } from 'react';

import './newLanding.scss';

// Assets
import mountains from '../../../dist/assets/mountains.png';


const Landing = () => {
  const [offset, shiftOffset] = useState(0);
  
  
  useEffect(() => {
    const parallaxShift = () => shiftOffset(window.scrollY)
    window.addEventListener('scroll', parallaxShift);
  
    return () => {
      window.removeEventListener('scroll', parallaxShift)
    }
  }, []);



  return(
    <div className="landing">
      <div className="landing__image">
        <img src={mountains} alt="" className="parallax__image"/>
      </div>
      <div className="landing__headline">
        <div className="landing__headline--major">
          <div className="A">A</div>
          <div className="S" style={{ bottom: offset / 20 }}>S</div>
          <div className="C">C</div>
          <div className="E" style={{ bottom: offset / 20 }}>E</div>
          <div className="N">N</div>
          <div className="D" style={{ bottom: offset / 20 }}>D</div>
        </div>
        <div className="landing__headline--minor">
          <h3>A creative web development studio.</h3>
        </div>
      </div>
      <div className="mouse">
        <div className="mouse__text">scroll</div>
      </div>
    </div>
  )
}

export default Landing;