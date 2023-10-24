import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Dropdown from './Dropdown';
import '../styles/components.styles.css';

export default function Navbar() {
    // set the state variables that control the nav bar dropdown
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
    const [isNavDropdownShowing, setisNavDropdownShowing] = useState(false);

    // define the click handlers that change the navbar menu state
    const handleNavMenuClick = () => setIsNavMenuOpen(!isNavMenuOpen);
    const closeMobileMenu = () => setIsNavMenuOpen(false);

    // event that is trigged when a menu item is hovered over
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setisNavDropdownShowing(false);
        } else {
            setisNavDropdownShowing(true);
        }
    };

    // when the menu item is no longer hovered over
    const onMouseLeave = () => {
        setisNavDropdownShowing(false);
    };

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar__logo'>
                    Jason Caughers | Software Engineer
                </Link>
                <Link to='/' className='mobile__logo'>
                    J.C | <span className='navbar__logo--pink'>Software Engineer</span>
                </Link>

                {/* Hamburger button (mobile screens only) */}
                <div className='navbar__hamburger' onClick={handleNavMenuClick}>
                    <i className={isNavMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                {/* Menu items */}
                <ul className={isNavMenuOpen ? 'navbar__menu active' : 'navbar__menu'}>
                    <li className='navbar__item'>
                        <Link className='navbar__link' smooth='true' to="/#landing" onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className='navbar__item'>
                        <Link className='navbar__link' smooth='true' to="/#about" onClick={closeMobileMenu}>About</Link>
                    </li>
                    <li className='navbar__item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link className='navbar__link' smooth='true' to="/#projects" onClick={closeMobileMenu}>Projects <i className='fas fa-caret-down' /></Link>
                        {isNavDropdownShowing && <Dropdown />}
                    </li>
                    <li className='navbar__item'>
                        <Link className='navbar__link' smooth='true' to="/#contact" onClick={closeMobileMenu}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
