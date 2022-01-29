import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from "../logo.png";
import '../App.css';

export default function Nav(props){
    return (
      <Navbar
      className={props.darkMode ? "dark": ""}
  >
  <Container className="container">
   <div className="d-flex justify-content-start ">
    <img className="logo" src={logo} />
     <p className="mt-4">Meme Generator</p>
   </div>
    <div className="d-flex justify-content-end">Pamela Rosario's Portfolio Project
    <div 
                className="toggler ms-3" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
    </div>

  </Container>
  </Navbar>
    )
}