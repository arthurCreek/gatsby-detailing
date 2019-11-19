import React from 'react'
import { Link } from "gatsby"

const Header = () => {
    return (
        <div className="header">
            <ul className="header__list">
                <li><Link className="header__list-item" to="/">Home</Link></li>
                <li><Link className="header__list-item" to="/about/">About Us</Link></li>
                <li><Link className="header__list-item" to="/services/">Services</Link></li>
                <li><Link className="header__list-item" to="/portfolio/">Portfolio</Link></li>
                <li><Link className="header__list-item" to="/faq/">FAQ</Link></li>
                <li><Link className="header__list-item" to="/contact_us/">Contact Us</Link></li>

            </ul>
        </div>
    )
}

export default Header;
