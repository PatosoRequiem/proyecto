import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/chibitech.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos21 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto21">
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
          Somos un equipo de estudiantes apasionados por la ciberseguridad, comprometidos en compartir nuestro conocimiento y habilidades. Nuestra misión es empoderar a jóvenes a través de la educación en ciberseguridad, proporcionándoles herramientas prácticas y recursos que les permitan entender mejor los riesgos digitales y protegerse en el entorno online.
            </p>
            <p>
            Misión: Formar a la próxima generación en ciberseguridad, promoviendo un entorno digital seguro y responsable, donde los jóvenes estén preparados para afrontar los retos tecnológicos del futuro.
            </p>
            <p>
            Visión: Aspiramos a ser una comunidad de referencia en la educación en ciberseguridad, donde cada joven tenga acceso a conocimientos y habilidades que les permitan navegar el mundo digital con confianza y responsabilidad.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos21;
