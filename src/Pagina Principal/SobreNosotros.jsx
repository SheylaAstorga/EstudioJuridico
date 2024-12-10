const SobreNosotros = () => {
  return (
    <section className=" my-5  ">
      <h2 className="sobreNosotrosIntro text-center">
        Tu aliado legal en Tucumán
      </h2>
      <h6 className="text-center">
        Trayectoria, confianza y soluciones a medida para cada caso
      </h6>
      <hr />
      <section className="mt-5 InfoNosotros d-flex p-4">
        <div className="w-50 p-4">
          <h2>Quienes Somos</h2>
          <hr />
          <p >
            Con años de experiencia en derecho civil, comercial y laboral,
            nuestro equipo combina tradición y modernidad para garantizar una
            defensa sólida y asesoramiento confiable. Nuestro compromiso se
            centra en proteger los derechos de nuestros clientes con ética,
            profesionalismo y un enfoque proactivo. Creemos en construir
            relaciones basadas en la confianza y en ofrecer resultados que
            superen las expectativas. Ya sea en litigios complejos o en
            asesoramiento preventivo, estamos aquí para acompañarte en cada paso
            de tu camino legal.
          </p>
          <a href="" className="text-decoration-none leerMas">
            Leer más...
          </a>
        </div>
        <div className="w-50  p-4">
          <h2>Nuestros Objetivos</h2>
          <hr />
          <ul>
            <li>
              Buscamos ofrecer soluciones legales efectivas y personalizadas,
              priorizando la protección de los derechos de nuestros clientes.
            </li>
            <li>
              Construir relaciones basadas en la confianza, garantizar un
              servicio ético y profesional, y alcanzar resultados que superen
              las expectativas en cada caso. Agregar valor a nuestros clientes.
            </li>
            <li>
              Prevenir contingencias, realizando instrumentos legales a medida.
            </li>
            <li>
              Impulsar el prestigio de la abogacía, colaborando con
              instituciones de bien público.
            </li>
            <li>Desarrollar redes de contacto entre nuestros clientes.</li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default SobreNosotros;
