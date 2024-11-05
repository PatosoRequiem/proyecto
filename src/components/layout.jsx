import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './header';
import HomePage from '../pages/home_page';
import Proyecto1 from '../pages/proyecto1';
import Proyecto2 from '../pages/proyecto2';
import Proyecto3 from '../pages/proyecto3';
import Proyecto4 from '../pages/proyecto4';
import Proyecto5 from '../pages/proyecto5';
import Proyecto6 from '../pages/proyecto6';
import Proyecto7 from '../pages/proyecto7';
import Proyecto8 from '../pages/proyecto8';
import Proyecto9 from '../pages/proyecto9';
import Proyecto10 from '../pages/proyecto10';
import Proyecto11 from '../pages/proyecto11';
import Proyecto12 from '../pages/proyecto12';
import Proyecto13 from '../pages/proyecto13';
import Proyecto14 from '../pages/proyecto14';
import Proyecto15 from '../pages/proyecto15';
import Proyecto16 from '../pages/proyecto16';
import Proyecto17 from '../pages/proyecto17';
import Proyecto18 from '../pages/proyecto18';
import Proyecto19 from '../pages/proyecto19';
import Proyecto20 from '../pages/proyecto20';
import Proyecto21 from '../pages/proyecto21';
import Proyecto22 from '../pages/proyecto22';
import Proyecto23 from '../pages/proyecto23';
import Proyecto24 from '../pages/proyecto24';
import Proyecto25 from '../pages/proyecto25';
import Proyecto26 from '../pages/proyecto26';
import Proyecto27 from '../pages/proyecto27';
import Proyecto28 from '../pages/proyecto28';
import Proyecto29 from '../pages/proyecto29';
import Proyecto30 from '../pages/proyecto30';
import SobNos1 from '../pages/sobre-nosotros1';
import Info1 from '../pages/informacion1';
import Streaming1 from '../pages/streaming1';
import SobNos2 from '../pages/sobre-nosotros2';
import Info2 from '../pages/informacion2';
import Streaming2 from '../pages/streaming2';
import SobNos3 from '../pages/sobre-nosotros3';
import Info3 from '../pages/informacion3';
import Streaming3 from '../pages/streaming3';
import SobNos4 from '../pages/sobre-nosotros4';
import Info4 from '../pages/informacion4';
import Streaming4 from '../pages/streaming4';
import SobNos5 from '../pages/sobre-nosotros5';
import Info5 from '../pages/informacion5';
import Streaming5 from '../pages/streaming5';
import SobNos6 from '../pages/sobre-nosotros6';
import Info6 from '../pages/informacion6';
import Streaming6 from '../pages/streaming6';
import SobNos7 from '../pages/sobre-nosotros7';
import Info7 from '../pages/informacion7';
import Streaming7 from '../pages/streaming7';
import SobNos8 from '../pages/sobre-nosotros8';
import Info8 from '../pages/informacion8';
import Streaming8 from '../pages/streaming8';
import SobNos9 from '../pages/sobre-nosotros9';
import Info9 from '../pages/informacion9';
import Streaming9 from '../pages/streaming9';
import SobNos10 from '../pages/sobre-nosotros10';
import Info10 from '../pages/informacion10';
import Streaming10 from '../pages/streaming10';
import SobNos11 from '../pages/sobre-nosotros11';
import Info11 from '../pages/informacion11';
import Streaming11 from '../pages/streaming11';
import SobNos12 from '../pages/sobre-nosotros12';
import Info12 from '../pages/informacion12';
import Streaming12 from '../pages/streaming12';
import SobNos13 from '../pages/sobre-nosotros13';
import Info13 from '../pages/informacion13';
import Streaming13 from '../pages/streaming13';
import SobNos14 from '../pages/sobre-nosotros14';
import Info14 from '../pages/informacion14';
import Streaming14 from '../pages/streaming14';
import SobNos15 from '../pages/sobre-nosotros15';
import Info15 from '../pages/informacion15';
import Streaming15 from '../pages/streaming15';
import SobNos16 from '../pages/sobre-nosotros16';
import Info16 from '../pages/informacion16';
import Streaming16 from '../pages/streaming16';
import SobNos17 from '../pages/sobre-nosotros17';
import Info17 from '../pages/informacion17';
import Streaming17 from '../pages/streaming17';
import SobNos18 from '../pages/sobre-nosotros18';
import Info18 from '../pages/informacion18';
import Streaming18 from '../pages/streaming18';
import SobNos19 from '../pages/sobre-nosotros19';
import Info19 from '../pages/informacion19';
import Streaming19 from '../pages/streaming19';
import SobNos20 from '../pages/sobre-nosotros20';
import Info20 from '../pages/informacion20';
import Streaming20 from '../pages/streaming20';
import SobNos21 from '../pages/sobre-nosotros21';
import Info21 from '../pages/informacion21';
import Streaming21 from '../pages/streaming21';
import SobNos22 from '../pages/sobre-nosotros22';
import Info22 from '../pages/informacion22';
import Streaming22 from '../pages/streaming22';
import SobNos23 from '../pages/sobre-nosotros23';
import Info23 from '../pages/informacion23';
import Streaming23 from '../pages/streaming23';
import SobNos24 from '../pages/sobre-nosotros24';
import Info24 from '../pages/informacion24';
import Streaming24 from '../pages/streaming24';
import SobNos25 from '../pages/sobre-nosotros25';
import Info25 from '../pages/informacion25';
import Streaming25 from '../pages/streaming25';
import SobNos26 from '../pages/sobre-nosotros26';
import Info26 from '../pages/informacion26';
import Streaming26 from '../pages/streaming26';
import SobNos27 from '../pages/sobre-nosotros27';
import Info27 from '../pages/informacion27';
import Streaming27 from '../pages/streaming27';
import SobNos28 from '../pages/sobre-nosotros28';
import Info28 from '../pages/informacion28';
import Streaming28 from '../pages/streaming28';
import SobNos29 from '../pages/sobre-nosotros29';
import Info29 from '../pages/informacion29';
import Streaming29 from '../pages/streaming29';
import SobNos30 from '../pages/sobre-nosotros30';
import Info30 from '../pages/informacion30';
import Streaming30 from '../pages/streaming30';


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
          <Route path='/proyecto2' element={<Proyecto2/>} />
          <Route path='/proyecto3' element={<Proyecto3/>} />
          <Route path='/proyecto4' element={<Proyecto4/>} />
          <Route path='/proyecto5' element={<Proyecto5/>} />
          <Route path='/proyecto6' element={<Proyecto6/>} />
          <Route path='/proyecto7' element={<Proyecto7/>} />
          <Route path='/proyecto8' element={<Proyecto8/>} />
          <Route path='/proyecto9' element={<Proyecto9/>} />
          <Route path='/proyecto10' element={<Proyecto10/>} />
          <Route path='/proyecto11' element={<Proyecto11/>} />
          <Route path='/proyecto12' element={<Proyecto12/>} />
          <Route path='/proyecto13' element={<Proyecto13/>} />
          <Route path='/proyecto14' element={<Proyecto14/>} />
          <Route path='/proyecto15' element={<Proyecto15/>} />
          <Route path='/proyecto16' element={<Proyecto16/>} />
          <Route path='/proyecto17' element={<Proyecto17/>} />
          <Route path='/proyecto18' element={<Proyecto18/>} />
          <Route path='/proyecto19' element={<Proyecto19/>} />
          <Route path='/proyecto20' element={<Proyecto20/>} />
          <Route path='/proyecto21' element={<Proyecto21/>} />
          <Route path='/proyecto22' element={<Proyecto22/>} />
          <Route path='/proyecto23' element={<Proyecto23/>} />
          <Route path='/proyecto24' element={<Proyecto24/>} />
          <Route path='/proyecto25' element={<Proyecto25/>} />
          <Route path='/proyecto26' element={<Proyecto26/>} />
          <Route path='/proyecto27' element={<Proyecto27/>} />
          <Route path='/proyecto28' element={<Proyecto28/>} />
          <Route path='/proyecto29' element={<Proyecto29/>} />
          <Route path='/proyecto30' element={<Proyecto30/>} />          
          <Route path='/proyecto1/sobre-nosotros' element={<SobNos1 />} />
          <Route path='/proyecto1/informacion' element={<Info1 />} />
          <Route path='/proyecto1/streaming' element={<Streaming1 />} />
          <Route path='/proyecto2/sobre-nosotros' element={<SobNos2 />} />
          <Route path='/proyecto2/informacion' element={<Info2 />} />
          <Route path='/proyecto2/streaming' element={<Streaming2 />} />
          <Route path='/proyecto3/sobre-nosotros' element={<SobNos3 />} />
          <Route path='/proyecto3/informacion' element={<Info3 />} />
          <Route path='/proyecto3/streaming' element={<Streaming3 />} />
          <Route path='/proyecto4/sobre-nosotros' element={<SobNos4 />} />
          <Route path='/proyecto4/informacion' element={<Info4 />} />
          <Route path='/proyecto4/streaming' element={<Streaming4 />} />
          <Route path='/proyecto5/sobre-nosotros' element={<SobNos5 />} />
          <Route path='/proyecto5/informacion' element={<Info5 />} />
          <Route path='/proyecto5/streaming' element={<Streaming5 />} />
          <Route path='/proyecto6/sobre-nosotros' element={<SobNos6 />} />
          <Route path='/proyecto6/informacion' element={<Info6 />} />
          <Route path='/proyecto6/streaming' element={<Streaming6 />} />
          <Route path='/proyecto7/sobre-nosotros' element={<SobNos7 />} />
          <Route path='/proyecto7/informacion' element={<Info7 />} />
          <Route path='/proyecto7/streaming' element={<Streaming7 />} />
          <Route path='/proyecto8/sobre-nosotros' element={<SobNos8 />} />
          <Route path='/proyecto8/informacion' element={<Info8 />} />
          <Route path='/proyecto8/streaming' element={<Streaming8 />} />
          <Route path='/proyecto9/sobre-nosotros' element={<SobNos9 />} />
          <Route path='/proyecto9/informacion' element={<Info9 />} />
          <Route path='/proyecto9/streaming' element={<Streaming9 />} />
          <Route path='/proyecto10/sobre-nosotros' element={<SobNos10 />} />
          <Route path='/proyecto10/informacion' element={<Info10 />} />
          <Route path='/proyecto10/streaming' element={<Streaming10 />} />
          <Route path='/proyecto11/sobre-nosotros' element={<SobNos11 />} />
          <Route path='/proyecto11/informacion' element={<Info11 />} />
          <Route path='/proyecto11/streaming' element={<Streaming11 />} />
          <Route path='/proyecto12/sobre-nosotros' element={<SobNos12 />} />
          <Route path='/proyecto12/informacion' element={<Info12 />} />
          <Route path='/proyecto12/streaming' element={<Streaming12 />} />
          <Route path='/proyecto13/sobre-nosotros' element={<SobNos13 />} />
          <Route path='/proyecto13/informacion' element={<Info13 />} />
          <Route path='/proyecto13/streaming' element={<Streaming13 />} />
          <Route path='/proyecto14/sobre-nosotros' element={<SobNos14 />} />
          <Route path='/proyecto14/informacion' element={<Info14 />} />
          <Route path='/proyecto14/streaming' element={<Streaming14 />} />
          <Route path='/proyecto15/sobre-nosotros' element={<SobNos15 />} />
          <Route path='/proyecto15/informacion' element={<Info15 />} />
          <Route path='/proyecto15/streaming' element={<Streaming15 />} />
          <Route path='/proyecto16/sobre-nosotros' element={<SobNos16 />} />
          <Route path='/proyecto16/informacion' element={<Info16 />} />
          <Route path='/proyecto16/streaming' element={<Streaming16 />} />
          <Route path='/proyecto17/sobre-nosotros' element={<SobNos17 />} />
          <Route path='/proyecto17/informacion' element={<Info17 />} />
          <Route path='/proyecto17/streaming' element={<Streaming17 />} />
          <Route path='/proyecto18/sobre-nosotros' element={<SobNos18 />} />
          <Route path='/proyecto18/informacion' element={<Info18 />} />
          <Route path='/proyecto18/streaming' element={<Streaming18 />} />
          <Route path='/proyecto19/sobre-nosotros' element={<SobNos19 />} />
          <Route path='/proyecto19/informacion' element={<Info19 />} />
          <Route path='/proyecto19/streaming' element={<Streaming19 />} />
          <Route path='/proyecto20/sobre-nosotros' element={<SobNos20 />} />
          <Route path='/proyecto20/informacion' element={<Info20 />} />
          <Route path='/proyecto20/streaming' element={<Streaming20 />} />
          <Route path='/proyecto21/sobre-nosotros' element={<SobNos21 />} />
          <Route path='/proyecto21/informacion' element={<Info21 />} />
          <Route path='/proyecto21/streaming' element={<Streaming21 />} />
          <Route path='/proyecto22/sobre-nosotros' element={<SobNos22 />} />
          <Route path='/proyecto22/informacion' element={<Info22 />} />
          <Route path='/proyecto22/streaming' element={<Streaming22 />} />
          <Route path='/proyecto23/sobre-nosotros' element={<SobNos23 />} />
          <Route path='/proyecto23/informacion' element={<Info23 />} />
          <Route path='/proyecto23/streaming' element={<Streaming23 />} />
          <Route path='/proyecto24/sobre-nosotros' element={<SobNos24 />} />
          <Route path='/proyecto24/informacion' element={<Info24 />} />
          <Route path='/proyecto24/streaming' element={<Streaming24 />} />
          <Route path='/proyecto25/sobre-nosotros' element={<SobNos25 />} />
          <Route path='/proyecto25/informacion' element={<Info25 />} />
          <Route path='/proyecto25/streaming' element={<Streaming25 />} />
          <Route path='/proyecto26/sobre-nosotros' element={<SobNos26 />} />
          <Route path='/proyecto26/informacion' element={<Info26 />} />
          <Route path='/proyecto26/streaming' element={<Streaming26 />} />
          <Route path='/proyecto27/sobre-nosotros' element={<SobNos27 />} />
          <Route path='/proyecto27/informacion' element={<Info27 />} />
          <Route path='/proyecto27/streaming' element={<Streaming27 />} />
          <Route path='/proyecto28/sobre-nosotros' element={<SobNos28 />} />
          <Route path='/proyecto28/informacion' element={<Info28 />} />
          <Route path='/proyecto28/streaming' element={<Streaming28 />} />
          <Route path='/proyecto29/sobre-nosotros' element={<SobNos29 />} />
          <Route path='/proyecto29/informacion' element={<Info29 />} />
          <Route path='/proyecto29/streaming' element={<Streaming29 />} />
          <Route path='/proyecto30/sobre-nosotros' element={<SobNos30 />} />
          <Route path='/proyecto30/informacion' element={<Info30 />} />
          <Route path='/proyecto30/streaming' element={<Streaming30 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
