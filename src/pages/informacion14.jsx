import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/iatu.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info14 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto14">
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
            ¿Qué es IATU?
            </p>
            <p>
            IATU es una IA que analiza videos de pruebas de usuarios para mejorar la usabilidad y accesibilidad de sitios web, brindando recomendaciones específicas para asegurar una experiencia óptima.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info14;
