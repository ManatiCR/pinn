import React from "react";
import "./Faq.scss";

// ToDo: Add faqs functionality.
function Faq() {
  return (
    <section id="section-faqs" className="faqs">
      <div className="faqs__heading">
        <h2 className="faqs__title">Preguntas frecuentes</h2>
      </div>
      <div className="faqs__content">
        <div className="faqs__accordion js-accordion">
          <div className="faqs__accordion-heading js-heading open">
            <h4>Oportunidades de Beca</h4>
          </div>
          <div className="faqs__accordion-content js-content open">
            <div id="react-app-faqs-scholarships"></div>
          </div>
        </div>
        <div className="faqs__accordion js-accordion">
          <div className="faqs__accordion-heading js-heading">
            <h4>Proveedores</h4>
          </div>
          <div className="faqs__accordion-content js-content">
            <div id="react-app-faqs-providers"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq;
