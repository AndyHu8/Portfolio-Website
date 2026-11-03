import './Styles/Global.css';
import './Styles/Variables.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Projekte from './Projekte/Projekte';
import Kontakt from './Kontakt/Kontakt';
import Footer from './Footer/Footer';
import WeitereSeiten from './WeitereSeiten/WeitereSeiten';
import NotFound from './NotFound/NotFound';

function App() {
  return (
<BrowserRouter>
      <Routes>

        {/*Hauptseite*/}
        <Route path="/" element={
          <section>
            <Navbar/>
            <Home/>
            <About/>
            <Skills/>
            <Projekte/>
            <Kontakt/>
            <Footer/>
            <WeitereSeiten/>
          </section>
        } />

        {/*404-Seite*/}
        <Route path="*" element={<NotFound/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
