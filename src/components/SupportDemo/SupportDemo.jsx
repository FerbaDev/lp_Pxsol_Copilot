// SupportDemo.jsx
import DonutChart from './DonutChart';
import './SupportDemo.scss';

const SupportDemo = () => {
  return (
    <section className="support-demo">
      <h2>Test de Donas</h2>

      <div className="support-demo__donuts">
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
    </section>
  );
};

export default SupportDemo;
