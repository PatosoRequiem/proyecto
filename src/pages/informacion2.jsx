import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/sigo.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info2 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto2">
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
            Sistema de Información de Gestión Oncológica (SIGO)
            </p>
            <p>
            Un Sistema de Información de Gestión Oncológico, dedicado a facilitar la integración de subsistemas del hospital en uno solo para agilizar el seguimiento de las rutas oncológicas de los pacientes.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info2;
