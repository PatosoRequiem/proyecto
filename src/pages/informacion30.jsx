import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/simurisk.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info30 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto30">
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
            SimuRisk
            </p>
            <p>
            SimuRisk es un innovador simulador de realidad virtual diseñado para transformar la enseñanza de los cursos de prevención de riesgos. A través de simulaciones inmersivas y controladas, los usuarios pueden experimentar situaciones peligrosas de manera segura y práctica, lo que les permite comprender y gestionar mejor los riesgos en su entorno laboral.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info30;
