import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/feriantes.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos7 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto7">
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
          Somos estudiantes de Ingeniería Civil Informática en la Universidad Técnica Federico Santa María, en las etapas finales de nuestra carrera. Participamos en la XXXII Feria de Software y somos los fundadores de Ferriantes y Sandi-App, un proyecto que refleja nuestro compromiso con la salud y el bienestar.
            </p>
            <p>
            Misión:
            Resolver problemas de malnutrición en adultos jóvenes mediante una aplicación móvil con un asistente virtual personalizado que facilita menús personalizados, el contacto con nutricionistas y seguimiento de recetas.
            </p>
            <p>
            Visión
            Nuestra visión es liderar en Chile la conexión entre pacientes y nutricionistas, facilitando una relación más estrecha y efectiva que promueva la salud y el bienestar de todos.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos7;
