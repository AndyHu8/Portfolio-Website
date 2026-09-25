import './Navbar.css';

function Navbar(){
    return (
        <div className='wrapper'>
            <div className='logo'>
                <h1>WHO-IS-HU</h1>
            </div>
            <div className='nav-list'>
                <ul>
                    <li><a href={() => {}}>Über mich</a></li>
                    <li><a href={() => {}}>Skills</a></li>
                    <li><a href={() => {}}>Erfahrungen</a></li>
                    <li><a href={() => {}}>Projekte</a></li>
                    <li><a href={() => {}}>Lernen</a></li>
                    <li><a href={() => {}}>Kontakt</a></li>
                </ul>
            </div>
            <div className='social-media-list'>
                <ul>
                    <li><a href={() => {}}>Github</a></li>
                    <li><a href={() => {}}>LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;