import './Home.css';
import { MdWavingHand } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

function Home(){
    return (
        <section className='home-wrapper'>
            <h1 className='home-background-title'>HELLO WORLD!</h1>
                <div className='home-inhalt'>
                    <div className='home-text'>
                        <h1>Hello! <MdWavingHand className='home-react-icons' size={50}/></h1>
                        <h1>I'm Andy.</h1>
                        <h2>Frontend Developer aus Berlin</h2>
                        <br />
                        <p>Ich entwickle moderne und benutzerfreundliche Webanwendungen mit React.</p>
                        <p>Leidenschaftlich, lösungsorientiert und immer lernbereit.</p>
                        <div className='home-buttons'>
                            <button>Meine Projekte <FaArrowRight className='home-react-icons' size={15}/></button>
                            <button>Kontakt aufnehmen <MdEmail className='home-react-icons' size={15}/></button>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Home;