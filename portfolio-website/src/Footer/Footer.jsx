import './Footer.css';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <div className='footer-wrapper'>
            <div className='footer-divs'>
                <p>© 2026 Dev Andy</p>
            </div>
            <div className='footer-divs social-links'>
                <p> <FaLinkedin size={30} className='react-icon'/> LinkedIn</p>
                <p> <FaInstagramSquare size={30} className='react-icon'/> Instragram</p>
                <p> <FaGithub size={30} className='react-icon'/> GitHub</p>
            </div>
            <div className='footer-divs'>
                <p><MdEmail size={30} className='react-icon'/> Direkt erreichbar</p>
            </div>
        </div>
    )
}

export default Footer;