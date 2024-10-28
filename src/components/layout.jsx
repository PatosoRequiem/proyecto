import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'

import NavBar from '../components/nav_bar'
import Logo from '../assets/fesw.png'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <h1 className='layout__title'>
          <img className ='logo' src={Logo} alt='logo' />
        </h1>
        <div className='layout__page'>
          <h1>
            XXXII Feria de Software - 2024
          </h1>
          <h2>
            Categoría Health Tech / Salud y Bienestar
          </h2>
          <h2>
            Categoría Automatización & DT / Industrias y Desarrollo
          </h2>
          <h2>
            Categoría Ed-Tech / Educación y Prevención
          </h2>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
