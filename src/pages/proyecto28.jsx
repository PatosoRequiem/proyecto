import React from 'react';
import YouTube from "react-youtube";
import { Link } from 'react-router-dom';
import Logo from '../assets/fesw.png';

const Proyecto28 = () => {
    const videoOptions = {
        width: "100%",
        height: "100%",
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div style={{ backgroundColor: '#1a1a1a', color: 'white', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            {/* contenido principal */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{
                    backgroundColor: '#d9d9d9',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    width: '70%',
                    position: 'relative',
                    paddingBottom: '40%', // 16:9 aspect ratio
                    height: 0
                }}>
                    <YouTube videoId="7khRla4dAw8" opts={videoOptions} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px', // Espacio entre botones
                    marginLeft: '20px',
                    width: '30%', // Ocupa todo el lado derecho
                }}>
                    <Link to="/proyecto28/informacion" style={{ textDecoration: 'none' }}>
                        <button style={buttonStyle}>Información del Proyecto</button>
                    </Link>
                    <Link to="/proyecto28/sobre-nosotros" style={{ textDecoration: 'none' }}>
                        <button style={buttonStyle}>Sobre Nosotros</button>
                    </Link>
                    <Link to="/proyecto28/streaming" style={{ textDecoration: 'none' }}>
                        <button style={buttonStyle}>Streaming</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const buttonStyle = {
    backgroundColor: '#d3d3d3',
    color: '#000',
    border: 'none',
    borderRadius: '10px',
    padding: '20px', 
    fontSize: '1.2em', 
    cursor: 'pointer',
    width: '100%' 
};

export default Proyecto28;