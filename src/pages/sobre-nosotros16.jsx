import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/AridDewellers.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos16 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto16">
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
          AridDewellers
          </p>
          <p>
          Somos estudiantes de ingeniería civil informática de la Universidad Técnica Federico Santa Maria (USM).
          </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos16;
