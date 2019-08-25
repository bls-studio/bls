import React from 'react';
import './services.scss';

import strategy from '../../../dist/assets/illustrations/strategy.svg';
import design from '../../../dist/assets/illustrations/design.svg';
import technology from '../../../dist/assets/illustrations/technology.svg';


const Services = () => (
  <div className="services">
    <div className="service__container">
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
    <img src={strategy} alt=""/>
    <img src={design} alt=""/>
    <div className="service__container">
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
    <img src={technology} alt=""/>
  </div>
);
export default Services;