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
            <li className="mx-2">
            <span onClick={() => {
                setCurrentCategory(categories[0])
                }}
            >About Me</span>
          </li>
          <li className="mx-2">
            <span onClick={() => {
              setCurrentCategory(categories[1])
            }}>Portfolio</span>
          </li>
          <li className="mx-2">
            <span onClick={() => {
              setCurrentCategory(categories[2])
            }}>Contact</span>
          </li>
          <li className="mx-2">
            <span onClick={() => (
            setCurrentCategory(categories[3])
            ) }>

              Resume
            </span>
      
          </li>
        </ul>
      </nav>
    </header>
  );
}
    
export default Nav;