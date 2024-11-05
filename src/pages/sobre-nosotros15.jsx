import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/avisoft.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos15 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto15">
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
          Conoce a nuestro equipo
          </p>
          <p>
          Con la inspiración de feria de software y en busca de resolver los problemas de mitigación de polvo en minerías y constructoras del país, nuestro equipo de último año de la Universidad Federico Santa María forma AviSoft, y nuestra aplicación CanarIA.
          </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos15;
