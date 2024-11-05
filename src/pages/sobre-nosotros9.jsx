import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/Lum.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos9 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto9">
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
          Nuestra Empresa - Lumiacore: 
Nos dedicamos a la gestión de insumos médicos con soluciones automatizadas e innovadoras, asegurando disponibilidad y eficiencia en el cuidado de la salud.
            </p>
            <p>
            Misión:
            Ofrecer una solución automatizada y precisa para la gestión eficiente de insumos médicos, asegurando disponibilidad y optimizando el uso de recursos mediante tecnologías de monitoreo y predicción.
            </p>
            <p>
            Visión
            Consolidar un posicionamiento destacado en la gestión de insumos médicos a través de sistemas automatizados e inteligentes, promoviendo la eficiencia, la optimización y la excelencia en el ámbito del cuidado de la salud.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos9;
