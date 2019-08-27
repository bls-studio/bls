import React, { useState, useEffect } from 'react';
import './landing.scss';

// Assets
import smilingMobile from '../../../dist/assets/ascend--foreground--cropped.png';


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
      <div className="landing__container">
        <div className="landing__headline">
          <h1 className="landing__headline--major">A creative web development studio.</h1>
          <h3 className="landing__headline--minor">Connecting through code, design, & innovation.</h3>
          <button className="landing__cta">Let's talk</button>
        </div>
        <div className="landing__image">
          <img src={smilingMobile} alt="" className="parallax__image" style={{ bottom: offset / 2 }}/>
        </div>
        <div className="mouse">
          <div className="mouse__text">scroll</div>
        </div>

      </div>
    </div>
  )
}

export default Landing;