import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Minibar from "./components/common/Minibar";
import NavbarPrinc from "./components/common/NavbarPrinc";
import BannerPrincipal from "./Pagina Principal/BannerPrincipal";
import SobreNosotros from "./Pagina Principal/SobreNosotros";
import Servicios from "./Pagina Principal/Servicios";
import Asesoramiento from "./Pagina Principal/Asesoramiento";
import Ubicacion from "./Pagina Principal/Ubicacion";

function App() {
  return (
    <>
    <Minibar></Minibar>
    <NavbarPrinc></NavbarPrinc>
    <BannerPrincipal></BannerPrincipal>
    <SobreNosotros></SobreNosotros>
    <Servicios></Servicios>
    <Asesoramiento></Asesoramiento>
    <Ubicacion></Ubicacion>
    </>
  );
}

export default App;
