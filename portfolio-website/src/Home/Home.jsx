import './Home.css';

function Home(){
    return (
        <section className='home-wrapper'>
            <h1 className='home-background-title'>HELLO WORLD!</h1>
                <div className='home-inhalt'>
                    <div className='home-text'>
                        <h1>Hello!</h1>
                        <h1>I'm Andy Hu.</h1>
                        <h2>Frontend Developer aus Berlin</h2>
                        <br />
                        <p>Ich entwickle moderne und benutzerfreundliche Webanwendungen mit React.</p>
                        <p>Leidenschaftlich, lösungsorientiert und immer lernbereit.</p>
                        <div className='home-buttons'>
                            <button>Meine Projekte</button>
                            <button>Kontakt aufnehmen</button>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Home;