import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./footer.css"

function Footer() {
    return (
        <footer>
            <nav>
            <ul className="footer">
              <li className="footerlink">
                <a href="https://github.com/noplur" target="_blank" className="icon">
                    <i class="fab fa-github"></i>
                </a>
            </li>
            <li className="footerlink">
                <a href="https://www.linkedin.com/in/aaron-rosenblatt-5b734a1bb/" target="_blank" className="icon">
                    <i class="fab fa-linkedin"></i>
                </a>
            </li>
            <li className="footerlink">
                <a href="https://twitter.com/aaronpix" target="_blank" className="icon">
                    <i class="fab fa-twitter-square"></i>
                </a>
            </li>
            </ul>
            </nav>
        </footer>
    );
}

export default Footer;