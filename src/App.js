import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Inputs from './components/Inputs';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
    
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }
  
  return (
    <div className="App">
     <Nav  darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}/>
     <Inputs darkMode={darkMode}/>
    </div>
  );
}

export default App;
