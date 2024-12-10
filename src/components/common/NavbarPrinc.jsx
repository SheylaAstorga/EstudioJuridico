import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from "../../img/logoPrincipal.png";

const NavbarPrinc = () => {
  return (
    <Navbar className="NavBarPrinc p-3">
      <Container >
        <Navbar.Brand href="#home" ><img src={logo} alt="logo principal "className='miLogo' /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse  >
          <Nav className="ms-auto ">
            <Nav.Link href="#home" className='text-light'>INICIO</Nav.Link>
            <Nav.Link href="#link" className='text-light'>NUESTRO ESTUDIO</Nav.Link>
            <Nav.Link href="#link" className='text-light'>NUESTROS PROFESIONALES</Nav.Link>
            <Nav.Link href="#link" className='text-light'>SERVICIOS</Nav.Link>
            <Nav.Link href="#link" className='text-light'>AREAS DE PRACTICAS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPrinc;
