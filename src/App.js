import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Urls from './routs/Urls';

function App() {
  return (

    <div>
      <Header />
      {/* <div className="d-flex align-items-center justify-content-center vh-100 container"> */}
        <Urls />
      {/* </div> */}
      <Footer />
    </div>

  );
}

export default App;
