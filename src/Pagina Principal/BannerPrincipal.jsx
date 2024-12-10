import banner from "../img/banner.jpg";

const BannerPrincipal = () => {
  return (
    <section className="position-relative mb-5">
      <img
        src={banner}
        alt="banner estudio juridico "
        className="img-fluid w-100 imagenBanner"
      />
      <div className="position-absolute top-50 start-50 translate-middle text-center text-white textoBannerPrincipal">
        <h1>Estudio vega & asociados</h1>
        <p>Protegiendo tus derechos, construyendo confianza</p>
      </div>
    </section>
  );
};

export default BannerPrincipal;
