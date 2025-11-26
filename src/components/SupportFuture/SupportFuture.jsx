import { useState, useEffect } from 'react';
import './SupportFuture.scss';
import bgImage from '../../assets/bg-image.png';
import DonutChart from './DonutChart';
import upArrow from '../../assets/up-arrow.png';

const SupportFuture = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 900) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 900) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      className="future-support"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* ✅ Overlay agregado sin afectar nada */}
      <div className="future-support__overlay"></div>

      <div className="container">
        <div className="future-support__wrapper">

          <h2 className="future-support__title">
            El futuro del soporte es<br />cero soporte
          </h2>

          <div className="future-support__top-texts">
            <div className="future-support__top-item">
              <h3>Onboarding instantáneo</h3>
              <p>
                Juan, nuevo recepcionista, realiza su primera reserva guiado paso a paso.
                Tiempo de capacitación reducido en 70%. Productivo desde la hora 1, no desde la semana 2.
              </p>
            </div>

            <div className="future-support__top-item">
              <h3>Error de medianoche resuelto</h3>
              <p>
                Ana enfrenta el error "Folio Discrepancy #401" durante el cierre nocturno.
                El CoPilot identifica el problema y la guía a la solución en 3 minutos.
                Cero espera, cero pánico.
              </p>
            </div>

            <div className="future-support__top-item">
              <h3>Configuración avanzada</h3>
              <p>
                El Gerente de Revenue crea una promoción "Paga 3, Quédate 4"
                con ayuda del CoPilot. No solo resuelve su duda: aprende a dominar
                funciones avanzadas del sistema.
              </p>
            </div>
          </div>

          <div className="future-support__description">
            <p>
              Pxsol CoPilot IA es nuestra respuesta al 95% de la fricción de nuestros clientes.
              La transición de un modelo reactivo basado en tickets a un modelo de asistencia
              proactiva basada en IA contextual.
            </p>

            <p>
              No solo ahorramos miles de horas a nuestro equipo. Regalamos miles de horas
              a nuestros hoteleros, dándoles lo más preciado:{" "}
              <span className="highlight">tiempo y autonomía.</span>
            </p>
          </div>

          <div className="future-support__donuts">
            <DonutChart
              percent={85}
              label="Resolución instantánea"
              desc="Sin crear tickets"
            />

            <DonutChart
              percent={100}
              label="Disponibilidad"
              desc="24/7 sin esperas"
            />

            <DonutChart
              percent={300}
              label="Velocidad"
              desc="Más rápido que soporte tradicional"
            />
          </div>

          <div className="future-support__cta">
            <button>Probar ahora</button>
          </div>

          <button 
            className={`scroll-top-btn ${showScroll ? 'visible' : ''}`}
            onClick={scrollTop}
          >
            <img src={upArrow} alt="Scroll to top" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default SupportFuture;
