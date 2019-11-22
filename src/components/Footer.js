import React from 'react';
import { Link } from "gatsby";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__container--link-credit">
                    <div className="footer__nav">
                        <ul>
                            <li><Link className="footer__nav-link" to="/about/">About Us</Link></li>
                            <li><Link className="footer__nav-link" to="/services/">Services</Link></li>
                            <li><Link className="footer__nav-link" to="/portfolio/">Portfolio</Link></li>
                            <li><Link className="footer__nav-link" to="/faq/">FAQs</Link></li>
                            <li><Link className="footer__nav-link" to="/contact_us/">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer__credits">
                        Icons made by 
                        <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market"> Vectors Market </a>
                        and
                        <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a>  
                        from 
                        <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                    </div>
                </div>

                <div className="footer__copywrite">
                    <p>
                        Copyright &copy; 2019 by Arturo Arroyo. All rights reserved.
                    </p>
                </div>
            </div>

        </footer>
    )
}

export default Footer;
