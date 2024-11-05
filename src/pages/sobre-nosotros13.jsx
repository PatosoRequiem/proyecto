import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/pandev.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos13 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto13">
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
          Somos un grupo de estudiantes de Ingeniería Civil en Informática de la Universidad Técnica Federico Santa María (UTFSM), unidos por la pasión por la tecnología y la innovación. En QAGuardian, cada miembro de nuestro equipo aporta habilidades únicas y una profunda dedicación para desarrollar un software de IA revolucionario para call centers. Nuestro objetivo es transformar la gestión de ventas y mejorar la calidad de cada interacción, ayudando a identificar errores y optimizar los procesos. Estamos emocionados por el futuro y orgullosos de nuestro progreso. Juntos, estamos llevando este proyecto al siguiente nivel.
          </p>
          <p>
            Misión y visión:
            nuestra misión es desarrollar soluciones tecnológicas innovadoras y accesibles que potencien a las empresas y organizaciones para mejorar su eficiencia y competitividad. Nos especializamos en la creación de herramientas personalizadas que aborden desafíos específicos, ofreciendo productos que promuevan la transformación digital y el crecimiento sostenible de nuestros clientes. A través de la excelencia técnica, el trabajo colaborativo y un enfoque centrado en el usuario, buscamos contribuir al desarrollo de soluciones que optimicen procesos y faciliten la adopción de nuevas tecnologías. Nuestra visión es convertirnos en una empresa líder en el desarrollo de software a medida, reconocida por la calidad, creatividad y eficiencia de nuestras soluciones tecnológicas. Aspiramos a ser un referente en la industria de TI, ayudando a empresas de todo el mundo a aprovechar el poder de la tecnología para impulsar su innovación y crecimiento. Con un enfoque en la sostenibilidad, la colaboración y la creación de valor, PanDev busca ser una fuerza impulsora en la transformación digital de diversos sectores, desde pequeñas startups hasta grandes corporaciones.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos13;
