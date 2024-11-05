import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/agropred.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos18 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto18">
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
          AgroPred es una plataforma diseñada para ayudar a los agricultores a optimizar sus procesos de cultivo, superando desafíos como la falta de datos en tiempo real y el uso limitado de nuevas tecnologías. Utilizando sensores avanzados e inteligencia artificial, permite monitorear factores clave del cultivo, como la humedad del suelo, temperatura y nutrientes, proporcionando predicciones y recomendaciones personalizadas que impulsan la productividad y sostenibilidad del campo.
            </p>
            <p>
            El proyecto nació en la Universidad Técnica Federico Santa María como parte de la Feria de Software USM 2024, con la misión de transformar la agricultura de precisión en el cultivo de paltas y dotar a los agricultores de herramientas tecnológicas para tomar decisiones informadas y mejorar el rendimiento de sus tierras. AgroPred forma parte de un programa de incubación tecnológica y, actualmente, el equipo sigue trabajando para perfeccionar la plataforma y expandir su aplicación hacia otros cultivos, promoviendo una agricultura más eficiente y sostenible tanto en Chile como a nivel mundial.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos18;
