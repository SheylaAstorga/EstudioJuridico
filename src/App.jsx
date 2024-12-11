import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Minibar from "./components/common/Minibar";
import NavbarPrinc from "./components/common/NavbarPrinc";
import BannerPrincipal from "./Pagina Principal/BannerPrincipal";
import SobreNosotros from "./Pagina Principal/SobreNosotros";
import Servicios from "./Pagina Principal/Servicios";

function App() {
  return (
    <>
    <Minibar></Minibar>
    <NavbarPrinc></NavbarPrinc>
    <BannerPrincipal></BannerPrincipal>
    <SobreNosotros></SobreNosotros>
    <Servicios></Servicios>
    </>
  );
}

export default App;
