import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Servicios = () => {
  return (
    <Container>
      <h2 className="text-center ">Ámbitos de Actuación</h2>
      <hr />
      <Row className="g-4 my-5">
        {[
          {
            title: "ASESORÍA EMPRESARIAL",
            text: "Experiencia jurídica y visión empresarial para impulsar tu éxito. Potenciamos tu empresa con asesoramiento legal estratégico para decisiones acertadas y gestión de riesgos eficiente.",
          },
          {
            title: "DERECHO LABORAL",
            text: "Contrataciones seguras y resolución eficaz de disputas laborales. Ofrecemos soluciones legales que respaldan el crecimiento, tranquilidad y productividad de tu empresa.",
          },
          {
            title: "EMPRESAS FAMILIARES",
            text: "Soluciones legales para el éxito a largo plazo. Contribuimos al crecimiento sostenible de tu empresa familia, preservando su legado.",
          },
          {
            title: "DERECHO AGRARIO",
            text: "Asesoría jurídica especializada en temas agrarios. Protegemos tus intereses en el entorno agrario, agregando valor a tu operación y fortaleciendo tu posición.",
          },
          {
            title: "FAMILIA Y SUCESIONES",
            text: "Respuestas legales efectivas en cuestiones familiares y sucesorias. Acompañamos con ética y compromiso, brindando soluciones personalizadas para superar desafíos.",
          },
          {
            title: "DERECHO COMERCIAL",
            text: "Colaboramos para impulsar objetivos comerciales. Colaboramos para impulsar tus objetivos y marcar la diferencia en tu estrategia comercial.",
          },
        ].map((service, index) => (
          <Col key={index} xs={12} sm={6} md={6}>
            <Card className="cardServicios h-100 p-3">
              <Card.Body className="text-center d-flex flex-column">
                <Card.Title className="p-3">{service.title}</Card.Title>
                <Card.Text>{service.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button
          className="botonServicios px-4 py-2"
          style={{ fontSize: "1rem", maxWidth: "200px", width: "100%" }}
        >
          VER MÁS...
        </Button>
      </div>
    </Container>
  );
};

export default Servicios;
