import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./footer.css"

function Footer() {
    return (
        <footer>
            <nav>
            <ul className="footer">
              <li className="footerlink">
                <a href="https://github.com/noplur" target="_blank">
                    <i class="fab fa-github icon"></i>
                </a>
            </li>
            <li className="footerlink">
                <a href="https://www.linkedin.com/in/aaron-rosenblatt-5b734a1bb/" target="_blank">
                    <i class="fab fa-linkedin icon"></i>
                </a>
            </li>
            <li className="footerlink">
                <a href="https://twitter.com/aaronpix" target="_blank">
                    <i class="fab fa-twitter-square icon"></i>
                </a>
            </li>
            </ul>
            </nav>
        </footer>
    );
}

export default Footer;