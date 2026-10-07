import './Navbar.css';
import '../Colors.css';
import { RiHome2Fill } from "react-icons/ri";

function Navbar(){
    return (
        <section className='wrapper'>
            <div className='nav-list'>
                <ul>
                    <li><a href={() => {}}><RiHome2Fill className='home-react-icons' size={20}/></a></li>
                    <li><a href={() => {}}>ABOUT</a></li>
                    <li><a href={() => {}}>SKILLS</a></li>
                    <li><a href={() => {}}>PROJEKTE</a></li>
                    <li><a href={() => {}}>LERNEN</a></li>
                    <li><a href={() => {}}>KONTAKT</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Navbar;