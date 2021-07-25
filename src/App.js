import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';


function App() {
  const [categories] = useState([
    { name: "Group Projects", description: "Projects I have done in a group" },
    { name: "Solo Projects", description: "Projects I have done on my own" }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
      {!contactSelected ? (
        <>
          <Project currentCategory={currentCategory}></Project>
          <About></About>
        </>
        ) : (
            <ContactForm></ContactForm>
          )}
      </main>
    </div>
  );
}

export default App;
