import { Container, Row, Col, Card } from "react-bootstrap";
import dra1 from "../../img/dra1.jpg";
import dra2 from "../../img/dra2.jpg";
import dr3 from "../../img/dr3.jpg";
const professionals = [
  {
    name: "Dra. Ana López",
    specialty: "Derecho Penal",
    bio: "Con más de 10 años de experiencia, se especializa en brindar asesoramiento y defensa en casos complejos.",
    image: dra1,
  },
  {
    name: "Dr. Carlos Pérez",
    specialty: "Derecho Civil",
    bio: "Experto en contratos y resolución de conflictos civiles. Comprometido con soluciones efectivas.",
    image: dr3,
  },
  {
    name: "Dra. Mariana Rodríguez",
    specialty: "Derecho Laboral",
    bio: "Apasionada por los derechos de los trabajadores y empresas, ofreciendo estrategias legales personalizadas.",
    image: dra2,
  },
];

const NuestrosProfesionales = () => {
  return (
    <Container className="my-5 ">
      <h2 className="text-center ">Nuestros Profesionales</h2>
      <hr className="mb-5" />
      <p className="text-secondary mt-3 mb-5">
        En nuestro estudio jurídico contamos con un equipo altamente capacitado
        de profesionales, cada uno especializado en diferentes áreas del
        derecho. Su compromiso, experiencia y pasión por la justicia nos
        permiten ofrecer soluciones legales integrales y personalizadas a cada
        uno de nuestros clientes. Conoce a los expertos que estarán a tu lado en
        cada paso del camino.
      </p>
      <Row>
        {professionals.map((pro, index) => (
          <Col key={index} md={4} sm={12} className="mb-4 p-3">
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={pro.image}
                alt={pro.name}
                className="img-fluid object-fit-cover"
              />
              <Card.Body>
                <Card.Title>{pro.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {pro.specialty}
                </Card.Subtitle>
                <Card.Text>{pro.bio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NuestrosProfesionales;
