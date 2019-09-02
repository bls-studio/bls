import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
// import Overlay from './Overlay';
import './overlayMenu.scss';

import { TweenMax } from 'gsap';

const overlayRoot = document.getElementById('overlay__root')

const Menu = (props) => {
  let dropdown = useRef(null);

  useEffect(() => {
    console.log(!props.dropped, 'hello')
    props.dropped ?
    TweenMax.to(dropdown, 1, {y: "0%", ease: Power4.easeOut})    
    :
    TweenMax.to(dropdown, 1, {y: "-100%", ease: Power4.easeOut})    
  })

  return (
    <div className="menuOverlay__container" ref={element => dropdown = element}>
      <div className="menu__container">
        <div className="menu__container__header">Menu</div>
        <ul>
          <li><div className="menu__numbers">01</div><a href="" className="menu__item">Home</a></li>
          <li><div className="menu__numbers">02</div><a href="" className="menu__item">Services</a></li>
          <li><div className="menu__numbers">03</div><a href="" className="menu__item">Works</a></li>
          <li><div className="menu__numbers">04</div><a href="" className="menu__item">About</a></li>
          <li><div className="menu__numbers">05</div><a href="" className="menu__item">Contact</a></li>
        </ul>
      </div>
      <div className="menu__contacts">
        <div>blakeswl@blstudio.co</div>
        <div>(323)482-0091</div>
      </div>
    </div>
  )
}
export default Menu;