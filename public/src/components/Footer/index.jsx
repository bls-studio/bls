import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

// Assets
import balloon from '../../../dist/assets/illustrations/undraw_balloons_vxx5.png.svg';
import footer__image from '../../../dist/assets/illustrations/footer__image.svg';

const Footer = () => (
  <div className="footer">
    <img src={balloon} alt="" className="footer__backgroundImage"/>
    <div className="footer__overlay">
      <div className="footer__grid">
        <div className="footer__top">
          Ascend
        </div>
        <div className="footer__left">
          <h3 className="footer__header">Get in touch</h3>
          <div className="footer__item footer__email">seulwoolee93@gmail.com</div>
          <div className="footer__item footer__phone">(323) 482 - 0091</div>
          <h3 className="footer__header">Explore</h3>
          <ul className="footer__nav">
            <li><Link to="/" className="footer__item">Home</Link></li>
            <li><Link to="/services" className="footer__item">Services</Link></li>
            <li><Link to="/works" className="footer__item">Works</Link></li>
            <li><Link to="/about" className="footer__item">About</Link></li>
            <li><Link to="/contact" className="footer__item">Contact</Link></li>
          </ul>

        </div>
        <div className="footer__right">
          <p>start a</p>
          <p className="footer__right--large">NEW PROJECT</p>
          <p>with us</p>
          <img src={footer__image} alt="" className="footer__image"/>
        </div>
      </div>
    </div>
  </div>
);
export default Footer;