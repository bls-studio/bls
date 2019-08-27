import React, { useState, useEffect, useRef } from 'react';
import {TweenMax, Linear} from 'gsap';
import './landing.scss';

// Assets
import smilingMobile from '../../../dist/assets/ascend--foreground--cropped.png';


const Landing = () => {
  const [offset, shiftOffset] = useState(0);
  
  let landingImage = useRef(null);
  let landingHeader = useRef(null);
  
  useEffect(() => {
    const parallaxShift = () => shiftOffset(window.scrollY)
    window.addEventListener('scroll', parallaxShift);
  
    return () => {
      window.removeEventListener('scroll', parallaxShift)
    }
  }, []);
  useEffect(() => {
    TweenMax.to(
      landingImage,
      20,
      {y: -100}
    )
  }, [])
  // useEffect(() => {
  //   TweenMax
  //   // .set(landingHeader, {opacity: "0"})
  //   .to(
  //     landingHeader,
  //     5,
  //     {opacity: "1"}
  //   )
  // })


  return(
    <div className="landing">
      <div className="landing__container">
        <div className="landing__headline"  ref={element => { landingHeader = element}}>
          <h1 className="landing__headline--major">A creative web development studio.</h1>
          <h3 className="landing__headline--minor">Ascending through code, design, & innovation.</h3>
          <button className="landing__cta">Let's talk</button>
        </div>
        <div className="landing__image">
          <img src={smilingMobile} alt="" className="parallax__image" ref={element => {landingImage = element}} style={{bottom: offset / 4}}/>
        </div>
        <div className="mouse">
          <div className="mouse__text">scroll</div>
        </div>

      </div>
    </div>
  )
}

export default Landing;