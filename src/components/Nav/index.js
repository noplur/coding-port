import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    aboutSelected,
    setAboutSelected,
    contactSelected,
    setContactSelected
  } = props;
    
      return (
        <header className="flex-row px-1">
          <h2>
            Aaron Rosenblatt
          </h2>
          <nav>
            <ul className="flex-row">
            <li className={`mx-2 ${!contactSelected && aboutSelected && 'navActive'}`}>
            <span onClick={() => {
                  setAboutSelected(true);
                  setContactSelected(false);
                }}
            >About Me</span>
          </li>
          <li className={`mx-2 ${contactSelected && aboutSelected && 'navActive'}`}>
            <span onClick={() => {
              setContactSelected(false);
              setAboutSelected(false);
            }}>Portfolio</span>
          </li>
          <li className={`mx-2 ${contactSelected && aboutSelected && 'navActive'}`}>
            <span onClick={() => {
              setContactSelected(true);
              setAboutSelected(false);
            }}>Contact</span>
          </li>
          <li className="mx-2">
            <span>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
    
export default Nav;