import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './header';
import HomePage from '../pages/home_page';
import Proyecto1 from '../pages/proyecto1';
import SobNos1 from '../pages/sobre-nosotros1';
import Info1 from '../pages/informacion1';
import Streaming1 from '../pages/streaming1';

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout__title'>
        <Header />
      </div>
      <div className='layout'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/proyecto1' element={<Proyecto1/>} />
          <Route path='/proyecto1/sobre-nosotros' element={<SobNos1 />} />
          <Route path='/proyecto1/informacion' element={<Info1 />} />
          <Route path='/proyecto1/streaming' element={<Streaming1 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
