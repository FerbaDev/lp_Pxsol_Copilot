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

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import aihub from "../../assets/aihub.png";
import pxcopilot from "../../assets/pxcopilot.png";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const aihubRef = useRef(null);
  const copilotRef = useRef(null);
  const iframeRef = useRef(null);

  // Animación de imágenes SOLO cuando cargaron
  useEffect(() => {
    const elements = [aihubRef.current, copilotRef.current];

    const animate = () => {
      gsap.from(elements, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });
    };

    // Si ambas imágenes ya cargaron
    const allLoaded = elements.every((el) => el.complete);

    if (allLoaded) {
      animate();
    } else {
      // Esperar a que carguen
      elements.forEach((el) =>
        el.addEventListener("load", animate, { once: true })
      );
    }

    return () => {
      elements.forEach((el) =>
        el.removeEventListener("load", animate)
      );
    };
  }, []);

  // Animación del iframe
  useEffect(() => {
    if (!iframeRef.current) return;

    gsap.from(iframeRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: iframeRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero__content">

        <img
          ref={aihubRef}
          src={aihub}
          alt="AI Hub"
          className="hero__aihub"
        />

        <img
          ref={copilotRef}
          src={pxcopilot}
          alt="Pxsol Copilot IA"
          className="hero__pxcopilot"
        />

        <h1 className="hero__title">
          Tools that make teams <br />
          faster and{" "}
          <span className="highlight">more efficient</span>
        </h1>

        <div className="hero__iframe-wrapper" ref={iframeRef}>
          <iframe
            src="https://demo.arcade.software/Ei3xHBuVRiNVeDohn0pS?embed"
            title="Pxsol Demo"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
}

