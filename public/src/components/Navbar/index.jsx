import React, { Component } from 'react';
import './navbar.scss';

import Logo from '../../SVG/Logo'

export default class Navbar extends Component {
  render() {
    return(
      <div className="navbar">
        <div className="navbar__container">
          <Logo />
          <ul className="navbar__items">
            <li>About</li>
            <li>Services</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    )
  }
}