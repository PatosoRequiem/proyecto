import React from 'react';
import YouTube from "react-youtube";
import { Link } from 'react-router-dom';
import returnIcon from "../assets/return.png";
import '../stylesheets/button.scss';

const Proyecto8 = () => {
    const videoOptions = {
        width: "100%",
        height: "100%",
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div style={{ backgroundColor: '#1a1a1a', color: 'white', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            {/* Icono de retorno */}
            <Link to="/">
                <img 
                src={returnIcon} 
                alt="Return" 
                className="return-icon" 
                />
            </Link>
            {/* Contenido principal */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                {/* Video de YouTube */}
                <div style={{
                    backgroundColor: '#d9d9d9',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    width: '70%',
                    position: 'relative',
                    paddingBottom: '40%', // Relación de aspecto 16:9
                    height: 0
                }}>
                    <YouTube videoId="e4ZFR21vtzQ" opts={videoOptions} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
                </div>
                {/* Panel derecho */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px', // Espacio entre elementos
                    marginLeft: '20px',
                    width: '30%' // Ocupa el lado derecho
                }}>
                    {/* Tarjeta para Información del Proyecto */}
                    <div style={cardStyle}>
                        <h3>Información del Proyecto</h3>
                        <p>Sistema de detección de asaltos en zonas en que no te sientas seguro.</p>
                        <Link to="/proyecto8/informacion" style={{ color: '#007BFF', textDecoration: 'none' }}>
                            Ver más
                        </Link>
                    </div>

                    {/* Tarjeta para Sobre Nosotros */}
                    <div style={cardStyle}>
                        <h3>Sobre Nosotros</h3>
                        <p>Empresa fundada por estudiantes apasionados de la Universidad Técnica Federico Santa María, con el objetivo de abordar problemas de alta relevancia social, combinando innovación y compromiso para generar soluciones que impacten positivamente en la comunidad.</p>
                        <Link to="/proyecto8/sobre-nosotros" style={{ color: '#007BFF', textDecoration: 'none' }}>
                            Ver más
                        </Link>
                    </div>

                    {/* Botón de Streaming */}
                    <Link to="/proyecto8/streaming" style={{ textDecoration: 'none' }}>
                        <button style={buttonStyle}>Streaming</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const cardStyle = {
    backgroundColor: '#d3d3d3',
    color: '#000',
    border: 'none',
    borderRadius: '10px',
    padding: '15px',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
};

const buttonStyle = {
    backgroundColor: '#d3d3d3',
    color: '#000',
    border: 'none',
    borderRadius: '10px',
    padding: '15px', 
    fontSize: '1em', 
    cursor: 'pointer',
    width: '100%' 
};

export default Proyecto8;
