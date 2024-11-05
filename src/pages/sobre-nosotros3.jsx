import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/HeartBV.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos3 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto3">
            <img 
              src={returnIcon} 
              alt="Return" 
              className="return-icon" 
            />
          </Link>
          <h1>Sobre Nosotros</h1>
        </div>
        
        <div className="content-container">
          <div className="paragraph-section">
          <p>
          Somos HeartBV, un equipo comprometido en mejorar el tratamiento cardiovascular a través de soluciones tecnológicas avanzadas, compuesto por 6 estudiantes de ingeniería civil informática.
            </p>
            <p>
            Misión:
            En HeartBv, desarrollamos software innovador y accesible que optimiza la visualización y el análisis del flujo ventricular, permitiendo a los profesionales de la salud obtener datos confiables de forma eficiente. Nos enfocamos en estandarizar el proceso de tratamiento de estos datos, asegurando precisión y consistencia en cada aplicación.
            </p>
            <p>
            Visión
            HeartBv aspira a ser la referencia global en soluciones tecnológicas que estandaricen el proceso de obtención y tratamiento de datos hemodinámicos, facilitando la evaluación rápida y precisa del flujo ventricular. Nuestra meta es que esta tecnología impulse mejoras significativas en la investigación médica y el tratamiento cardiovascular a nivel mundial.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos3;
