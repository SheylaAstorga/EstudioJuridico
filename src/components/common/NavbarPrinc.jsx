import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,NavLink } from 'react-router-dom';
import logo from "../../img/logoPrincipal.png";

const NavbarPrinc = () => {
  return (
    <Navbar  expand="lg" className="NavBarPrinc p-3 ">
      <Container >
        <Navbar.Brand as={Link} to={"/"} ><img src={logo} alt="logo principal "className='miLogo text-light' /></Navbar.Brand>
        <Navbar.Toggle className="border-white border-2 text-white" aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse >
          <Nav className="ms-auto gap-2 ">
            <NavLink href="#home" className='text-light nav-link' to={"/"}>INICIO</NavLink>
            <NavLink href="#link" className='text-light nav-link' to={"/estudio"}>NUESTRO ESTUDIO</NavLink>
            <NavLink href="#link" className='text-light nav-link' to={"/profesionales"}>NUESTROS PROFESIONALES</NavLink>
            <NavLink href="#link" className='text-light nav-link' to={"/servicios"}>SERVICIOS</NavLink>
            <NavLink href="#link" className='text-light nav-link' to={"/practicas"}>AREAS DE PRACTICAS</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPrinc;
