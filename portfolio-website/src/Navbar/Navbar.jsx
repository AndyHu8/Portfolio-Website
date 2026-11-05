import '../Styles/Variables.css';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { RiHome2Fill } from "react-icons/ri";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function Navbar({ darkMode, toggleDarkMode }) {
     const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        navigate('/');

        setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({
                behavior: 'smooth'
            });
        }, 100);
    };

    return (
        <section id='navbar' className='navbar-wrapper'>
            <div className='nav-list'>
                <nav>
                    <button onClick={() => scrollToSection('home')}><RiHome2Fill className='home-react-icons' size={20}/></button>
                    <button onClick={() => scrollToSection('about')}>ABOUT</button>
                    <button onClick={() => scrollToSection('skills')}>SKILLS</button>
                    <button onClick={() => scrollToSection('projekte')}>PROJEKTE</button>
                    <button onClick={() => scrollToSection('kontakt')}>KONTAKT</button>
                    <button
                            type="button"
                            onClick={toggleDarkMode}
                            aria-label={darkMode ? "Lightmode aktivieren" : "Darkmode aktivieren"}
                            aria-pressed={darkMode}
                        >
                        {darkMode ?
                            <MdLightMode className='home-react-icons' size={20}/> :
                            <MdDarkMode className='home-react-icons' size={20}/>}
                    </button>
                </nav>
            </div>
        </section>
    )
}

export default Navbar;