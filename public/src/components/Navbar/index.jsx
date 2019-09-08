import React, { useState, useEffect, useRef } from 'react';
import './navbar.scss';
import Menu from '../OverlayMenu';

const Navbar = () => {
  const [ checked, checkbox ] = useState(false);

  const _toggleCheckbox = (e) => {
    checkbox(!checked);
  }

  return(
    <div className="navbar" >
      <div className="navbar__container">
       {/* {sgv} */}
       <a href="" className="logo">ASCEND</a>
        <a href="" className="cta">Let's talk</a>
      </div>
      <div className="navbar__menu">
        <input type="checkbox" className="toggler" checked={checked} onChange={ _toggleCheckbox}/>
        <div className="hamburger"><div></div></div>
        { checked ? <Menu dropped={checked} toggle={_toggleCheckbox}/> :  <Menu dropped={checked}/>}
      </div>
    </div>
  )
};
export default Navbar;