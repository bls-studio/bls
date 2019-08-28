import React, { useState, useEffect, useRef } from 'react';
import {TweenMax, TimelineMax, Power0, Bounce} from 'gsap';

import './landing.scss';

// Assets
import smilingMobile from '../../../dist/assets/ascend--foreground--cropped.png';


const Landing = () => {
  const [offset, shiftOffset] = useState(0);
  let tl = new TimelineMax();
  
  let landingImage = useRef(null);
  let landingHeader = useRef(null);
  let landingBackground = useRef(null);
  let transition = `ease: "cubicBezier(1,.25,0,.75)"`
  
  useEffect(() => {
    const parallaxShift = () => shiftOffset(window.scrollY)
    window.addEventListener('scroll', parallaxShift);
  
    return () => {
      window.removeEventListener('scroll', parallaxShift)
    }
  }, []);

  useEffect(() => {
    tl
    // .set(landingImage, {y: 50})
    .to(landingImage, .4, {y: -200, transition})
    .to(landingBackground, .2, {transform: "scale(1)", transition})
    .to(landingHeader, .5, {opacity: 1})
    .to(landingImage, 1, {y: 0})
  })
  // useEffect(() => {
  //   TweenMax.to(
  //     landingImage,
  //     4,
  //     {y: "-100"}
  //   )
  // }, [])
  // useEffect(() => {
  //   TweenMax
  //   // .set(landingBackground, {transform: "scale(0)"})
  //   .to(
  //     landingBackground,
  //     1,
  //     {transform: "scale(1)", ease: "cubicBezier(1,.25,0,.75)"}
  //   )
  // })
  // useEffect(() => {
  //   TweenMax
  //   .to(
  //     landingHeader,
  //     1,
  //     {opacity: "1", ease: "cubicBezier(1,.25,0,.75)"}
  //   )
  // })


  return(
    <div className="landing">
      <svg ref={element => landingBackground = element} className="landing__background" xmlns="http://www.w3.org/2000/svg"  width="1920" height="1080" viewBox="0 0 1920 1080">
        <rect id="Rectangle_253" data-name="Rectangle 253" width="1920" height="1080" fill="#161d25"/>
      </svg>
      <div className="landing__overlay">
        <div className="landing__container">
          <div className="landing__headline" ref={element => landingHeader = element}>
            <h1 className="landing__headline--major">A creative web development studio.</h1>
            <h3 className="landing__headline--minor">Ascending through code, design, & innovation.</h3>
            <button className="landing__cta">Let's talk</button>
          </div>
          <div className="landing__image">
            <img src={smilingMobile} alt="" className="parallax__image" style={{bottom: offset / 4}} ref={element => landingImage = element}/>
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