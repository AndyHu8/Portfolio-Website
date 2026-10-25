import './Footer.css';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <section className='footer-wrapper'>
            <div className='footer-divs'>
                <a href='#home'>© 2026 Dev Andy</a>
            </div>
            <div className='footer-divs social-links'>
                <a
                    href="https://linkedin.com/in/andy-hu-berlin/"
                    target="_blank"
                    rel="noopener noreferrer"><FaLinkedin size={30} className='react-icon'/> LinkedIn</a>
                <a
                    href="https://instagram.com/anhu_chn"
                    target="_blank"
                    rel="noopener noreferrer"><FaInstagramSquare size={30} className='react-icon'/> Instragram</a>
                <a 
                    href="https://github.com/AndyHu8"
                    target="_blank"
                    rel="noopener noreferrer"><FaGithub size={30} className='react-icon'/> GitHub</a>
            </div>
            <div className='footer-divs'>
                <a href="mailto:huandy01@gmail.com"><MdEmail size={30} className='react-icon'/> Direkt erreichbar</a>
            </div>
        </section>
    )
}

export default Footer;