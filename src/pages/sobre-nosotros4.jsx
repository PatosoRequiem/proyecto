import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/merasync.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos4 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto4">
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
          Somos MeraSync.
            </p>
            <p>
            Misión:
            desarrollar soluciones que permitan optimizar procesos quirúrgicos, mejorando su precisión y eficiencia.
            </p>
            <p>
            Visión
            Fomentar la transformación tecnológica en el área médica/quirúrgica para mejorar la eficiencia en la gestión de insumos médicos.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos4;
