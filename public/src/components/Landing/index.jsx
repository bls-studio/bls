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
    window.addEventListener('scroll', this.parallaxShift, true);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallaxShift);
  }
  parallaxShift = () => {
    this.setState({
      offset: window.scrollY
    }, 
    // console.log(this.state.offset)
    );
  };
  render() {
    return(
      <div className="landing">
        <div className="landing__container">
          <div className="landing__headline">
            <h1 className="landing__headline--major">An independent web design studio.</h1>
            <h3 className="landing__headline--minor">Connecting through design, code, & innovation.</h3>
          </div>
          <div className="landing__image">
            <img src={iLeft} alt="" />
            <img src={iRight} alt=""/>
          </div>
        </div>
        <img src={Wheel} alt="" className="landing__wheel"/>
      </div>
    )
  }
}