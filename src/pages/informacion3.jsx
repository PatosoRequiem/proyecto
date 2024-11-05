import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/ventriflow.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info3 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto3">
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
            VentriFlow surge para superar las limitaciones de las técnicas actuales de evaluación hemodinámica en los ventrículos mediante resonancia magnética de flujo en cuatro dimensiones (4D FLOW CMR). Estas técnicas enfrentan problemas como la necesidad de una alineación precisa, que generalmente se realiza manualmente, altos costos y la poca accesibilidad del software. Las herramientas actuales se centran en aplicaciones clínicas generales y no se especializan en los ventrículos, lo cual no satisface las necesidades específicas de los investigadores cardiológicos, tales como la obtención de datos cuantitativos específicos del corazón.
            </p>
            <p>
            Para abordar estos problemas, proponemos un software especializado en el estudio de los ventrículos, dirigido a investigadores en cardiología. Este software implementa funcionalidades avanzadas, como la corrección automática de la segmentación de imágenes mediante inteligencia artificial y la visualización de un modelo tridimensional del corazón con simulaciones del flujo sanguíneo en los ventrículos. Estas características, en conjunto con métricas específicas del área, como la vorticidad y la disipación viscosa, integran el análisis cualitativo con el cuantitativo para un estudio robusto y completo.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info3;
