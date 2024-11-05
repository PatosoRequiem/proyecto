import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/gyl.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos22 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto22">
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
          Conoce al equipo de Gohan and Lili, un grupo unido y comprometido con la mejora continua en la educación. Nuestro enfoque está en buscar soluciones innovadoras que impulsen el aprendizaje, siempre manteniendo un ambiente de trabajo colaborativo y amigable. Valoramos la comunicación abierta y efectiva, promoviendo la creatividad y el crecimiento en cada paso. Además, el buen ambiente entre nosotros es clave para enfrentar cualquier desafío con entusiasmo y profesionalismo, brindando así nuestro mejor esfuerzo en cada proyecto. Nos mueve la convicción de que, juntos, podemos marcar una diferencia real en el ámbito educativo.
            </p>
            <p>
            Misión: resolver las necesidades educativas de estudiantes y profesores mediante el uso de inteligencia artificial, mejorando los procesos de aprendizaje. A través de nuestras soluciones, buscamos facilitar el acceso al conocimiento, reducir tareas repetitivas y permitir que los profesores dediquen más tiempo a la enseñanza efectiva, mejorando la experiencia educativa dentro del aula.
            </p>
            <p>
            Visión: evolucionar para detectar nuevas problemáticas y proponer soluciones que hagan más eficiente el sistema educativo. Queremos que los jóvenes se relacionen con la tecnología como una herramienta clave para enfrentar desafíos futuros. Para los profesores, nuestra meta es simplificar su labor, reduciendo cargas administrativas y mejorando la calidad de la enseñanza en las aulas.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos22;
