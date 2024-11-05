import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/sevenpulse.png"; // Asegúrate de que esta ruta sea correcta
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
            SevenPulse es una pre-empresa destinada al desarrollo de software, con un gran objetivo de mejorar la accesibilidad y apoyar la inclusión.
            </p>
            <p>
            Misión:
            Nuestra misión es romper las barreras de comunicación entre personas sordas y oyentes, proporcionando una solución innovadora que utiliza inteligencia artificial y visión por computadora para traducir la lengua de señas chilena a español en tiempo real. Nos dedicamos a mejorar la accesibilidad y la inclusión, facilitando una comunicación más fluida y efectiva en diversos contextos.
            </p>
            <p>
            Visión
            Ser líderes en inclusión y accesibilidad para la comunidad sorda en Chile, eliminando barreras de comunicación en el ámbito médico y asegurando que todas las personas sordas puedan acceder a una atención médica de calidad y privacidad, sin depender de intérpretes.
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
