import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/groundtech.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos20 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto20">
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
          Somos GroundTech.
            </p>
            <p>
            Misión: Implementar soluciones informáticas integrales para problemáticas de alto impacto, trabajando para la sociedad y con la sociedad.
            </p>
            <p>
            Visión: Creemos en un mundo digitalizado, donde el software es un medio facilitador para el desarrollo del individuo y su entorno.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos20;
