import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/auditforge.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/info/info.scss";

export const Info19 = () => {
    return (
      <>
        <div className="informacion-container">
          <Link to="/proyecto19">
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
            Automate Your Audit Reports with AuditForge
            </p>
            <p>
            Save time, increase efficiency, and maintain data confidentiality with our open-source auditing software.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default Info19;
