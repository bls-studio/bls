import React, { Component } from 'react';
import './navbar.scss';

import Logo from '../../SVG/Logo'

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      header: {
        width: "100%"
      },
      offset: 0,
    }
    // this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }
  // listenScrollEvent(e) {
  //   // this.setState({ offset: window.scrollY })
  //   if (window.scrollY > 300) {
  //     this.setState({header: {transition: ".3s ease-in", width: "0"}}
  //     , console.log(window.pageYOffset))
  //   } else {
  //     this.setState({header: {transition: ".3s ease-in", width: "100%"}})
  //   }
  // }
  // componentDidMount() {
  //   window.addEventListener('scroll', this.listenScrollEvent)
  // }
  render() {
    return(
      <div className="navbar">
        <div className="navbar__container">
          <Logo />
          <div className="navbar__menu">
            <input type="checkbox" className="toggler"/>
            <div className="hamburger"><div></div></div>
            {/* <ul className="navbar__items" style={this.state.header}>
              <li>About</li>
              <li>Services</li>
              <li>Works</li>
              <li>Contact</li>
            </ul> */}

          </div>
        </div>
      </div>
    )
  }
}