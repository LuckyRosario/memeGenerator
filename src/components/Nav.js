import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from "../logo.png";
import '../Nav.css';

export default function Nav(){
    return (
        <>
  <Navbar className='nav p-4'>
  <Container className="container-fluid">
    <Navbar.Brand href="#home">
    <img className="logo" src={logo} />
     Meme Generator
    </Navbar.Brand>
    <div className="justify-content-end">Pamela Rosario's Portfolio Project</div>
  </Container>
  </Navbar>
        </>
    )
}