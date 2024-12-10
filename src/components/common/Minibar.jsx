import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons";
import Linkedin from "../../img/linkedin.svg";
import { Button } from "react-bootstrap";

const Minibar = () => {
  return (
    <section className="MiniNav d-flex justify-content-center">
      <div className="p-4 d-flex align-items-center gap-2">
        <FontAwesomeIcon
          icon={faPhone}
          style={{ color: "#203148" }}
          size="lg"
        />
        <p className="m-0">+549381567123</p>
      </div>
      <div className="p-4 d-flex align-items-center gap-2">
        <FontAwesomeIcon
          icon={faPhone}
          style={{ color: "#203148" }}
          size="lg"
        />
        <p className="m-0">+549381563188</p>
      </div>
      <div className="p-4 d-flex align-items-center gap-2">
        <img src={Linkedin} alt="linkedin svg" className="logoLinkedin" />
        <p className="m-0">/Vega&asociados</p>
      </div>
      <div className="p-4 d-flex align-items-center gap-2">
        <FontAwesomeIcon icon={faEnvelopesBulk} style={{ color: "#203148" }} className="fs-4"/>
        <p className="m-0">/Vega&asociados</p>
      </div>
      <section className="align-items-center gap-2 d-flex ms-5">
        <Button className="btn-dark">SOLICITAR UNA CONSULTA</Button>
      </section>
    </section>
  );
};

export default Minibar;
