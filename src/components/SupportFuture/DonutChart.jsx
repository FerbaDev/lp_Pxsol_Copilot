// import { useEffect, useState } from "react";
// import './DonutChart.scss';

// const DonutChart = ({ percent, label, desc }) => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const end = percent;
//     const duration = 900;
//     const increment = end / (duration / 16);

//     const animate = () => {
//       start += increment;
//       if (start >= end) {
//         start = end;
//       } else {
//         requestAnimationFrame(animate);
//       }
//       setValue(Math.round(start));
//     };

//     requestAnimationFrame(animate);
//   }, [percent]);

//   return (
//     <div className="donut">
//       <div
//         className="donut__circle"
//         style={{ "--percent": value }}
//         data-percentage={value}
//       ></div>

//       <p className="donut__label">{label}</p>
//       {desc && <span className="donut__desc">{desc}</span>}
//     </div>
//   );
// };

// export default DonutChart;

import { useEffect, useRef, useState } from "react";
import "./DonutChart.scss";

const DonutChart = ({ percent, label, desc }) => {
  const donutRef = useRef(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = donutRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true); // Marca que ya arrancó
        }
      },
      { threshold: 0.4 }
    );

    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return; // No animar hasta que aparezca

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
  }, [started, percent]);

  return (
    <div className="donut" ref={donutRef}>
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
