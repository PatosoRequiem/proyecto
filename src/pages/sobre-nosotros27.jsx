import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/sailing.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos27 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto27">
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
          En Sailing Software, nos inspiramos en un gato negro marinero, navegando los vastos mares en su pequeño barco a vela. Aunque el viaje pueda estar lleno de peligros y desafíos, seguimos avanzando con astucia y determinación, siempre mirando hacia el futuro. Al igual que este marinero, nos mantenemos firmes en el rumbo de nuestros proyectos, atentos a cada oportunidad y obstáculo. Nuestro barco a vela representa nuestros humildes comienzos, pero como el viento que impulsa nuestras velas, nuestra pasión nos llevará lejos, hacia nuevos horizontes de éxito.
            </p>
            <p>
            Misión: Proporcionar una herramienta interactiva que mejora la comprensión lectora de niños de primero y segundo básico en Chile, aliviando la carga de los profesores y permitiendo un seguimiento preciso del desempeño estudiantil.
            </p>
            <p>
            Visión: Ser la empresa que entregue soluciones tecnológicas referentes a la educación más importante y efectiva del país.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos27;
