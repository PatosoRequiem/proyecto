import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/aiwantteach.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info22 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto22">
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
            ¿En qué consiste AI WANT 2 TEACH?
            </p>
            <p>
            "AI Want 2 Teach" es un software que utiliza inteligencia artificial para ayudar a los profesores a generar pruebas personalizadas basadas en su propio material. Ofrece una variedad de preguntas, como verdadero/falso, alternativas y desarrollo, lo que reduce el tiempo que los docentes dedican a crear evaluaciones. Además, el software incluye una función de revisión automática de proyectos, donde los alumnos suben sus trabajos y reciben feedback generado por IA. Esto permite a los estudiantes mejorar sus entregas mediante un proceso iterativo, mientras que los profesores ahorran tiempo en la revisión. Ambas funcionalidades facilitan un aprendizaje más eficiente y dinámico.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info22;
