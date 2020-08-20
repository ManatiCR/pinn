import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import AccordionItem from "./AccordionItem";

function Accordion(props) {
  let {
    extraClasses,
    image,
    title,
    content,
    linksOfInterest,
    items
  } = props;
  const [accordionState, setAccordionState] = useState(false);

  const buildExtraLinks = ( linksOfInterest ) => {
    if (linksOfInterest.length > 0) {
      return (
        <div className="oportunities__calls--content__extra">
          <b>Enlaces de interés</b>
          <ul>
            { linksOfInterest.map((link, idx) => (
              <li key={`linkOfInterest-${idx}`}>
                <a href={link.url} rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faFileAlt} /> {link.text}</a>
              </li>
            ))}
          </ul>
          <p className="oportunities__link--apply">
            <a href="https://cinde.us8.list-manage.com/subscribe?u=42e7541b8cd3dbc87e97b934f&id=fafa27496f" rel="noopener noreferrer" target="_target">Solicitar Beca <FontAwesomeIcon icon={faPlay} /> </a>
          </p>
        </div>
      );
    }
  };

  return (
    <>
      <div className={`oportunities__calls--content ${extraClasses} scholarships--bootcamps ${accordionState ? "oportunities__calls--content-open" : ""}`}>
        <div className="oportunities__calls--content__text">
          <div className="oportunities__calls--content__image">
            <img src={image} alt="Imagen Bootcamp" />
          </div>
          <div className="oportunities__calls--content__info">
            <h4>{title}</h4>
            <p>{content}</p>
            {
              items.length ? (
                <div className={`oportunities__calls--more_info ${accordionState ? "oportunities__calls--more_info--open" : ""}`}>
                  <button onClick={() => { setAccordionState(!accordionState) }}>Ver proveedores <FontAwesomeIcon icon={faChevronDown} /> </button>
                </div>
              ) : null
            }
          </div>
          { buildExtraLinks(linksOfInterest) }
        </div>
      </div>
      {accordionState && (
        <div className="oportunities__result">
          { items.map((item, idx) => (
            <AccordionItem
              title={item.provider}
              courses={item.courses}
              key={`accordion-${idx}`}
            />
          )) }
        </div>
      )}
    </>
  )
}

export default Accordion;
