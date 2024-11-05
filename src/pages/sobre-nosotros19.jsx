import React from "react";
import { Link } from "react-router-dom";
import returnIcon from "../assets/return.png";
import sampleImage from "../assets/auditforge.png"; // Asegúrate de que esta ruta sea correcta
import "../stylesheets/sobnos/sobnos.scss";

export const SobNos19 = () => {
    return (
      <>
        <div className="sobre-nosotros-container">
          <Link to="/proyecto19">
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
          About DevForge.
            </p>
            <p>
            At DevForge, we're committed to revolutionizing the IT security auditing process. Our mission is to provide auditors and security firms with a powerful, time-saving tool that maintains the highest standards of data confidentiality.
            </p>
            <p>
            By automating report generation and leveraging AI for insights, we enable our users to focus on what truly matters: identifying and addressing critical vulnerabilities to enhance overall security posture.
            </p>
          </div>
          <div className="image-section">
            <img src={sampleImage} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
}

export default SobNos19;
