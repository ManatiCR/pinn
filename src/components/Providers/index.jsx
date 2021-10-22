import React from "react";
import "./Providers.scss";

function Providers() {
  return (
    <section id="section-providers" className="providers">
      <div className="providers__heading">
        <h2 className="providers__title">Registro de proveedores</h2>
        <a href="#topSite" className="providers__toTop">Volver al inicio</a>
      </div>
      <div className="providers__content">
        <p>Actualmente no hay ninguna convocatoria para proveedores disponible.</p>
        <p><a rel="noopener noreferrer" href="https://www.micit.go.cr/becas/programa-innovacion-y-capital-humano-la-competitividad-pinn" target="_blank">Ir a convocatorias pasadas</a></p>
      </div>
    </section>
  )
}

export default Providers;
