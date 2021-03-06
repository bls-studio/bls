import React from 'react';

const WorkItem = (props) => {
  return(
    <div className={`content-wrap ${props.contentWrap}`} ref={props.containerList}
      onMouseEnter={props.mouseEnter}
    >
      <div className={`content content--layout ${props.contentLayout}`}>
        <img className="content__img" 
        src={props.image}
        ref={props.image__xy}
        onMouseMove={props.mouseMove}
        onMouseLeave={props.mouseLeave}
        />
        <h3 className="content__title" 
        ref={props.title__xy}
        onMouseMove={props.mouseMove}
        onMouseLeave={props.mouseLeave}
        >{props.title}</h3>
        <p className="content__author">Jane Westhall</p>
        <p className="content__desc">The neverending quest, once and forever.</p>
        <a href="#" className="content__link">Discover</a>
      </div>
    </div>
  )
}
export default WorkItem;