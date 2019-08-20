import React, { Component } from 'react';
import './navbar.scss';

import Logo from '../../SVG/Logo'

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      offset: 0,
    }
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }
  listenScrollEvent(e) {
    this.setState({ offset: window.scrollY })
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  menuToggle() {

  }
  render() {
    return(
      <div className="navbar" >
        <div className="navbar__container">
          <Logo className="navbar__logo"/>
          <ul className="navbar__items" style={{left: this.state.offset, opacity: 50 / this.state.offset}}>
            <li>About</li>
            <li>Services</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
          <div className="navbar__menu" style={this.state.offset > 50 ? {opacity: "1"} : {opacity: "0"}}>
            <input type="checkbox" className="toggler" onChange={this.state.checked}/>
            <div className="hamburger"><div></div></div>
            {/* <div className="menu">
              <div>
                <ul>
                  <li>About</li>
                  <li>Services</li>
                  <li>Works</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}