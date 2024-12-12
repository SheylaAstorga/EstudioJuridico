import Asesoramiento from "../../Pagina Principal/Asesoramiento";
import BannerPrincipal from "../../Pagina Principal/BannerPrincipal";
import Servicios from "../../Pagina Principal/Servicios";
import SobreNosotros from "../../Pagina Principal/SobreNosotros";
import Ubicacion from "../../Pagina Principal/Ubicacion";


const Inicio = () => {
    return (
        <div>
            <BannerPrincipal></BannerPrincipal>
            <SobreNosotros></SobreNosotros>
            <Servicios></Servicios>
            <Asesoramiento></Asesoramiento>
            <Ubicacion></Ubicacion>
        </div>
    );
};

export default Inicio;