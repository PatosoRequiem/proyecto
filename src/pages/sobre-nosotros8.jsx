import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/chuchungos.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos8 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto8">
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
          Chungungo Coders: Empresa fundada por estudiantes apasionados de la Universidad Técnica Federico Santa María, con el objetivo de abordar problemas de alta relevancia social, combinando innovación y compromiso para generar soluciones que impacten positivamente en la comunidad.
            </p>
            <p>
            Misión:
            Desarrollar herramientas con la mejor tecnología para la seguridad de las personas enfocándonos en qué posean una facilidad de uso y un bajo costo económico.
            </p>
            <p>
            Visión
            Ser líderes en el uso y creación de tecnologías para promover un mundo más seguro y protegido para todas las personas.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos8;
