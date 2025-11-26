// import "./Hero.scss";
// import aihub from "../../assets/aihub.png";
// import pxcopilot from "../../assets/pxcopilot.png";

// export default function Hero() {
//   return (
//     <section className="hero">
//       <div className="hero__content">

//         <img src={aihub} alt="AI Hub" className="hero__aihub" />

//         <img src={pxcopilot} alt="Pxsol Copilot IA" className="hero__pxcopilot" />

//         <h1 className="hero__title">
//           Tools that make teams <br />
//           faster and{" "}
//           <span className="highlight">more efficient</span>
//         </h1>

//         <div className="hero__iframe-wrapper">
//           <iframe
//             src="https://demo.arcade.software/Ei3xHBuVRiNVeDohn0pS?embed"
//             title="Pxsol Demo"
//             frameBorder="0"
//             allowFullScreen
//           ></iframe>
//         </div>

//       </div>
//     </section>
//   );
// }

import { useRef, useEffect } from "react";
import "./Hero.scss";

import aihub from "../../assets/aihub.png";
import pxcopilot from "../../assets/pxcopilot.png";

export default function Hero() {
  const copilotRef = useRef(null);
  const titleRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    // 👀 Función de animación cuando el elemento entra en pantalla
    const fadeUp = (entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(fadeUp),
      { threshold: 0.2 }
    );

    observer.observe(copilotRef.current);
    observer.observe(titleRef.current);
    observer.observe(iframeRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero">
      <div className="hero__content">

        <img
          src={aihub}
          alt="AI Hub"
          className="hero__aihub"
        />

        <img
          ref={copilotRef}
          src={pxcopilot}
          alt="Pxsol Copilot IA"
          className="hero__pxcopilot fade-up"
        />

        <h1 ref={titleRef} className="hero__title fade-up">
          Tools that make teams <br />
          faster and{" "}
          <span className="highlight">more efficient</span>
        </h1>

        <div className="hero__iframe-wrapper fade-up" ref={iframeRef}>
          <iframe
            src="https://demo.arcade.software/Ei3xHBuVRiNVeDohn0pS?embed"
            title="Pxsol Demo"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <a href="https://drive.google.com/file/d/1dwv6_-eFqlozDTnBD6ru-Czsiml75VV-/view" target="_blank"className="hero__cta">
            <button >Probar ahora</button>
        </a>

      </div>
    </section>
  );
}


