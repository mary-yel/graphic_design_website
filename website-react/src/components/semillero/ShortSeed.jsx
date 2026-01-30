import "./ShortSeed.css";

export default function ShortSeed({ title, descp, date, imagen }) {
    return (
        <div className="short-seed-container">
            <div className="short-seed-img">{imagen ? <img src={imagen} alt="logo_semillero" /> : <div className="img-placeholder" />}</div>

            <div className="short-seed-text">
                <h1 className="short-seed-title">{title}</h1>
                <h3 className="short-seed-descp">{descp}</h3>
                <h4 className="short-seed-date">{date}</h4>
                <button className="short-seed-more">Ver Más</button>
            </div>
        </div>
    );
}
