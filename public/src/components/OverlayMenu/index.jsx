import React, { useEffect, useRef } from 'react';
import './overlayMenu.scss';
import { Link } from "react-router-dom";


import { TweenMax, Circ } from 'gsap';


const Menu = (props) => {
  let dropdown = useRef(null);

  useEffect(() => {
    props.dropped ?
    TweenMax.to(dropdown, 1, {y: "0%", ease: Circ.easeInOut})    
    :
    TweenMax.to(dropdown, 1, {y: "-100%", ease: Circ.easeInOut, delay: .5})    

  })
  return (
    <div className="menuOverlay__container" ref={element => dropdown = element}>
      <div className="menu__container">
        <div className="menu__container__header">Menu</div>
        <ul onClick={props.toggle}>
          <li><div className="menu__numbers">01</div><Link to="/" className="menu__item">Home</Link></li>
          <li><div className="menu__numbers">02</div><Link to="/services" className="menu__item">Services</Link></li>
          <li><div className="menu__numbers">03</div><Link to="/works" className="menu__item">Works</Link></li>
          <li><div className="menu__numbers">04</div><Link to="/about" className="menu__item">About</Link></li>
          <li><div className="menu__numbers">05</div><Link to="/contact" className="menu__item">Contact</Link></li>
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