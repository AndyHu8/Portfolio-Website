import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';

function App() {
  return (
    <section>
      <Navbar/>
      <Home/>
      <About/>
      <h1 className='coming-soon'>HIER GEHT'S WEITER!</h1>
    </section>
  );
}

export default App;
