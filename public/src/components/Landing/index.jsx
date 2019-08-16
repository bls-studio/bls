import React, { Component } from 'react';
import './landing.scss';

// Assets
import mac from '../../../dist/assets/mac.png'
// import Wheel from '../../SVG/Scrollwheel.png.js'
import Wheel from '../../../dist/assets/Scrollwheel.png.svg'
import puddle from '../../../dist/assets/puddle.png';


export default class Landing extends Component {
  constructor() {
    super();

    this.state = {
      offset: 0
    }

    // this.parallaxShift = this.parallaxShift.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.parallaxShift);
    // console.log(this.state.offset)
  }
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.parallaxShift);
  // }
  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset
    }, console.log(this.state.offset, 'parallax'));
    console.log('hello')
  };
  render() {
    return(
      <div className="landing" style={{ backgroundPositionY: this.state.offset}}>
        <div className="landing__container">
          <img src={puddle} alt="" className="landing__background"/>
          <div className="landing__headline" style={{ bottom: this.state.offset / 4 }}>
            <h1 className="landing__headline--major">An independent web design studio.</h1>
            <h3 className="landing__headline--minor">Connecting through design, code, & innovation.</h3>
          </div>
          <img src={mac} alt="" className="landing__image"/>
          <img src={Wheel} alt="" className="landing__wheel"/>
          {/* <Wheel className="landing__wheel"/> */}
        </div>
        <div className="splash">

        </div>
      </div>
    )
  }
}