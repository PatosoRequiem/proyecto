import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/outcasts.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos23 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto23">
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
          The Outcasts es una pre-empresa chilena que busca soluciones innovadoras, accesibles, cómodas, y seguras para problemas cotidianos que requieren atención inmediata.
            </p>
            <p>
            Misión: Despertar a los conductores que sufren somnolencia al volante. Asegurar una conducción segura a nuestros usuarios.
            </p>
            <p>
            Visión: En un futuro, la somnolencia al volante ya no será una preocupación para la seguridad vial y la salud pública.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos23;
