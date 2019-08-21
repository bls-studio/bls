import React, { Component } from 'react';
import './landing.scss';

// Assets
import iLeft from '../../../dist/assets/left.png';
import iRight from '../../../dist/assets/right.png';
import Wheel from '../../../dist/assets/Scrollwheel.png.svg'

export default class Landing extends Component {
  constructor() {
    super();

    this.state = {
      offset: 0,
    }
    this.parallaxShift = this.parallaxShift.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.parallaxShift);
  }
  parallaxShift = () => {
    this.setState({
      offset: window.scrollY
    });
  };
  // style={{background: `rgba(0, 0, 0, .20`}}
  // ${100 / this.state.offset})`
  // " style={{background: `rgba(0, 0, 0, ${this.state.offset/ 1000})`}
  // style={{opacity: 200 / this.state.offset}}
  render() {
    return(
      <div className="landing">
        <div className="landing__overlay">
          <div className="landing__container">
            <div className="landing__headline" style={{bottom: - this.state.offset / 5}}>
              <h1 className="landing__headline--major">An independent web design studio.</h1>
              <h3 className="landing__headline--minor">Connecting through design, code, & innovation.</h3>
            </div>
            <div className="landing__image">
              <img src={iLeft} className="landing__image--left" alt="" style={{top: -this.state.offset / 20}}/>
              <img src={iRight} className="landing__image--right" alt="" style={{top: this.state.offset / 20}}/>
            </div>
          </div>
          <div className="mouse">
            <div className="mouse__text">scroll</div>
          </div>
          {/* <img src={Wheel} alt="" className="landing__wheel"/> */}
        </div>
      </div>
    )
  }
}