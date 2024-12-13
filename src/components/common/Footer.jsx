import { Container, Row, Col } from "react-bootstrap";
import logo from "../../img/logoPrincipal.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="FooterPrinc text-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start">
            <img
              src={logo}
              alt="Logo Estudio Jurídico"
              style={{ width: "150px" }}
              className="mb-2"
            />
            <p className="mt-2">
              Estudio Jurídico - Compromiso y confianza desde 1990.
            </p>
          </Col>

          <Col md={4} className="text-center">
            <h5>Contacto</h5>
            <p className="mb-1">Avenida Alem 1234, Piso 5</p>
            <p className="mb-1">San Miguel de Tucumán, Tucumán</p>
            <p className="mb-1">Teléfono: +54 381 555-1234</p>
            <p>Email: contacto@estudiojuridico.com</p>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <Link to={"/estudio"} className="text-light text-decoration-none">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to={"/servicios"}
                  className="text-light text-decoration-none"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link to={"/estudio"} className="text-light text-decoration-none">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to={"*"} className="text-light text-decoration-none">
                  Blog
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Estudio Jurídico. Todos los
              derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
