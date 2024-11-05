import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/armadillo.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info27 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto27">
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
            ¿Qué es ARmadillo?
            </p>
            <p>
            ARmadillo es una aplicación móvil diseñada para mejorar la comprensión lectora de niños de primero y segundo básico mediante el uso de realidad aumentada.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info27;
