import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import Header from './header'
import HomePage from '../pages/home_page'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout__title'>
        <Header/>
      </div>
      <div className='layout'>
        <HomePage/>
      </div>
    </BrowserRouter>
  )
}

export default Layout
