import React from'react';
import anime from 'animejs';
import './work.scss';
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
  }
]
const Works = () => {
  let refList = [];

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
 
  
  return(
    <div className="works">
      <div className="works__wrapper">
        <div className="morph-wrap">
          <svg className="morph" width="1400" height="770" viewBox="0 0 1400 770">
            <path d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z"/>
          </svg>
        </div>
        <div className="content content--fixed">
          <h1 className="works_header">Works</h1>
        </div>
        {
          WorkContents.map(contents => {
            return <WorkItem 
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