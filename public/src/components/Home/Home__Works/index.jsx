import React, { useRef, useEffect, useState } from 'react';
import './works.scss';
import anime from 'animejs';

import WorkItem from '../../Works/workItem';

// Assets
import yippido from '../../../../dist/assets/yippido.png';
import nishiSplash from '../../../../dist/assets/nishiSplash.png';
import dodgers from '../../../../dist/assets/dodgers.png';
import shapes from '../../Works/morphs';

const WorkContents = [
  {
    title: "dodgers",
    image: dodgers,
    titlePos: 'nishiTitPos',
    imagePos: 'nishiImgPos',
    worklayout: "home__works__item",
    layout: "content--layout-2",
  },
  {
    title: "yippido",
    image: yippido,
    titlePos: 'yipTitPos',
    imagePos: 'yipImgPos',
    worklayout: "home__works__item",
    layout: "content--layout-1",
  },
  {
    title: "nishi",
    image: nishiSplash,
    titlePos: 'nishiTitPos',
    imagePos: 'nishiImgPos',
    worklayout: "home__works__item",
    layout: "content--layout-2",
  },
  {
    title: "yippido",
    image: yippido,
    titlePos: 'yipTitPos',
    imagePos: 'yipImgPos',
    worklayout: "home__works__item",
    layout: "content--layout-1",
  },
]

const Works = () => {
  let shape = useRef(null), containerList = [], morph = useRef(null);
  const max = 4;
  let changeMorph = true;
  const [ pos, incrementPos ] = useState(0);
  console.log(pos)

  const increment = () => {
    if (changeMorph === true && pos <= max) {
      incrementPos(pos + 1)

      if (pos === max) {
        changeMorph = false
      }
    } else {
      changeMorph = false
      incrementPos(pos - 1)

      if (pos === 0) {
        changeMorph = true;
      }
    }
  }

  useEffect(() => {
    anime.remove(shape.current);
    anime({
      targets: shape.current,
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
  })


  return(
    <div className="home__works">
      <h3 className="home__works__header">Our selected work</h3>
      <div className="home__svg__wrap">
        <svg ref={morph} className="home__svg" width="1400" height="770" viewBox="0 0 1400 770">
          <polygon ref={shape} points="700,84.4 1047.1,685.6 352.9,685.6 352.9,685.6 352.9,685.6 352.9,685.6"/>
        </svg>
      </div>
      <div className="home__works__container">
        {
          WorkContents.map((work) => {
            return <WorkItem 
              image={work.image}
              title={work.title}
              contentWrap={work.worklayout}
              contentLayout={work.layout}
              mouseEnter={increment}
              containerList={element => containerList.push(element)}
            />
          })
        }
      </div>
    </div>

  )
};
export default Works