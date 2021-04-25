import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Project from './components/Project';
import ContactForm from './components/Contact';

function App() {
  
  const [categories] = useState([
    {
      name: "project",
        description:
          "Images from portfolio projects",
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);


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
        {!contactSelected ? (
          
            <About></About>
         
        ) : (
          <>
            <Project currentCategory={currentCategory}></Project>
            <ContactForm></ContactForm>
          </>
          )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;