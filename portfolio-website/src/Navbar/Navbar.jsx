import '../Styles/Variables.css';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { RiHome2Fill } from "react-icons/ri";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar({ darkMode, toggleDarkMode }) {
     const navigate = useNavigate();
     const [menuOpen, setMenuOpen] = useState(false);
     //navRef verweist auf deinen Navbar-Container
     const navRef = useRef(null);

    const scrollToSection = (sectionId) => {
        setMenuOpen(false);
        navigate('/');

        setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({
                behavior: 'smooth'
            });
        }, 100);
    };

    useEffect(() => {
    //Der Listener wird nur aktiviert, wenn das Menü geöffnet ist.
    if (!menuOpen) return;

    const handleClickOutside = (event) => {
        /*Bei einem Klick wird geprüft, ob das angeklickte Element innerhalb deiner Navigation liegt.
        Falls nicht, wird das Menü geschlossen.*/
        if (navRef.current && !navRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    document.addEventListener('pointerdown', handleClickOutside);

    return () => {
        //Beim Schließen wird der Event Listener wieder entfernt.
        document.removeEventListener('pointerdown', handleClickOutside);
    };
}, [menuOpen]);

    return (
        <section id='navbar' className='navbar-wrapper'>
            <nav ref={navRef} className={`nav-list ${menuOpen ? 'active' : ''}`}>
                <button onClick={() => scrollToSection('home')}><RiHome2Fill size={20}/></button>
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
                        <MdLightMode size={20}/> :
                        <MdDarkMode size={20}/>}
                </button>
            </nav>
            <div className='nav-list-mobile'>
                <button onClick={() => setMenuOpen(true)}><GiHamburgerMenu size={25}/></button>
            </div>
        </section>
    )
}

export default Navbar;