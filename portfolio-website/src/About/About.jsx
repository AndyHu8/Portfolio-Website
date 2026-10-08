import './About.css';
import { FaLocationDot } from "react-icons/fa6";
import { MdWorkspacePremium } from "react-icons/md";
import { FaCode } from "react-icons/fa";

function About(){
    return (
        <section className='about-wrapper'>
            <div className='about-inhalt'>
                <h1>ÜBER MICH</h1>
                <br />
                <p>Ich bin ein ausgebildeter Fachinformatiker für Anwendungsentwicklung
                und habe mich auf die Entwicklung moderner Webanwendungen spezialisiert.</p>
                <br />
                <p>Mein Schwerpunkt liegt hierbei im Frontend-Development
                mit HTML, CSS, JavaScript, TypeScript, React.</p>
                <br />
                <p>Besonders interessant finde ich die Verbindung aus sauberem Code,
                guter User Experience und modernem UI-Design.</p>
                <div className='about-zusammenfassung'>
                    <p><FaLocationDot className='about-react-icons' size={25}/> Berlin</p>
                    <p><MdWorkspacePremium className='about-react-icons' size={25}/> IT-Ausbildung: FIAE</p>
                    <p><FaCode className='about-react-icons' size={25}/> Frontend Development mit React</p>
                </div>
            </div>
        </section>
    )
}

export default About;