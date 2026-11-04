import './Styles/Global.css';
import './Styles/Variables.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";

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
  const [darkMode, setDarkMode] = useState(() => {
    //Beim initialen Laden wird geprüft, ob der Nutzer bereits eine Einstellung gespeichert hat
    const savedTheme = localStorage.getItem("theme");

    //Beim Laden wird geprüft, ob der Nutzer bereits eine Einstellung gespeichert hat
    if (savedTheme) {
      return savedTheme === "dark";
    }

    //Falls nicht, wird die Systemeinstellung des Nutzers berücksichtigt
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  //Beim Wechseln des Dark Modes wird die Einstellung im localStorage gespeichert
  useEffect(() => {
      const theme = darkMode ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);

      //Speichern der Einstellung im localStorage
      localStorage.setItem("theme", theme);
  }, [darkMode]);

  //Funktion zum Umschalten des Dark Modes
  const toggleDarkMode = () => {
      setDarkMode(prev => !prev);
  };

  return (
<BrowserRouter>
      <Routes>

        {/*Hauptseite*/}
        <Route path="/" element={
          <section>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
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
