import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/andes.jpg"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos5 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto5">
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
          Andes AI nace en 2023 conformado por un equipo de estudiantes de la UTFSM con el objetivo de desarrollar y comercializar aplicaciones móviles enfocadas en mejorar la calidad de vida de las personas.
            </p>
            <p>
            Misión:
            Nuestra misión es desarrollar aplicaciones innovadoras que mejoren la salud mental y el bienestar de las personas, utilizando tecnología avanzada y un enfoque centrado en el bienestar del usuario para ofrecer soluciones accesibles y eficaces.
            </p>
            <p>
            Visión
            Nuestra visión es posicionarse como líder en el desarrollo de aplicaciones que promuevan la salud mental, permitiendo a las personas alcanzar un mayor bienestar emocional y mejorar su calidad de vida a nivel global.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos5;
