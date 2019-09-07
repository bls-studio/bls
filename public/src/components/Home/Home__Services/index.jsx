import React from 'react';
import './services.scss';

// Assets
import strategy from '../../../../dist/assets/illustrations/strategy.svg';
import design from '../../../../dist/assets/illustrations/design.svg';
import technology from '../../../../dist/assets/illustrations/technology.svg';

const Services = () => (
  <div className="services sticky">
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
    </div> 
  </div>
)
export default Services;
{/* </div> */}