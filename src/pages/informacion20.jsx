import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/geoviality.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info20 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto20">
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
            Geoviality: Precisión y Eficiencia por tu futuro
            </p>
            <p>
            Geoviality es una solución innovadora diseñada para abordar el creciente problema de baches, grietas y el deterioro en las calles. A través de la implementación de tecnologías avanzadas como inteligencia artificial y análisis de datos, nuestro software proporciona una manera eficiente de detectar, planificar y gestionar la reparación de las calles. La plataforma utiliza cámaras y técnicas de machine learning para recopilar datos en tiempo real, optimizando la gestión de mantenimiento y mejorando la calidad de vida de los ciudadanos.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info20;
