import { useEffect, useState } from "react";
import './DonutChart.scss';

const DonutChart = ({ percent, label, desc }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = percent;
    const duration = 900;
    const increment = end / (duration / 16);

    const animate = () => {
      start += increment;
      if (start >= end) {
        start = end;
      } else {
        requestAnimationFrame(animate);
      }
      setValue(Math.round(start));
    };

    requestAnimationFrame(animate);
  }, [percent]);

  return (
    <div className="donut">
      <div
        className="donut__circle"
        style={{ "--percent": value }}
        data-percentage={value}
      ></div>

      <p className="donut__label">{label}</p>
      {desc && <span className="donut__desc">{desc}</span>}
    </div>
  );
};

export default DonutChart;