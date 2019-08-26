import React, { useState, useEffect } from 'react';
import './landing.scss';

// Assets
import smilingMobile from '../../../dist/assets/girl3.png';


const Landing = () => {
  const [offset, shiftOffset] = useState(0);

  useEffect(() => {
    const parallaxShift = () => shiftOffset(window.scrollY)
    window.addEventListener('scroll', parallaxShift);

    return () => {
      window.removeEventListener('click', parallaxShift)
    }
  }, []);

  return(
    <div className="landing">
      <svg id="elipse1" xmlns="http://www.w3.org/2000/svg" width="385" height="385" viewBox="0 0 385 385">
        <g id="Ellipse_1" data-name="Ellipse 1" fill="none" stroke="#c7a47a" stroke-width="8">
          <circle cx="192.5" cy="192.5" r="192.5" stroke="none"/>
          <circle cx="192.5" cy="192.5" r="188.5" fill="none"/>
        </g>
      </svg>
      <div className="landing__headline">
        <h1 className="landing__headline--major">Putting on smiles through design, code, & innovation.</h1>
        <h3 className="landing__headline--minor">An creative web development studio.</h3>
        <button className="landing__cta">Let's talk</button>
      </div>
      <div className="landingImage__container">
        <img src={smilingMobile} alt="" className="smilingMobile"/>
      </div>
      <div className="mouse">
        <div className="mouse__text">scroll</div>
      </div>
    </div>
  )
}

export default Landing;