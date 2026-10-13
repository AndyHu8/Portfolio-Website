import './About.css';
import { FaLocationDot } from "react-icons/fa6";
import { MdWorkspacePremium } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import Profilfoto from '../images/Profilfoto.jpeg';

function About(){
    return (
        <section className='about-wrapper'>
            <div className='about-inhalt'>
                <div className='about-flexbox'>
                    <div>
                        <h1>Wer ich bin</h1>
                        <br />
                        <p>Ich bin ein ausgebildeter Fachinformatiker für Anwendungsentwicklung
                        und habe mich auf die Entwicklung moderner Webanwendungen spezialisiert.</p>
                        <br />
                        <p>Mein Schwerpunkt liegt hierbei im Frontend-Development
                        mit HTML, CSS, JavaScript, TypeScript, React.</p>
                        <br />
                        <p>Besonders interessant finde ich die Verbindung aus sauberem Code,
                        guter User Experience und modernem UI-Design.</p>
                    </div>
                    <img src={Profilfoto} alt="Profilfoto" />
                </div>
                <div className='about-zusammenfassung'>
                    <p><FaLocationDot className='about-react-icons' size={30}/> Berlin</p>
                    <p><MdWorkspacePremium className='about-react-icons' size={30}/> IT-Ausbildung: FIAE</p>
                    <p><FaCode className='about-react-icons' size={30}/> Frontend Development mit React</p>
                </div>
            </div>
        </section>
    )
}

export default About;