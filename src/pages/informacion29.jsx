import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/eduvidia.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info29 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto29">
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
            Material educativo de forma rápida y eficiente
            </p>
            <p>
            EduvidIA es una herramienta que acelera el proceso de creación de contenido educativo e interactivo para las salas de clases a lo largo de todo el país.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info29;
