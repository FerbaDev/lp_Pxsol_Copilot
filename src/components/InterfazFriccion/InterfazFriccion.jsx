import React from "react";
import "./InterfazFriccion.scss";
import video1 from "../../assets/video1.mov";
import video2 from "../../assets/video2.mov";

const InterfazFriccion = () => {
  return (
    <section className="interfaz-friccion">
      <div className="container">
        {/* Título */}
        <h2 className="interfaz-friccion__title">
          <span className="gradient">Interfaz sin fricción</span>
        </h2>

        {/* Primera fila: Video1 + Tarjeta */}
        <div className="interfaz-friccion__top">
          <div className="interfaz-friccion__video1">
            <video src={video1} autoPlay playsInline muted loop />
          </div>

          <div className="interfaz-friccion__card">
            <h3>Psicología del diseño</h3>
            <p>
              No es un ícono de "ayuda" que implica debilidad. Es “Copilot”, que implica asistencia
              experta. Al hacer clic, no pides ayuda: <strong>activas a tu experto.</strong>
            </p>
            <p>
              Un diseño limpio y binario. Solo dos caminos: "Hablar" o "Compartir pantalla". El
              usuario no tiene que pensar. La decisión es instantánea y obvia.
            </p>
          </div>
        </div>

        {/* Segunda fila: Texto + Video2 */}
        <div className="interfaz-friccion__bottom">
          <div className="interfaz-friccion__text">
            <p>
              Cuando no se necesita activamente, el Copilot no desaparece. La pastilla roja se atenúa
              y emite hermosas estelas de brillo en forma de X (nuestra X).
            </p>

            <p>
              Es <span className="highlight">calm technology</span>: comunica de forma no verbal
              "Estoy aquí, listo" y "Estoy funcionando, todo está bien" sin molestar jamás.
            </p>

            <p>
              Esas estelas en forma de X de Pxsol refuerzan la marca de manera elegante, asociando
              Pxsol con inteligencia, magia sutil y alta tecnología. Es nuestro sello distintivo, el
              equivalente digital del swoosh de Nike.
            </p>
          </div>

          <div className="interfaz-friccion__video2">
            <video src={video2} autoPlay playsInline muted loop />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterfazFriccion;
