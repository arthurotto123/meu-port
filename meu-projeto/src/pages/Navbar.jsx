import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
    return ( 
        <section id="NavContainer">
        <nav id="Navbar">
            <p>&lt;Arthur Coelho/ &gt;</p>
            <ul className="nav-list">
                <li><Link className="navLink"  to="/">Início</Link></li>
                <li><Link className="navLink" to="/about">Sobre min</Link></li>
                <li><Link className="navLink" to="/skils">Habilidades</Link></li>
                <li><Link className="navLink" to="/projects">Projetos</Link></li>
                <li><Link className="navLink" to="/contact">Contato</Link></li>
            </ul>
        </nav>
        </section>

    )
}

export default Navbar;