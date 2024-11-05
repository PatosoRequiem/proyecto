import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/geotmm.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos17 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto17">
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
          Somos un equipo comprometido con la innovación y la creación de soluciones tecnológicas que mejoren la vida de nuestros clientes. Con años de experiencia en la industria, trabajamos incansablemente para garantizar la excelencia en cada proyecto.
          </p>
          <p>
            Misión:
            ser líderes en el desarrollo de soluciones tecnológicas innovadoras que transformen la manera en que las personas interactúan con el mundo.
            </p>
            <p>
            Visión
            proporcionar soluciones tecnológicas efectivas y accesibles, impulsadas por la creatividad y el compromiso con la calidad.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos17;
