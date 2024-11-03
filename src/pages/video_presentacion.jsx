import React from 'react';
import Logo from '../assets/fesw.png'; 
import PresentationImage from '../assets/presentacion-corporativa.png'; 

const ProjectPage = () => {
    return (
    <div style={{ backgroundColor: '#1a1a1a', color: 'white', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* Header */}
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={Logo} alt="FESW Logo" style={{ height: '50px', marginRight: '10px' }} />
            <h1 style={{ fontSize: '1.2em' }}>XXXII Feria de Software Virtual</h1>
        </div>
        <div>
            <h2 style={{ margin: '0' }}>Proyecto X</h2>
            <p style={{ margin: '0' }}>Por Equipo Y</p>
        </div>
        </header>

      {/* contenido principal */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ backgroundColor: '#d9d9d9', borderRadius: '20px', padding: '20px', width: '70%' }}>
            <img src={PresentationImage} alt="Presentation" style={{ width: '100%' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginLeft: '20px' }}>
            <button style={buttonStyle}>Información del Proyecto</button>
            <button style={buttonStyle}>Sobre Nosotros</button>
            <button style={buttonStyle}>Streaming</button>
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
    padding: '10px 20px',
    fontSize: '1em',
    cursor: 'pointer'
};

export default Proyecto1;
