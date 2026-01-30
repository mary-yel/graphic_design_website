import "./Novedades.css";

// Componentes:
import Carpetica from "../../components/carpetica/Carpetica";

// Recursos:
import Separador from "../../assets/svgs/novedades/SeparadorLlamativo.svg";

import Carpeta1 from "../../assets/svgs/novedades/Carpeta1.svg";
import Carpeta2 from "../../assets/svgs/novedades/Carpeta2.svg";
import Carpeta3 from "../../assets/svgs/novedades/Carpeta3.svg";
import Carpeta4 from "../../assets/svgs/novedades/Carpeta4.svg";
import Carpeta5 from "../../assets/svgs/novedades/Carpeta5.svg";
import Carpeta6 from "../../assets/svgs/novedades/Carpeta6.svg";
import Carpeta7 from "../../assets/svgs/novedades/Carpeta7.svg";
import Carpeta8 from "../../assets/svgs/novedades/Carpeta8.svg";
import Carpeta9 from "../../assets/svgs/novedades/Carpeta9.svg";

export default function Novedades() {
    return (
        <div className="news-page-container">
            <section className="news-title-section">
                <h1>Novedades</h1>
                <h4>Explora los últimos eventos y noticias de la comunidad.</h4>
            </section>

            <div className="news-page-separador">
                <img src={Separador} className="news-separador" alt="separador" />

                <h3 className="news-separator-text">Enterate aquí y en @Disenográficoudes</h3>
            </div>

            <section className="news-folders-section" >
                <Carpetica imagen={Carpeta1} dA="11" mes="Nov" clasificaciN="Sustentación" />
                <Carpetica imagen={Carpeta2} dA="26" mes="Jun" clasificaciN="Finalista" />
                <Carpetica imagen={Carpeta3} dA="18" mes="Nov" clasificaciN="Muestra" />
                <Carpetica imagen={Carpeta4} dA="18" mes="Agosto" clasificaciN="Intercambio" />
                <Carpetica imagen={Carpeta5} dA="10" mes="Nov" clasificaciN="Saber Pro" />
                <Carpetica imagen={Carpeta6} dA="03" mes="Nov" clasificaciN="Beca Pila" />
                <Carpetica imagen={Carpeta7} dA="10" mes="Dic" clasificaciN="Inscripciones" />
                <Carpetica imagen={Carpeta8} dA="18" mes="Nov" clasificaciN="Talleres Creativos" />
                <Carpetica imagen={Carpeta9} dA="07" mes="Agosto" clasificaciN="Presencialidad" />
            </section>
        </div>
    );
}
