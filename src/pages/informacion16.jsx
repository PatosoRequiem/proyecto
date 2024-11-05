import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/mineguard.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info16 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto16">
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
            Sistema para la gestión y seguimiento de camiones mineros.
            </p>
            <p>
            Utiliza MineGuard para gestionar el uso y ubicación de camiones mineros. Entregando datos y estadísticas en tiempo real, útiles para el correcto funcionamiento de éstos.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info16;
