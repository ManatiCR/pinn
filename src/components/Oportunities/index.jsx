import React, { useState, useEffect } from "react";
import providerBootcampImg from "./../../assets/provider-bootcamp.svg";
import providerInternationalImg from "./../../assets/provider-international.svg";
import providerNationalImg from "./../../assets/provider-national.svg";
import Accordion from "./../Accordion";
import "./Oportunities.scss";

/* Import the files. */
import bootcampsAnnexed1 from "./../../assets/files/oportunities/bootcamps/convocatoria-2/anexo-1-hoja-de-vida-bootcamps.docx";
import bootcampsAnnexed2 from "./../../assets/files/oportunities/bootcamps/convocatoria-2/anexo-2-declaracion-jurada-bootcamps.docx";
import bootcampsAnnexed3 from "./../../assets/files/oportunities/bootcamps/convocatoria-2/anexo-3-consentimiento-informado-bootcamps.docx";
import internationalsAnnexed1 from "./../../assets/files/oportunities/internacionales/convocatoria-2/anexo-1-hoja-de-vida-beneficiarios-internacionales.docx";
import internationalsAnnexed2 from "./../../assets/files/oportunities/internacionales/convocatoria-2/anexo-2-declaracion-jurada-beneficiarios-internacionales.docx";
import internationalsAnnexed3 from "./../../assets/files/oportunities/internacionales/convocatoria-2/anexo-3-consentimiento-informado-beneficiarios-internacionales.docx";
import nationalsAnnexed1 from "./../../assets/files/oportunities/nacionales/anexo-1-hoja-de-vida-beneficiarios-nacionales.docx";
import nationalsAnnexed2 from "./../../assets/files/oportunities/nacionales/anexo-2-declaracion-jurada-beneficiarios-nacionales.docx";
import nationalsAnnexed3 from "./../../assets/files/oportunities/nacionales/anexo-3-consentimiento-informado-beneficiarios-nacionales.docx";

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
                text: "Anexo 1: Hoja de vida"
              },
              {
                url: bootcampsAnnexed2,
                text: "Anexo 2: Declaración jurada"
              } ,
              {
                url: bootcampsAnnexed3,
                text: "Anexo 3: Consentimiento informado"
              }
            ]}
            items={bootCampsData}
            key="accordion-bootcamps"
            applyLink=""
            closeText="Convocatoria cerrada"
          />
          <Accordion
            extraClasses="scholarships--internationals"
            image={providerInternationalImg}
            title="Internacionales"
            content="Organizaciones internacionales que brindan capacitaciones y/o certificaciones."
            linksOfInterest={[
              {
                url: internationalsAnnexed1,
                text: "Anexo 1: Hoja de vida"
              },
              {
                url: internationalsAnnexed2,
                text: "Anexo 2: Declaración jurada"
              }
              ,
              {
                url: internationalsAnnexed3,
                text: "Anexo 3: Consentimiento informado"
              }
            ]}
            items={internationalsData}
            key="accordion-internationals"
            applyLink=""
            closeText="Convocatoria cerrada"
          />
          <Accordion
            extraClasses="scholarships--nationals"
            image={providerNationalImg}
            title="Nacionales"
            content="Organizaciones nacionales que brindan capacitaciones y/o certificaciones."
            linksOfInterest={[
              {
                url: nationalsAnnexed1,
                text: "Anexo 1: Hoja de vida"
              },
              {
                url: nationalsAnnexed2,
                text: "Anexo 2: Declaración jurada"
              },
              {
                url: nationalsAnnexed3,
                text: "Anexo 3: Consentimiento informado"
              }
            ]}
            items={nationalsData}
            key="accordion-nationals"
            applyLink=""
            closeText="Convocatoria cerrada"
          />
        </div>
        <div className="oportunities__postcontent">
          <div className="oportunities__postcontent--documents">
            <h3>Cuáles documentos debo presentar</h3>
            {documentsData && documentsData.map((document, idx) => <p key={`document-${idx}`} className="oportunities__postcontent--document">{document.node.title}</p>)}
            {
              /* Hide this link because was moved into each call. */
              /*
              <div className="oportunities__postcontent--apply">
                <a href="https://www.google.com/">Iniciar aplicación <FontAwesomeIcon icon={faPlay} /></a>
              </div>
              */
            }
          </div>
          <div className="oportunities__postcontent--steps">
            <h3>Pasos para presentar la documentación</h3>
            {stepsData && stepsData.map((step, idx) => <p key={`step-${idx}`} className="oportunities__postcontent--step"><span>{idx + 1}.</span>{step.node.title}</p>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Oportunities;
