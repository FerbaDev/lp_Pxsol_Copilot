import "./Stream.scss";
import streamImg from "../../assets/Stream Realtime.png";

const Stream = () => {
  return (
    <section className="stream-section">
      <div className="stream-container">
        
        {/* Imagen izquierda */}
        <div className="stream-image">
          <img src={streamImg} alt="Stream Realtime" />
        </div>

        {/* Texto central */}
        <div className="stream-info">
          <h2 className="gradient-title">In streaming</h2>

          <p>
            Es una capa de inteligencia contextual que vive dentro de tu
            ecosistema de trabajo. Ve lo que ves, entiende lo que necesitas y
            actúa en el momento exacto de la duda.
          </p>

          <p className="highlight">
            No es un chatbot. No es una base de conocimientos.
          </p>

          <p>
            Es un experto en streaming personalizado, guiándote clic a clic,
            interpretando errores en vivo y convirtiendo cada obstáculo en una
            oportunidad de aprendizaje instantáneo.
          </p>
        </div>

        {/* Tarjetas derecha */}
        <div className="stream-cards">
          <div className="card">
            <div className="icon">📱</div>
            <h3>Visión en vivo</h3>
            <p>Procesa tu pantalla en tiempo real</p>
          </div>

          <div className="card">
            <div className="icon">🎧</div>
            <h3>Escucha activa</h3>
            <p>Comprende lenguaje natural hotelero</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stream;
