import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/agropred.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info18 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto18">
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
            ¿Qué es AgroPred?
            </p>
            <p>
            Somos una startup comprometida con integrar la Agricultura de Precisión en los cultivos de palta en Chile, ofreciendo una solución innovadora para mejorar la eficiencia y calidad de los cultivos. AgroPred resuelve la falta de monitoreo continuo y preciso mediante el uso de sensores y procesamiento de imágenes, recopilando datos en tiempo real sobre el estado de tus suelos, plantas y aguas. Estos datos se integran con modelos de Machine Learning para predecir el estado de los cultivos, minimizar el uso de agua, controlar enfermedades y reducir riesgos asociados al desequilibrio nutricional. No importa tu nivel de experiencia tecnológica, AgroPred pone toda la información de tu predio en la palma de tu mano, brindándote las mejores recomendaciones para optimizar el cuidado de tus plantas de forma sencilla y eficiente.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info18;
