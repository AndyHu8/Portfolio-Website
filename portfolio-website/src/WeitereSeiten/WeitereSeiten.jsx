import './WeitereSeiten.css';
import { Link } from 'react-router-dom';

function WeitereSeiten() {
    return (
        <section className='weitereSeiten-wrapper'>
            <p><Link to="/Impressum" target="_blank">Impressum</Link></p>
            <p><Link to="/Datenschutz" target="_blank">Datenschutz</Link></p>
        </section>
    )
}

export default WeitereSeiten;

