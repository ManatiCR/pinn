import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import "./Faq.scss";

// ToDo: Add faqs functionality.
function Faq() {
  const [scholarshipsState, setScholarshipsState] = useState(false);
  const [providersState, setProvidersState] = useState(false);

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
                <li><b>¿Qué es el PINN?</b> El Programa de Innovación y Capital Humano para la Competitividad (PINN) surgió de la gestión de un préstamo entre el Gobierno de Costa Rica y el Banco Interamericano del Desarrollo, el cual tienen como objetivo aumentar la productividad del país mediante la formación de capital humano.</li>
                <li><b>¿Qué tipo de organización puede ser considerado un proveedor?</b> Conformación de un registro de proveedores públicos, privados u organizaciones sin fines de lucro expertos en brindar capacitaciones, certificaciones y/o bootcamps.</li>
                <li><b>¿Qué es un bootcamp?</b> Un bootcamp es un programa de educación continua que consiste en un entrenamiento intensivo en tecnologías digitales, con una duración aproximada de 3 a 6 meses, ya sea para la actualización y reentrenamiento de trabajadores, o como alternativa o complemento para jóvenes técnicos o no universitarios que buscan formación técnica especializada para mejorar su empleabilidad en empleos de calidad en industrias de alto valor agregado.</li>
                <li><b>¿Qué es una certificación?</b> Es un certificado que se utiliza principalmente para demostrar el dominio de técnicas y competencias específicas utilizadas para lograr el mejoramiento de la calidad de procesos, productos y servicios.</li>
                <li><b>¿Qué es un proveedor internacional?</b> Es aquel proveedor de capacitaciones y/o certificaciones que no cuenta con una personería jurídica establecida en Costa Rica</li>
                <li><b>¿Qué es un proveedor nacional?</b> Es aquel proveedor de capacitaciones y/o certificaciones que cuenta con una personería jurídica establecida en Costa Rica</li>
                <li><b>¿Cómo se compone el comité evaluador?</b> El comité evaluador estará constituido por cinco integrantes profesionales de las áreas de ciencia, tecnología, ingeniería e innovación, que tienen una formación profesional en estas áreas y cuentan con experiencia comprobada en el sector privado, así como conocimiento del mercado laboral.</li>
                <li><b>¿Qué elementos se consideran como parte de la evaluación de los proveedores?</b> Los principales criterios de evaluación de las capacitaciones, certificaciones y bootcamps son la calidad del programa, la metodología de enseñanza, la experiencia comprobada con el sector privado y la racionalidad del precio.</li>
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
                <li><b>¿Qué es el PINN?</b> El Programa de Innovación y Capital Humano para la Competitividad (PINN) surgió de la gestión de un préstamo entre el Gobierno de Costa Rica y el Banco Interamericano del Desarrollo, el cual tienen como objetivo aumentar la productividad del país mediante la formación de capital humano.</li>
                <li><b>¿Qué tipo de organización puede ser considerado un proveedor?</b> Conformación de un registro de proveedores públicos, privados u organizaciones sin fines de lucro expertos en brindar capacitaciones, certificaciones y/o bootcamps.</li>
                <li><b>¿Qué es un bootcamp?</b> Un bootcamp es un programa de educación continua que consiste en un entrenamiento intensivo en tecnologías digitales, con una duración aproximada de 3 a 6 meses, ya sea para la actualización y reentrenamiento de trabajadores, o como alternativa o complemento para jóvenes técnicos o no universitarios que buscan formación técnica especializada para mejorar su empleabilidad en empleos de calidad en industrias de alto valor agregado.</li>
                <li><b>¿Qué es una certificación?</b> Es un certificado que se utiliza principalmente para demostrar el dominio de técnicas y competencias específicas utilizadas para lograr el mejoramiento de la calidad de procesos, productos y servicios.</li>
                <li><b>¿Qué es un proveedor internacional?</b> Es aquel proveedor de capacitaciones y/o certificaciones que no cuenta con una personería jurídica establecida en Costa Rica</li>
                <li><b>¿Qué es un proveedor nacional?</b> Es aquel proveedor de capacitaciones y/o certificaciones que cuenta con una personería jurídica establecida en Costa Rica</li>
                <li><b>¿Cómo se compone el comité evaluador?</b> El comité evaluador estará constituido por cinco integrantes profesionales de las áreas de ciencia, tecnología, ingeniería e innovación, que tienen una formación profesional en estas áreas y cuentan con experiencia comprobada en el sector privado, así como conocimiento del mercado laboral.</li>
                <li><b>¿Qué elementos se consideran como parte de la evaluación de los proveedores?</b> Los principales criterios de evaluación de las capacitaciones, certificaciones y bootcamps son la calidad del programa, la metodología de enseñanza, la experiencia comprobada con el sector privado y la racionalidad del precio.</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Faq;
