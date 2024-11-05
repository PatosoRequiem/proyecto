import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/dialogapp.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info1 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto1">
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
            ¿Qué es DialogApp?
            DialogApp es una innovadora aplicación móvil dirigida a la población sorda en Chile y al personal médico, que busca eliminar la dependencia de intérpretes en citas médicas, garantizando privacidad e inclusión. Utilizando inteligencia artificial y visión por computadora, ofrece traducción en tiempo real entre Lengua de Señas Chilena (LSCh) y español, promoviendo la autonomía en la comunicación. Su enfoque bidireccional y especializado en el ámbito médico la hace única, facilitando una comunicación eficiente y fluida para personas sordas en el sector salud.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info1;
