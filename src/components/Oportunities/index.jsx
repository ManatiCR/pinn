import React from "react";
import providerBootcampImg from "./../../assets/provider-bootcamp.svg";
import providerInternationalImg from "./../../assets/provider-international.svg";
import providerNationalImg from "./../../assets/provider-national.svg";
import "./Oportunities.scss";

function Oportunities() {
  return (
    <section id="section-scholarships" className="oportunities-section">
      <div className="oportunities">
        <h2 className="oportunities__title">Oportunidades de Beca</h2>
        <div className="oportunities__content">
          <p>Los ciudadanos costarricenses interesados en aplicar los fondos no reembolsables pueden hacerlo mediante el sitio web del proveedor que imparte la capacitación y certificación de su interés.</p>
          <p>Puede conocer los cursos disponibles en el Registro de Proveedores de Certificaciones y Capacitaciones disponible en este sitio. Cada una de las ofertas académicas disponibles cuentan con requerimientos específicos que dependen del tipo de capacitación y certificación, los cuales deben ser de consideración para los posibles beneficiarios antes de realizar la solicitud de financiamiento.</p>
          {/* ToDo: Fix invalid links in the whole component */}
          <p><a href="#">Solicitar Beca</a></p>
        </div>
        <div className="oportunities__calls">
          <div className="oportunities__calls--content scholarships--bootcamps">
            <div className="oportunities__calls--content__text">
              <div>
                <img src={providerBootcampImg} alt="Imagen Bootcamp" />
              </div>
              <div>Organizaciones nacionales e internacionales que brindan capacitaciones intensivas de aproximadamente 3 a 6 meses.</div>
              <div>
                <b>Enlaces de interés</b>
                <ul>
                  <li>
                    <a href="#" target="_blank">Convocatoria</a>
                  </li>
                  <li>
                    <a href="#" target="_blank">Anexo 1</a>
                  </li>
                  <li>
                    <a href="#" target="_blank">Anexo 2</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="oportunities__calls--more_info">
              <a href="#">Más información<i className="fas fa-chevron-down"></i></a>
            </div>
            <div className="oportunities__calls--scholarships__block">
              {/* Add react calls correctly */}
              <div id="react-app-calls-scholarship-bootcamps"></div>
            </div>
          </div>
          <div className="oportunities__calls--content scholarships--internationals">
            <div className="oportunities__calls--content__text">
              <div>
                <img src={providerInternationalImg} alt="Imagen Globo Mundo" />
              </div>
              <div>Organizaciones nacionales e internacionales que brindan capacitaciones intensivas de aproximadamente 3 a 6 meses.</div>
              <div>
                <b>Enlaces de interés</b>
                <ul>
                  <li>
                    <a href="#" target="_blank">Convocatoria</a>
                  </li>
                  <li>
                    <a href="#" target="_blank">Anexo 1</a>
                  </li>
                  <li>
                    <a href="#" target="_blank">Anexo 2</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="oportunities__calls--more_info">
              <a href="#">Más información<i className="fas fa-chevron-down"></i></a>
            </div>
            <div className="oportunities__calls--scholarships__block">
              <div id="react-app-calls-scholarship-internationals"></div>
            </div>
          </div>
          <div className="oportunities__calls--content scholarships--nationals">
            <div className="oportunities__calls--content__text">
              <div>
                <img src={providerNationalImg} alt="Imagen mapa Costa Rica" />
              </div>
              <div>Organizaciones nacionales e internacionales que brindan capacitaciones intensivas de aproximadamente 3 a 6 meses.</div>
                <div>
                  <b>Enlaces de interés</b>
                  <ul>
                    <li>
                      <a href="#" target="_blank">Convocatoria</a>
                    </li>
                    <li>
                      <a href="#" target="_blank">Anexo 1</a>
                    </li>
                    <li>
                      <a href="#" target="_blank">Anexo 2</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="oportunities__calls--more_info">
                <a href="#">Más información<i className="fas fa-chevron-down"></i></a>
              </div>
              <div className="oportunities__calls--scholarships__block">
                <div id="react-app-calls-scholarship-nationals"></div>
              </div>
            </div>
        </div>
        <div className="oportunities__postcontent">
          <div className="oportunities__postcontent--documents">
            <h3>Cuáles documentos debo presentar</h3>
            <div id="react-app-calls-scholarship-documents"></div>
            <div className="oportunities__postcontent--apply">
              <a href="#">Iniciar aplicación</a>
            </div>
          </div>
          <div className="oportunities__postcontent--steps">
            <h3>Pasos para presentar la documentación</h3>
            <div id="react-app-calls-scholarship-steps"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Oportunities;
