import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/venato.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos2 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto2">
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
          Venato: Entusiasmados por la innovación y resolución de problemas de la información TI; nos dedicamos a crear soluciones que faciliten la gestión. Venato está conformado por seis estudiantes de Ingenieria Civil Informática de la UTFSM. ¡Conoce al equipo!
            </p>
            <p>
            Misión:
            Proveer sistemas de gestión que sean capaces de centralizar y organizar la información médica para así poder entregar herramientas que ayuden al profesional de la salud y al paciente, satisfaciendo sus necesidades.
            </p>
            <p>
            Visión
            Convertirnos en el referente en gestión oncologica del país, brindando SIGO y sus devirados a las distintas áreas oncológicas de los hospitales del país para agilizar el proceso de atención y mejorar la calidad de vida de los paciente.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos2;
