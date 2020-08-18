import React, { useState, useRef } from "react";
import "./Slider.scss";
import bannerCapacitaciones from "./../../assets/banner-capacitaciones.jpg";
import bannerCertificaciones from "./../../assets/banner-certificaciones.jpg";
import bannerMercadoLaboral from "./../../assets/banner-mercado-laboral.jpg";
import 'react-slideshow-image/dist/styles.css'
import SlideItem from "./Slide";
import { Slide } from 'react-slideshow-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// ToDo: Fix this correctly.
function SliderComponent() {
  const sliderRef = useRef(null);
  const [currentItem, setCurrentItem] = useState(1);
  const [sliderAutoplay, setSliderAutoplay] = useState(true);
  const slideProperties = {
    arrows: false,
    onChange: (prev, next) => {
      setCurrentItem(next+1);
    },
    autoplay: sliderAutoplay
  }
  const slides = [
    {
      img: bannerCapacitaciones,
      alt: "Banner Capacitaciones",
      caption: "Capacitaciones",
      content: <p><b>Adquiera las capacidades necesarias para los trabajos del futuro</b></p>,
      linkUrl: "#section-scholarships"
    },
    {
      img: bannerCertificaciones,
      alt: "Banner Certificaciones",
      caption: "Certificaciones",
      content: <p><b>Certifique sus conocimientos en ciencia y tecnología</b></p>,
      linkUrl: "#section-scholarships"
    },
    {
      img: bannerMercadoLaboral,
      alt: "Banner Mercado Laboral",
      caption: "Mercado laboral",
      content: <p><b>Multiplique sus posibilidades en el mercado laboral</b></p>,
      linkUrl: "#section-progress"
    }
  ]

  return (
    <section className="slider-section">
      <div className="slider-header">
        <Slide {...slideProperties} ref={sliderRef}>
          {slides.map((slide, idx) => {
            return (
              <SlideItem
                img={slide.img}
                alt={slide.alt}
                caption={slide.caption}
                content={
                  <>
                    {slide.content}
                  </>
                }
                linkUrl={slide.linkUrl}
                key={`slide-id-${idx}`}
              />
            )
          })}
        </Slide>
        <div className="slider__controls">
          <div className="slider__nav">
            {slides.map(({ caption }, idx) => (
              <button
                key={`slide-button-${idx}`}
                onClick={() => sliderRef.current.goTo(idx)}
                className={currentItem-1 === idx ? "active" : ""}
              >{caption}</button>
            ))}
          </div>
          <div className="position">
            <span>{currentItem}/{slides.length}</span>
          </div>
          {sliderAutoplay ? (
            <button className="slider__button" onClick={() => setSliderAutoplay(false)}>
              <FontAwesomeIcon icon={faPause} />
            </button>
          ) : (
            <button className="slider__button" onClick={() => setSliderAutoplay(true)}>
              <FontAwesomeIcon icon={faPlay} />
            </button>
          )}
          <button className="slider__button" onClick={() => sliderRef.current.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="slider__button" onClick={() => sliderRef.current.goNext()}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  )
};

export default SliderComponent;
