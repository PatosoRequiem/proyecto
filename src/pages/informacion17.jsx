import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/geotmm.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info17 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto17">
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
            ¿Qué es GeoTMM?
            </p>
            <p>
            GeoTMM es una aplicación innovadora que busca optimizar el uso de datos GPS mediante la asignación precisa de rutas a calles. La plataforma está diseñada para aquellos que necesitan hacer un seguimiento detallado de desplazamientos y obtener datos precisos sobre rutas recorridas, tanto en entornos urbanos como rurales.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info17;
