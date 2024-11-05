import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/pianocolors.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos28 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto28">
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
            Misión: Crear herramientas educativas inclusivas y personalizadas que permitan a todos los niños, independientemente de sus capacidades, aprender y desarrollar sus habilidades musicales de manera efectiva y divertida.
            </p>
            <p>
            Visión: Ser líderes en la creación de soluciones educativas accesibles, promoviendo un aprendizaje equitativo para todos los niños, sin importar sus diferencias.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos28;
