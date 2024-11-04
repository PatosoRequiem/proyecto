import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/sample-image.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos1 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto1">
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
            Somos Equipo, un grupo de desarrolladores apasionados por la tecnología y la innovación, buscamos soluciones eficientes y sustentables a los problemas de la vida diaria. Como Estudiantes de 5to año de Ingeniería Civil Informática estaremos presentando en la XXII Feria de Software organizada por la USM, únete a la transmisión mediante el siguiente enlace para resolver tus dudas sobre nuestro proyecto!
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos1;
