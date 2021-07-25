import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';


function App() {
  const [categories] = useState([
    { name: "Group Projects", description: "Projects I have done in a group" },
    { name: "Solo Projects", description: "Projects I have done on my own" }
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
        <Project currentCategory={currentCategory}></Project>
        <About></About>
      </main>
    </div>
  );
}

export default App;
