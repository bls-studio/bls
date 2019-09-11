import React, { useEffect, useRef } from 'react';
import './splash.scss';
import scrollMonitor from 'scrollmonitor';
import anime from 'animejs';

// Assets


const Splash = () => {
  let splashRef = useRef(null);

  useEffect(() => {
    const watcher = scrollMonitor.create(splashRef, -400)
    console.log(splashRef)
    watcher.enterViewport(() => {
      console.log(watcher, 'in view')
      anime({
        targets: splashRef,
        left: "-5%",
        duration: 1000,
        easing: "cubicBezier(1,.25,0,.75)"
      })
    })
  })


  return (
    <div className="home__splash">
    {/* <svg ref={element => splashRef = element} className="home__splash__background" xmlns="http://www.w3.org/2000/svg" width="1919" height="1078" viewBox="0 0 1919 1078">
      <path id="Path_493" data-name="Path 493" d="M0,0H1919L1489.8,332.639,1276.2,496.936l345.984,328.785L1919,1078H0Z" fill="#161d25"/>
    </svg> */}
      <svg ref={element => splashRef = element} className="home__splash__background" xmlns="http://www.w3.org/2000/svg" width="1920" height="1078" viewBox="0 0 1920 1078">
        <path id="Path_493" data-name="Path 493" d="M0,0H1920L1524.084,149.57l200.458,149.6L1555.266,482.715l212.655,146.55L1594.167,827.294,1920,1078H0Z" fill="#161d25"/>
      </svg>
      <div className="home__splash__text">
        <p>create.</p>
        <p>inspire.</p>
        <p>ascend.</p>
      </div>
    </div>
  )
}
export default Splash;