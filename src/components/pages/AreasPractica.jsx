import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

const areas = [
  {
    title: "Derecho Penal",
    description:
      "Asesoramiento en casos complejos y defensa penal especializada.",
  },
  {
    title: "Derecho Civil",
    description:
      "Resolución de conflictos civiles y redacción de contratos legales.",
  },
  {
    title: "Derecho Laboral",
    description: "Defensa de los derechos de trabajadores y empleadores.",
  },
  {
    title: "Derecho Familiar",
    description: "Asesoramiento en divorcios, adopciones y sucesiones.",
  },
  {
    title: "Asesoría Empresarial",
    description: "Experiencia jurídica y visión empresarial para impulsar tu éxito. Potenciamos tu empresa con asesoramiento legal estratégico para decisiones acertadas y gestión de riesgos eficiente.",
  },
  {
    title: "Derecho Comercial",
    description: "Colaboramos para impulsar objetivos comerciales. Colaboramos para impulsar tus objetivos y marcar la diferencia en tu estrategia comercial.",
  },
];

const AreasPractica = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextArea = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % areas.length);
  };

  const previousArea = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + areas.length) % areas.length
    );
  };

  return (
    <Container className="areas-container my-5">
      <h2 className="title">Áreas de Práctica</h2>
      <hr />
      <div className="area-display">
        <h3 className="area-title">{areas[currentIndex].title}</h3>
        <p className="area-description">{areas[currentIndex].description}</p>
      </div>
      <div className="button-group">
        <Button onClick={previousArea}  className="botonAnt">
          Anterior
        </Button>
        <Button onClick={nextArea} className="botonAnt" >
          Siguiente
        </Button>
      </div>
    </Container>
  );
};

export default AreasPractica;
