import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SobreNosotros from "../../Pagina Principal/SobreNosotros";
import abogados from "../../img/abogados.jpg";
import Ubicacion from "../../Pagina Principal/Ubicacion";

const NuestroEstudio = () => {
  return (
    <Container fluid className="bg-light py-4 ">
      <Row className=" mb-5">
        <Col>
          <SobreNosotros></SobreNosotros>
        </Col>
      </Row>

      <Row className="mb-4 text-lg-center align-content-md-center d-flex flex-md-column flex-lg-row ms-4">
        <Col md={12} lg={6}>
          <h2 className="text-center">Vegas & asociados</h2>
          <hr />
          <p className="text-secondary p-3">
            Somos un equipo de abogados apasionados y dedicados, con una amplia
            y sólida experiencia en diversas ramas del derecho. Nos
            especializamos en brindar soluciones legales personalizadas,
            adaptadas a las necesidades y objetivos únicos de cada cliente.
            Creemos en la importancia de construir relaciones basadas en la
            confianza, la ética y el compromiso, acompañando a nuestros clientes
            en cada paso del camino, desde el asesoramiento inicial hasta la
            resolución definitiva de sus casos. Nuestro enfoque combina
            conocimiento técnico, estrategias innovadoras y un trato humano,
            asegurándonos de que cada persona reciba la atención y el respaldo
            que merece. Ya sea que enfrentes desafíos legales complejos o
            necesites orientación en aspectos cotidianos, nuestro equipo está
            aquí para ofrecerte el apoyo necesario para alcanzar los mejores
            resultados posibles.
          </p>
        </Col>

        <Col md={12} lg={6} className= "text-center ">
          <img
            src={abogados}
            alt="Nuestro equipo"
            className="img-fluid rounded shadow w-75"
          />
        </Col>
      </Row>

      <Row>
        <Col className="mb-4">
          <Ubicacion></Ubicacion>
        </Col>
      </Row>
    </Container>
  );
};

export default NuestroEstudio;
