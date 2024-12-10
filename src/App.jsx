import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Minibar from "./components/common/Minibar";
import NavbarPrinc from "./components/common/NavbarPrinc";
import BannerPrincipal from "./Pagina Principal/BannerPrincipal";

function App() {
  return (
    <>
    <Minibar></Minibar>
    <NavbarPrinc></NavbarPrinc>
    <BannerPrincipal></BannerPrincipal>
    </>
  );
}

export default App;
