import { NavLink } from "react-router-dom";
import "./Inicio.css";

// Componentes:
import Footer from "../../components/footer/Footer";
import Carpetica from "../../components/carpetica/Carpetica";
import InstagramFeed from "../../components/common/InstagramFeed";

// Recursos:
import Collage1 from "../../assets/svgs/inicio/AgrupaciónImagen_Collage1.svg";
import Collage2 from "../../assets/svgs/inicio/AgrupaciónImagen_Collage2.svg";

import Adorno1 from "../../assets/svgs/inicio/AdornoTipo1.svg"; // Color Negro
import Adorno2 from "../../assets/svgs/inicio/AdornoTipo2.svg"; // Color Azul!

import Rect1 from "../../assets/svgs/inicio/Rectangle 140.svg";
import Rect2 from "../../assets/svgs/inicio/Rectangle 141.svg";
import Rect3 from "../../assets/svgs/inicio/Rectangle 142.svg";
import Enterate from "../../assets/svgs/inicio/MuestraAcademica.svg";

import Carpeta1 from "../../assets/svgs/inicio/Carpeta1.svg"; // 11-Nov Clasificación
import Carpeta2 from "../../assets/svgs/inicio/Carpeta2.svg"; // 25-Oct Aviso Taller!

import Desliza from "../../assets/svgs/inicio/Desliza.svg";

import Semestre1 from "../../assets/svgs/inicio/Semestre1.svg";
import Semestre2 from "../../assets/svgs/inicio/Semestre1.svg";
import Semestre3 from "../../assets/svgs/inicio/Semestre1.svg";
import Semestre4 from "../../assets/svgs/inicio/Semestre1.svg";
import Semestre5 from "../../assets/svgs/inicio/Semestre1.svg";
import Semestre6 from "../../assets/svgs/inicio/Semestre1.svg";
import Semestre7 from "../../assets/svgs/inicio/Semestre1.svg";
import Semestre8 from "../../assets/svgs/inicio/Semestre1.svg";

import Proyecto1 from "../../assets/svgs/inicio/Proyecto1.svg";
import Proyecto2 from "../../assets/svgs/inicio/Proyecto2.svg";
import Proyecto3 from "../../assets/svgs/inicio/Proyecto3.svg";
import Proyecto4 from "../../assets/svgs/inicio/Proyecto4.svg";
import Proyecto5 from "../../assets/svgs/inicio/Proyecto5.svg";
import Proyecto6 from "../../assets/svgs/inicio/Proyecto6.svg";

const proyectos = [Proyecto1, Proyecto2, Proyecto3, Proyecto4, Proyecto5, Proyecto6];

export default function Inicio() {
    return (
        <div className="inicio-container">
            {/* BANNER */}

            <section className="illustration-section">
                <img src={Collage1} className="banner-img img-1" alt="Collage 1" />
                <img src={Collage2} className="banner-img img-2" alt="Collage 2" />
            </section>

            <div className="welcome-bar">
                <p className="btn-welcome">Bienvenido</p>

                <p className="study-text">
                    <img src={Adorno1} className="study-adorno" alt="" />
                    Estudia con nosotros
                </p>

                <p className="btn-welcome">Bienvenido</p>
            </div>

            {/* LINKS RÁPIDOS */}

            <nav className="quick-links">
                <div className="quick-item">
                    <img src={Adorno2} className="quick-adorno" alt="" />
                    <a href="https://udes.edu.co" target="_blank" rel="noreferrer">
                        UDES Global
                    </a>
                </div>

                <div className="quick-item">
                    <img src={Adorno2} className="quick-adorno" alt="" />
                    <a href="#inscripciones">Inscripciones</a>
                </div>

                <div className="quick-item">
                    <img src={Adorno2} className="quick-adorno" alt="" />
                    <a href="#plan">Plan de estudios</a>
                </div>
            </nav>

            {/* NOVEDADES */}

            <section className="novedades-section">
                <h2 className="section-title">Novedades</h2>

                <div className="novedades-layout">
                    {/* NOTICIAS */}

                    <div className="enterate-static">
                        <img src={Rect1} className="rect-1" alt="" />
                        <img src={Rect2} className="rect-2" alt="" />
                        <img src={Rect3} className="rect-3" alt="" />
                        <img src={Enterate} className="enterate-img" alt="Entérate" />
                        <p className="enterate-text">¡ENTÉRATE!</p>
                    </div>

                    {/* CARPETAS */}

                    <div className="carpetica-container">
                        <Carpetica imagen={Carpeta1} dA="11" mes="Nov" clasificaciN="Clasificación" />
                        <Carpetica imagen={Carpeta2} dA="25" mes="Oct" clasificaciN="Talleres" />
                    </div>

                    {/* INSTAGRAM */}

                    <div className="instagram-section">
                        <p className="siguenos-text">¡SÍGUENOS!</p>
                        <div className="instagram-wrapper">
                            <InstagramFeed />
                        </div>
                    </div>
                </div>
            </section>

            {/* PLAN DE ESTUDIOS */}

            <section className="plan-section">
                <h2 className="section-title">Información del programa</h2>

                <h3 className="plan-title">
                    Plan de Estudios
                    <img src={Desliza} alt="" />
                </h3>

                <p>Dale un vistazo deslizando lo que la UDES ofrece para ti.</p>

                <div className="plan-slider">
                    {[Semestre1, Semestre2, Semestre3, Semestre4, Semestre5, Semestre6, Semestre7, Semestre8].map((img, i) => (
                        <img key={i} src={img} alt={`Semestre ${i + 1}`} />
                    ))}
                </div>
            </section>

            <section className="destacados-section">
                <h2 className="section-title">Proyectos</h2>
                <div className="destacados-copy">
                    <h3>Destacado de estudiantes</h3>
                    <p>Comunidad de investigación donde participan activamente estudiantes y profesores.</p>
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

            <Footer />
        </div>
    );
}
