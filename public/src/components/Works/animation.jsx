import React, { useRef } from 'react';
import anime from'animejs';
import scrollMonitor from 'scrollmonitor';
import shapes from './morphs';

export const initShapeEl = (morph) => {
  anime.remove(morph.current);
  anime({
    targets: morph.current,
    duration: 1,
    easing: 'linear',
    scaleX: shapes[0].scaleX,
    scaleY: shapes[0].scaleY,
    translateX: shapes[0].tx+'px',
    translateY: shapes[0].ty+'px',
    rotate: shapes[0].rotate+'deg'
  })
}
export const createScrollWatchers = (shapeEl, morph, container, containerList) => {
  let step;
  const contentElemsTotal = containerList.length;
  
  containerList.forEach((el,pos) => {
    pos = pos ? pos : contentElemsTotal;
    const watcher = scrollMonitor.create(el, -350);
    
    watcher.enterViewport(function() {
      step = pos;
      anime.remove(shapeEl.current);
      anime({
        targets: shapeEl.current,
        duration: shapes[pos].animation.points.duration,
        easing: shapes[pos].animation.points.easing,
        elasticity: shapes[pos].animation.points.elasticity || 0,
        points: shapes[pos].points,
        fill: {
          value: shapes[pos].fill.color,
          duration: shapes[pos].fill.duration,
          easing: shapes[pos].fill.easing
        }
      });
      anime.remove(morph.current);
      anime({
        targets: morph.current,
        duration: shapes[pos].animation.svg.duration,
        easing: shapes[pos].animation.svg.easing,
        elasticity: shapes[pos].animation.svg.elasticity || 0,
        scaleX: shapes[pos].scaleX,
        scaleY: shapes[pos].scaleY,
        translateX: shapes[pos].tx+'px',
        translateY: shapes[pos].ty+'px',
        rotate: shapes[pos].rotate+'deg'
      });
    });

    watcher.exitViewport(function() {
      // console.log('left container')
      const idx = !watcher.isAboveViewport ? pos-1 : pos+1;

      if( idx <= container && step !== idx ) {
        step = idx;
        anime.remove(shapeEl.current);
        anime({
          targets: shapeEl.current,
          duration: shapes[idx].animation.points.duration,
          easing: shapes[idx].animation.points.easing,
          elasticity: shapes[idx].animation.points.elasticity || 0,
          points: shapes[idx].points,
          fill: {
            value: shapes[idx].fill.color,
            duration: shapes[idx].fill.duration,
            easing: shapes[idx].fill.easing
          }
        });

        anime.remove(morph.current);
        anime({
          targets: morph.current,
          duration: shapes[idx].animation.svg.duration,
          easing: shapes[idx].animation.svg.easing,
          elasticity: shapes[idx].animation.svg.elasticity || 0,
          scaleX: shapes[idx].scaleX,
          scaleY: shapes[idx].scaleY,
          translateX: shapes[idx].tx+'px',
          translateY: shapes[idx].ty+'px',
          rotate: shapes[idx].rotate+'deg'
        });
      }
    });
  });
};
