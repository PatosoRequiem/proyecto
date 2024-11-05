import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/stormcat.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos24 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto24">
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
          Somos StormCat
            </p>
            <p>
            Misión: Brindar a la ciudadanía chilena un medio para demostrar su capacidad de manejarse en el mundo digital.
            </p>
            <p>
            Visión: Contribuir y fomentar la creación de una sociedad inclusiva y tecnológicamente avanzada, siendo un referente en la certificación de competencias digitales en la ciudadanía.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos24;
