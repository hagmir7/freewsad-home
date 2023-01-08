import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Urls from './routs/Urls';
import coockies from 'js-cookie';
import React, { useEffect } from 'react';
import Lang from './components/Lang';



function App() {
  // const pathname = window.location.pathname

  useEffect(() => {
    document.querySelector('html').dir = coockies.get("i18next") === 'ar' ? 'rtl' : 'ltr';
    
  }, [])



  return (

    <div>
      <Header />
      <Lang />
      <Urls />
      <Footer />
      {/* <ScrollRestoration /> */}
    </div>

  );
}

export default App;
