import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
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
            <div className={`oportunities__calls--more_info ${accordionState ? "oportunities__calls--more_info--open" : ""}`}>
              <button onClick={() => { setAccordionState(!accordionState) }}>Más información <FontAwesomeIcon icon={faChevronDown} /> </button>
            </div>
          </div>
          <div className="oportunities__calls--content__extra">
            <b>Enlaces de interés</b>
            <ul>
              { linksOfInterest.map((link, idx) => (
                <li key={`linkOfInterest-${idx}`}>
                  <a href={link.url} rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faFileAlt} /> {link.text}</a>
                </li>
              ))}
            </ul>
          </div>
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
