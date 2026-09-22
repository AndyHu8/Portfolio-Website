import './Navbar.css';

function Navbar(){
    return (
        <div className='wrapper'>
            <div>
                <h1>ANDY HU</h1>
            </div>
            <div>
                <ul>
                    <li>Über mich</li>
                    <li>Skills</li>
                    <li>Erfahrungen</li>
                    <li>Projekte</li>
                    <li>Lernen</li>
                    <li>Kontakt</li>
                </ul>
            </div>
            <div>
                <div><p>Github</p></div>
                <div><p>LinkedIn</p></div>
            </div>
        </div>
    )
}

export default Navbar;