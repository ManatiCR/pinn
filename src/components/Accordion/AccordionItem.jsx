import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Accordion(props) {
  let {
    title,
    courses
  } = props;

  const [providerState1, setProviderState1] = useState(false);

  return (
    <div className={`oportunities__result__provider ${providerState1 ? "oportunities__result__provider--open" : ""}`}>
      <h4 onClick={() => setProviderState1(!providerState1)}><FontAwesomeIcon icon={faChevronRight} />{ title }</h4>
      {providerState1 && (
        <div className="oportunities__result__courses">
          { courses.map(course => (
            <a href={course.node.link}>{course.node.title}</a>
          )) }
        </div>
      )}
    </div>
  )
}

export default Accordion;
