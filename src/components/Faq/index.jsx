import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import "./Faq.scss";

// ToDo: Add faqs functionality.
function Faq({ apiUrl }) {
  const [scholarshipsState, setScholarshipsState] = useState(false);
  const [providersState, setProvidersState] = useState(false);
  const [faqScholarshipData, setfaqScholarshipData] = useState("");
  const [faqProvidersData, setfaqProvidersData] = useState("");
  const faqScholarshipAPI = `${apiUrl}?component=36`;
  const faqProvidersAPI = `${apiUrl}?component=35`;

  useEffect(() => {
    fetch(faqScholarshipAPI).then(resolve => {
      return resolve.json();
    }).then(data => {
      if (data) {
        const { nodes } = data;
        setfaqScholarshipData(nodes);
      }
    });
  }, [faqScholarshipAPI]);

  useEffect(() => {
    fetch(faqProvidersAPI).then(resolve => {
      return resolve.json();
    }).then(data => {
      if (data) {
        const { nodes } = data;
        setfaqProvidersData(nodes);
      }
    });
  }, [faqProvidersAPI]);

  return (
    <section id="section-faqs" className="faqs">
      <div className="faqs__heading">
        <h2 className="faqs__title">Preguntas frecuentes</h2>
      </div>
      <div className="faqs__content">
        <div className="faqs__accordion">
          <div className={`faqs__accordion-heading faqs__accordion-scholarship ${scholarshipsState ? "faqs__accordion-heading--open" : ""}`} onClick={() => setScholarshipsState(!scholarshipsState)}>
            <h4><FontAwesomeIcon icon={faPlay} /> Oportunidades de Beca</h4>
          </div>
          { scholarshipsState && (
            <div className="faqs__accordion-content faqs__accordion-content--scholarship">
              <ol>
                {faqScholarshipData && faqScholarshipData.map((faq, idx) => (
                  <li key={`faqScholarship-${idx}`}><b>{faq.node.title}</b> {faq.node.description}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
        <div className="faqs__accordion">
          <div className={`faqs__accordion-heading faqs__accordion-providers ${providersState ? "faqs__accordion-heading--open" : ""}`} onClick={() => setProvidersState(!providersState)}>
            <h4><FontAwesomeIcon icon={faPlay} /> Proveedores</h4>
          </div>
          {providersState && (
            <div className="faqs__accordion-content faqs__accordion-content--providers">
              <ol>
                {faqProvidersData && faqProvidersData.map((faq, idx) => (
                  <li key={`faqProviders-${idx}`}><b>{faq.node.title}</b> {faq.node.description}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Faq;
