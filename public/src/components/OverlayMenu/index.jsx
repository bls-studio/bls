import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Overlay from './Overlay';
import './overlayMenu.scss';

const overlayRoot = document.getElementById('overlay__root')

// export default class Menu extends Component { 
//   constructor() {
//     super();

//     this.el = document.createElement('div');
//   }
//   componentDidMount() {
//     overlayRoot.appendChild(this.el)
//   }
//   render() {
//     return ReactDOM.createPortal(
      // {/* <div className="menuOverlay__container">
      //   <div className="menu__container">
      //     <div className="menu__container__header">Menu</div>
      //     <ul>
      //       <li><div className="menu__numbers">01</div><a href="" className="menu__item">Home</a></li>
      //       <li><div className="menu__numbers">02</div><a href="" className="menu__item">Services</a></li>
      //       <li><div className="menu__numbers">03</div><a href="" className="menu__item">Works</a></li>
      //       <li><div className="menu__numbers">04</div><a href="" className="menu__item">About</a></li>
      //       <li><div className="menu__numbers">05</div><a href="" className="menu__item">Contact</a></li>
      //     </ul>
      //   </div>
      //   <div className="menu__contacts">
      //     <div>blakeswl@blstudio.co</div>
      //     <div>(323)482-0091</div>
      //     {/* <div></div> */}
      //   </div>
      // </div> */}
//     , overlayRoot)
//   }
// };
const Menu = () => (
  <div className="menuOverlay__container">
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
      {/* <div></div> */}
    </div>
  </div>
)
export default Menu;