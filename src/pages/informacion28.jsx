import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/pianocolors.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info28 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto28">
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
            Acerca de Piano Colors
            </p>
            <p>
            Piano Colors es una aplicación innovadora creada para enseñar música a niños con síndrome de Down mediante una experiencia educativa, colorida y adaptativa. Nuestro enfoque busca facilitar un aprendizaje inclusivo y accesible a través de metodologías visuales y creativas.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info28;
