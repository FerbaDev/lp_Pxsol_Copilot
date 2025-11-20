import "./Hero.scss";
import aihub from "../../assets/aihub.png";
import pxcopilot from "../../assets/pxcopilot.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">

        <img src={aihub} alt="AI Hub" className="hero__aihub" />

        <img src={pxcopilot} alt="Pxsol Copilot IA" className="hero__pxcopilot" />

        <h1 className="hero__title">
          Tools that make teams <br />
          faster and{" "}
          <span className="highlight">more efficient</span>
        </h1>

        <div className="hero__iframe-wrapper">
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
