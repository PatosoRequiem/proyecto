import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/adarleatomos.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info25 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto25">
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
            ¿Que es A darle Átomos?
            </p>
            <p>
            A darle átomos es un Laboratorio de química virtual en realidad aumentada con reconocimiento de manos para estudiantes de séptimo, octavo, primero medio, segundo medio y profesores de química, tanto de escuelas públicas cómo privadas en Chile.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info25;
