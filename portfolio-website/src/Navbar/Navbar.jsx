import '../Styles/Variables.css';
import './Navbar.css';
import { RiHome2Fill } from "react-icons/ri";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function Navbar({ darkMode, toggleDarkMode }) {
    return (
        <section id='navbar' className='navbar-wrapper'>
            <div className='nav-list'>
                <ul>
                    <li><a href="#home"><RiHome2Fill className='home-react-icons' size={20}/></a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#projekte">PROJEKTE</a></li>
                    <li><a href="#kontakt">KONTAKT</a></li>
                    <li><button
                            type="button"
                            onClick={toggleDarkMode}
                            aria-label={darkMode ? "Lightmode aktivieren" : "Darkmode aktivieren"}
                            aria-pressed={darkMode}
                        >
                        {darkMode ?
                            <MdLightMode className='home-react-icons' size={20}/> :
                            <MdDarkMode className='home-react-icons' size={20}/>}
                    </button></li>
                </ul>
            </div>
        </section>
    )
}

export default Navbar;