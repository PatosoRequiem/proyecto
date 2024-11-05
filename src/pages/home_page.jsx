import React from 'react'
import { useNavigate } from 'react-router-dom'
import Thumbnail from '../assets/thumbnail.png'
import { Checkbox } from '@mui/material';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className='layout__page'>
      <h2>
        Categoría Health Tech / Salud y Bienestar
        <div className="singleLineImageContainer">
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto1")}/>
            <p className="text"><Checkbox style={{color:'white'}}/>Dialogapp</p>
            <p className="text"> por SevenPulse</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto2")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>SIGO</p>
            <p className="text" >por Venato</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto3")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>VentriFlow</p>
            <p className="text" >por HeartBV</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto4")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>MedIntification</p>
            <p className="text" >por MeraSync</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto5")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>UneteApp</p>
            <p className="text" >por AndesAI</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto6")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>RefractedSpeech</p>
            <p className="text" >por SinestesiaML</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto7")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>SandiApp</p>
            <p className="text" >por FerIAntes</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto8")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>SentIAlert</p>
            <p className="text" >por Chungungo Coders</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto9")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>EmergTrack</p>
            <p className="text" >por LumiaCore</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto10")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>MolecularCraft</p>
            <p className="text" >por Katalysis</p>
          </div>
        </div>
      </h2>
      <h2>
        Categoría Automatización & DT / Industrias y Desarrollo
        <div className="singleLineImageContainer">
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto11")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>MarIAna</p>
            <p className="text" >por Swal</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto12")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>GerioTracker</p>
            <p className="text" >por Myosotis</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto13")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>QAGuardIAn</p>
            <p className="text" >por PanDev</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto14")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>IATU</p>
            <p className="text" >por Usability AI Solutions</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto15")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>CanarIA</p>
            <p className="text" >por AviSoft</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto16")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>MineGuard</p>
            <p className="text" >por AridDewellers</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto17")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>GeoTMM</p>
            <p className="text" >por Futuring</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto18")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>AgroPred</p>
            <p className="text" >por AgroPred</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto19")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>AuditForge</p>
            <p className="text" >por DevForge</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto20")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>Geoviality</p>
            <p className="text" >por GroundTech</p>
          </div>
        </div>
      </h2>
      <h2>
        Categoría Ed-Tech / Educación y Prevención
        <div className="singleLineImageContainer">
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto21")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>CyberAcademy</p>
            <p className="text" >por ChibiTech</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto22")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>AI Want 2 Teach</p>
            <p className="text" >por Gohan & Lili's Code</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto23")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>WakeUp Driver</p>
            <p className="text" >por The Outcasts</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto24")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>DigitalSkillApp</p>
            <p className="text" >por StormCat</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto25")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>A Darle Átomos</p>
            <p className="text" >por Ultimate Spider Monke</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto26")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>Ranner</p>
            <p className="text" >por Ranner's Team</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto27")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>ARmadillo</p>
            <p className="text" >por Sailing Software</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto28")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>Piano Colors</p>
            <p className="text" >por Patos Company</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto29")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>EduvidIA</p>
            <p className="text" >por SaberIA</p>
          </div>
          <div className="containerElement">
            <img src={Thumbnail} alt='thumbnail' onClick={() => navigate("/proyecto30")}/>
            <p className="text" ><Checkbox style={{color:'white'}}/>SimuRisk</p>
            <p className="text" >por SimProtect</p>
          </div>
        </div>
      </h2>
    </div>
  )
}

export default HomePage
