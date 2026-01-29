import { Link, NavLink } from "react-router-dom";
import "./Inicio.css";

// Componentes:
import Carpetica from "../../components/carpetica/Carpetica";
import CareerPlan from "../../components/common/CareerPlan";
import InstagramFeed from "../../components/common/InstagramFeed";

// Recursos:
import Collage1 from "../../assets/svgs/inicio/AgrupacionImagen_Collage1.svg";
import Collage2 from "../../assets/svgs/inicio/AgrupacionImagen_Collage2.svg";

import Adorno1 from "../../assets/svgs/inicio/AdornoTipo1.svg"; // Color Negro
import Adorno2 from "../../assets/svgs/inicio/AdornoTipo2.svg"; // Color Azul!
import Adorno3 from "../../assets/svgs/inicio/AdornoTipo3.svg";

import Enterate from "../../assets/svgs/inicio/MuestraAcademica.svg";

import Carpeta1 from "../../assets/svgs/inicio/Carpeta1.svg"; // 11-Nov Clasificación
import Carpeta2 from "../../assets/svgs/inicio/Carpeta2.svg"; // 25-Oct Aviso Taller!

import Instagram from "../../assets/svgs/inicio/Instagram.svg"; 

import Desliza from "../../assets/svgs/inicio/Desliza.svg";

import Semestre1 from "../../assets/svgs/programa/Semestre1.svg";
import Semestre2 from "../../assets/svgs/programa/Semestre2.svg";
import Semestre3 from "../../assets/svgs/programa/Semestre3.svg";
import Semestre4 from "../../assets/svgs/programa/Semestre4.svg";
import Semestre5 from "../../assets/svgs/programa/Semestre5.svg";
import Semestre6 from "../../assets/svgs/programa/Semestre6.svg";
import Semestre7 from "../../assets/svgs/programa/Semestre7.svg";
import Semestre8 from "../../assets/svgs/programa/Semestre8.svg";

import Proyecto1 from "../../assets/svgs/inicio/Proyecto1.svg";
import Proyecto2 from "../../assets/svgs/inicio/Proyecto2.svg";
import Proyecto3 from "../../assets/svgs/inicio/Proyecto3.svg";
import Proyecto4 from "../../assets/svgs/inicio/Proyecto4.svg";
import Proyecto5 from "../../assets/svgs/inicio/Proyecto5.svg";
import Proyecto6 from "../../assets/svgs/inicio/Proyecto6.svg";

const semestres = [Semestre1, Semestre2, Semestre3, Semestre4, Semestre5, Semestre6, Semestre7, Semestre8,];

const proyectos = [Proyecto1, Proyecto2, Proyecto3, Proyecto4, Proyecto5, Proyecto6,];

export default function Inicio() {
    return (
        <div className="inicio-container">

            <section className="illustration-section">
                <img src={Collage1} className="banner-img img-1" alt="Collage 1" />
                <img src={Collage2} className="banner-img img-2" alt="Collage 2" />
            </section>

            <div className="welcome-bar">
                <p className="btn-welcome">Bienvenido</p>

                <p className="study-text">
                    <img src={Adorno1} className="study-adorno" />
                    Estudia con nosotros
                </p>

                <p className="btn-welcome">Bienvenido</p>
            </div>

            <nav className="quick-links">
                <img src={Adorno3} className="quick-esquinero left" />

                <div className="quick-item">
                    <img src={Adorno2} className="quick-adorno" />
                    <a href="https://udes.edu.co" target="_blank" rel="noreferrer">
                        UDES Global
                    </a>
                </div>

                <div className="quick-item">
                    <img src={Adorno2} className="quick-adorno" />
                    <a href="#inscripciones">Inscripciones</a>
                </div>

                <div className="quick-item">
                    <img src={Adorno2} className="quick-adorno" />
                    <a href="#plan">Plan de estudios</a>
                </div>

                <img src={Adorno3} className="quick-esquinero right" />
            </nav>

            <section className="novedades-section">
                <h2 className="section-title">Novedades</h2>

                <div className="novedades-layout">

                    <div className="enterate-static">
                        <img src={Enterate} className="enterate-img" alt="Entérate" />
                        <p className="enterate-text">¡ENTÉRATE!</p>
                    </div>

                    <div className="carpetica-container">
                        <Carpetica imagen={Carpeta1} dA="11" mes="Nov" clasificaciN="Sustentación" />
                        <Carpetica imagen={Carpeta2} dA="25" mes="Oct" clasificaciN="Talleres" />
                    </div>

                    <div className="instagram-section">
                        <p className="siguenos-text">¡SÍGUENOS!</p>
                        <InstagramFeed imagen={Instagram} link={"https://www.instagram.com/disenograficoudes/"} />
                    </div>
                </div>
            </section>

            <section className="plan-section">
                <h2 className="section-title">Información del programa</h2>

                <CareerPlan
                    subtitle="Plan de Estudios"
                    description="Dale un vistazo deslizando lo que la UDES ofrece para ti."
                    images={semestres}
                    icon={Desliza}
                />
            </section>

            <section className="destacados-section">
                <h2 className="section-title">Proyectos</h2>
                <div className="destacados-copy">
                    <h3>Destacado de estudiantes</h3>
                    <p>Ejercicios académicos y propuestas creativas que sorprenden dentro y fuera del aula.</p>
                </div>

                <div className="proyectos-grid">
                    {proyectos.map((img, index) => (
                        <NavLink key={index + 1} to={`/proyecto/${index + 1}`} className="proyecto-card">
                            <div className="img-placeholder-proyecto">
                                <img src={img} alt={`Proyecto ${index + 1}`} />
                            </div>
                        </NavLink>
                    ))}
                </div>

                <NavLink to="/proyectos" className="btn-ver-mas">
                    Ver Más
                </NavLink>
            </section>
        </div>
    );
}
