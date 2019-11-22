import React from 'react';
import { Link } from "gatsby";
import logo from '../images/gatsby-detail-logo.png';
import menu_logo from '../images/menu-button.png';

const Header = (props) => {

    function toggleShow() {
        document.querySelector('.header__nav').classList.toggle('Navbar__ToggleShow');
        document.querySelector('.header__contact').classList.toggle('Navbar__ToggleShow');
        document.querySelector('.header').classList.toggle('header__open');
    }

    return (
        
        <header className="header">
            <div className="header__container">
                <li id="header-logo"><img src={logo} alt="company logo" className="logo" /></li>
                <img src={menu_logo} alt="menu icon" className="header__menu-logo" onClick={toggleShow}/>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li><Link className="header__list-item" to="/">Home</Link></li>
                        <li><Link className="header__list-item" to="/about/">About Us</Link></li>
                        <li><Link className="header__list-item" to="/services/">Services</Link></li>
                        <li><Link className="header__list-item" to="/portfolio/">Portfolio</Link></li>
                        <li><Link className="header__list-item" to="/faq/">FAQ</Link></li>
                    </ul>
                </nav>
                <Link className="header__contact " to="/contact_us/">Contact Us</Link>
            </div>
        </header>
    )

}

export default Header;

