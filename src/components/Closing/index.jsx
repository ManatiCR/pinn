import React from "react";
import "./Closing.scss";
import logoMiccit from "./../../assets/micitt-logo.png"
import logoCindeJobs from "./../../assets/cinde-jobs-logo.png"
import logoTTP from "./../../assets/ttp-logo.png"

// ToDo: Change the name of this component name to Closing
function Closing() {
  return (
    <div className="closing">
      <h1 className="closing__title">
        Hemos dado por concluido permanentemente nuestro proceso con el programa de Becas PINN; esto después de haber colocado más de 1700 becas y $7 millones.
      </h1>
      <p className="closing__description">
        Antes de despedirnos, queremos invitarte a que nos sigás en nuestras páginas aliadas donde podrás tener más detalles sobre iniciativas como estas:
      </p>
      <ul className="closing__list">
        <li className="closing__list-section">
          <a href="https://www.facebook.com/micitcr" className="closing__list-link">
            <img src={logoMiccit} alt="Miccit Logo" />
            <h4>Miccit</h4>
          </a>
        </li>
        <li className="closing__list-section">
          <a href="https://www.facebook.com/CindeJobs" className="closing__list-link">
            <img src={logoCindeJobs} alt="Cinde Jobs Logo" />
            <h4>CINDE Jobs</h4>
          </a>
        </li>
        <li className="closing__list-section">
          <a href="https://www.facebook.com/thetalentplacecr" className="closing__list-link">
            <img src={logoTTP} alt="The talent place Logo" />
            <h4>The Talent Place</h4>
          </a>
        </li>
      </ul>
    </div>
  )
};

export default Closing;
