import { NavLink } from "react-router-dom";

import "./Inicio.css";

// Componentes:
import Footer from "../../components/footer/Footer";
import Carpetica from "../../components/carpetica/Carpetica";
import InstagramFeed from "../../components/common/InstagramFeed";

// Recursos:
import Adorno1 from "../../assets/svgs/inicio/AdornoTipo1.svg";

import Collage1 from "../../assets/svgs/inicio/AgrupaciónImagen_Collage1.svg";
import Collage2 from "../../assets/svgs/inicio/AgrupaciónImagen_Collage2.svg";

export default function Inicio() {
    return (
        <div className="inicio-container">
            <section className="illustration-section">
                <img src={Collage1} alt="Collage de ilustraciones #1" />
                <img src={Collage2} alt="Collage de ilustraciones #2" />
            </section>

            <div className="welcome-bar">
                <p className="btn-welcome">Bienvenido</p>
                Al lado del est
                <p className="study-text">Estudia con nosotros</p>
                <p className="btn-welcome">Bienvenido</p>
            </div>

            <nav className="quick-links">
                <a href="https://udes.edu.co" target="_blank" rel="noreferrer">
                    UDES Global
                </a>

                <a href="#inscripciones">Inscripciones</a>

                <a href="#plan">Plan de estudios</a>
            </nav>

            <section className="novedades-section">
                <div className="novedades-header">
                    <h2 className="section-title">Novedades</h2>
                </div>

                <div className="novedades-layout">
                    <div className="enterate-static">
                        <div className="enterate-placeholder">¡ENTÉRATE!</div>
                    </div>

                    <div className="carpetica-container">
                        <Carpetica dA="11" mes="Nov" clasificaciN="Clasificación" />
                        <Carpetica dA="25" mes="Oct" clasificaciN="Talleres" />
                    </div>

                    <div className="instagram-section">
                        <p className="siguenos-text">¡SÍGUENOS!</p>
                        <InstagramFeed />
                    </div>
                </div>
            </section>

            <section className="destacados-section">
                <h2 className="section-title">Proyectos</h2>
                <div className="destacados-copy">
                    <h3>Destacado de estudiantes</h3>
                    <p>Comunidad de investigación donde participan activamente estudiantes y profesores.</p>
                </div>

                <div className="proyectos-grid">
                    {[1, 2, 3, 4, 5, 6].map((id) => (
                        <NavLink key={id} to={`/proyecto/${id}`} className="proyecto-card">
                            <div className="img-placeholder-proyecto">Proyecto {id}</div>
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
