import React from 'react';
import './videoReel.scss';

// Assets
import hollywood from '../../../dist/assets/hollywood.png'

const VideoReel = () => (
  <div className="splash">
    <div className="splash__header">
      <div className="splash__header--left">
        Helping our partners move forward through
      </div>
      <div className="splash__header--right">
        Strategy. Design. Content. Technology.
      </div>
    </div>
    <img src={hollywood} alt="" className="splash__placeholderImage"/>
  </div>
);
export default VideoReel;