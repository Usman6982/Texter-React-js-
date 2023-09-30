import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer style={{ marginTop: "120px" }}>
            <div className="footer-container" >
                <div className="footer-logo">
                    <img src="logo.png" alt="Your Logo" />
                </div>
                <div className="footer-links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <p>Contact Us:</p>
                    <Link to="mailto:your@email.com">falakudaas4051@gmail.com</Link>
                </div>
            </div>
            <div className="copyright">
                &copy; 2023 Your Company Name. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
