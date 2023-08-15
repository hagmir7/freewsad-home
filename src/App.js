import './App.css';
import React, { lazy, useEffect } from 'react';
import Urls from './routs/Urls';
import coockies from 'js-cookie';
import Lang from './components/Lang';
;



const AdBlock = lazy(() => import('./components/AdBlock'));
const Footer = lazy(() => import('./components/Footer'));
const Header = lazy(() => import('./components/Header'));





function App() {
  useEffect(() => {
    document.querySelector('html').dir = coockies.get("i18next") === 'ar' ? 'rtl' : 'ltr';
  }, [])
  return (

    <div>
      <Header />
      <div className='row m-0'>
        <div className='col-12 col-md-6 col-lg-3 col-xl-3'>
          <Lang />
          
          <AdBlock />
        </div>
      </div>
      <Urls />
      <Footer />
      {/* <ScrollRestoration /> */}
    </div>

  );
}

export default App;
