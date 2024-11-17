import React from 'react'
import { useNavigate } from 'react-router-dom'
import Thumbnail from '../assets/thumbnail.png'
import { Checkbox, Card, CardActionArea } from '@mui/material';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className='layout__page'>
      <h2>
        Categoría Health Tech / Salud y Bienestar
        <div className="singleLineImageContainer">
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/TigjN-ZZWqk/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto1")}/>
            <p className="text">Dialogapp</p>
            <p className="summary">por SevenPulse</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/0JP1lIJAyKQ/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto2")}/>
            <p className="text" >SIGO</p>
            <p className="summary" >por Venato</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/y4VYVroMqIw/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto3")}/>
            <p className="text" >VentriFlow</p>
            <p className="summary" >por HeartBV</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/MIhcOslpRDc/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto4")}/>
            <p className="text" >MedIntification</p>
            <p className="summary" >por MeraSync</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/QP9gMPYMJPA/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto5")}/>
            <p className="text" >UneteApp</p>
            <p className="summary" >por AndesAI</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/d0_a5gKIvMw/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto6")}/>
            <p className="text" >RefractedSpeech</p>
            <p className="summary" >por SinestesiaML</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/q2x_drxsS9I/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto7")}/>
            <p className="text" >SandiApp</p>
            <p className="summary" >por FerIAntes</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/e4ZFR21vtzQ/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto8")}/>
            <p className="text" >SentIAlert</p>
            <p className="summary" >por Chungungo Coders</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/lX_hS1_mZms/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto9")}/>
            <p className="text" >EmergTrack</p>
            <p className="summary" >por LumiaCore</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/q9FhBTHHPVA/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto10")}/>
            <p className="text" >MolecularCraft</p>
            <p className="summary" >por Katalysis</p>
          </Card>
        </div>
      </h2>
      <h2>
        Categoría Automatización & DT / Industrias y Desarrollo
        <div className="singleLineImageContainer">
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/O5yXjZUIo0Q/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto11")}/>
            <p className="text" >MarIAna</p>
            <p className="summary" >por Swal</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/uyyX4YPI_10/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto12")}/>
            <p className="text" >GerioTracker</p>
            <p className="summary" >por Myosotis</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/l-xAQsYhBhY/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto13")}/>
            <p className="text" >QAGuardIAn</p>
            <p className="summary" >por PanDev</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/z-TJL4zm1Oc/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto14")}/>
            <p className="text" >IATU</p>
            <p className="summary" >por Usability AI Solutions</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/Ywz6RGaL2d0/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto15")}/>
            <p className="text" >CanarIA</p>
            <p className="summary" >por AviSoft</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/xAZMCZHOdJ8/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto16")}/>
            <p className="text" >MineGuard</p>
            <p className="summary" >por AridDewellers</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/vve1Xwu3Ge8/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto17")}/>
            <p className="text" >GeoTMM</p>
            <p className="summary" >por Futuring</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/6eiGHavyJZY/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto18")}/>
            <p className="text" >AgroPred</p>
            <p className="summary" >por AgroPred</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/MoCp5k9TJGM/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto19")}/>
            <p className="text" >AuditForge</p>
            <p className="summary" >por DevForge</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/MpKkRCAZoFU/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto20")}/>
            <p className="text" >Geoviality</p>
            <p className="summary" >por GroundTech</p>
          </Card>
        </div>
      </h2>
      <h2>
        Categoría Ed-Tech / Educación y Prevención
        <div className="singleLineImageContainer">
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/XB4y73jhURY/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto21")}/>
            <p className="text" >CyberAcademy</p>
            <p className="summary" >por ChibiTech</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/4Nl9mlq5lIg/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto22")}/>
            <p className="text" >AI Want 2 Teach</p>
            <p className="summary" >por Gohan & Lili's Code</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/KU0-Xp498ow/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto23")}/>
            <p className="text" >WakeUp Driver</p>
            <p className="summary" >por The Outcasts</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/wkP0cm6TdrA/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto24")}/>
            <p className="text" >DigitalSkillApp</p>
            <p className="summary" >por StormCat</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/WjEC2EU2Hdw/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto25")}/>
            <p className="text" >A Darle Átomos</p>
            <p className="summary" >por Ultimate Spider Monke</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/sFdfRgvZk1o/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto26")}/>
            <p className="text" >Ranner</p>
            <p className="summary" >por Ranner's Team</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/QTACeI-bIbc/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto27")}/>
            <p className="text" >ARmadillo</p>
            <p className="summary" >por Sailing Software</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/7khRla4dAw8/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto28")}/>
            <p className="text" >Piano Colors</p>
            <p className="summary" >por Patos Company</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/6nQN8wJ32pY/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto29")}/>
            <p className="text" >EduvidIA</p>
            <p className="summary" >por SaberIA</p>
          </Card>
          <Card variant="outlined" style={{ background: '#08070a', border: '1px solid #1f1f1f', margin: '10px', maxWidth: '20%'}}>
            <Checkbox style={{color:'white', position: 'absolute'}}/>
            <img className="thumbnail" src="http://img.youtube.com/vi/E_B0bTrw1pQ/0.jpg" alt='thumbnail' onClick={() => navigate("/proyecto30")}/>
            <p className="text" >SimuRisk</p>
            <p className="summary" >por SimProtect</p>
          </Card>
        </div>
      </h2>
    </div>
  )
}

export default HomePage
