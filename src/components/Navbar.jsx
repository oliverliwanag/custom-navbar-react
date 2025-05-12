import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import menu from '../assets/menu.png'
import close from '../assets/close.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-top">
                <Link to="/" className="title">o.o</Link>
                <div className="menu">
                    <img className="menuBtn" src={ menuOpen ? close : menu } alt="Menu" onClick={() => setMenuOpen(!menuOpen)}/>
                </div>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/about">ABOUT</NavLink></li>
                <li><NavLink to="/projects">PROJECTS</NavLink></li>
                <li><NavLink to="/contact">CONTACT</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;