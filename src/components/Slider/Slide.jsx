import React from "react";
import "./Slider.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

function Slide(props) {
  let {
    img,
    alt,
    caption,
    content,
    linkUrl
  } = props;

  return (
    <div className="slide-item">
      <div className="slide-item__image">
        <img className="banner__img" src={img} alt={alt} />
      </div>
      <div className="slide-item__caption">{caption}</div>
      <div className="slide-item__content">
        {content}
        <a className="slider-item__cta" href={linkUrl}>Aplique aquí <FontAwesomeIcon icon={faPlay} /></a>
      </div>
    </div>
  )
};

export default Slide;
