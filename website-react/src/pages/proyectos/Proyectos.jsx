import "./Proyectos.css";

// Componentes:
import Footer from "../../components/footer/Footer";
import Proyecto from "../../components/proyecto/Proyecto";

// Recursos:
import Project1 from "../../assets/svgs/proyectos/ImagenProyecto1.svg";
import Project2 from "../../assets/svgs/proyectos/ImagenProyecto2.svg";
import Project3 from "../../assets/svgs/proyectos/ImagenProyecto3.svg";
import Project4 from "../../assets/svgs/proyectos/ImagenProyecto4.svg";
import Project5 from "../../assets/svgs/proyectos/ImagenProyecto5.svg";
import Project6 from "../../assets/svgs/proyectos/ImagenProyecto6.svg";
import Project7 from "../../assets/svgs/proyectos/ImagenProyecto7.svg";
import Project8 from "../../assets/svgs/proyectos/ImagenProyecto8.svg";
import Project9 from "../../assets/svgs/proyectos/ImagenProyecto9.svg";

const proyectos = [
    { id: 1, title:'Alpina Challenge', author:'Brunnibert', desc:'Concurso de la empresa de lácteos Alpina, donde uno de nuestros mejores estudiantes participó, quedando entre los 3 finalistas de su categoría.', img:Project1 },
    { id: 2, title:'Las verduras de Sofi', author:'Dalania, Brunnibert', desc:'Cuento infantil Ilustrado donde se relata la realidad de algunos niños que trabajan desde temprana edad. ', img:Project2 },
    { id: 3, title:'Documentales Matronas ', author:'Saray Banda', desc:'Aquí pueden mirar la historia junto  lo saberes ancestrales.', img:Project3 },
    { id: 4, title:'Audioslave', author:'-', desc:'Ilustraciones digitales para proyectos de aula donde se retratan canciones de álbumes de los artistas favoritos de cada estudiante y lo que sienten.', img:Project4 },
    { id: 5, title:'Madre de marfil', author:'Mariangel Montero Laino', desc:'Libro ilustrado: “A pesar de pensar lo contrario, una niña aprende que tanto le afecta la ausencia de su madre.”', img:Project5 },
    { id: 6, title:'Pastelitos el flaco', author:'Mariangel Montero, Santiago Tapia y Juan Pablo Diaz', desc:'Convertir el puesto de un vendedor ambulante en una marca con su propia identidad.', img:Project6 },
    { id: 7, title:'Fotografía Bodegón', author:'Jhon Campo', desc:'Concurso de la empresa de lácteos Alpina, donde uno de nuestros mejores estudiantes participó, quedando entre los 3 finalistas de su categoría.', img:Project7 },
    { id: 8, title:'Folleto Festival Vallenato', author:'Mariangel Montero', desc:'Se rescató de manera ilustrada la tradición vallenata de su festival anual en un folleto .', img:Project8 },
    { id: 9, title:'Callejón de los Loritos', author:'Andres Beleño y Saray Banda', desc:'Libro ilustrado infantil sobre realidades que atraviesan los más pequeños de Valledupar como vendedores informales de manera ambulante.', img:Project9 },
]

export default function Proyectos() {
    return (
        <div className="project-page-container">

            <section className="title-section">
                <h1>Proyectos</h1>
                <h4>Explora los últimos trabajos de los estudiantes.</h4>
            </section>

            <div className="body-container">
                <div className="projects-container">
                    <input id="projects-search" className="projects-search" type="text" placeholder="Buscar"/>
                    {proyectos.map(item => (<Proyecto key={item.id} title={item.title} author={item.author} desc={item.desc} img={item.img} />))}
                </div>

                <div className="filters-container">
                    <h3>Filtros</h3>

                    <h4>Más populares</h4>

                    <h5>Ilustración</h5>

                    <h5>Audiovisuales</h5>

                    <h5>Animación</h5>

                    <h5>Interfaces</h5>

                    <h5>Modelado 3D</h5>

                    <h4>General</h4>

                    <h5>Animación</h5>

                    <h5>Audiovisuales</h5>

                    <h5>Editorial</h5>

                    <h5>Identidad Visual</h5>

                    <h5>Interfaces</h5>

                    <h5>Ilustración</h5>

                    <h5>Modelado 3D</h5>
                </div>
            </div>

            <Footer />
        </div>
    );
}
