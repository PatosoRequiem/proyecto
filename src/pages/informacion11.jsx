import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/mariana.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info11 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto11">
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
            Haciendo del mar un lugar más seguro, de la mano de la IA
            </p>
            <p>
            La incertidumbre de los movimientos de corrientes y cambios de vientos en mar abierto hacen que la recuperación de navios y rescate de individuos sea una misión llena de incertidumbre. Nuestro equipo, en colaboración con Red Ocean, logró crear MarIAna; un innovador software de predicción para personas y navíos a la deriva en alta mar que busca reducir esta incertidumbre, facilitando y agilizando el actuar de empresas y equipos de busqueda y rescate
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info11;
