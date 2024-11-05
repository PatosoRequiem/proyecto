import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/energtrack.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info9 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto9">
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
            Te presentamos EmergTrack
            </p>
            <p>
            EmergTrack busca enfrentar las dificultades al registrar insumos médicos en centros de urgencias. Enfocándonos en la Automatización, Predicción y Análisis de información de forma novedosa.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info9;
