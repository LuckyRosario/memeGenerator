import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../Nav.css';

export default function Nav(){
    return (
        <>
  <Navbar className='nav'>
  <Container className="container-fluid">
    <Navbar.Brand href="#home">
     Meme Generator
    </Navbar.Brand>
    <div className="justify-content-end">Pamela Rosario's Portfolio Project</div>
  </Container>
  </Navbar>
        </>
    )
}