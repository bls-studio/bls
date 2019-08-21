import React, { Component } from 'react';
import './navbar.scss';
import Menu from '../OverlayMenu';

// Assets
import Logo from '../../SVG/Logo'

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      offset: 0,
      checkbox: false
    }
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }
  listenScrollEvent(e) {
    this.setState({ offset: window.scrollY })
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  _toggleCheckbox() {
    this.setState({checkbox: !this.state.checkbox }, console.log(this.state.checkbox))
  }
  // _toggleMenu() {
  //   if (this.state.checkbox) {
  //     return <Men
  //   }
  // }
  // style={this.state.offset > 50 ? {opacity: "1"} : {opacity: "0"}}
  render() {
    return(
      <div className="navbar" >
        <div className="navbar__container">
          {/* <Logo className="navbar__logo"/> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="55.927" height="57.346" viewBox="0 0 55.927 57.346">
            <g id="Logo" transform="translate(-285.5 -180.707)">
              <path id="Path_1" data-name="Path 1" d="M1233.459,362.586h50.927v33.507l-25.823,17.843-25.1-17.843Z" transform="translate(-945.459 -178.937)" fill="none" stroke="#F7F7F7" stroke-width="5"/>
              <text id="B" transform="translate(301.343 215.422)" fill="#F7F7F7" font-size="34" font-family="HelveticaNeue, Helvetica Neue"><tspan x="0" y="0">B</tspan></text>
              <path id="Path_11" data-name="Path 11" d="M320.371,196.24l19.774-13.466Z" transform="translate(-0.387)" fill="none" stroke="#F7F7F7" stroke-width="5"/>
              <path id="Path_12" data-name="Path 12" d="M288,215.925l18.012-11.291Z" transform="translate(0 0.626)" fill="none" stroke="#F7F7F7" stroke-width="5"/>
            </g>
          </svg>
          <ul className="navbar__items" style={{left: this.state.offset, opacity: 50 / this.state.offset}}>
            <li>About</li>
            <li>Services</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
          <div className="navbar__menu">
            <input type="checkbox" className="toggler" onChange={this._toggleCheckbox.bind(this)}/>
            <div className="hamburger"><div></div></div>
            { this.state.checkbox ? <Menu/> : console.log('closed')}
            {/* { this.state.checkbox ? <Menu className="menu"/> : console.log('closed')} */}
          </div>
        </div>
      </div>
    )
  }
}