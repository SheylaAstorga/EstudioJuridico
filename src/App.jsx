import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Minibar from "./components/common/Minibar";
import NavbarPrinc from "./components/common/NavbarPrinc";
import BannerPrincipal from "./Pagina Principal/BannerPrincipal";
import SobreNosotros from "./Pagina Principal/SobreNosotros";

function App() {
  return (
    <>
    <Minibar></Minibar>
    <NavbarPrinc></NavbarPrinc>
    <BannerPrincipal></BannerPrincipal>
    <SobreNosotros></SobreNosotros>
    </>
  );
}

export default App;
