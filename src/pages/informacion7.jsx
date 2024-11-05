import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/sandiapp.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info7 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto7">
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
            ¿Qué es SandiApp?
            </p>
            <p>
            SandiApp es una aplicación que combate la malnutrición en adultos jóvenes mediante un asistente virtual avanzado y facilitando la comunicación efectiva entre pacientes y nutricionistas, a través de un seguimiento nutricional.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info7;
