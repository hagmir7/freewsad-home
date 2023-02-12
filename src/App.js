import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Urls from './routs/Urls';
import coockies from 'js-cookie';
import React, { useEffect } from 'react';
import Lang from './components/Lang';
import SearchBook from './components/Book/SearchBook';
import API from './api/API';



function App() {
  // const pathname = window.location.pathname

  useEffect(() => {
    document.querySelector('html').dir = coockies.get("i18next") === 'ar' ? 'rtl' : 'ltr';


    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    if(!localStorage.getItem('ref') && urlParams.get('ref')){
      ref(urlParams.get('ref'));
    }
    
  }, [])



  const ref = async (slug) => {
    await API.get('/trafiq', {
      params: { 'ref': slug }
    }).then(response => {
      localStorage.setItem('ref', response.data.message)
    }).catch(error => {
      console.log(error)
    })

  }



  return (

    <div>
      <Header />
      <div className='row m-0'>
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
