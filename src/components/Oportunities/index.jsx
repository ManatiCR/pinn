import React, { useState, useEffect } from "react";
import providerBootcampImg from "./../../assets/provider-bootcamp.svg";
import providerInternationalImg from "./../../assets/provider-international.svg";
import providerNationalImg from "./../../assets/provider-national.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Accordion from "./../Accordion";
import "./Oportunities.scss";

/* Import the files. */
import bootcampsAnnexed1 from "./../../assets/files/oportunities/bootcamps/anexo-1-hoja-de-vida-bootcamps.docx";
import bootcampsAnnexed2 from "./../../assets/files/oportunities/bootcamps/anexo-2-declaracion-jurada-bootcamps.docx";
import bootcampsAnnexed3 from "./../../assets/files/oportunities/bootcamps/anexo-3-consentimiento-informado-bootcamps.docx";

function Oportunities({ apiUrl }) {
  const bootcampsAPI = `${apiUrl}/scholarships?component=30`;
  const internationalsAPI = `${apiUrl}/scholarships?component=31`;
  const nationalsAPI = `${apiUrl}/scholarships?component=32`;
  const documentsAPI = `${apiUrl}?component=33`;
  const stepsAPI = `${apiUrl}?component=34`;
  const [bootCampsData, setbootCampsData] = useState("");
  const [internationalsData, setinternationalsData] = useState("");
  const [nationalsData, setnationalsData] = useState("");
  const [documentsData, setdocumentsData] = useState("");
  const [stepsData, setstepsData] = useState("");

  useEffect(()=>{
    fetch(bootcampsAPI).then(resolve => {
      return resolve.json();
    }).then(data => {
      if (data) {
        const { nodes } = data;
        setbootCampsData(nodes);
      }
    });
  }, [bootcampsAPI]);

  useEffect(() => {
    fetch(internationalsAPI).then(resolve => {
      return resolve.json();
    }).then(data => {
      if (data) {
        const { nodes } = data;
        setinternationalsData(nodes);
      }
    });
  }, [internationalsAPI]);

  useEffect(() => {
    fetch(nationalsAPI).then(resolve => {
      return resolve.json();
    }).then(data => {
      if (data) {
        const { nodes } = data;
        setnationalsData(nodes);
      }
    });
  }, [nationalsAPI]);

  useEffect(() => {
    fetch(documentsAPI).then(resolve => {
      return resolve.json();
    }).then(data => {
      if (data) {
        const { nodes } = data;
        setdocumentsData(nodes);
      }
    });
  }, [documentsAPI]);

  useEffect(() => {
    fetch(stepsAPI).then(resolve => {
      return resolve.json();
    }).then(data => {
      if (data) {
        const { nodes } = data;
        setstepsData(nodes);
      }
    });
  }, [stepsAPI]);

  return (
    <section id="section-scholarships" className="oportunities-section">
      <div className="oportunities">
        <h2 className="oportunities__title">Oportunidades de Beca</h2>
        <div className="oportunities__content">
          <p>Los ciudadanos costarricenses interesados en aplicar los fondos no reembolsables pueden hacerlo mediante el sitio web del proveedor que imparte la capacitación y certificación de su interés.</p>
          <p>Puede conocer los cursos disponibles en el Registro de Proveedores de Certificaciones y Capacitaciones disponible en este sitio. Cada una de las ofertas académicas disponibles cuentan con requerimientos específicos que dependen del tipo de capacitación y certificación, los cuales deben ser de consideración para los posibles beneficiarios antes de realizar la solicitud de financiamiento.</p>
          {/* ToDo: Fix invalid links in the whole component */}
          {/* ToDo: Separate this in diferent components */}
          {
            /* Hide this link because was moved into each call. */
            /* <p className="oportunities__link"><a href="https://www.google.com/">Solicitar Beca <FontAwesomeIcon icon={faPlay} /> </a></p> */
          }
        </div>
        <div className="oportunities__calls">
          <Accordion
            extraClasses="scholarships--bootcamps"
            image={providerBootcampImg}
            title="Bootcamps"
            content="Organizaciones nacionales e internacionales que brindan capacitaciones intensivas de aproximadamente 3 a 6 meses."
            linksOfInterest={[
              {
                url: bootcampsAnnexed1,
                text: "Anexo 1 - Hoja de vida"
              },
              {
                url: bootcampsAnnexed2,
                text: "Anexo 2: Declaración jurada"
              },
              {
                url: bootcampsAnnexed3,
                text: "Anexo 3: Consentimiento informado"
              }
            ]}
            items={bootCampsData}
            key="accordion-bootcamps"
          />
          <Accordion
            extraClasses="scholarships--internationals"
            image={providerInternationalImg}
            title="Internacionales"
            content="Más información muy pronto."
            linksOfInterest={[

            ]}
            items={internationalsData}
            key="accordion-internationals"
          />
          <Accordion
            extraClasses="scholarships--nationals"
            image={providerNationalImg}
            title="Nacionales"
            content="Más información muy pronto."
            linksOfInterest={[

            ]}
            items={nationalsData}
            key="accordion-nationals"
          />
        </div>
        <div className="oportunities__postcontent">
          <div className="oportunities__postcontent--documents">
            <h3>Cuáles documentos debo presentar</h3>
            {documentsData && documentsData.map((document, idx) => <p key={`document-${idx}`} className="oportunities__postcontent--document">{document.node.title}</p>)}
            <div className="oportunities__postcontent--apply">
              <a href="https://www.google.com/">Iniciar aplicación <FontAwesomeIcon icon={faPlay} /></a>
            </div>
          </div>
          <div className="oportunities__postcontent--steps">
            <h3>Pasos para presentar la documentación</h3>
            {stepsData && stepsData.map((step, idx) => <p key={`step-${idx}`} className="oportunities__postcontent--step"><span>{idx}.</span>{step.node.title}</p>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Oportunities;
