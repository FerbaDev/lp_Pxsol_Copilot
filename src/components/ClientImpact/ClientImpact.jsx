import React from "react";
import "./ClientImpact.scss";
import ImpactImage from "../../assets/image-39.png";

const ClientImpact = () => {
  return (
    <section className="client-impact">
      <div className="container">
        <div className="client-impact__wrapper">
          
          <div className="client-impact__content">
            <p className="client-impact__text">
              Un cliente intenta guardar una reserva y aparece un error críptico.
              No tiene que copiarlo ni crear un ticket.
              <span className="highlight"> El CoPilot lo ve en el instante </span>
              y actúa.
            </p>

            <div className="client-impact__message">
              <p>
                <strong>
                “¡Hola María! Sisi veo ese error. Significa que la habitación tipo Doble Superior no tiene inventario cargado para agosto. ¿Quieres que te guíe para solucionarlo ahora mismo?”
                </strong>
              </p>
            </div>

            <p className="client-impact__text">
              Problemas que antes tomaban una hora de espera ahora se resuelven en 3 minutos. El flujo de trabajo nunca se detiene.
            </p>
          </div>

          <div className="client-impact__image">
            <img src={ImpactImage} alt="Client Impact" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientImpact;

