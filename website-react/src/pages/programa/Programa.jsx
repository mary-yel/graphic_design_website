import "./Programa.css";

import Adorno1 from "../../assets/svgs/inicio/AdornoTipo4.svg";

import ProgramaIntro from "../../assets/svgs/programa/program-resumen.svg";

import Foto1 from "../../assets/svgs/programa/fotoGrupoPrograma.svg";
import Foto2 from "../../assets/svgs/programa/fotoEstudiantes.svg";
import Foto3 from "../../assets/svgs/programa/fotoGrado.svg";
import Foto4 from "../../assets/svgs/programa/fotoTitulacion.svg";

import Desliza from "../../assets/svgs/inicio/Desliza.svg";

import Icon from "../../assets/svgs/programa/icon.svg";

import Semestre1 from "../../assets/svgs/inicio/Semestre1.svg";
import Semestre2 from "../../assets/svgs/inicio/Semestre1.svg";
import Semestre3 from "../../assets/svgs/inicio/Semestre1.svg";
import Semestre4 from "../../assets/svgs/inicio/Semestre1.svg";
import Semestre5 from "../../assets/svgs/inicio/Semestre1.svg";
import Semestre6 from "../../assets/svgs/inicio/Semestre1.svg";
import Semestre7 from "../../assets/svgs/inicio/Semestre1.svg";
import Semestre8 from "../../assets/svgs/inicio/Semestre1.svg";

import Footer from "../../components/footer/Footer";

export default function Programa() {
    return (
        <div className="program-page-container">
            <div className="program-banner">
                <div className="program-banner-photo">
                    <img id="foto-banner" src={Foto1} alt="Estudiantes de la carrera de diseño" />
                </div>

                <button className="button-banner button-banner-left">Becas y Descuentos</button>
                <button className="button-banner button-banner-right">Inscríbete ya</button>

                <img src={Adorno1} alt="Esquinero izquierdo" className="esquinero esquinero-left" />
                <img src={Adorno1} alt="Esquinero derecho" className="esquinero esquinero-right" />
            </div>

            <div className="program-intro">
                <img src={Icon} className="quick-adorno" alt="adorno-parrafo" />

                <p>
                    El programa de Diseño Gráfico de la Universidad de Santander busca que el estudiante desarrolle las competencias necesarias para desempeñarse profesionalmente, ya sea en empresas existentes o en proyectos propios. Para alcanzar este objetivo, la universidad establece políticas y procedimientos que guían la gestión y administración del currículo académico.<br/>

                    <br></br>

                    El programa de Diseño Gráfico está orientado a formar un profesional integro con conocimientos teóricos, metodológicos, técnicos y humanísticos, propios de la disciplina con capacidad para desarrollar campañas publicitarias que dan solución a las necesidades comerciales y de la sociedad, en contextos locales, nacionales e internacionales; por ello el programa define su componente de énfasis con una ruta formativa profundizando en el campo de la publicidad, diferenciándose así de otros programas impartidos por instituciones de la región, con las suficientes competencias para desempeñarse apropiadamente en la prestación de servicios de Diseño Gráfico en la región, el país y fuera de él.

                    <p id="resolution">
                        <br></br>

                        Resolución No. 14748 del 17 de diciembre de 2019. Vigencia 7 años
                    </p>
                </p>

                <img id="program-intro" className="program-resumen" src={ProgramaIntro} alt="Información la carrera de diseño" />
            </div>

            <div className="program-photos">
                <div className="student">
                    <img src={Foto2} alt="imagen de estudiantes"/>
                </div>

                <div className="graduate">
                    <img src={Foto3} alt="imagen de graduados"/>
                </div>

                <div className="degree">
                    <img src={Foto4} alt="imagen de profesor"/>
                </div>
            </div>

            <div className="program-information">
                <h3 className="plan-title">
                    Plan de Estudios
                    <img src={Desliza} alt="icono de deslizar" />
                </h3>

                <div className="plan-slider">
                    {[Semestre1, Semestre2, Semestre3, Semestre4, Semestre5, Semestre6, Semestre7, Semestre8].map((img, i) => (
                        <img key={i} src={img} alt={`Semestre ${i + 1}`} />
                    ))}
                </div>

                <div className="info-text">
                    <img src={Icon} className="quick-adorno" alt="adorno-parrafo" />

                    <p>
                        Nuestro programa acoge a los amantes del arte, a los creativos insaciables, apasionados por la fotografía y el video, y a los que creen que la revolución digital necesita nuevos artistas que cambien el mundo.<br/>

                        DIRIGIDO A:<br/>

                        Artistas, fotógrafos, productores audiovisuales, dibujantes, emprendedores y a todo aquel que considere la era digital como el precursor de las economías mundiales.<br/>

                        El estudiante que quiere ingresar al programa de Diseño Gráfico debe tener las siguientes cualidades:<br/>
                    </p>
                </div>

                <div className="info-text">
                    <ul>
                        <li>Ser humano con principios éticos y morales</li>
                        <li>Respetuoso del medio ambiente y la diversidad</li>
                        <li>Creativo, propositivo y asertivo en su desempeño</li>
                        <li>Con capacidad para ser, pensar y obrar como un ciudadano global</li>
                        <li>Sensible hacia el uso sostenible de los recursos naturales</li>
                        <li>Con pensamiento crítico, espíritu investigativo, curioso e innovador</li>
                        <li>Respetuoso de sus profesores y compañeros, con sentido de pertenencia hacia la institución</li>
                        <li>Emprendedor y responsable</li>
                    </ul>
                </div>

                <div className="info-text">
                    <img src={Icon} className="quick-adorno" alt="adorno-parrafo" />

                    <p>
                        El profesional en Diseño Gráfico de la Universidad de Santander estará en capacidad de Conceptualizar, planear, proyectar y desarrollar propuestas y proyectos propios de la disciplina, que contribuyan de manera eficaz, respondiendo a las necesidades de la comunicación visual que demanda los sectores económicos, productivos y la sociedad en general, en medios análogos y digitales de una manera crítica, creativa y competente, actuando como profesional independiente o como parte de equipos multidisciplinarios con liderazgo y capacidad para integrar conocimiento, generando valor, desarrollo económico y humano.
                    </p>
                </div>

                <br />

                <div className="info-text">
                    <img src={Icon} className="quick-adorno" alt="adorno-parrafo" />

                    <p>
                        El profesional en Diseño Gráfico de la Universidad de Santander estará en capacidad de Conceptualizar, planear, proyectar y desarrollar propuestas y proyectos propios de la disciplina, que contribuyan de manera eficaz, respondiendo a las necesidades de la comunicación visual que demanda los sectores económicos, productivos y la sociedad en general, en medios análogos y digitales de una manera crítica, creativa y competente, actuando como profesional independiente o como parte de equipos multidisciplinarios con liderazgo y capacidad para integrar conocimiento, generando valor, desarrollo económico y humano.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}