import React from 'react';
import './navbar.scss';

const Menu = () => (
  <div className="menuOverlay__container">
    <div className="menu__container">
      <div className="menu__container__header">Menu</div>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Works</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
    <div className="menu__contacts">
      <div>blakeswl@blstudio.co</div>
      <div>(323)482-0091</div>
      {/* <div></div> */}
    </div>
  </div>
);
export default Menu;