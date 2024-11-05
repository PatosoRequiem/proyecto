import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/wakeupdriver.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info23 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto23">
            <img 
              src={returnIcon} 
              alt="Return" 
              className="return-icon" 
            />
          </Link>
          <h1>Información del proyecto</h1>
        </div>
        
        <div className="content-container">
          <div className="paragraph-section">
            <p>
            ¿Qué es WakeUp Driver?
            </p>
            <p>
            WakeUp Driver hace uso de inteligencia artificial, reconocimiento facial, y análisis biométrico para detectar signos de fatiga en el conductor. Cuando se detecta que tienes sueño mediante continuos parpadeos somnolientos y bostezos, WakeUp Driver activará una alarma que busca despertarte para evitar un accidente fatal.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info23;
