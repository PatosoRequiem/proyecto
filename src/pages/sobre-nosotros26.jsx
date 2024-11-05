import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/ranner.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos26 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto26">
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
          Somos un equipo apasionado y dedicado, comprometido con la innovación y la excelencia en el mundo digital. Nuestra misión es transformar ideas en soluciones tecnológicas que impulsen el éxito de nuestros clientes.
            </p>
            <p>
            Misión: Nuestra misión es transformar el proceso educativo mediante la integración de inteligencia artificial, proporcionando soluciones personalizadas que se adapten a las necesidades individuales de cada estudiante. Buscamos aliviar la carga de trabajo de los docentes y mejorar el rendimiento académico al ofrecer una experiencia de aprendizaje más efectiva, ajustada a cada necesidad y con disponibilidad 24 horas.
            </p>
            <p>
            Visión: Aspiramos a ser una referencia en el ámbito educativo, facilitando el aprendizaje adaptado y el apoyo docente mediante tecnología innovadora. Queremos crear un entorno educativo donde cada estudiante pueda alcanzar su máximo potencial y cada docente cuente con herramientas eficientes para enriquecer su labor educativa.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos26;
