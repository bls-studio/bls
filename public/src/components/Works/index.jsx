import React from'react';
import './work.scss';

import './animation'

// Assets
import yippido from '../../../dist/assets/yippido.png';
import nishiSplash from '../../../dist/assets/nishiSplash.png';


const Works = () => {
  return(
    <div className="works">
      <div className="works__wrapper">
        <div class="morph-wrap">
          <svg class="morph" width="1400" height="770" viewBox="0 0 1400 770">
            <path d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z"/>
          </svg>
        </div>
        <div className="content content--fixed">
          <h1 className="works_header">Works</h1>
        </div>
        <div className="content-wrap">
          <div className="content content--layout content--layout-1">
            <img className="content__img" src={yippido} alt="Some image" />
            <h3 className="content__title">yippido</h3>
            <p className="content__author">Jane Westhall</p>
            <p className="content__desc">The neverending quest, once and forever.</p>
            <a href="#" class="content__link">Discover</a>
          </div>
        </div>
        <div className="content-wrap">
          <div className="content content--layout content--layout-2">
            <img className="content__img" src={nishiSplash} alt="Some image" />
            <h3 className="content__title">nishi</h3>
            <p className="content__author">Jane Westhall</p>
            <p className="content__desc">The neverending quest, once and forever.</p>
            <a href="#" class="content__link">Discover</a>
          </div>
        </div>

      </div>

    </div>
  )
};

export default Works;