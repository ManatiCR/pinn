import React from "react";
import "./Menu.scss";
import logoPinn from "./../../assets/logo.png"
import logoMiccit from "./../../assets/micitt-logo.png"
import logoEsencial from "./../../assets/esencial-logo.png"
import logoCinde from "./../../assets/cinde-logo.png"

function Menu() {
  return (
    <>
      <nav className="nav">
        <div className="nav__logo">
          <img src={logoPinn} alt="PINN Logo" />
        </div>
        <div className="nav__logos">
          <img className="nav__micitt" src={logoMiccit} alt="micitt Logo" />
          <img className="nav__esencial" src={logoEsencial} alt="Esencial Costa Rica Logo" />
          <img className="nav__cinde" src={logoCinde} alt="Cinde Logo" />
        </div>
      </nav>
      <div className="site-main-menu">
        <nav>
          <ul>
            <li><a href="#section-pinn">¿Qué es PINN?</a></li>
            <li><a href="#section-scholarships">Becas</a></li>
            <li><a href="#section-providers">Proveedores</a></li>
            <li><a href="#section-faqs">Preguntas Frecuentes</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
};

export default Menu;
