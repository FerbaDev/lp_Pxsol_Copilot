import "./CostSection.scss";
import { useEffect } from "react";

export default function CostSection() {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="costo-oculto">
      <div className="costo-oculto__inner">

        <h2 className="costo-oculto__title">
          <span>El Costo Oculto</span><br />
          de la<br />
          Dependencia
        </h2>

        <div className="costo-oculto__content">

          {/* 1) Texto primero */}
          <div className="costo-oculto__texto reveal">
            <p>
              En la industria hotelera, cada minuto que un recepcionista pasa intentando descifrar el software es un minuto perdido en atención al huésped.
            </p>

            <p>
              <strong>El modelo reactivo de soporte está obsoleto.</strong><br />
              Presentamos una nueva era de asistencia proactiva donde la fricción desaparece y la autonomía florece.
            </p>
          </div>

          {/* 2) Stats después, cada una con delay */}
          <div className="costo-oculto__stats">
            <div className="stat reveal">
              <h3>85%*</h3>
              <p className="stat__title">Consultas evitables</p>
              <p className="stat__desc">Son dudas de “cómo hacer” que pueden resolverse al instante</p>
            </div>

            <div className="stat reveal">
              <h3>70%</h3>
              <p className="stat__title">Reducción de tiempo</p>
              <p className="stat__desc">En capacitación de nuevos empleados</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
