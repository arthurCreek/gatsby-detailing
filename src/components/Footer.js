import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__container--link-credit">
                    <div className="footer__nav">
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Contact Us</a></li>
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
