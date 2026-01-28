import "./Proyecto.css";

// Recursos:
import click_icon from "../../assets/svgs/proyectos/Click_icon.svg";

export default function Proyecto({ title, author, desc, img }) {
    return (
        <article className="project-container">
            <img src={img} className="preview-project" alt={`Miniatura del proyecto ${title}`} />

            <div className="project-details">
                <div className="project-content">
                    <div className="project-title">{title}</div>
                    <div className="project-author">{author}</div>
                    <div className="project-desc">{desc}</div>
                </div>

                <img src={click_icon} className="click_icon" alt="icono-clickable" />

                <button className="project-button-more">Ver Más</button>
            </div>
        </article>
    );
}
