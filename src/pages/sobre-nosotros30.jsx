import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/sim.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos30 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto30">
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
              SimProtect: Somos una Pre-empresa formada por 5 estudiantes de quinto año de Ingeniería Civil Informática de la Universidad Técnica Federico Santa María. Estamos dedicados a ofrecer soluciones innovadoras y de calidad, con un firme compromiso con la prevención y la innovación en espacios tecnológicos. ¡Únete a nosotros en este emocionante viaje mientras construimos un futuro inspirador juntos!
            </p>
            <p>
            Misión: Empoderar a las personas a través de simulaciones inmersivas y seguras, promoviendo una cultura de prevención y preparación ante riesgos. En SimProtect, nos dedicamos a ofrecer soluciones innovadoras en realidad virtual que faciliten el aprendizaje práctico y efectivo, garantizando que los usuarios estén mejor equipados para enfrentar situaciones de emergencia y mejorar la seguridad en sus entornos laborales y cotidianos
            </p>
            <p>
            Visión: Ser Propulsores de innovacion en soluciones de simulación en realidad virtual para la prevención de riesgos, transformando la forma en que se entrenan y capacitan los profesionales de diversos sectores. Aspiramos a un mundo donde la seguridad y la preparación sean la norma, no la excepción, y donde nuestras tecnologías sean reconocidas por su capacidad para salvar vidas y prevenir accidentes
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos30;
