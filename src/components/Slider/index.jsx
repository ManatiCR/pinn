import React, { useRef, useState } from "react";
import "./Slider.scss";
import bannerCapacitaciones from "./../../assets/banner-capacitaciones.jpg";
import bannerCertificaciones from "./../../assets/banner-certificaciones.jpg";
import bannerMercadoLaboral from "./../../assets/banner-mercado-laboral.jpg";
import Slider from "react-slick";
import Slide from "./Slide";

// ToDo: Fix this correctly.
function SliderComponent() {
  const sliderRef = useRef(null);
  const sliderControlsRef = useRef(null);
  const [activeSlide, setActiveState] = useState(0);
  const settings = {
    mobileFirst: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    speed: 600,
    dots: false,
    arrows: false,
    afterChange: function (currentSlide) {
      console.log(currentSlide);
      setActiveState(currentSlide);
    }
  };
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
        <Slider {...settings} ref={sliderRef}>
          {slides.map((slide, idx) => {
            return (
              <Slide
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
        </Slider>
        <div className="slider__controls" ref={sliderControlsRef}>
          <ul className="slick-dots">
            {slides.map(({caption}, idx) => {
              console.log(idx);
              return (
                <li role="presentation" className={`${activeSlide === idx ? "slick-active" : ""}`}>
                  <button
                    type="button"
                    role="tab"
                    tabindex="-1"
                    key={`link-slide-${idx}`}
                    onClick={() => {
                      sliderRef.current.slickGoTo(idx+1)
                    }}
                  >{caption}</button>
                </li>
              )
            }) }
          </ul>
          <div className="position">
          </div>
        </div>
      </div>
    </section>
  )
};

export default SliderComponent;
