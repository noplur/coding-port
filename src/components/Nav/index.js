import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
    const portfolioCategory = [
        {
          name: "portfolio",
          description: "Applications made by Aaron Rosenblatt",
        }
    ];

    const resumeCategory = [
        { name: "resume", description: "A list of Aaron Rosenblatt's proficiencies" },
      ];

      const handleClick = () => {
        console.log("click handled")
      }
    
      return (
        <header data-testid="header" className="flex-row px-1">
          <h2>
            Aaron Rosenblatt
          </h2>
          <nav>
            <ul className="flex-row">
              <li className="mx-2">
                <a href="#about" onClick={() => handleClick()}>
                  About me
                </a>
              </li>
              {
                portfolioCategory.map((portfoliocategory) => (
                  <li className="mx-1" key={portfoliocategory.name} >
                    <span onClick={() => { handleClick(); }}>
                     {capitalizeFirstLetter(portfoliocategory.name)}
                    </span>
                  </li>
                ))
              }
              <li className={"mx-2"}>
                <span onClick={() => handleClick()}>
                  Contact
                </span>
              </li>
              {
                resumeCategory.map((resumecategory) => (
                  <li className="mx-1" key={resumecategory.name} >
                    <span onClick={() => { handleClick(); }}>
                     {capitalizeFirstLetter(resumecategory.name)}
                    </span>
                  </li>
                ))
              }
            </ul>
          </nav>
        </header>
      );
    }
    
    export default Nav;