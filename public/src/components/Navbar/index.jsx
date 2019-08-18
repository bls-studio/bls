import React, { Component } from 'react';
import './navbar.scss';

import Logo from '../../SVG/Logo'

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      header: {
        background: "none"
      },
    }
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }
  listenScrollEvent(e) {
    if (window.scrollY > 900) {
      this.setState({header: {background:'#1D325A', boxShadow: "0 0 3px rgba(0,0,0,.15)", transition: ".1s ease-in"}}
      , console.log(window.pageYOffset))
    } else {
      this.setState({header: {background: 'none', boxShadow: "none", transition: ".1s ease-in"}})
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  render() {
    return(
      <div className="navbar" style={this.state.header}>
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