import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Urls from './routs/Urls';
import coockies from 'js-cookie';
import React, { useEffect } from 'react';
import Lang from './components/Lang';
import SearchBook from './components/Book/SearchBook';



function App() {
  // const pathname = window.location.pathname

  useEffect(() => {
    document.querySelector('html').dir = coockies.get("i18next") === 'ar' ? 'rtl' : 'ltr';

  }, [])



  return (

    <div>
      <Header />
      <div className='row m-0'>
        <div className='col-12 col-md-6 col-lg-3 col-xl-3 mt-2'>
          <SearchBook />
        </div>
        <div className='col-12 col-md-6 col-lg-3 col-xl-3'>
          <Lang />
        </div>
      </div>
      <Urls />
      <Footer />
      {/* <ScrollRestoration /> */}
    </div>

  );
}

export default App;
