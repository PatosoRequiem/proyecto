import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/myosotis.jpg"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos12 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto12">
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
          Acerca de Myosotis: a finales de 2023, cinco estudiantes de ingeniería civil informática, impulsados por su pasión por la tecnología y su vocación por el cuidado de los adultos mayores, se unieron para crear Myosotis, una empresa con el propósito de transformar el cuidado de los más vulnerables.
          </p>
          <p>
            Misión:
            facilitar el cuidado de adultos mayores.
            </p>
            <p>
            Visión
            La visión que tenemos es la de un mundo donde los adultos mayores vivan con seguridad y dignidad, evitando riesgos innecesarios gracias a la entrega oportuna de información, aliviando la carga de los cuidadores.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos12;
