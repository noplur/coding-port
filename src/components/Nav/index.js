import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./nav.css"


function Nav(props) {

  const {
    categories = [],
    setCurrentCategory,
    contactSelected
  } = props;
    
      return (
        <header className="flex-row px-1">
           <nav className="hero">
          <h2 className="aaron">
            Aaron Rosenblatt
          </h2>
            <ul className="navlinks">
            <li className="titles navActive" tabindex="0">
            <span onClick={() => {
                setCurrentCategory(categories[0])
                }}
            >About Me</span>
          </li>
          <li className="titles navActive" tabindex="0">
            <span onClick={() => {
              setCurrentCategory(categories[1])
            }}>Portfolio</span>
          </li>
          <li className="titles navActive" tabindex="0">
            <span onClick={() => {
              setCurrentCategory(categories[2])
            }}>Contact</span>
          </li>
          <li className="titles navActive" tabindex="0">
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