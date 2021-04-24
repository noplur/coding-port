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
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
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