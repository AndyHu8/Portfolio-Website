import './Navbar.css';
import '../Colors.css';
import { RiHome2Fill } from "react-icons/ri";

function Navbar(){
    return (
        <section className='navbar-wrapper'>
            <div className='nav-list'>
                <ul>
                    <li><a href="#home"><RiHome2Fill className='home-react-icons' size={20}/></a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#projekte">PROJEKTE</a></li>
                    <li><a href="#kontakt">KONTAKT</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Navbar;