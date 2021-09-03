import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Skills from './components/Skills';

function App() {
  const [currentCategoryTwo, setCurrentCategoryTwo] = useState({
    name: "portfolio",
        description:
          "",
  });
  const [categories] = useState([
    {
      name: "about",
        description:
          "Information about Aaron",
        component: <About/>
    },
    {
      name: "projects",
        description:
          "Work by Aaron",
        component: <Project currentCategory={currentCategoryTwo}></Project>
    },
    {
      name: "contact",
        description:
          "Contact Aaron",
        component: <ContactForm></ContactForm>
    },
    {
      name: "skills",
        description:
          "Aaron's Skills",
        component: <Skills></Skills>
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  // useEffect(()=>{
  //   setCurrentCategoryTwo(currentCategory)
  // },[])


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        
          <>
            {currentCategory.component}
          </>

      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;