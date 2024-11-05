import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/ultimatespider.jpg"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos25 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto25">
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
          Ultimate Spider Monke: Somos una pre-empresa formada por seis estudiantes de la Universidad Técnica Federico Santa María, unidos por el objetivo de mejorar la enseñanza de las ciencias a través de la tecnología. Con diversas habilidades en ingeniería y educación.
            </p>
            <p>
            Misión: Como pre-empresa nuestro objetivo con "A darle átomos" es desarrollar una plataforma educativa accesible y avanzada que permita a los estudiantes de educación básica realizar experimentos de química de forma segura e interactiva, utilizando tecnología de cámaras estereoscópicas y simulaciones realistas. Buscamos mejorar la enseñanza de las ciencias mediante la creación de experiencias prácticas y accesibles que fomenten el aprendizaje activo, sin los riesgos y costos de los laboratorios físicos tradicionales, contribuyendo así al desarrollo de la educación científica en Chile.
            </p>
            <p>
            Visión: Ser una referencia en el ámbito de la educación científica virtual, reconocida por su capacidad para transformar el aprendizaje de ciencias en educación básica a través de la innovación tecnológica. Aspiramos a que "A darle átomos" no solo fomente el interés y la curiosidad de los estudiantes hacia las ciencias, sino que también reduzca barreras de seguridad, costo y acceso, creando un entorno seguro y estimulante donde los estudiantes puedan experimentar y aprender sin limitaciones.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos25;
