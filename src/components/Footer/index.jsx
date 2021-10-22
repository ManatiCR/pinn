import React from "react";
import "./Footer.scss";
import logoPinn from "./../../assets/logo.png"
import logoMiccit from "./../../assets/micitt-logo.png"
import logoEsencial from "./../../assets/esencial-logo.png"
import logoCinde from "./../../assets/cinde-logo.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logos">
          <img className="footer__logo" src={ logoPinn } alt="PINN Logo" />
          <img className="footer__micitt" src={ logoMiccit } alt="micitt Logo" />
          <img className="footer__esencial" src={ logoEsencial } alt="Esencial Costa Rica Logo" />
          <img className="footer__cinde" src={ logoCinde } alt="Cinde Logo" />
        </div>
        <div className="footer__contact">
          <p className="footer__contact-title">Contáctenos</p>
          <div className="footer__contact-info">
            <div className="footer__contact-item">
              <span className="footer__contact-phone">Teléfonos:</span>
            </div>
            <div className="footer__contact-item">
              <div className="footer__contact-phones-list">
                <a href="tel:22012814">2201-2814</a>
                <a href="tel:22012833">2201-2833</a>
                <a href="tel:22012856">2201-2856</a>
              </div>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-email">E-mail:</span>
            </div>
            <div className="footer__contact-item">
              <a href="mailto:becasmicitt@cinde.org">becasmicitt@cinde.org</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
