// DonutChart.jsx
import './DonutChart.scss';

const DonutChart = ({ percent, label, desc }) => {
  return (
    <div className="donut">
      <div
        className="donut__circle"
        style={{ "--percent": percent }}
        data-percentage={percent}
      ></div>

      <p className="donut__label">{label}</p>

      {desc && <span className="donut__desc">{desc}</span>}
    </div>
  );
};

export default DonutChart;
