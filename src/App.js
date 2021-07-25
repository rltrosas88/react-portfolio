import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Project></Project>
        <About></About>
      </main>
    </div>
  );
}

export default App;
