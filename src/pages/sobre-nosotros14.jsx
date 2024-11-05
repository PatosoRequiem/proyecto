import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/usability.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos14 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto14">
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
          Somos Usability AI Solutions, una empresa dedicada a desarrollar soluciones de software centradas en mejorar la usabilidad y accesibilidad digital. Nuestro equipo está comprometido con crear experiencias digitales más intuitivas e inclusivas para todos los usuarios.
          </p>
          <p>
            Misión:
            Facilitar el acceso a tecnologías digitales mejorando la usabilidad y accesibilidad para todo tipo de usuarios.
            </p>
          <p>
            Visión:
            Convertirnos en referentes en soluciones de inteligencia artificial para optimizar la experiencia de usuario en plataformas digitales.
          </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos14;
