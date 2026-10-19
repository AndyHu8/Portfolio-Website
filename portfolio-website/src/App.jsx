import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Kontakt from './Kontakt/Kontakt';
import Footer from './Footer/Footer';

function App() {
  return (
    <section>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Kontakt/>
      <Footer/>
    </section>
  );
}

export default App;
