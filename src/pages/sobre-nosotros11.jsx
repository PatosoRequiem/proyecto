import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/swal.jpg"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos11 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto11">
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
          Somos Swal, una empresa formada por 6 ingenieros informátios con la misión de desarrollar software que mejore sutancialmente la calidad de vida de las personas. Con MarIAna buscamos disminuir considerablemente la cantidad de perdidas totales y fatalidades ocacionadas en altamar, así como las repercusiones de la larga exposición a la deriva.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos11;
