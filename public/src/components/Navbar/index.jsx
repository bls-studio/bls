import React, { useState, useEffect } from 'react';
import './navbar.scss';
import Menu from '../OverlayMenu';

// Assets
const sgv = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.759 48.448">
<g id="Logo" transform="translate(-286.5 -182.17)">
  <path id="Path_1" data-name="Path 1" d="M1233.459,362.586h51.759v37.739l-27.544,7.645h0l-24.215-7.645Z" transform="translate(-945.459 -178.917)" fill="none" stroke="#F7F7F7" stroke-width="3"/>
  <text id="B" transform="translate(302.56 217.422)" fill="#F7F7F7" font-size="33" font-family="HelveticaNeue-Bold, Helvetica Neue" font-weight="700"><tspan x="0" y="0">B</tspan></text>
  <path id="Path_11" data-name="Path 11" d="M320.371,196.026l17.416-13.252Z" transform="translate(0.086 2.815)" fill="none" stroke="#F7F7F7" stroke-linejoin="round" stroke-width="3"/>
  <path id="Path_12" data-name="Path 12" d="M288,217.449l18.173-12.814Z" transform="translate(1 3.66)" fill="none" stroke="#F7F7F7" stroke-width="3"/>
</g>
</svg>;


const Navbar = () => {
  const [ offset, shiftOffset] = useState(0);
  const [ checked, checkbox ] = useState(false);

  useEffect(() => {
    const listenScrollOffset = () => shiftOffset(window.scrollY);
    window.addEventListener('scroll', listenScrollOffset);

    return () => {
      window.removeEventListener('scroll', listenScrollOffset);
    }
  })

  const _toggleCheckbox = () => {
    checkbox(!checked)
  }
  
  return(
    <div className="navbar" >
      <div className="navbar__container">
       {sgv}
        <ul className="navbar__items" style={{bottom: offset, opacity: 50 / offset}}>
          <li>About</li>
          <li>Services</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navbar__menu">
        <input type="checkbox" className="toggler" onChange={_toggleCheckbox}/>
        <div className="hamburger"><div></div></div>
        { checked ? <Menu/> : null }
      </div>
    </div>
  )
};
export default Navbar;