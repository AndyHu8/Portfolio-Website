import './Home.css';
import '../Styles/Variables.css';
import { MdWavingHand } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

function Home(){
    return (
        <section id='home' className='home-wrapper'>
            <h1 className='home-background-title'>你好 <br /> 世界</h1>
                <div className='home-inhalt'>
                    <div className='home-text'>
                        <h1>Hello! <MdWavingHand className='home-react-icons' size={50}/></h1>
                        <h1>I'm Andy.</h1>
                        <h2>Junior Frontend Dev aus Berlin.</h2>
                        <br />
                        <p>Ich entwickle moderne und benutzerfreundliche Webanwendungen mit React.</p>
                        <p>Leidenschaftlich, lösungsorientiert und immer lernbereit.</p>
                        <div className='home-buttons'>
                            <a href='#projekte'>Meine Projekte <FaArrowRight className='home-react-icons' size={15}/></a>
                            <a href='#kontakt'>Kontakt aufnehmen <MdEmail className='home-react-icons' size={15}/></a>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Home;