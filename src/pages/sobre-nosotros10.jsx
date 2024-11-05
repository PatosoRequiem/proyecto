import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/katalysis.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos10 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto10">
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
          Katalysis: Somos una pre-empresa fundada por un grupo de alumnos de Ingeniería Civil Informática de la Universidad Técnica Federico Santa María.
            </p>
            <p>
            Misión:
            Desarrollar soluciones de software que impulsen la investigación molecular y farmacológica, facilitando y agilizando descubrimientos que transformen a mejor la salud humana. Nos comprometemos como Katalysis a proporcionar herramientas innovadoras para acelerar la lucha contra enfermedades y mejorar la calidad de vida a través de la ciencia computacional.
            </p>
            <p>
            Visión
            Dejar una huella en el desarrollo de tecnologías que permitan avances importantes en la investigación molecular. Estamos comprometidos con el objetivo de que nuestro trabajo sea significativo para los profesionales en busca de métodos eficaces y menos invasivos al cuerpo humano. Aspiramos a contribuir a la salud y bienestar de las personas de todo el mundo.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos10;
