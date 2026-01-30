import "./Semilleros.css";

// Componentes:
import ShortSeed from "../../components/semillero/ShortSeed";
import LongSeed from "../../components/semillero/LongSeed";

// Recursos:
import ImagoLogo from "../../assets/svgs/semilleros/Imago.svg";
import ImagoImagen1 from "../../assets/svgs/semilleros/ImagoFoto1.svg";
import ImagoImagen2 from "../../assets/svgs/semilleros/ImagoFoto2.svg";
import ImagoImagen3 from "../../assets/svgs/semilleros/ImagoFoto3.svg";

import COscuraLogo from "../../assets/svgs/semilleros/Oscura.svg";
import COscuraImagen1 from "../../assets/svgs/semilleros/OscuraFoto1.svg";
import COscuraImagen2 from "../../assets/svgs/semilleros/OscuraFoto2.svg";
import COscuraImagen3 from "../../assets/svgs/semilleros/OscuraFoto3.svg";

import Investigacion1 from "../../assets/svgs/semilleros/Investigacion1.svg";
import Investigacion2 from "../../assets/svgs/semilleros/Investigacion2.svg";
import Investigacion3 from "../../assets/svgs/semilleros/Investigacion3.svg";
import Investigacion4 from "../../assets/svgs/semilleros/Investigacion4.svg";

export default function Semilleros() {
    return (
        <div className="seed-page-container">
            <section className="seed-title-section">
                <h1>Semilleros</h1>
                <h4>Comunidad de Investigación donde participan activamente estudiantes y profesores.</h4>
            </section>

            <section className="seed-resumen-section">
                <ShortSeed
                    title="IMAGO"
                    descp="Reflexionar sobre el patrimonio y la transmisión de valores culturales por medio de las tradiciones, mitos y leyendas del departamento del Cesar a partir de las herramientas del diseño gráfico."
                    date="Creación: 30/08/2022"
                    imagen={ImagoLogo}
                    link="https://www.instagram.com/sem.imago/"
                />
                <ShortSeed
                    title="CÁMARA OSCURA"
                    descp="Registrar y difundir información sobre el patrimonio cultural, expresiones culturales, mitos y leyendas del Departamento del César a través de la producción audiovisual y fotográfica con el fin de preservar y promover la identidad cultural de la región."
                    date="Creación: 21/03/2023"
                    imagen={COscuraLogo}
                    link="https://www.instagram.com/sem.camaraoscura/"
                />
            </section>

            <section className="seed-section">
                <h1>
                    ¿Quieres saber <span className="highlight">aún más?</span>
                </h1>
            </section>

            <section className="seed-detail-section">
                <LongSeed
                    logo={ImagoLogo}
                    descp="Imago busca aportar al departamento del Cesar con una mirada innovadora del diseño como herramienta que enriquezca y resalte la cultura, que contribuya al desarrollo sustentable y sociable del patrimonio oral y cultural."
                    etiquetas={["Patrimonio", "Diseño"]}
                    galeria={[ImagoImagen1, ImagoImagen2]}
                    feed={ImagoImagen3}
                    url={"https://www.instagram.com/sem.imago/"}
                />
                <LongSeed
                    logo={COscuraLogo}
                    descp="Cámara Oscura Preservar y promover la identidad cultural del César a través de la producción audiovisual y fotográfica, destacando su patrimonio, expresiones culturales, mitos y leyendas."
                    etiquetas={["Exploración", "Difusión"]}
                    galeria={[COscuraImagen1, COscuraImagen2]}
                    feed={COscuraImagen3}
                    url={"https://www.instagram.com/sem.camaraoscura/"}
                />
            </section>

            <section className="seed-section">
                <h1>Proyectos de Investigación - Creación</h1>
            </section>

            <section className="seed-projects-section">
                <img src={Investigacion1} alt="Investigación 1" />
                <img src={Investigacion2} alt="Investigación 2" />
                <img src={Investigacion3} alt="Investigación 3" />
                <img src={Investigacion4} alt="Investigación 4" />
            </section>
        </div>
    );
}
