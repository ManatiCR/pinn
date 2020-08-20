import React from "react";
import "./Banner.scss";

// ToDo: Add this in a single module with the other banner.
function Banner(props) {
  return (
    <section className="banner">
      <img className="banner__img" src={props.image} alt="Aumentar la productividad del país" title="Aumentar la productividad del país" aria-label="Aumentar la productividad del país" />
      <div className={`banners__content banner__box-color--${props.boxBackground}`}>
        <p>{props.content}</p>
      </div>
    </section>
  )
}

export default Banner;
