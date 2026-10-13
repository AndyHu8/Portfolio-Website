import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Kontakt from './Kontakt/Kontakt';

function App() {
  return (
    <section>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Kontakt/>
    </section>
  );
}

export default App;
