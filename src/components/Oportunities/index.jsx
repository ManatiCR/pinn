import React, { useState } from "react";
import providerBootcampImg from "./../../assets/provider-bootcamp.svg";
import providerInternationalImg from "./../../assets/provider-international.svg";
import providerNationalImg from "./../../assets/provider-national.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import "./Oportunities.scss";

function Oportunities() {
  const [bootCampsState, setBootCampsState] = useState(false);
  const [internationalsState, setInternationalsState] = useState(false);
  const [nationalsState, setNationalsState] = useState(false);
  const [providerState1, setProviderState1] = useState(false);
  const [providerState2, setProviderState2] = useState(false);
  const [providerState3, setProviderState3] = useState(false);

  return (
    <section id="section-scholarships" className="oportunities-section">
      <div className="oportunities">
        <h2 className="oportunities__title">Oportunidades de Beca</h2>
        <div className="oportunities__content">
          <p>Los ciudadanos costarricenses interesados en aplicar los fondos no reembolsables pueden hacerlo mediante el sitio web del proveedor que imparte la capacitación y certificación de su interés.</p>
          <p>Puede conocer los cursos disponibles en el Registro de Proveedores de Certificaciones y Capacitaciones disponible en este sitio. Cada una de las ofertas académicas disponibles cuentan con requerimientos específicos que dependen del tipo de capacitación y certificación, los cuales deben ser de consideración para los posibles beneficiarios antes de realizar la solicitud de financiamiento.</p>
          {/* ToDo: Fix invalid links in the whole component */}
          {/* ToDo: Separate this in diferent components */}
          <p class="oportunities__link"><a href="#">Solicitar Beca <FontAwesomeIcon icon={faPlay} /> </a></p>
        </div>
        <div className="oportunities__calls">
          <div className={`oportunities__calls--content scholarships--bootcamps ${bootCampsState ? "oportunities__calls--content-open" : ""}`}>
            <div className="oportunities__calls--content__text">
              <div className="oportunities__calls--content__image">
                <img src={providerBootcampImg} alt="Imagen Bootcamp" />
              </div>
              <div className="oportunities__calls--content__info">
                <h4>Boot Camps</h4>
                <p>Organizaciones nacionales e internacionales que brindan capacitaciones intensivas de aproximadamente 3 a 6 meses.</p>
                <div className={`oportunities__calls--more_info ${bootCampsState ? "oportunities__calls--more_info--open" : ""}`}>
                  <button onClick={() => {setBootCampsState(!bootCampsState)}}>Más información <FontAwesomeIcon icon={faChevronDown} /> </button>
                </div>
              </div>
              <div className="oportunities__calls--content__extra">
                <b>Enlaces de interés</b>
                <ul>
                  <li>
                    <a href="#" target="_blank"><FontAwesomeIcon icon={faFileAlt} /> Convocatoria</a>
                  </li>
                  <li>
                    <a href="#" target="_blank"><FontAwesomeIcon icon={faFileAlt} /> Anexo 1</a>
                  </li>
                  <li>
                    <a href="#" target="_blank"><FontAwesomeIcon icon={faFileAlt} /> Anexo 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          { bootCampsState && (
            <div className="oportunities__result">
              <div className={`oportunities__result__provider ${providerState1 ? "oportunities__result__provider--open" : ""}`}>
                <h4 onClick={() => setProviderState1(!providerState1)}><FontAwesomeIcon icon={faChevronRight} /> Nombre del Proveedor</h4>
                { providerState1 && (
                  <div className="oportunities__result__courses">
                    <a href="#">Nombre del curso disponible</a>
                    <a href="#">Nombre del curso disponible</a>
                    <a href="#">Nombre del curso disponible</a>
                    <a href="#">Nombre del curso disponible</a>
                    <a href="#">Nombre del curso disponible</a>
                    <a href="#">Nombre del curso disponible</a>
                    <a href="#">Nombre del curso disponible</a>
                  </div>
                )}
              </div>
            </div>
          )}
          <div className={`oportunities__calls--content scholarships--internationals ${internationalsState ? " oportunities__calls--content-open" : ""}`}>
            <div className="oportunities__calls--content__text">
              <div className="oportunities__calls--content__image">
                <img src={providerInternationalImg} alt="Imagen Globo Mundo" />
              </div>
              <div className="oportunities__calls--content__info">
                <h4>Internacionales</h4>
                <p>Organizaciones nacionales e internacionales que brindan capacitaciones intensivas de aproximadamente 3 a 6 meses.</p>
                <div className={`oportunities__calls--more_info ${internationalsState ? "oportunities__calls--more_info--open" : ""}`}>
                  <button onClick={() => { setInternationalsState(!internationalsState) }}>Más información <FontAwesomeIcon icon={faChevronDown} /> </button>
                </div>
              </div>
              <div className="oportunities__calls--content__extra">
                <b>Enlaces de interés</b>
                <ul>
                  <li>
                    <a href="#" target="_blank"><FontAwesomeIcon icon={faFileAlt} /> Convocatoria</a>
                  </li>
                  <li>
                    <a href="#" target="_blank"><FontAwesomeIcon icon={faFileAlt} /> Anexo 1</a>
                  </li>
                  <li>
                    <a href="#" target="_blank"><FontAwesomeIcon icon={faFileAlt} /> Anexo 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {internationalsState && (
            <div className="oportunities__result">
              <div className={`oportunities__result__provider ${providerState2 ? "oportunities__result__provider--open" : ""}`}>
                <h4 onClick={() => setProviderState2(!providerState2)}><FontAwesomeIcon icon={faChevronRight} /> Nombre del Proveedor</h4>
                {providerState2 && (
                  <div className="oportunities__result__courses">
                    <a href="#">Nombre del curso disponible</a>
                    <a href="#">Nombre del curso disponible</a>
                    <a href="#">Nombre del curso disponible</a>
                    <a href="#">Nombre del curso disponible</a>
                    <a href="#">Nombre del curso disponible</a>
                    <a href="#">Nombre del curso disponible</a>
                    <a href="#">Nombre del curso disponible</a>
                  </div>
                )}
              </div>
            </div>
          )}
          <div className={`oportunities__calls--content scholarships--nationals ${nationalsState ? " oportunities__calls--content-open" : ""}`}>
            <div className="oportunities__calls--content__text">
              <div className="oportunities__calls--content__image">
                <img src={providerNationalImg} alt="Imagen mapa Costa Rica" />
              </div>
              <div className="oportunities__calls--content__info">
                <h4>Nacionales</h4>
                <p>Organizaciones nacionales e internacionales que brindan capacitaciones intensivas de aproximadamente 3 a 6 meses.</p>
                <div className={`oportunities__calls--more_info ${nationalsState ? "oportunities__calls--more_info--open" : ""}`}>
                  <button onClick={() => { setNationalsState(!nationalsState) }}>Más información <FontAwesomeIcon icon={faChevronDown} /> </button>
                </div>
              </div>
              <div className="oportunities__calls--content__extra">
                <b>Enlaces de interés</b>
                <ul>
                  <li>
                    <a href="#" target="_blank"><FontAwesomeIcon icon={faFileAlt} /> Convocatoria</a>
                  </li>
                  <li>
                    <a href="#" target="_blank"><FontAwesomeIcon icon={faFileAlt} /> Anexo 1</a>
                  </li>
                  <li>
                    <a href="#" target="_blank"><FontAwesomeIcon icon={faFileAlt} /> Anexo 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {nationalsState && (
            <div className="oportunities__result">
              <div className={`oportunities__result__provider ${providerState3 ? "oportunities__result__provider--open" : ""}`}>
                <h4 onClick={() => setProviderState3(!providerState3)}><FontAwesomeIcon icon={faChevronRight} /> Nombre del Proveedor</h4>
                {providerState3 && (
                  <div className="oportunities__result__courses">
                    <a href="#">Nombre del curso disponible</a>
                    <a href="#">Nombre del curso disponible</a>
                    <a href="#">Nombre del curso disponible</a>
                    <a href="#">Nombre del curso disponible</a>
                    <a href="#">Nombre del curso disponible</a>
                    <a href="#">Nombre del curso disponible</a>
                    <a href="#">Nombre del curso disponible</a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="oportunities__postcontent">
          <div className="oportunities__postcontent--documents">
            <h3>Cuáles documentos debo presentar</h3>
            <p className="oportunities__postcontent--document">Copia de la cédila de identidad o DIMEX</p>
            <p className="oportunities__postcontent--document">Declaración jurada (Formato Anexo 2)</p>
            <p className="oportunities__postcontent--document">Curriculum Vitae (Formato Anexo 1)</p>
            <p className="oportunities__postcontent--document">Copia de los títulos de educación formal que haya obtenido (revisar convocatorias)</p>
            <div className="oportunities__postcontent--apply">
              <a href="#">Iniciar aplicación <FontAwesomeIcon icon={faPlay} /></a>
            </div>
          </div>
          <div className="oportunities__postcontent--steps">
            <h3>Pasos para presentar la documentación</h3>
            <p className="oportunities__postcontent--step"><span>1.</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut felis est. Nunc eget justo ac elit posuere feugiat ut ut nulla.</p>
            <p className="oportunities__postcontent--step"><span>2.</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut felis est. Nunc eget justo ac elit posuere feugiat ut ut nulla.</p>
            <p className="oportunities__postcontent--step"><span>3.</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut felis est. Nunc eget justo ac elit posuere feugiat ut ut nulla.</p>
            <p className="oportunities__postcontent--step"><span>4.</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut felis est. Nunc eget justo ac elit posuere feugiat ut ut nulla.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Oportunities;
