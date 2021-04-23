import React from "react";

function Footer() {
    return (
        <footer>
            <nav>
            <ul className="flex-row">
              <li className="mx-2">
                <a href="https://github.com/noplur">
                    <i class="fab fa-github"></i>
                </a>
            </li>
            <li className={"mx-2"}>
                <a href="https://www.linkedin.com/in/aaron-rosenblatt-5b734a1bb/">
                    <i class="fab fa-linkedin"></i>
                </a>
            </li>
            <li className={"mx-2"}>
                <a href="https://twitter.com/aaronpix">
                    <i class="fab fa-twitter-square"></i>
                </a>
            </li>
            </ul>
            </nav>
        </footer>
    );
}

export default Footer;