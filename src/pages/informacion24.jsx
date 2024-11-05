import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/digitalskillapp.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info24 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto24">
            <img 
              src={returnIcon} 
              alt="Return" 
              className="return-icon" 
            />
          </Link>
          <h1>Información del proyecto</h1>
        </div>
        
        <div className="content-container">
          <div className="paragraph-section">
            <p>
            Digital Skill App
            </p>
            <p>
            DigitalSkillApp es una aplicación web diseñada para evaluar las competencias digitales de los ciudadanos de manera práctica y real, impulsado con inteligencia artificial.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info24;
