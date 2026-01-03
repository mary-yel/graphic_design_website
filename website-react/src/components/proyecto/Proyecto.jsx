import "./Proyecto.css";

export default function Proyecto({ title, author, desc, img }) {
    return (
        <article className="project-container">
            <img src={img} alt={`Miniatura del proyecto ${title}`} />

            <div className="project-details">
                <div className="project-content">
                    <div className="project-title">{title}</div>
                    <div className="project-author">{author}</div>
                    <div className="project-desc">{desc}</div>
                </div>

                <button className="project-button-more">Saber Más</button>
            </div>
        </article>
    );
}
