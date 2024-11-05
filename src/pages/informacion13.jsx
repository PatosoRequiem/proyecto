import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/qaguardian.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info13 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto13">
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
            ¿Qué es QAGuardIAn?
            </p>
            <p>
            QAGuardian, desarrollado por Pandev, es una solución innovadora para automatizar la revisión de ventas telefónicas. Diseñado para mejorar la eficiencia y precisión en la revisión, QAGuardian se adapta a las normativas chilenas y las necesidades del mercado local, ayudando a las empresas a optimizar sus procesos y mantener altos estándares de calidad.
            </p>
            <p>
            Usando inteligencia artificial, QAGuardIAn automatiza el análisis de las grabaciones de ventas, detectando en minutos los errores que podrían provocar un reclamo ante los entes reguladores, como el SERNAC, o la CMF.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info13;
