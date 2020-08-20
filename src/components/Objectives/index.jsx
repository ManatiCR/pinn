import React from "react";
import "./Objectives.scss";
import objProfessionalQualification from "./../../assets/obj-professional-qualification.svg";
import objSupportCapabilities from "./../../assets/obj-support-capabilities.svg";
import objCompetitivenessAndInnovation from "./../../assets/obj-competitiveness-and-innovation.svg";
import objIncreaseProductivity from "./../../assets/obj-increase-productivity.svg";
import objTrainings from "./../../assets/obj-trainings.svg";
import objHumanCapital from "./../../assets/obj-human-capital.svg";

function Objectives() {
  return (
    <div className="objectives">
      <h2 className="objectives__title">NUESTROS OBJETIVOS</h2>
      <div className="objectives__content">
        <div>
          <img className="objectives__img" src={objProfessionalQualification} alt="Programa de calificación profesional" title="Programa de calificación profesional" aria-label="Programa de calificación profesional" />
          <span>Implementar un programa de calificación profesional</span>
        </div>
        <div>
          <img className="objectives__img" src={objSupportCapabilities} alt="Apoyar las capacidades de empleabilidad" title="Apoyar las capacidades de empleabilidad" aria-label="Apoyar las capacidades de empleabilidad" />
          <span>Apoyar las capacidades de empleabilidad de Costa Rica</span>
        </div>
        <div>
          <img className="objectives__img" src={objCompetitivenessAndInnovation} alt="Mejorar la competitividad y la innovación" title="Mejorar la competitividad y la innovación" aria-label="Mejorar la competitividad y la innovación" />
          <span>Mejorar la competitividad y la innovación empresarial</span>
        </div>
        <div>
          <img className="objectives__img" src={objIncreaseProductivity} alt="Formación de capital humano" title="Formación de capital humano" aria-label="Formación de capital humano" />
          <span>Aumentar la productividad mediante la formación de capital humano</span>
        </div>
        <div>
          <img className="objectives__img" src={objTrainings} alt="Capacitaciones técnicas en Ciencia y Tecnología" title="Capacitaciones técnicas en Ciencia y Tecnología" aria-label="Capacitaciones técnicas en Ciencia y Tecnología" />
          <span>Brindar capacitaciones técnicas en Ciencia y Tecnología</span>
        </div>
        <div>
          <img className="objectives__img" src={objHumanCapital} alt="Incrementar la oferta del capital humano" title="Incrementar la oferta del capital humano" aria-label="Incrementar la oferta del capital humano" />
          <span>Incrementar la oferta del capital humano calificado</span>
        </div>
      </div>
    </div>
  )
}

export default Objectives;
