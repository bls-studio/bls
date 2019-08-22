import React, { useState, useEffect } from 'react';
import './landing.scss';

// Assets
import shell from '../../../dist/assets/iPhone_X_Isometric_Landscape_Left.png';
import holding from '../../../dist/assets/screen.png';
import logo from '../../../dist/assets/logo.png';
import burger from '../../../dist/assets/burger.png';

const Landing = () =>  {
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
      <div className="landing__overlay">
        <div className="landing__container">
          <div className="landing__headline">
            <h1 className="landing__headline--major">An independent web design studio.</h1>
            <h3 className="landing__headline--minor">Connecting through design, code, & innovation.</h3>
          </div>
          <div className="landing__image">
            <img className="parallax__image parallax__image--logo" src={logo} alt="" style={{ bottom: offset / 2, transform: `skew(${offset / 10}deg)` }}/>
            <img className="parallax__image parallax__image--burger" src={burger} alt="" style={{ bottom: offset / 3, transform: `skew(${offset / 15}deg)` }}/>
            <img className="parallax__image parallax__image--screen" src={holding} alt="" style={{ bottom: offset / 4, transform: `skew(${offset / 20}deg)` }}/>
            <img className="parallax__image parallax__image--shell" src={shell} alt=""/>
          </div>
        </div>
        <div className="mouse">
          <div className="mouse__text">scroll</div>
        </div>
      </div>
    </div>
  )
}
export default Landing;