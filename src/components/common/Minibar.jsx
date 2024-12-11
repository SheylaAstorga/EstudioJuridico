import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons";
import Linkedin from "../../img/linkedin.svg";
import { Button } from "react-bootstrap";

const Minibar = () => {
  return (
    <section className="MiniNav d-flex flex-wrap justify-content-center align-items-center gap-3 p-md-4 p-2 overflow-hidden">
      <div className="d-flex align-items-center gap-2">
        <FontAwesomeIcon
          icon={faPhone}
          style={{ color: "#203148", flexShrink: 0 }}
          size="lg"
        />
        <p className="m-0">+549381567123</p>
      </div>

      <div className="d-flex align-items-center gap-2">
        <FontAwesomeIcon
          icon={faPhone}
          style={{ color: "#203148", flexShrink: 0 }}
          size="lg"
        />
        <p className="m-0">+549381563188</p>
      </div>

      <div className="d-flex align-items-center gap-2">
        <img
          src={Linkedin}
          alt="LinkedIn logo"
          className="logoLinkedin"
          style={{ width: "24px", height: "24px", flexShrink: 0 }}
        />
        <p className="m-0">/Vega&asociados</p>
      </div>

      <div className="d-flex align-items-center gap-2">
        <FontAwesomeIcon
          icon={faEnvelopesBulk}
          style={{ color: "#203148", flexShrink: 0 }}
          className="fs-4"
        />
        <p className="m-0">info@vegaasociados.com</p>
      </div>

      <div className="d-flex align-items-center d-none d-md-flex mt-md-3 mt-lg-0">
        <Button className="botonConsultaMini text-nowrap">
          SOLICITAR UNA CONSULTA
        </Button>
      </div>
    </section>
  );
};

export default Minibar;
