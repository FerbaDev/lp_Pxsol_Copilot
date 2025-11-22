import React from "react";
import "./ExpertSection.scss";

const ExpertSection = () => {
  return (
    <section className="expert-section">
      <div className="container">
        <h2 className="main-title">
          Guía Paso a Paso: 
          <span className="gradient"> Tu Experto Personal</span>
        </h2>

        <div className="cards">
          <div className="card">
            <h3><span className="dot"></span>Detección instantánea</h3>
            <p>El CoPilot identifica tu pantalla y el contexto actual del sistema PMS</p>
          </div>

          <div className="card">
            <h3><span className="dot"></span>Comprensión contextual</h3>
            <p>Procesa tu pregunta en lenguaje natural: "necesito cargar una nueva tarifa"</p>
          </div>

          <div className="card">
            <h3><span className="dot"></span>Navegación guiada</h3>
            <p>"Haz clic en Configuración en el menú izquierdo. Ahora busca Tarifas..."</p>
          </div>

          <div className="card">
            <h3><span className="dot"></span>Validación en vivo</h3>
            <p>Confirma cada paso completado antes de avanzar al siguiente</p>
          </div>

          <div className="card">
            <h3><span className="dot"></span>Resolución completa</h3>
            <p>Te acompaña hasta que la tarea esté 100% completada y funcional</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
