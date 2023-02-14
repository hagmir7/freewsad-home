import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Urls from './routs/Urls';
import coockies from 'js-cookie';
import React, { useEffect } from 'react';
import Lang from './components/Lang';
import AdBlock from './components/AdBlock';
import Referal from './components/Referal';



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
          <Referal />
        </div>
      </div>
      <Urls />
      <Footer />
      {/* <ScrollRestoration /> */}
    </div>

  );
}

export default App;
