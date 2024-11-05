import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/canaria.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info15 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto15">
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
            El polvo en suspensión es un desafío constante en la actividad minera, afectando la salud de los trabajadores y las comunidades cercanas. Esto hace que las medidas de mitigación sean de gran importancia, pero actualmente, estas no tienen una forma simple de saber si son efectivas o no.
            </p>
            <p>
            CanarIA es un software basado en inteligencia artificial que ayuda a medir la efectividad de medidas de mitigación para el control de polvo en mineras, además de levantar alertas, enviar notificaciones y generar métricas para futuro uso de los encargados. Esto lo logra a través de la detección de polvo utilizando redes neuronales.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info15;
