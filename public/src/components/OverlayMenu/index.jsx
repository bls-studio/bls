import React, { useEffect, useRef } from 'react';
import './overlayMenu.scss';

import { TweenMax, Circ } from 'gsap';


const Menu = (props) => {
  let dropdown = useRef(null);

  useEffect(() => {
    props.dropped ?
    TweenMax.to(dropdown, 1, {y: "0%", ease: Circ.easeInOut})    
    :
    TweenMax.to(dropdown, 1, {y: "-100%", ease: Circ.easeInOut})    
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