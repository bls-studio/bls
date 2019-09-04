import React, { useRef, useEffect } from'react';
import './work.scss';

import { initShapeEl, createScrollWatchers } from './animation';
import WorkItem from './workItem';


// Assets
import yippido from '../../../dist/assets/yippido.png';
import nishiSplash from '../../../dist/assets/nishiSplash.png';


const WorkContents = [
  {
    title: "nishi",
    image: nishiSplash,
    titlePos: 'nishiTitPos',
    imagePos: 'nishiImgPos',
    layout: "content--layout-2",
  },
  {
    title: "yippido",
    image: yippido,
    titlePos: 'yipTitPos',
    imagePos: 'yipImgPos',
    layout: "content--layout-1",
  },
  {
    title: "nishi",
    image: nishiSplash,
    titlePos: 'nishiTitPos',
    imagePos: 'nishiImgPos',
    layout: "content--layout-2",
  },
  {
    title: "yippido",
    image: yippido,
    titlePos: 'yipTitPos',
    imagePos: 'yipImgPos',
    layout: "content--layout-1",
  },
]
const Works = () => {
  let refList = [],  containerList = [];
  let morph = useRef(null), shapeEl = useRef(null), 
  contentElems = useRef(null), container = useRef(null);

  const handleMouseMove = (e) => {
    refList.map((item, i) => {
      const imgPos = item;
      let r = imgPos.getBoundingClientRect();
      imgPos.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
      imgPos.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
    })
  }
  const handleMouseLeave = (event) => {    
    refList.forEach(item => {
      item.style.setProperty('--x', 0)
      item.style.setProperty('--y', 0)
    })
  }
  useEffect(() => {
    initShapeEl(morph)
    createScrollWatchers(shapeEl, morph, container, containerList)
  })
  
  return(
    <div className="works" ref={refList}>
      <div className="works__wrapper">
        <div className="morph-wrap">
          <svg className="morph" ref={morph} width="1400" height="770" viewBox="0 0 1400 770">
            <polygon ref={shapeEl} points="700,84.4 1047.1,685.6 352.9,685.6 352.9,685.6 352.9,685.6 352.9,685.6"/>
          </svg>
        </div>
        <div className="content content--fixed">
          <h1 className="works_header">Works</h1>
        </div>
        {
          WorkContents.map(contents => {
            return <WorkItem 
              containerList={element => containerList.push(element)}
              image={contents.image}
              title={contents.title}
              mouseMove={handleMouseMove}
              mouseLeave={handleMouseLeave}
              title__xy={element => refList.push(element)}
              image__xy={element => refList.push(element)}
              contentLayout={contents.layout}
            />
          })
        }
      </div>
    </div>
  )
};
export default Works;