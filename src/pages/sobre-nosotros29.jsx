import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/saberia.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos29 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto29">
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
              Somos SaberiaCorp.
            </p>
            <p>
            Misión: Proporcionar tecnologías basadas en inteligencia artificial que ayuden a nuestros clientes a reducir el tiempo que invierten en realizar su trabajo y puedan disponer de más tiempo libre para dedicarlo a su vida personal y al disfrute de esta.
            </p>
            <p>
            Visión: Ser una empresa de inteligencia artificial conocida a nivel nacional e internacional por el aporte en mejorar la vida de las personas a través de nuestros productos y que estos sean reconocidos por su calidad y confiabilidad.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos29;
