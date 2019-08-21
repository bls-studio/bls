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
          <svg xmlns="http://www.w3.org/2000/svg" width="54.759" height="48.448" viewBox="0 0 54.759 48.448">
            <g id="Logo" transform="translate(-286.5 -182.17)">
              <path id="Path_1" data-name="Path 1" d="M1233.459,362.586h51.759v37.739l-27.544,7.645h0l-24.215-7.645Z" transform="translate(-945.459 -178.917)" fill="#eaeaea" stroke="#060A12" stroke-width="3"/>
              <text id="B" transform="translate(302.56 217.422)" fill="#060A12" font-size="33" font-family="HelveticaNeue-Bold, Helvetica Neue" font-weight="700"><tspan x="0" y="0">B</tspan></text>
              <path id="Path_11" data-name="Path 11" d="M320.371,196.026l17.416-13.252Z" transform="translate(0.086 2.815)" fill="none" stroke="#060A12" stroke-linejoin="round" stroke-width="3"/>
              <path id="Path_12" data-name="Path 12" d="M288,217.449l18.173-12.814Z" transform="translate(1 3.66)" fill="none" stroke="#060A12" stroke-width="3"/>
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