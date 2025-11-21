import "./CostSection.scss";


export default function CostSection() {
  return (
<section class="costo-oculto">
  <div class="costo-oculto__inner">

    <h2 class="costo-oculto__title">
      <span>El Costo Oculto</span><br />
      de la<br />
      Dependencia
    </h2>

    <div class="costo-oculto__content">

      <div class="costo-oculto__texto">
        <p>
          En la industria hotelera, cada minuto que un recepcionista pasa intentando descifrar el software es un minuto perdido en atención al huésped. Cada ticket de soporte rompe el flujo de trabajo y genera dependencia innecesaria.
        </p>

        <p>
          <strong>El modelo reactivo de soporte está obsoleto.</strong><br />
          Presentamos una nueva era de asistencia proactiva donde la fricción desaparece y la autonomía florece.
        </p>
      </div>

      <div class="costo-oculto__stats">
        <div class="stat">
          <h3>85%*</h3>
          <p class="stat__title">Consultas evitables</p>
          <p class="stat__desc">Son dudas de “cómo hacer” que pueden resolverse al instante</p>
        </div>

        <div class="stat">
          <h3>70%</h3>
          <p class="stat__title">Reducción de tiempo</p>
          <p class="stat__desc">En capacitación de nuevos empleados</p>
        </div>
      </div>

    </div>

  </div>
</section>

  );
}
