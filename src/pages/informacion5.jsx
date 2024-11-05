import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/uneteapp.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info5 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto5">
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
            UneteApp te aleja de la soledad y mejora tu salud mental
            </p>
            <p>
            Te proveemos cientos de actividades disponibles en tu zona y un sistema inteligente de prescripción social que te ayuda a mejorar tu salud mental.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info5;
