
import { Container, Row, Col, Button } from "react-bootstrap";

const Error404 = () => {
    return (
        <Container fluid className="error404 vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light">
        <Row>
          <Col>
            <h1 className="display-1 fw-bold ">404</h1>
            <h2 className="mb-3 text-dark">Página no encontrada</h2>
            <p className="mb-4 text-secondary">
              Lo sentimos, no pudimos encontrar la página que estabas buscando.
            </p>
            <Button href="/" variant="primary" className="px-4 py-2 botonError">
              Volver al Inicio
            </Button>
          </Col>
        </Row>
      </Container>
    );
};

export default Error404;