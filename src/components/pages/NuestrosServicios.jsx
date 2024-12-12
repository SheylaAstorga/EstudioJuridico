import { Container, Row, Col, Card } from "react-bootstrap";
import contratos from "../../img/contratos.jpg";
import legal from "../../img/legal.jpg";
import juridico from "../../img/juridico.jpg";

const servicios = [
  {
    title: "Asesoramiento Legal",
    description:
      "Ofrecemos asesoramiento personalizado para resolver tus inquietudes legales de manera eficiente.",
    image: contratos,
  },
  {
    title: "Defensa Jurídica",
    description:
      "Contamos con especialistas en diversas áreas del derecho para garantizar tu defensa en cada caso.",
    image: legal,
  },
  {
    title: "Redacción de Contratos",
    description:
      "Elaboramos contratos claros y efectivos adaptados a tus necesidades personales o empresariales.",
    image: juridico,
  },
];

const NuestrosServicios = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Nuestros Servicios</h2>
      <p className="text-secondary text-center mb-5">
        En nuestro estudio jurídico ofrecemos una amplia gama de servicios
        diseñados para atender tus necesidades legales con profesionalismo y
        dedicación.
      </p>
      <Row>
        {servicios.map((servicio, index) => (
          <Col key={index} md={4} sm={12} className="mb-4">
            <Card className="h-100 shadow-sm border-0 servicio-card">
              <Card.Img
                variant="top"
                src={servicio.image}
                alt={servicio.title}
                className="servicio-icon"
              />
              <Card.Body>
                <Card.Title>{servicio.title}</Card.Title>
                <Card.Text>{servicio.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Container className="my-5">
        <h3 className="text-center mb-4">Preguntas Frecuentes</h3>
        <Row>
          <Col md={6}>
            <h5>¿En qué consiste el asesoramiento legal?</h5>
            <p>
              Es un servicio personalizado en el que nuestros abogados analizan
              tu caso y te ofrecen soluciones adaptadas a tus necesidades.
            </p>
          </Col>
          <Col md={6}>
            <h5>¿Cómo se realiza la redacción de contratos?</h5>
            <p>
              Trabajamos contigo para entender tus requisitos y redactamos un
              contrato claro y legalmente sólido.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default NuestrosServicios;
