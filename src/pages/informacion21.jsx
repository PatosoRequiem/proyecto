import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/cyberacademy.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info21 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto21">
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
            ¿Qué es Cyber Academy?
            </p>
            <p>
            Cyber Academy es una Aplicación de escritorio sobre ciberseguridad con aprendizaje adaptativo y gamificación, dirigida a instituciones y estudiantes tecnológicos para desarrollar habilidades efectivas en prevención y respuesta a distintos tipos de ciberataques que se pueden encontrar en la actualidad. En esta aplicación aprenderan sobre aspectos teoricos y practicos sobre cada tipo de ataque, aprendieno sobre su impacto y como pueden enfrentarse a ellos.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info21;
