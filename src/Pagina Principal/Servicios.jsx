import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Servicios = () => {
  return (
    <Container>
      <h2 className="text-center mt-5">Ámbitos de Actuación</h2>
      <hr />
      <Row className="g-4 my-5 justify-content-between">
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className=" cardServicios" style={{ height: "300px" }}>
            <Card.Body className="text-center mt-lg-4">
              <Card.Title className="p-3">ASESORÍA EMPRESARIAL</Card.Title>
              <Card.Text>
                Experiencia jurídica y visión empresarial para impulsar tu
                éxito. Potenciamos tu empresa con asesoramiento legal
                estratégico para decisiones acertadas y gestión de riesgos
                eficiente.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className=" cardServicios" style={{ height: "300px" }}>
            <Card.Body className="text-center mt-lg-4">
              <Card.Title className="p-3">DERECHO LABORAL</Card.Title>
              <Card.Text>
                Contrataciones seguras y resolución eficaz de disputas
                laborales. Ofrecemos soluciones legales que respaldan el
                crecimiento, tranquilidad y productividad de tu empresa.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="cardServicios" style={{ height: "300px" }}>
            <Card.Body className="text-center mt-lg-4">
              <Card.Title className="p-3">EMPRESAS FAMILIARES</Card.Title>
              <Card.Text>
                Soluciones legales para el éxito a largo plazo. Contribuimos al
                crecimiento sostenible de tu empresa familia, preservando su
                legado.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} >
          <Card className="cardServicios" style={{ height: "300px" }}>
            <Card.Body className="text-center mt-lg-4">
              <Card.Title className="p-3">DERECHO AGRARIO</Card.Title>
              <Card.Text>
                Asesoría jurídica especializada en temas agrarios. Protegemos
                tus intereses en el entorno agrario agreando valor a tu
                operación y fortaleciendo tu posición.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="h-100 cardServicios" style={{ height: "300px" }}>
            <Card.Body className="text-center mt-lg-4">
              <Card.Title className="p-3">FAMILIA Y SUCESIONES</Card.Title>
              <Card.Text>
                Respuestas legales efectivas en cuestiones familiares y
                sucesorias. Acompañamos con ética y compromiso, brindando
                soluciones personalizadas para superar desafíos
              </Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="h-100 cardServicios" style={{ height: "300px" }}>
            <Card.Body className="text-center mt-lg-4">
              <Card.Title className="p-3">DERECHO COMERCIAL</Card.Title>
              <Card.Text>
                Colaboramos para impulsar objetivos comerciales. Colaboramos
                para impulsar tus objetivos y marcar la diferencia en tu
                estrategia comercial.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Servicios;
