import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Checkbox, Card, CardActionArea, CardContent, Typography, CardActions, Button} from '@mui/material';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className='layout__page'>
      <h2>
        Categoría Health Tech / Salud y Bienestar
        <div className="singleLineImageContainer">
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto1")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/TigjN-ZZWqk/0.jpg" alt='thumbnail'/>
              <p className="text">DialogApp</p>
              <p className="summary">Aplicación móvil dirigida a la población sorda de Chile</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto2")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/0JP1lIJAyKQ/0.jpg" alt='thumbnail'/>
              <p className="text" >SIGO</p>
              <p className="summary" >Sistema de Información de Gestión Oncológica para el seguimiento y tratamiento de pacientes con cáncer</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto3")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/y4VYVroMqIw/0.jpg" alt='thumbnail'/>
              <p className="text" >VentriFlow</p>
              <p className="summary" >Software especializado para cardiólogos, que busca mejorar el estudio de los ventrículos</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto4")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/MIhcOslpRDc/0.jpg" alt='thumbnail'/>
              <p className="text" >MedIntification</p>
              <p className="summary" >Software de identificación de instrumentos quirúrgicos mediante inteligencia artificial</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto5")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/QP9gMPYMJPA/0.jpg" alt='thumbnail'/>
              <p className="text" >UneteApp</p>
              <p className="summary" >Plataforma de prescripción social que busca mejorar la salud mental mediante actividades y terapia grupal</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto6")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/d0_a5gKIvMw/0.jpg" alt='thumbnail'/>
              <p className="text" >RefractedSpeech</p>
              <p className="summary" >Aplicación para la atención y prediagnóstico de dificultades del habla mediante inteligencia artificial</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto7")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/q2x_drxsS9I/0.jpg" alt='thumbnail'/>
              <p className="text" >SandiApp</p>
              <p className="summary" >Aplicación y asistente virtual para el tratamiento de la malnutrición en adultos jóvenes</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto8")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/e4ZFR21vtzQ/0.jpg" alt='thumbnail'/>
              <p className="text" >SentIAlert</p>
              <p className="summary" >Sistema de detección de asaltos en zonas inseguras</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto9")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/lX_hS1_mZms/0.jpg" alt='thumbnail'/>
              <p className="text" >EmergTrack</p>
              <p className="summary" >Software para el registro de insumos médicos mediante automatización, predicción y análisis de información</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto10")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/q9FhBTHHPVA/0.jpg" alt='thumbnail'/>
              <p className="text" >MolecularCraft</p>
              <p className="summary" >Software de Diseño y Bosquejo Asistido por Computadora para investigación molecular y farmacéutica</p>
            </CardActionArea>
          </Card>
        </div>
      </h2>
      <h2>
        Categoría Automatización & DT / Industrias y Desarrollo
        <div className="singleLineImageContainer">
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto11")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/O5yXjZUIo0Q/0.jpg" alt='thumbnail'/>
              <p className="text" >MarIAna</p>
              <p className="summary" >Software predictivo para el rescate de navíos e individuos en altamar</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto12")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/uyyX4YPI_10/0.jpg" alt='thumbnail'/>
              <p className="text" >GerioTracker</p>
              <p className="summary" >Sistema de monitoreo para la posición de adultos en hogares de la tercera edad</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto13")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/l-xAQsYhBhY/0.jpg" alt='thumbnail'/>
              <p className="text" >QAGuardIAn</p>
              <p className="summary" >Automatización de revisión de ventas telefónicas mediante inteligencia artificial</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto14")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/z-TJL4zm1Oc/0.jpg" alt='thumbnail'/>
              <p className="text" >IATU</p>
              <p className="summary" >Software de inteligencia artificial para la revisión de videos de pruebas de usuario en sitios web</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto15")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/Ywz6RGaL2d0/0.jpg" alt='thumbnail'/>
              <p className="text" >CanarIA</p>
              <p className="summary" >Detección y mitigación de polvo en mineras mediante redes neuronales e IA</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto16")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/xAZMCZHOdJ8/0.jpg" alt='thumbnail'/>
              <p className="text" >MineGuard</p>
              <p className="summary" >Sistema para la gestión y ubicación de camiones mineros</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto17")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/vve1Xwu3Ge8/0.jpg" alt='thumbnail'/>
              <p className="text" >GeoTMM</p>
              <p className="summary" >Aplicación para la optimización de rutas GPS</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto18")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/6eiGHavyJZY/0.jpg" alt='thumbnail'/>
              <p className="text" >AgroPred</p>
              <p className="summary" >Sistema para monitoreo continuo de cultivos de palta en Chile</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto19")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/MoCp5k9TJGM/0.jpg" alt='thumbnail'/>
              <p className="text" >AuditForge</p>
              <p className="summary" >Software open-source para la gestión y automatización de auditorías</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto20")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/MpKkRCAZoFU/0.jpg" alt='thumbnail'/>
              <p className="text" >Geoviality</p>
              <p className="summary" >Software de detección, planificación y gestión de reparaciones en vías públicas</p>
            </CardActionArea>
          </Card>
        </div>
      </h2>
      <h2>
        Categoría Ed-Tech / Educación y Prevención
        <div className="singleLineImageContainer">
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto21")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/XB4y73jhURY/0.jpg" alt='thumbnail'/>
              <p className="text" >CyberAcademy</p>
              <p className="summary" >Aplicación dirigida a instituciones y estudiantes para educar sobre ciberseguridad mediante actividades teóricas y prácticas</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto22")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/4Nl9mlq5lIg/0.jpg" alt='thumbnail'/>
              <p className="text" >AI Want 2 Teach</p>
              <p className="summary" >Software diseñado para asistir a profesores en la generación de pruebas</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto23")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/KU0-Xp498ow/0.jpg" alt='thumbnail'/>
              <p className="text" >WakeUp Driver</p>
              <p className="summary" >Detección de fatiga en conductores mediante inteligencia artificial</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto24")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/wkP0cm6TdrA/0.jpg" alt='thumbnail'/>
              <p className="text" >DigitalSkillApp</p>
              <p className="summary" >Aplicación web que mediante inteligencia artificial busca evaluar las competencias digitales de los ciudadanos</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto25")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/WjEC2EU2Hdw/0.jpg" alt='thumbnail'/>
              <p className="text" >A Darle Átomos</p>
              <p className="summary" >Laboratorio de química virtual en realidad aumentada para alumnos y profesores de enseñanza básica/media</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto26")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/sFdfRgvZk1o/0.jpg" alt='thumbnail'/>
              <p className="text" >Ranner</p>
              <p className="summary" >Educación adaptativa mediante inteligencia artificial</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto27")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/QTACeI-bIbc/0.jpg" alt='thumbnail'/>
              <p className="text" >ARmadillo</p>
              <p className="summary" >Aplicación móvil que mediante realidad aumentada busca mejorar la comprensión lectora en niños</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto28")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/7khRla4dAw8/0.jpg" alt='thumbnail'/>
              <p className="text" >Piano Colors</p>
              <p className="summary" >Aplicación educativa para enseñar música a niños con síndrome de Down</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto29")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/6nQN8wJ32pY/0.jpg" alt='thumbnail'/>
              <p className="text" >EduvidIA</p>
              <p className="summary" >Herramienta asistente para la generación de contenido educativo</p>
            </CardActionArea>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '18%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <CardActionArea onClick={() => navigate("/proyecto30")}>
              <img className="thumbnail" src="http://img.youtube.com/vi/E_B0bTrw1pQ/0.jpg" alt='thumbnail'/>
              <p className="text" >SimuRisk</p>
              <p className="summary" >Simulador en realidad virtual para cursos de prevención de riesgos</p>
            </CardActionArea>
          </Card>
        </div>
      </h2>
    </div>
  )
}

export default HomePage
