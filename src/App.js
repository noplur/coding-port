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

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      ></Nav>
      <main>
        <ContactForm></ContactForm>
        <Project currentCategory={currentCategory}></Project>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;