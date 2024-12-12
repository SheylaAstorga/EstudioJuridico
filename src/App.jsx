import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Minibar from "./components/common/Minibar";
import NavbarPrinc from "./components/common/NavbarPrinc";
import Footer from "./components/common/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../src/components/pages/Inicio";
import Error404 from "./components/pages/Error404";
import NuestroEstudio from "./components/pages/NuestroEstudio";
import NuestrosProfesionales from "./components/pages/NuestrosProfesionales";
import NuestrosServicios from "./components/pages/NuestrosServicios";
import AreasPractica from "./components/pages/AreasPractica";

function App() {
  return (
    <>
      <BrowserRouter>
        <Minibar></Minibar>
        <NavbarPrinc></NavbarPrinc>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
          <Route path="/estudio" element={<NuestroEstudio></NuestroEstudio>}></Route>
          <Route path="/profesionales" element={<NuestrosProfesionales></NuestrosProfesionales>}></Route>
          <Route path="/servicios" element={<NuestrosServicios></NuestrosServicios>}></Route>
          <Route path="/practicas" element={<AreasPractica></AreasPractica>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </>
  );
}

export default App;
