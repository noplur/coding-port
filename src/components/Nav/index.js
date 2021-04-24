import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

    // const resumeCategory = [
    //     { name: "resume", description: "A list of Aaron Rosenblatt's proficiencies" },
    //   ];

      // const handleClick = () => {
      //   console.log("click handled")
      // }
    
      return (
        <header className="flex-row px-1">
          <h2>
            Aaron Rosenblatt
          </h2>
          <nav>
            <ul className="flex-row">
              <li className="mx-2">
                <a data-testid="about" href="#about">
                About me
            </a>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
          <li className="mx-2">
            <span>Contact</span>
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