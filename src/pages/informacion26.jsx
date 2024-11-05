import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/ranner.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info26 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto26">
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
            ¿Qué es Ranner?
            </p>
            <p>
            Es la solución educativa personalizada impulsada por inteligencia artificial, transformando la forma en que aprendemos.
            </p>
            <p>
            Con la IA, adaptamos el contenido de aprendizaje a las necesidades únicas de cada estudiante, reduciendo la carga de trabajo de los docentes y mejorando significativamente el rendimiento académico.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info26;
