import React, {useEffect, useState } from 'react';
import './about.scss';

// Assets
import iLeft from '../../../dist/assets/left.png';
import iRight from '../../../dist/assets/right.png';
import strategy from '../../../dist/assets/illustrations/strategy.svg';
import design from '../../../dist/assets/illustrations/design.svg';
import technology from '../../../dist/assets/illustrations/technology.svg';

const About = () => {


  return(
    <div className="about">
      <p className="about__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos</p>
      <div className="about__image">
        <img src={iLeft} className="about__image--left" alt="" />
        <img src={iRight} className="about__image--right" alt="" />
      </div>
      {/* <div className="about__header"> */}
        <div className="about__header--left">
          Helping our partners move forward through
        </div>
        <div className="about__header--right">
          Strategy. Design. Content. Technology.
        </div>
      {/* </div> */}
      <div className="about__service__container about__service__container--strategy">
        <img src={strategy} alt=""/>
        <h3 className="about__service__header">Strategy</h3>
        <p className="about__service__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</p>
        <ul className="about__service__items">
          <li>Research & Data</li>
          <li>Research & Data</li>
          <li>Research & Data</li>
          <li>Research & Data</li>
          <li>Research & Data</li>
          <li>Research & Data</li>
        </ul>
      </div>
    </div>
  )
};
export default About;
// style={{top: -offset / 20}}