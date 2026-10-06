import './About.css';

function About(){
    return (
        <section className='about-wrapper'>
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
                <p>Berlin</p>
                <p>Fachinformatiker Anwendungsentwicklung</p>
                <p>Frontend Development mit React</p>
            </div>
        </section>
    )
}

export default About;