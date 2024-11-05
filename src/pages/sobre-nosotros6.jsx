import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/sinestesiaml.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos6 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto6">
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
          SinestesiaML:
Innovando en el campo de la salud y la comunicación usando IA.
            </p>
            <p>
            Misión:
            Nuestra misión es desarrollar soluciones de inteligencia artificial que analicen, mejoren y optimicen la comunicación verbal. Nos esforzamos por crear herramientas accesibles y fáciles de usar que ayuden a las personas a superar barreras de comunicación, mejorar su confianza y alcanzar su máximo potencial en todas las áreas de la vida.
            </p>
            <p>
            Visión
            En SinestesiaML, imaginamos un mundo donde la comunicación efectiva esté al alcance de todos. Nuestra visión es crear tecnologías innovadoras que potencien las habilidades de comunicación, permitiendo a las personas expresarse con claridad y confianza en cualquier situación.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos6;
