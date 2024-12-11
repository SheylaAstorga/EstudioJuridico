import { Container, Row, Col, Ratio } from "react-bootstrap";


const Ubicacion = () => {
  return (
    <Container className="ubicacion-container my-5">
      <Row className="text-center">
        <Col>
          <h2 className="titulo">Dónde encontrarnos</h2>
          <hr className="divider" />
          <h6 className="direccion">
            Avenida Alem 1234, Piso 5, Oficina 2, San Miguel de Tucumán, Tucumán
          </h6>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <div className="iframe-container">
            <Ratio aspectRatio="16x9">
              <iframe
                title="Ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4650651766354!2d-65.20440192425213!3d-26.82476549302845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c44b8d6d347%3A0x7b44fbb2a18b5646!2sAvenida%20Alem%201234%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1sen!2sar!4v1699567891234"
                allowFullScreen
                loading="lazy"
                className="mapa"
              ></iframe>
            </Ratio>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Ubicacion;

