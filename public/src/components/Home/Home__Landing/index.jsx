import React, { useState, useEffect, useRef } from 'react';

import './newLanding.scss';

// Assets
import cutout from '../../../../dist/assets/cutout.svg';
import mountains from '../../../../dist/assets/mountain.png';


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
      <img src={cutout} className="landing__cutout" alt=""/>
      <div className="landing__image__container">
        <img src={mountains} alt="" className="landing__image"  style={{ bottom: offset / 8 }}/>
      </div>
      <div className="landing__headline">
        <div className="landing__headline--major" style={{ bottom: offset / - 20 }}>
          <div className="A">A</div>
          <div className="S" >S</div>
          <div className="C">C</div>
          <div className="E">E</div>
          <div className="N">N</div>
          <div className="D">D</div>
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