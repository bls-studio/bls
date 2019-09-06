import React, {useEffect, useState, useRef } from 'react';
import {TweenMax, TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";


ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

import './about.scss';

// Assets
import iLeft from '../../../../dist/assets/left.png';
import iRight from '../../../../dist/assets/right.png';
// import strategy from '../../../dist/assets/illustrations/strategy.svg';
// import design from '../../../dist/assets/illustrations/design.svg';
// import technology from '../../../dist/assets/illustrations/technology.svg';
// import shell from '../../../dist/assets/iPhone_X_Isometric_Landscape_Left.png';
// import holding from '../../../dist/assets/screen.png';
// import logo from '../../../dist/assets/logo.png';
// import burger from '../../../dist/assets/burger.png';

const About = () => {
  let iphone__left= useRef(null), iphone__right = useRef(null);
  let shellG = useRef(null), screenG = useRef(null), burgerG = useRef(null), logoG = useRef(null), phone = useRef(null);

  // let tl1 = new TimelineMax();
  // let tl2 = new TimelineMax();

  // const controller = new ScrollMagic.Controller();

  // const scene1 = new ScrollMagic.Scene({
  //   triggerElement: ".sticky",
  //   triggerHook: "onLeave",
  //   duration: "100%"
  // })
  // .setPin(".sticky")
  // .setTween(tl1)
  // .addTo(controller);
  // const scene2 = new ScrollMagic.Scene({
  //   triggerElement: ".sticky",
  //   triggerHook: "onLeave",
  //   duration: "100%"
  // })
  // .setPin(".sticky")
  // .setTween(tl2)
  // .addTo(controller);

  // useEffect(() => {
  //   tl1.to(iphone__left, 1, {x: "-40%"})
  //   .to(iphone__left, .5, {opacity: 0})
  //   // .to(phone, .5, {opacity: 1})
  //   // .to(screenG, .5, {y: -60})
  //   // .to(logoG, .5, {y: -120})
  //   // .to(burgerG, .5, {y: -80})

  //   // .from(phone, .5, {scale: "0"})
  //   ;
  //   tl2.to(iphone__right, 1, {x: "40%"})
  //   .to(iphone__right, .5, {opacity: 0})
  // }, [])
  // const [offset, shiftOffset] = useState(0);
  // const iphoneSeparation = () => {
  //   TweenMax.to(iphone__left, 2, {x: "-30%"})
  //   TweenMax.to(iphone__right, 2, {x: "30%"})
  // }



  // useEffect(() => {
  //   TweenMax.to(iphone__left, 2, {x: "-30%"})
  // },[])
  // useEffect(() => {
  //   TweenMax.to(iphone__right, 2, {x: "30%"})
  // },[])

    // useEffect(() => {
  //   const parallaxShift = () => shiftOffset(window.scrollY)
  //   window.addEventListener('scroll', parallaxShift);

  //   return () => {
  //     window.removeEventListener('click', parallaxShift)
  //   }
  // }, []);
  // useEffect(() => {
  //   TweenMax
  //     .to(screenG, 2, {y: -40})
  // })
  // useEffect(() => {
  //   TweenMax
  //     .to(logoG, 2, {y: -120})
  // })
  // useEffect(() => {
  //   TweenMax
  //     .to(burgerG, 2, {y: -80})
  // })
  return(
    <div className="about">
      <div className="about__container">
        <p className="about__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos</p>
        <div className="about__image" >
          <img src={iLeft} className="about__image--left" alt="" ref={element => iphone__left = element}/>
          <img src={iRight} className="about__image--right" alt="" ref={element => iphone__right = element}/>
        </div>
        {/* <div className="parallax__iphone" ref={element => phone = element}>
          <img className="parallax__iphone parallax__iphone--logo" src={logo} alt="" ref={element => logoG = element}/>
          <img className="parallax__iphone parallax__iphone--burger" src={burger} alt="" ref={element => burgerG = element}/>
          <img className="parallax__iphone parallax__iphone--screen" src={holding} alt=""  ref={element => screenG = element}/>
          <img className="parallax__iphone parallax__iphone--shell" src={shell} alt=""/>
        </div> */}
        <div className="about__header--left">
          Helping our partners move forward through
        </div>
        <div className="about__header--right">
          Strategy. Design. Technology.
        </div>
      </div>
      {/* </div> */}
      {/* <div className="services sticky">
        <div className="service__container">
          <img src={strategy} alt=""/>
          <h3 className="service__header">Strategy</h3>
          <p className="service__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</p>
          <ul className="service__items">
            <li>Research & Data</li>
            <li>Research & Data</li>
            <li>Research & Data</li>
            <li>Research & Data</li>
            <li>Research & Data</li>
            <li>Research & Data</li>
          </ul>
        </div>
        <div className="service__container">
          <img src={design} alt=""/>
          <h3 className="service__header">Design</h3>
          <p className="service__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</p>
          <ul className="service__items">
            <li>Research & Data</li>
            <li>Research & Data</li>
            <li>Research & Data</li>
            <li>Research & Data</li>
            <li>Research & Data</li>
            <li>Research & Data</li>
          </ul>
        </div>
        <div className="service__container">
          <img src={technology} alt=""/>
          <h3 className="service__header">Technology</h3>
          <p className="service__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</p>
          <ul className="service__items">
            <li>Research & Data</li>
            <li>Research & Data</li>
            <li>Research & Data</li>
            <li>Research & Data</li>
            <li>Research & Data</li>
            <li>Research & Data</li>
          </ul>
        </div> */}
      {/* </div> */}
    </div>
  )
};
export default About;
// style={{top: -offset / 20}}