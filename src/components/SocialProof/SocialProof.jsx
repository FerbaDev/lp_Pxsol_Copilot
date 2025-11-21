import React from "react";
import "./SocialProof.scss";
import pruebaSocial from "../../assets/Prueba Social.png";

const SocialProof = () => {
  return (
    <section className="social-proof">
      <div className="social-proof__container">
        <img
          src={pruebaSocial}
          alt="Prueba Social"
          className="social-proof__image"
        />
      </div>
    </section>
  );
};

export default SocialProof;


