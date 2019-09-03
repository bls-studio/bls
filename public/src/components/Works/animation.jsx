import React, { useRef } from 'react';
import anime from'animejs';
import scrollMonitor from 'scrollmonitor';
import shapes from './morphs';
// import { useScrollState } from 'scrollmonitor-hooks';

export const initShapeEl = (morph) => {
  console.log(morph, 'hello')
  anime.remove(morph);
  anime({
    targets: morph,
    duration: 1,
    easing: 'linear',
    scaleX: shapes[0].scaleX,
    scaleY: shapes[0].scaleY,
    translateX: shapes[0].tx+'px',
    translateY: shapes[0].ty+'px',
    rotate: shapes[0].rotate+'deg'
  })
}
export const createScrollWatchers = (WorkContents, contentElems, shapeEl, morph) => {
  const contentElemsTotal = WorkContents.length;
  let step;
  WorkContents.forEach((el,pos) => {
    const scrollElemToWatch = pos ? contentElems[pos] : null;
    pos = pos ? pos : contentElemsTotal;
    const watcher = scrollMonitor.create(scrollElemToWatch,-350);
    
    watcher.enterViewport(function() {
      step = pos;
      anime.remove(shapeEl);
      anime({
        targets: shapeEl,
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

      anime.remove(morph);
      anime({
        targets: morph,
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
      const idx = !watcher.isAboveViewport ? pos-1 : pos+1;

      if( idx <= contentElemsTotal && step !== idx ) {
        step = idx;
        anime.remove(DOM.shapeEl);
        anime({
          targets: shapeEl,
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

        anime.remove(morph);
        anime({
          targets: morph,
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
